import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getPublishedPosts, getAllTags } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Explore evidence-based articles on functional nutrition, gut health, root-cause medicine, and holistic wellness from OLIV Functional Medicine.',
  openGraph: {
    title: 'Blog | OLIV - Functional Medicine Insights',
    description:
      'Explore evidence-based articles on functional nutrition, gut health, root-cause medicine, and holistic wellness from OLIV Functional Medicine.',
    url: 'https://oliv-functional-medicine.com/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | OLIV - Functional Medicine Insights',
    description:
      'Explore evidence-based articles on functional nutrition, gut health, root-cause medicine, and holistic wellness from OLIV Functional Medicine.',
  },
  alternates: {
    canonical: 'https://oliv-functional-medicine.com/blog',
  },
};

function formatDate(date: Date | null): string {
  if (!date) return '';
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string; page?: string }>;
}) {
  const params = await searchParams;
  const selectedTag = params.tag;
  const currentPage = Number(params.page) || 1;
  const postsPerPage = 9;

  // Fetch posts and tags
  const allPosts = await getPublishedPosts(currentPage, postsPerPage);
  const allTags = await getAllTags();

  // Filter by tag if selected
  const posts = selectedTag
    ? allPosts.filter((post) => post.tags.includes(selectedTag))
    : allPosts;

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-4">
              Blog & Insights
            </h1>
            <p className="text-lg md:text-xl font-sans">
              Evidence-based nutrition and functional medicine insights to
              support your wellness journey
            </p>
          </div>
        </div>
      </section>

      {/* Tags Filter */}
      {allTags.length > 0 && (
        <section className="bg-secondary py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-wrap gap-3 items-center">
                <span className="font-sans font-semibold text-foreground">
                  Filter by topic:
                </span>
                <Link
                  href="/blog"
                  className={`px-4 py-2 rounded-full font-sans text-sm transition-colors ${
                    !selectedTag
                      ? 'bg-primary text-white'
                      : 'bg-white text-foreground hover:bg-primary hover:text-white border border-gray-300'
                  }`}
                >
                  All
                </Link>
                {allTags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${encodeURIComponent(tag)}`}
                    className={`px-4 py-2 rounded-full font-sans text-sm transition-colors ${
                      selectedTag === tag
                        ? 'bg-primary text-white'
                        : 'bg-white text-foreground hover:bg-primary hover:text-white border border-gray-300'
                    }`}
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {posts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl font-sans text-text-muted">
                  No posts found
                  {selectedTag && ` for tag "${selectedTag}"`}.
                </p>
                {selectedTag && (
                  <Link
                    href="/blog"
                    className="inline-block mt-6 text-primary hover:text-primary-dark font-sans font-semibold"
                  >
                    View all posts
                  </Link>
                )}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200"
                  >
                    {/* Cover Image Placeholder */}
                    <div className="w-full h-48 bg-secondary flex items-center justify-center relative">
                      {post.coverImageUrl ? (
                        <Image
                          src={post.coverImageUrl}
                          alt={post.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="text-primary text-6xl">✦</div>
                      )}
                    </div>

                    {/* Post Content */}
                    <div className="p-6">
                      {/* Tags */}
                      {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.tags.slice(0, 2).map((tag) => (
                            <Link
                              key={tag}
                              href={`/blog?tag=${encodeURIComponent(tag)}`}
                              className="text-xs font-sans font-medium px-3 py-1 rounded-full bg-accent/20 text-primary hover:bg-accent/30 transition-colors"
                            >
                              {tag}
                            </Link>
                          ))}
                        </div>
                      )}

                      {/* Title */}
                      <h2 className="text-2xl font-serif font-semibold text-foreground mb-3 line-clamp-2">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="hover:text-primary transition-colors"
                        >
                          {post.title}
                        </Link>
                      </h2>

                      {/* Excerpt */}
                      <p className="text-base font-sans text-text-muted mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <time className="text-sm font-sans text-text-muted">
                          {formatDate(post.publishedAt)}
                        </time>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-sm font-sans font-semibold text-primary hover:text-primary-dark transition-colors"
                        >
                          Read more →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* Pagination - Basic implementation */}
            {posts.length === postsPerPage && (
              <div className="mt-12 text-center">
                <Link
                  href={`/blog?page=${currentPage + 1}${
                    selectedTag ? `&tag=${encodeURIComponent(selectedTag)}` : ''
                  }`}
                  className="inline-block bg-primary text-white font-sans font-semibold py-3 px-8 rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Load More Posts
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
              Ready to Start Your Wellness Journey?
            </h2>
            <p className="text-lg font-sans mb-8">
              Work with us to uncover the root causes of your health concerns
              and create a personalized nutrition plan.
            </p>
            <Link
              href="/start-your-journey"
              className="inline-block bg-accent text-foreground font-sans font-semibold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
