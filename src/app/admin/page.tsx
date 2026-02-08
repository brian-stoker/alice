'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface DashboardData {
  blogStats: {
    publishedCount: number;
    draftCount: number;
    recentPosts: Array<{
      id: string;
      title: string;
      status: string;
      updatedAt: string;
    }>;
  };
  bookingStats: {
    pendingCount: number;
    confirmedCount: number;
    recentBookings: Array<{
      id: string;
      clientName: string;
      requestedDate: string;
      requestedTime: string;
      status: string;
      createdAt: string;
    }>;
  };
  promotionStats: {
    activeCount: number;
  };
}

export default function AdminDashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDashboardData() {
      try {
        const response = await fetch('/api/admin/dashboard');
        if (!response.ok) {
          throw new Error('Failed to fetch dashboard data');
        }
        const dashboardData = await response.json();
        setData(dashboardData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="space-y-8">
        {/* Loading skeleton */}
        <div className="bg-white rounded-lg shadow-md p-6 animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
              <div className="h-8 bg-gray-200 rounded w-1/3"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <h2 className="text-red-800 font-serif font-semibold mb-2">Error Loading Dashboard</h2>
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    });
  };

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-serif font-semibold text-text-dark mb-2">
          Admin Dashboard
        </h1>
        <p className="text-text-muted">
          Overview of your OLIV Functional Medicine practice
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Published Blog Posts */}
        <Link href="/admin/blog">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-primary">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-text-muted mb-1">Published Posts</p>
                <p className="text-3xl font-bold text-primary">{data.blogStats.publishedCount}</p>
              </div>
              <div className="text-4xl">📰</div>
            </div>
          </div>
        </Link>

        {/* Draft Blog Posts */}
        <Link href="/admin/blog">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-accent">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-text-muted mb-1">Draft Posts</p>
                <p className="text-3xl font-bold text-accent">{data.blogStats.draftCount}</p>
              </div>
              <div className="text-4xl">📝</div>
            </div>
          </div>
        </Link>

        {/* Pending Bookings */}
        <Link href="/admin/booking-requests">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-yellow-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-text-muted mb-1">Pending Requests</p>
                <p className="text-3xl font-bold text-yellow-600">{data.bookingStats.pendingCount}</p>
              </div>
              <div className="text-4xl">⏰</div>
            </div>
          </div>
        </Link>

        {/* Confirmed Bookings */}
        <Link href="/admin/booking-requests">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-text-muted mb-1">Confirmed Bookings</p>
                <p className="text-3xl font-bold text-green-600">{data.bookingStats.confirmedCount}</p>
              </div>
              <div className="text-4xl">✅</div>
            </div>
          </div>
        </Link>

        {/* Active Promotions */}
        <Link href="/admin/promotions">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-text-muted mb-1">Active Promotions</p>
                <p className="text-3xl font-bold text-purple-600">{data.promotionStats.activeCount}</p>
              </div>
              <div className="text-4xl">🎁</div>
            </div>
          </div>
        </Link>
      </div>

      {/* Activity Feeds */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Booking Activity */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-serif font-semibold text-text-dark">
              Recent Booking Requests
            </h2>
            <Link href="/admin/booking-requests" className="text-primary hover:text-primary-light text-sm font-medium">
              View All →
            </Link>
          </div>

          {data.bookingStats.recentBookings.length === 0 ? (
            <p className="text-text-muted text-center py-8">No booking requests yet</p>
          ) : (
            <div className="space-y-3">
              {data.bookingStats.recentBookings.map((booking) => (
                <div
                  key={booking.id}
                  className="border-l-4 border-gray-200 pl-4 py-2 hover:border-primary transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="font-medium text-text-dark">{booking.clientName}</p>
                      <p className="text-sm text-text-muted">
                        {formatDate(booking.requestedDate)} at {booking.requestedTime}
                      </p>
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        booking.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : booking.status === 'confirmed'
                          ? 'bg-green-100 text-green-800'
                          : booking.status === 'declined'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {booking.status}
                    </span>
                  </div>
                  <p className="text-xs text-text-muted mt-1">
                    {formatDateTime(booking.createdAt)}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recent Blog Activity */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-serif font-semibold text-text-dark">
              Recent Blog Updates
            </h2>
            <Link href="/admin/blog" className="text-primary hover:text-primary-light text-sm font-medium">
              View All →
            </Link>
          </div>

          {data.blogStats.recentPosts.length === 0 ? (
            <p className="text-text-muted text-center py-8">No blog posts yet</p>
          ) : (
            <div className="space-y-3">
              {data.blogStats.recentPosts.map((post) => (
                <div
                  key={post.id}
                  className="border-l-4 border-gray-200 pl-4 py-2 hover:border-accent transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="font-medium text-text-dark line-clamp-1">{post.title}</p>
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        post.status === 'published'
                          ? 'bg-primary/10 text-primary'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {post.status}
                    </span>
                  </div>
                  <p className="text-xs text-text-muted mt-1">
                    Updated {formatDateTime(post.updatedAt)}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
