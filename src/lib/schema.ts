import { pgTable, uuid, text, timestamp, integer, boolean } from 'drizzle-orm/pg-core';

// Blog Posts Table
export const blogPosts = pgTable('blog_posts', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: text('title').notNull(),
  slug: text('slug').notNull().unique(),
  content: text('content'), // JSON for rich text
  excerpt: text('excerpt'),
  coverImageUrl: text('cover_image_url'),
  status: text('status').notNull().default('draft'), // draft | published
  tags: text('tags').array().default([]),
  publishedAt: timestamp('published_at'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Availability Windows Table
export const availabilityWindows = pgTable('availability_windows', {
  id: uuid('id').primaryKey().defaultRandom(),
  dayOfWeek: integer('day_of_week').notNull(), // 0-6 (Sunday-Saturday)
  startTime: text('start_time').notNull(), // HH:MM format
  endTime: text('end_time').notNull(), // HH:MM format
  isActive: boolean('is_active').default(true),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Booking Requests Table
export const bookingRequests = pgTable('booking_requests', {
  id: uuid('id').primaryKey().defaultRandom(),
  clientName: text('client_name').notNull(),
  clientEmail: text('client_email').notNull(),
  clientPhone: text('client_phone'),
  requestedDate: text('requested_date').notNull(), // YYYY-MM-DD format
  requestedTime: text('requested_time').notNull(), // HH:MM format
  message: text('message'),
  status: text('status').notNull().default('pending'), // pending | confirmed | declined | cancelled
  adminNotes: text('admin_notes'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Promotions Table
export const promotions = pgTable('promotions', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: text('title').notNull(),
  description: text('description'),
  discountType: text('discount_type').notNull(), // percentage | fixed
  discountValue: text('discount_value').notNull(),
  code: text('code').unique(),
  startDate: text('start_date').notNull(), // YYYY-MM-DD format
  endDate: text('end_date').notNull(), // YYYY-MM-DD format
  isActive: boolean('is_active').default(true),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});
