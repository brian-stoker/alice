import { db } from './db';
import { blogPosts } from './schema';
import { eq, desc, sql } from 'drizzle-orm';

// Type for blog post
export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  coverImageUrl: string | null;
  status: string;
  tags: string[];
  publishedAt: Date | null;
  createdAt: Date | null;
  updatedAt: Date | null;
};

// Sample data for fallback when DATABASE_URL is not set
const samplePosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Connection Between Gut Health and Brain Function',
    slug: 'gut-health-brain-function',
    content: `<h2>Understanding the Gut-Brain Axis</h2>
<p>The gut-brain axis is a bidirectional communication system between your gastrointestinal tract and your central nervous system. This connection is so profound that your gut is often called your "second brain."</p>

<h2>How Your Gut Affects Your Mind</h2>
<p>Your gut microbiome produces approximately 90% of your body's serotonin - a neurotransmitter that plays a crucial role in mood regulation. When your gut is out of balance, it can directly impact your mental health, leading to anxiety, depression, and cognitive difficulties.</p>

<h2>Key Factors That Influence Gut Health</h2>
<ul>
<li>Diet and nutrition - particularly fiber intake and fermented foods</li>
<li>Stress levels and stress management practices</li>
<li>Sleep quality and consistency</li>
<li>Antibiotic use and medication history</li>
<li>Environmental toxins and exposures</li>
</ul>

<h2>Practical Steps to Support Gut-Brain Health</h2>
<p>Focus on consuming diverse, whole foods including plenty of vegetables, fermented foods like sauerkraut and kimchi, and prebiotic-rich foods. Consider functional testing to understand your unique microbiome composition and address any imbalances with targeted interventions.</p>`,
    excerpt: 'Discover how your gut microbiome directly impacts your cognitive function, mood, and mental clarity. Learn why optimizing gut health is essential for brain health.',
    coverImageUrl: null,
    status: 'published',
    tags: ['nutrition', 'gut-health', 'mental-health'],
    publishedAt: new Date('2024-01-15'),
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    title: 'Understanding Functional Nutrition Testing',
    slug: 'functional-nutrition-testing',
    content: `<h2>Beyond Standard Lab Work</h2>
<p>Conventional medical testing often looks at a narrow range of markers and only flags issues when they're already severe. Functional testing takes a different approach by looking at optimal ranges and identifying imbalances before they become serious health problems.</p>

<h2>Types of Functional Tests We Use</h2>
<p>We utilize a comprehensive suite of functional tests to understand your unique biochemistry:</p>

<h3>Comprehensive Stool Analysis</h3>
<p>Reveals the composition of your gut microbiome, identifies pathogenic bacteria, parasites, yeast overgrowth, and assesses digestive function.</p>

<h3>Food Sensitivity Testing</h3>
<p>Unlike standard allergy tests, these identify delayed immune reactions to foods that may be causing chronic inflammation and symptoms.</p>

<h3>Organic Acids Test</h3>
<p>Provides insight into cellular metabolism, nutrient deficiencies, neurotransmitter levels, and detoxification capacity.</p>

<h3>Hormone Panels</h3>
<p>Comprehensive assessment of sex hormones, thyroid function, and adrenal health to address energy, mood, and metabolic concerns.</p>

<h2>What to Expect</h2>
<p>Most tests can be completed at home with simple collection kits. Results typically take 2-3 weeks and are followed by a detailed consultation to interpret findings and create your personalized protocol.</p>`,
    excerpt: 'Learn about the advanced testing methods we use to uncover root causes of chronic health issues. Discover how functional testing goes beyond conventional labs.',
    coverImageUrl: null,
    status: 'published',
    tags: ['testing', 'wellness', 'functional-medicine'],
    publishedAt: new Date('2024-02-01'),
    createdAt: new Date('2024-01-28'),
    updatedAt: new Date('2024-02-01'),
  },
  {
    id: '3',
    title: 'Root-Cause Approaches to Chronic Fatigue',
    slug: 'root-cause-chronic-fatigue',
    content: `<h2>Why Conventional Medicine Falls Short</h2>
<p>Chronic fatigue is often dismissed or oversimplified in conventional settings. When lab work comes back "normal," patients are told there's nothing wrong, or worse, that it's "just stress" or "all in your head." But persistent fatigue is always your body's way of signaling that something is out of balance.</p>

<h2>Common Root Causes We Investigate</h2>

<h3>Mitochondrial Dysfunction</h3>
<p>Your cells' energy powerhouses may not be functioning optimally due to nutrient deficiencies, oxidative stress, or toxin exposure.</p>

<h3>Thyroid Imbalances</h3>
<p>Even "normal" thyroid labs can mask underlying issues. We look at the complete thyroid picture including conversion of T4 to T3, reverse T3, and thyroid antibodies.</p>

<h3>Adrenal Dysfunction</h3>
<p>Chronic stress can dysregulate your HPA axis, leading to cortisol imbalances that affect energy, sleep, and recovery.</p>

<h3>Chronic Infections</h3>
<p>Hidden infections like Epstein-Barr virus, Lyme disease, or gut pathogens can drain your energy reserves.</p>

<h3>Nutrient Deficiencies</h3>
<p>B vitamins, iron, vitamin D, magnesium, and CoQ10 deficiencies are common culprits in chronic fatigue.</p>

<h2>The Path Forward</h2>
<p>Recovery from chronic fatigue requires a personalized, multi-faceted approach. Through comprehensive testing and targeted interventions, we address the root causes rather than just masking symptoms. The goal is sustainable energy and vitality.</p>`,
    excerpt: 'Why addressing root causes matters more than managing symptoms. Explore the functional medicine approach to understanding and resolving chronic fatigue.',
    coverImageUrl: null,
    status: 'published',
    tags: ['nutrition', 'wellness', 'energy'],
    publishedAt: new Date('2024-02-15'),
    createdAt: new Date('2024-02-10'),
    updatedAt: new Date('2024-02-15'),
  },
  {
    id: '4',
    title: 'Inflammation: The Root of Chronic Disease',
    slug: 'inflammation-chronic-disease',
    content: `<h2>Understanding Inflammation</h2>
<p>Not all inflammation is bad. Acute inflammation is your body's natural healing response to injury or infection. But chronic, low-grade inflammation is at the root of most modern chronic diseases including heart disease, diabetes, autoimmune conditions, and even Alzheimer's.</p>

<h2>Common Sources of Chronic Inflammation</h2>
<ul>
<li>Poor diet high in processed foods, sugar, and industrial seed oils</li>
<li>Gut dysbiosis and increased intestinal permeability</li>
<li>Chronic stress and poor sleep</li>
<li>Environmental toxins and pollutants</li>
<li>Hidden infections and food sensitivities</li>
</ul>

<h2>Anti-Inflammatory Nutrition Strategies</h2>
<p>The foundation of reducing inflammation starts with what you eat. Focus on nutrient-dense whole foods, especially colorful vegetables rich in antioxidants, wild-caught fish high in omega-3 fatty acids, and herbs and spices like turmeric and ginger.</p>

<h2>Testing for Inflammation</h2>
<p>We use markers like high-sensitivity CRP, inflammatory cytokines, and comprehensive metabolic panels to assess your inflammatory load and track progress over time.</p>`,
    excerpt: 'Understand how chronic inflammation drives disease and learn practical strategies to reduce inflammatory burden through functional nutrition.',
    coverImageUrl: null,
    status: 'published',
    tags: ['nutrition', 'inflammation', 'wellness'],
    publishedAt: new Date('2024-03-01'),
    createdAt: new Date('2024-02-26'),
    updatedAt: new Date('2024-03-01'),
  },
];

