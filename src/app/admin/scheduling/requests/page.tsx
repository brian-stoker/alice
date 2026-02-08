'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getAllBookings, BookingRequest } from '@/lib/booking-admin';

type StatusFilter = 'all' | 'pending' | 'confirmed' | 'declined';

export default function BookingRequestsPage() {
  const [bookings, setBookings] = useState<BookingRequest[]>([]);
  const [filter, setFilter] = useState<StatusFilter>('all');
  const [loading, setLoading] = useState(true);
  const [processingIds, setProcessingIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    loadBookings();
  }, [filter]);

  async function loadBookings() {
    setLoading(true);
    try {
      const data = await getAllBookings(filter === 'all' ? undefined : filter);
      setBookings(data);
    } catch (error) {
      console.error('Error loading bookings:', error);
    } finally {
      setLoading(false);
    }
  }

  async function handleConfirm(id: string) {
    setProcessingIds(prev => new Set(prev).add(id));
    try {
      const response = await fetch(`/api/booking/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'confirm' }),
      });

      if (!response.ok) throw new Error('Failed to confirm booking');

      await loadBookings();
    } catch (error) {
      console.error('Error confirming booking:', error);
      alert('Failed to confirm booking. Please try again.');
    } finally {
      setProcessingIds(prev => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    }
  }

  async function handleDecline(id: string) {
    setProcessingIds(prev => new Set(prev).add(id));
    try {
      const response = await fetch(`/api/booking/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'decline' }),
      });

      if (!response.ok) throw new Error('Failed to decline booking');

      await loadBookings();
    } catch (error) {
      console.error('Error declining booking:', error);
      alert('Failed to decline booking. Please try again.');
    } finally {
      setProcessingIds(prev => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    }
  }

  async function handleNotesUpdate(id: string, notes: string) {
    try {
      const response = await fetch(`/api/booking/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'update_notes', adminNotes: notes }),
      });

      if (!response.ok) throw new Error('Failed to update notes');

      await loadBookings();
    } catch (error) {
      console.error('Error updating notes:', error);
      alert('Failed to update notes. Please try again.');
    }
  }

  function getStatusBadgeClasses(status: BookingRequest['status']) {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'confirmed':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'declined':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'cancelled':
        return 'bg-gray-100 text-gray-800 border-gray-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  }

  function formatDate(dateStr: string): string {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  function formatTime(timeStr: string): string {
    const [hours, minutes] = timeStr.split(':');
    const hour = parseInt(hours, 10);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  }

  return (
    <div>
      {/* Header with Navigation */}
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold text-text-dark">
          Scheduling
        </h1>
        <p className="mt-2 text-text-muted mb-4">
          Manage your availability and booking requests
        </p>

        {/* Navigation Tabs */}
        <div className="flex gap-4 mb-6 border-b border-gray-200">
          <Link
            href="/admin/scheduling"
            className="px-4 py-2 font-medium border-b-2 border-transparent text-text-muted hover:text-text-dark hover:border-gray-300 transition-colors"
          >
            Availability Windows
          </Link>
          <div className="px-4 py-2 font-medium border-b-2 border-primary text-primary">
            Booking Requests
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-text-dark mb-2">
            Booking Requests
          </h2>
          <p className="text-text-muted">
            Manage client appointment requests and send confirmations
          </p>
        </div>
      </div>

      {/* Status Filter Tabs */}
      <div className="mb-6 border-b border-gray-200">
        <div className="flex gap-4">
          {[
            { key: 'all', label: 'All' },
            { key: 'pending', label: 'Pending' },
            { key: 'confirmed', label: 'Confirmed' },
            { key: 'declined', label: 'Declined' },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key as StatusFilter)}
              className={`px-4 py-2 font-medium border-b-2 transition-colors ${
                filter === key
                  ? 'border-primary text-primary'
                  : 'border-transparent text-text-muted hover:text-text-dark hover:border-gray-300'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Bookings List */}
      {loading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          <p className="mt-4 text-text-muted">Loading bookings...</p>
        </div>
      ) : bookings.length === 0 ? (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
          <p className="text-text-muted text-lg">
            No booking requests found{filter !== 'all' && ` with status "${filter}"`}.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {bookings.map(booking => (
            <div
              key={booking.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                {/* Left Side - Client Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-text-dark">
                        {booking.clientName}
                      </h3>
                      <div className="mt-1 space-y-1">
                        <p className="text-sm text-text-muted">
                          <a
                            href={`mailto:${booking.clientEmail}`}
                            className="text-primary hover:underline"
                          >
                            {booking.clientEmail}
                          </a>
                        </p>
                        {booking.clientPhone && (
                          <p className="text-sm text-text-muted">
                            <a
                              href={`tel:${booking.clientPhone}`}
                              className="text-primary hover:underline"
                            >
                              {booking.clientPhone}
                            </a>
                          </p>
                        )}
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full border ${getStatusBadgeClasses(
                        booking.status
                      )}`}
                    >
                      {booking.status.toUpperCase()}
                    </span>
                  </div>

                  {/* Requested Date/Time */}
                  <div className="mb-3 p-3 bg-secondary rounded-lg">
                    <p className="text-sm font-medium text-text-dark mb-1">
                      Requested Appointment:
                    </p>
                    <p className="text-base font-semibold text-primary">
                      {formatDate(booking.requestedDate)} at {formatTime(booking.requestedTime)}
                    </p>
                  </div>

                  {/* Client Message */}
                  {booking.message && (
                    <div className="mb-3">
                      <p className="text-sm font-medium text-text-dark mb-1">
                        Client Message:
                      </p>
                      <p className="text-sm text-text-muted italic">
                        "{booking.message}"
                      </p>
                    </div>
                  )}

                  {/* Admin Notes */}
                  <div>
                    <label
                      htmlFor={`notes-${booking.id}`}
                      className="block text-sm font-medium text-text-dark mb-1"
                    >
                      Admin Notes:
                    </label>
                    <textarea
                      id={`notes-${booking.id}`}
                      rows={2}
                      defaultValue={booking.adminNotes || ''}
                      onBlur={(e) => {
                        const newValue = e.target.value;
                        if (newValue !== (booking.adminNotes || '')) {
                          handleNotesUpdate(booking.id, newValue);
                        }
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Add internal notes about this booking..."
                    />
                  </div>

                  {/* Timestamps */}
                  <div className="mt-3 text-xs text-text-muted">
                    <span>
                      Created: {new Date(booking.createdAt).toLocaleString()}
                    </span>
                    {booking.updatedAt !== booking.createdAt && (
                      <span className="ml-4">
                        Updated: {new Date(booking.updatedAt).toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>

                {/* Right Side - Actions */}
                {booking.status === 'pending' && (
                  <div className="flex lg:flex-col gap-2 lg:min-w-[120px]">
                    <button
                      onClick={() => handleConfirm(booking.id)}
                      disabled={processingIds.has(booking.id)}
                      className="flex-1 lg:flex-none bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {processingIds.has(booking.id) ? 'Processing...' : 'Confirm'}
                    </button>
                    <button
                      onClick={() => handleDecline(booking.id)}
                      disabled={processingIds.has(booking.id)}
                      className="flex-1 lg:flex-none bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {processingIds.has(booking.id) ? 'Processing...' : 'Decline'}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
