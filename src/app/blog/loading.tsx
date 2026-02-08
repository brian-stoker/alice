/**
 * Loading skeleton for blog listing page
 * Provides instant visual feedback while server components load
 * Work Item 6.2 - Performance Optimization
 */

export default function BlogLoading() {
  return (
    <div className="bg-background">
      {/* Hero Section Skeleton */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="h-12 md:h-16 bg-white/20 rounded-lg mb-4 animate-pulse"></div>
            <div className="h-6 md:h-8 bg-white/20 rounded-lg max-w-2xl mx-auto animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Tags Filter Skeleton */}
      <section className="bg-secondary py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap gap-3 items-center">
              <div className="h-6 w-32 bg-gray-300 rounded animate-pulse"></div>
              <div className="h-9 w-16 bg-gray-300 rounded-full animate-pulse"></div>
              <div className="h-9 w-24 bg-gray-300 rounded-full animate-pulse"></div>
              <div className="h-9 w-28 bg-gray-300 rounded-full animate-pulse"></div>
              <div className="h-9 w-32 bg-gray-300 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid Skeleton */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <article
                  key={i}
                  className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200"
                >
                  {/* Cover Image Skeleton */}
                  <div className="w-full h-48 bg-gray-200 animate-pulse"></div>

                  {/* Post Content Skeleton */}
                  <div className="p-6">
                    {/* Tags Skeleton */}
                    <div className="flex gap-2 mb-3">
                      <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse"></div>
                      <div className="h-6 w-24 bg-gray-200 rounded-full animate-pulse"></div>
                    </div>

                    {/* Title Skeleton */}
                    <div className="space-y-2 mb-3">
                      <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                    </div>

                    {/* Excerpt Skeleton */}
                    <div className="space-y-2 mb-4">
                      <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
                    </div>

                    {/* Meta Info Skeleton */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
