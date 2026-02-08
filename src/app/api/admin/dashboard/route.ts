/**
 * Dashboard API Route
 *
 * Aggregates data from all data access modules for the admin dashboard.
 */

import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { getAllPosts } from '@/lib/blog-admin';
import { getAllBookings } from '@/lib/booking-admin';
import { getAllPromotions, getPromotionStatus } from '@/lib/promotions-admin';

export async function GET() {
  try {
    // Check authentication
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Fetch all data in parallel
    const [allPosts, allBookings, allPromotions] = await Promise.all([
      getAllPosts(),
      getAllBookings(),
      getAllPromotions(),
    ]);

    // Calculate blog stats
    const publishedPosts = allPosts.filter(p => p.status === 'published');
    const draftPosts = allPosts.filter(p => p.status === 'draft');
    const recentPosts = allPosts.slice(0, 5).map(post => ({
      id: post.id,
      title: post.title,
      status: post.status,
      updatedAt: post.updatedAt,
    }));

    // Calculate booking stats
    const pendingBookings = allBookings.filter(b => b.status === 'pending');
    const confirmedBookings = allBookings.filter(b => b.status === 'confirmed');
    const recentBookings = allBookings.slice(0, 5).map(booking => ({
      id: booking.id,
      clientName: booking.clientName,
      requestedDate: booking.requestedDate,
      requestedTime: booking.requestedTime,
      status: booking.status,
      createdAt: booking.createdAt,
    }));

    // Calculate promotion stats
    const activePromotions = allPromotions.filter(p => getPromotionStatus(p) === 'active');

    // Return aggregated dashboard data
    return NextResponse.json({
      blogStats: {
        publishedCount: publishedPosts.length,
        draftCount: draftPosts.length,
        recentPosts,
      },
      bookingStats: {
        pendingCount: pendingBookings.length,
        confirmedCount: confirmedBookings.length,
        recentBookings,
      },
      promotionStats: {
        activeCount: activePromotions.length,
      },
    });
  } catch (error) {
    console.error('Dashboard API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch dashboard data' },
      { status: 500 }
    );
  }
}
