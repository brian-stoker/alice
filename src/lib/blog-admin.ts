/**
 * Admin Blog Data Functions
 *
 * Provides functions for managing blog posts in the admin panel.
 * Uses sample data when DB is not connected.
 */

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string; // JSON string from Tiptap editor
  excerpt?: string;
  coverImageUrl?: string;
  status: 'draft' | 'published';
  tags: string[];
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreatePostData {
  title: string;
  slug?: string;
  content: string;
  excerpt?: string;
  coverImageUrl?: string;
  status?: 'draft' | 'published';
  tags?: string[];
}

export interface UpdatePostData {
  title?: string;
  slug?: string;
  content?: string;
  excerpt?: string;
  coverImageUrl?: string;
  status?: 'draft' | 'published';
  tags?: string[];
}

// Sample data for development
const samplePosts: BlogPost[] = [
  {
    id: '1',
    title: 'Welcome to My Blog',
    slug: 'welcome-to-my-blog',
    content: JSON.stringify({
      type: 'doc',
      content: [
        {
          type: 'heading',
          attrs: { level: 2 },
          content: [{ type: 'text', text: 'Welcome!' }]
        },
        {
          type: 'paragraph',
          content: [{ type: 'text', text: 'This is my first blog post.' }]
        }
      ]
    }),
    excerpt: 'This is my first blog post.',
    coverImageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    status: 'published',
    tags: ['welcome', 'introduction'],
    publishedAt: '2026-02-01T12:00:00.000Z',
    createdAt: '2026-02-01T12:00:00.000Z',
    updatedAt: '2026-02-01T12:00:00.000Z',
  },
  {
    id: '2',
    title: 'Draft Post',
    slug: 'draft-post',
    content: JSON.stringify({
      type: 'doc',
      content: [
        {
          type: 'paragraph',
          content: [{ type: 'text', text: 'This is a draft post...' }]
        }
      ]
    }),
    excerpt: 'Work in progress...',
    status: 'draft',
    tags: [],
    createdAt: '2026-02-08T10:00:00.000Z',
    updatedAt: '2026-02-08T10:00:00.000Z',
  }
];

// In-memory storage for development
let posts: BlogPost[] = [...samplePosts];

/**
 * Generate a URL-friendly slug from a title
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Ensure a slug is unique by appending a number if necessary
 */
function ensureUniqueSlug(slug: string, excludeId?: string): string {
  let uniqueSlug = slug;
  let counter = 1;

  while (posts.some(p => p.slug === uniqueSlug && p.id !== excludeId)) {
    uniqueSlug = `${slug}-${counter}`;
    counter++;
  }

  return uniqueSlug;
}

/**
 * Get all blog posts (drafts + published)
 */
export async function getAllPosts(): Promise<BlogPost[]> {
  // Sort by updatedAt descending
  return [...posts].sort((a, b) =>
    new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );
}

/**
 * Get a single blog post by ID
 */
export async function getPostById(id: string): Promise<BlogPost | null> {
  return posts.find(p => p.id === id) || null;
}

/**
 * Create a new blog post
 */
export async function createPost(data: CreatePostData): Promise<BlogPost> {
  const now = new Date().toISOString();

  // Generate slug if not provided
  let slug = data.slug || generateSlug(data.title);
  slug = ensureUniqueSlug(slug);

  const newPost: BlogPost = {
    id: crypto.randomUUID(),
    title: data.title,
    slug,
    content: data.content,
    excerpt: data.excerpt,
    coverImageUrl: data.coverImageUrl,
    status: data.status || 'draft',
    tags: data.tags || [],
    publishedAt: data.status === 'published' ? now : undefined,
    createdAt: now,
    updatedAt: now,
  };

  posts.push(newPost);
  return newPost;
}

/**
 * Update an existing blog post
 */
export async function updatePost(id: string, data: UpdatePostData): Promise<BlogPost | null> {
  const index = posts.findIndex(p => p.id === id);
  if (index === -1) return null;

  const post = posts[index];
  const now = new Date().toISOString();

  // Handle slug change
  let slug = post.slug;
  if (data.slug && data.slug !== post.slug) {
    slug = ensureUniqueSlug(data.slug, id);
  } else if (data.title && data.title !== post.title && !data.slug) {
    // Auto-generate new slug if title changed but slug wasn't explicitly provided
    slug = ensureUniqueSlug(generateSlug(data.title), id);
  }

  // Handle publishing
  let publishedAt = post.publishedAt;
  if (data.status === 'published' && post.status !== 'published') {
    publishedAt = now;
  }

  const updatedPost: BlogPost = {
    ...post,
    ...data,
    slug,
    publishedAt,
    updatedAt: now,
  };

  posts[index] = updatedPost;
  return updatedPost;
}

/**
 * Delete a blog post
 */
export async function deletePost(id: string): Promise<boolean> {
  const index = posts.findIndex(p => p.id === id);
  if (index === -1) return false;

  posts.splice(index, 1);
  return true;
}
