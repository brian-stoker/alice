/**
 * Database Index Definitions for Performance Optimization
 *
 * These indexes improve query performance for common operations.
 * Apply them manually to your database for production deployments.
 *
 * Work Item 6.2 - Performance Optimization
 */

import { index } from 'drizzle-orm/pg-core';
import { blogPosts, bookingRequests, promotions, availabilityWindows } from './schema';

/**
 * Blog Posts Indexes
 * - slug: Unique index for fast slug lookups (used in blog/[slug] routes)
 * - status_published_at: Composite index for filtering published posts by date
 */
export const blogPostSlugIdx = index('blog_posts_slug_idx').on(blogPosts.slug);
export const blogPostStatusPublishedIdx = index('blog_posts_status_published_at_idx').on(
  blogPosts.status,
  blogPosts.publishedAt
);

/**
 * Booking Requests Indexes
 * - status: For filtering bookings by status (pending, confirmed, etc.)
 * - requested_date: For date-based queries in admin dashboard
 */
export const bookingRequestsStatusIdx = index('booking_requests_status_idx').on(
  bookingRequests.status
);
export const bookingRequestsDateIdx = index('booking_requests_requested_date_idx').on(
  bookingRequests.requestedDate
);

/**
 * Promotions Indexes
 * - is_active_dates: Composite index for finding active promotions within date range
 */
export const promotionsActiveIdx = index('promotions_is_active_start_end_idx').on(
  promotions.isActive,
  promotions.startDate,
  promotions.endDate
);

/**
 * Availability Windows Indexes
 * - day_is_active: For looking up available time slots by day
 */
export const availabilityWindowsDayIdx = index('availability_windows_day_is_active_idx').on(
  availabilityWindows.dayOfWeek,
  availabilityWindows.isActive
);

/**
 * SQL statements for manual application:
 *
 * CREATE INDEX IF NOT EXISTS blog_posts_slug_idx ON blog_posts(slug);
 * CREATE INDEX IF NOT EXISTS blog_posts_status_published_at_idx ON blog_posts(status, published_at);
 * CREATE INDEX IF NOT EXISTS booking_requests_status_idx ON booking_requests(status);
 * CREATE INDEX IF NOT EXISTS booking_requests_requested_date_idx ON booking_requests(requested_date);
 * CREATE INDEX IF NOT EXISTS promotions_is_active_start_end_idx ON promotions(is_active, start_date, end_date);
 * CREATE INDEX IF NOT EXISTS availability_windows_day_is_active_idx ON availability_windows(day_of_week, is_active);
 */