/**
 * Get published blog posts with pagination
 */
export async function getPublishedPosts(page: number = 1, limit: number = 10): Promise<BlogPost[]> {
  // Use sample data if db is not available
  if (!db) {
    const offset = (page - 1) * limit;
    return samplePosts
      .filter((post) => post.status === 'published')
      .slice(offset, offset + limit);
  }

  try {
    const offset = (page - 1) * limit;
    const posts = await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.status, 'published'))
      .orderBy(desc(blogPosts.publishedAt))
      .limit(limit)
      .offset(offset);

    return posts as BlogPost[];
  } catch (error) {
    console.error('Error fetching posts:', error);
    // Return sample data as fallback
    const offset = (page - 1) * limit;
    return samplePosts
      .filter((post) => post.status === 'published')
      .slice(offset, offset + limit);
  }
}

/**
 * Get a single post by slug
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  // Use sample data if db is not available
  if (!db) {
    const post = samplePosts.find(
      (p) => p.slug === slug && p.status === 'published'
    );
    return post || null;
  }

  try {
    const [post] = await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.slug, slug))
      .limit(1);

    if (!post || post.status !== 'published') {
      return null;
    }

    return post as BlogPost;
  } catch (error) {
    console.error('Error fetching post by slug:', error);
    // Return sample data as fallback
    const post = samplePosts.find(
      (p) => p.slug === slug && p.status === 'published'
    );
    return post || null;
  }
}

/**
 * Get posts filtered by tag
 */
export async function getPostsByTag(tag: string): Promise<BlogPost[]> {
  // Use sample data if db is not available
  if (!db) {
    return samplePosts.filter(
      (post) =>
        post.status === 'published' &&
        post.tags.includes(tag.toLowerCase())
    );
  }

  try {
    const posts = await db
      .select()
      .from(blogPosts)
      .where(
        sql`${blogPosts.status} = 'published' AND ${tag} = ANY(${blogPosts.tags})`
      )
      .orderBy(desc(blogPosts.publishedAt));

    return posts as BlogPost[];
  } catch (error) {
    console.error('Error fetching posts by tag:', error);
    // Return sample data as fallback
    return samplePosts.filter(
      (post) =>
        post.status === 'published' &&
        post.tags.includes(tag.toLowerCase())
    );
  }
}

/**
 * Get all unique tags from published posts
 */
export async function getAllTags(): Promise<string[]> {
  // Use sample data if db is not available
  if (!db) {
    const allTags = samplePosts
      .filter((post) => post.status === 'published')
      .flatMap((post) => post.tags);
    return Array.from(new Set(allTags)).sort();
  }

  try {
    const posts = await db
      .select({ tags: blogPosts.tags })
      .from(blogPosts)
      .where(eq(blogPosts.status, 'published'));

    const allTags = posts.flatMap((post) => post.tags || []);
    return Array.from(new Set(allTags)).sort();
  } catch (error) {
    console.error('Error fetching tags:', error);
    // Return sample data as fallback
    const allTags = samplePosts
      .filter((post) => post.status === 'published')
      .flatMap((post) => post.tags);
    return Array.from(new Set(allTags)).sort();
  }
}
