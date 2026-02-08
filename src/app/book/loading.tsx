/**
 * Loading skeleton for booking page
 * Provides instant visual feedback while server components load
 * Work Item 6.2 - Performance Optimization
 */

export default function BookLoading() {
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

      {/* Booking Form Section Skeleton */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Info Card Skeleton */}
            <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 mb-8 animate-pulse">
              <div className="h-6 bg-accent/20 rounded w-1/3 mb-3"></div>
              <div className="space-y-2">
                <div className="h-4 bg-accent/20 rounded"></div>
                <div className="h-4 bg-accent/20 rounded w-5/6"></div>
              </div>
            </div>

            {/* Form Card Skeleton */}
            <div className="bg-white rounded-lg shadow-lg p-8 animate-pulse">
              <div className="h-7 bg-gray-200 rounded w-1/2 mb-6"></div>

              <div className="space-y-6">
                {/* Name Field Skeleton */}
                <div>
                  <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                  <div className="h-12 bg-gray-200 rounded"></div>
                </div>

                {/* Email Field Skeleton */}
                <div>
                  <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                  <div className="h-12 bg-gray-200 rounded"></div>
                </div>

                {/* Phone Field Skeleton */}
                <div>
                  <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
                  <div className="h-12 bg-gray-200 rounded"></div>
                </div>

                {/* Date and Time Fields Skeleton */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
                    <div className="h-12 bg-gray-200 rounded"></div>
                  </div>
                  <div>
                    <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
                    <div className="h-12 bg-gray-200 rounded"></div>
                  </div>
                </div>

                {/* Message Field Skeleton */}
                <div>
                  <div className="h-4 bg-gray-200 rounded w-48 mb-2"></div>
                  <div className="h-32 bg-gray-200 rounded"></div>
                </div>

                {/* Submit Button Skeleton */}
                <div className="h-12 bg-gray-200 rounded"></div>
              </div>
            </div>

            {/* Additional Info Skeleton */}
            <div className="mt-8 bg-secondary/30 rounded-lg p-6 animate-pulse">
              <div className="h-5 bg-gray-200 rounded w-1/3 mb-4"></div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gray-200 rounded-full flex-shrink-0"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gray-200 rounded-full flex-shrink-0"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gray-200 rounded-full flex-shrink-0"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
