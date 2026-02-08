/**
 * Admin Booking Request Data Functions
 *
 * Provides functions for managing booking requests in the admin panel.
 * Uses sample data when DB is not connected.
 */

import { sendBookingConfirmation, sendBookingDeclination } from './email';

export interface BookingRequest {
  id: string;
  clientName: string;
  clientEmail: string;
  clientPhone?: string;
  requestedDate: string; // YYYY-MM-DD format
  requestedTime: string; // HH:MM format
  message?: string;
  status: 'pending' | 'confirmed' | 'declined' | 'cancelled';
  adminNotes?: string;
  createdAt: string;
  updatedAt: string;
}

// Sample data for development
const sampleBookings: BookingRequest[] = [
  {
    id: '1',
    clientName: 'Sarah Johnson',
    clientEmail: 'sarah.j@email.com',
    clientPhone: '555-0101',
    requestedDate: '2026-02-15',
    requestedTime: '10:00',
    message: 'I would like to schedule an initial consultation to discuss functional medicine approaches for chronic fatigue.',
    status: 'pending',
    createdAt: '2026-02-08T09:00:00.000Z',
    updatedAt: '2026-02-08T09:00:00.000Z',
  },
  {
    id: '2',
    clientName: 'Michael Chen',
    clientEmail: 'mchen@email.com',
    clientPhone: '555-0102',
    requestedDate: '2026-02-16',
    requestedTime: '14:00',
    message: 'Follow-up appointment to discuss recent lab results.',
    status: 'confirmed',
    adminNotes: 'Lab results reviewed - ready to discuss treatment plan',
    createdAt: '2026-02-07T14:30:00.000Z',
    updatedAt: '2026-02-07T15:00:00.000Z',
  },
  {
    id: '3',
    clientName: 'Emily Rodriguez',
    clientEmail: 'emily.r@email.com',
    requestedDate: '2026-02-14',
    requestedTime: '09:00',
    message: 'Interested in learning about nutritional counseling options.',
    status: 'pending',
    createdAt: '2026-02-08T11:15:00.000Z',
    updatedAt: '2026-02-08T11:15:00.000Z',
  },
  {
    id: '4',
    clientName: 'David Thompson',
    clientEmail: 'david.t@email.com',
    clientPhone: '555-0103',
    requestedDate: '2026-02-13',
    requestedTime: '16:00',
    message: 'Request for hormone optimization consultation.',
    status: 'declined',
    adminNotes: 'Time slot no longer available - suggested alternative times',
    createdAt: '2026-02-06T10:00:00.000Z',
    updatedAt: '2026-02-06T11:30:00.000Z',
  },
  {
    id: '5',
    clientName: 'Lisa Martinez',
    clientEmail: 'lisa.m@email.com',
    clientPhone: '555-0104',
    requestedDate: '2026-02-17',
    requestedTime: '11:00',
    message: 'Initial consultation for gut health concerns.',
    status: 'cancelled',
    adminNotes: 'Client cancelled via phone call',
    createdAt: '2026-02-05T13:20:00.000Z',
    updatedAt: '2026-02-08T08:00:00.000Z',
  },
];

// In-memory storage for development
let bookings: BookingRequest[] = [...sampleBookings];

/**
 * Get all booking requests, optionally filtered by status
 */
export async function getAllBookings(filter?: string): Promise<BookingRequest[]> {
  let filteredBookings = [...bookings];

  // Filter by status if provided
  if (filter && filter !== 'all') {
    filteredBookings = filteredBookings.filter(b => b.status === filter);
  }

  // Sort by createdAt descending (newest first), but prioritize pending requests
  return filteredBookings.sort((a, b) => {
    // Pending requests always come first
    if (a.status === 'pending' && b.status !== 'pending') return -1;
    if (a.status !== 'pending' && b.status === 'pending') return 1;

    // Otherwise sort by creation date descending
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
}

/**
 * Get a single booking request by ID
 */
export async function getBookingById(id: string): Promise<BookingRequest | null> {
  return bookings.find(b => b.id === id) || null;
}

/**
 * Confirm a booking request
 */
export async function confirmBooking(id: string): Promise<BookingRequest | null> {
  const index = bookings.findIndex(b => b.id === id);
  if (index === -1) return null;

  const booking = bookings[index];
  const now = new Date().toISOString();

  const updatedBooking: BookingRequest = {
    ...booking,
    status: 'confirmed',
    updatedAt: now,
  };

  bookings[index] = updatedBooking;

  // Send confirmation email
  await sendBookingConfirmation({
    clientName: updatedBooking.clientName,
    clientEmail: updatedBooking.clientEmail,
    requestedDate: updatedBooking.requestedDate,
    requestedTime: updatedBooking.requestedTime,
  });

  return updatedBooking;
}

/**
 * Decline a booking request
 */
export async function declineBooking(id: string): Promise<BookingRequest | null> {
  const index = bookings.findIndex(b => b.id === id);
  if (index === -1) return null;

  const booking = bookings[index];
  const now = new Date().toISOString();

  const updatedBooking: BookingRequest = {
    ...booking,
    status: 'declined',
    updatedAt: now,
  };

  bookings[index] = updatedBooking;

  // Send declination email
  await sendBookingDeclination({
    clientName: updatedBooking.clientName,
    clientEmail: updatedBooking.clientEmail,
    requestedDate: updatedBooking.requestedDate,
    requestedTime: updatedBooking.requestedTime,
  });

  return updatedBooking;
}

/**
 * Update admin notes for a booking request
 */
export async function updateBookingNotes(
  id: string,
  notes: string
): Promise<BookingRequest | null> {
  const index = bookings.findIndex(b => b.id === id);
  if (index === -1) return null;

  const booking = bookings[index];
  const now = new Date().toISOString();

  const updatedBooking: BookingRequest = {
    ...booking,
    adminNotes: notes,
    updatedAt: now,
  };

  bookings[index] = updatedBooking;
  return updatedBooking;
}
