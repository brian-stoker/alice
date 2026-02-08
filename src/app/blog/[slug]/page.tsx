import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/blog';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found | OLIV',
    };
  }

  return {
    title: post.title,
    description: post.excerpt || undefined,
    openGraph: {
      title: post.title,
      description: post.excerpt || undefined,
      type: 'article',
      publishedTime: post.publishedAt?.toISOString(),
      authors: ['Courtney Castler, MS-HNFM'],
      tags: post.tags,
      url: `https://oliv-functional-medicine.com/blog/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || undefined,
    },
    alternates: {
      canonical: `https://oliv-functional-medicine.com/blog/${slug}`,
    },
  };
}

function formatDate(date: Date | null): string {
  if (!date) return '';
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Create JSON-LD structured data for Article
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: 'Courtney Castler, MS-HNFM',
      jobTitle: 'Functional Medicine Practitioner',
    },
    publisher: {
      '@type': 'Organization',
      name: 'OLIV Functional Medicine',
    },
    datePublished: post.publishedAt?.toISOString(),
    dateModified: post.updatedAt?.toISOString(),
    keywords: post.tags.join(', '),
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-background">
        {/* Back Navigation */}
        <div className="bg-secondary py-4">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link
                href="/blog"
                className="inline-flex items-center text-primary hover:text-primary-dark font-sans font-medium transition-colors"
              >
                ← Back to Blog
              </Link>
            </div>
          </div>
        </div>

        {/* Article Header */}
        <article className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog?tag=${encodeURIComponent(tag)}`}
                      className="text-sm font-sans font-medium px-4 py-2 rounded-full bg-accent/20 text-primary hover:bg-accent/30 transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              )}

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-6">
                {post.title}
              </h1>

              {/* Meta Info */}
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
                <time className="text-base font-sans text-text-muted">
                  {formatDate(post.publishedAt)}
                </time>
                <span className="text-text-muted">•</span>
                <span className="text-base font-sans text-text-muted">
                  By Courtney Castler, MS-HNFM
                </span>
              </div>

              {/* Cover Image */}
              {post.coverImageUrl ? (
                <div className="mb-12 rounded-lg overflow-hidden">
                  <img
                    src={post.coverImageUrl}
                    alt={post.title}
                    className="w-full h-auto"
                  />
                </div>
              ) : (
                <div className="mb-12 w-full h-64 bg-secondary rounded-lg flex items-center justify-center">
                  <div className="text-primary text-8xl">✦</div>
                </div>
              )}

              {/* Article Content */}
              <div
                className="prose prose-lg max-w-none
                  prose-headings:font-serif prose-headings:font-semibold prose-headings:text-foreground
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
                  prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
                  prose-p:font-sans prose-p:text-text-muted prose-p:leading-relaxed prose-p:mb-4
                  prose-ul:font-sans prose-ul:text-text-muted
                  prose-li:my-2
                  prose-a:text-primary prose-a:no-underline hover:prose-a:text-primary-dark prose-a:font-medium
                  prose-strong:text-foreground prose-strong:font-semibold"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Article Footer */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="bg-secondary rounded-lg p-8">
                  <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                    Work with OLIV Functional Medicine
                  </h3>
                  <p className="font-sans text-text-muted mb-6">
                    Interested in learning more about how functional nutrition
                    can support your health goals? Schedule a consultation to
                    discuss your unique needs and create a personalized plan.
                  </p>
                  <Link
                    href="/start-your-journey"
                    className="inline-block bg-primary text-white font-sans font-semibold py-3 px-8 rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    Schedule a Consultation
                  </Link>
                </div>
              </div>

              {/* Back to Blog Link */}
              <div className="mt-12 text-center">
                <Link
                  href="/blog"
                  className="inline-flex items-center text-primary hover:text-primary-dark font-sans font-medium transition-colors"
                >
                  ← Back to Blog
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="bg-primary text-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
                Continue Exploring
              </h2>
              <p className="text-lg font-sans mb-8">
                Discover more evidence-based insights on functional nutrition
                and holistic wellness.
              </p>
              <Link
                href="/blog"
                className="inline-block bg-accent text-foreground font-sans font-semibold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors"
              >
                View All Articles
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
