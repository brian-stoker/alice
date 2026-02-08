/**
 * Booking Data Functions
 *
 * Provides functions for managing booking requests and availability.
 * Uses sample data when DB is not connected.
 */

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

export interface CreateBookingRequestData {
  clientName: string;
  clientEmail: string;
  clientPhone?: string;
  requestedDate: string;
  requestedTime: string;
  message?: string;
}

export interface AvailabilityWindow {
  id: string;
  dayOfWeek: number; // 0-6 (Sunday-Saturday)
  startTime: string; // HH:MM format
  endTime: string; // HH:MM format
  isActive: boolean;
}

export interface TimeSlot {
  time: string; // HH:MM format
  available: boolean;
}

// Sample availability windows for development
const sampleAvailabilityWindows: AvailabilityWindow[] = [
  {
    id: '1',
    dayOfWeek: 1, // Monday
    startTime: '09:00',
    endTime: '17:00',
    isActive: true,
  },
  {
    id: '2',
    dayOfWeek: 2, // Tuesday
    startTime: '09:00',
    endTime: '17:00',
    isActive: true,
  },
  {
    id: '3',
    dayOfWeek: 3, // Wednesday
    startTime: '09:00',
    endTime: '17:00',
    isActive: true,
  },
  {
    id: '4',
    dayOfWeek: 4, // Thursday
    startTime: '09:00',
    endTime: '17:00',
    isActive: true,
  },
  {
    id: '5',
    dayOfWeek: 5, // Friday
    startTime: '09:00',
    endTime: '15:00',
    isActive: true,
  },
];

// Sample booking requests for development
const sampleBookingRequests: BookingRequest[] = [
  {
    id: '1',
    clientName: 'Sarah Johnson',
    clientEmail: 'sarah.j@example.com',
    clientPhone: '555-0123',
    requestedDate: '2026-02-10',
    requestedTime: '10:00',
    message: 'Looking forward to discussing functional medicine approaches for improved energy levels.',
    status: 'confirmed',
    adminNotes: 'First-time client. Sent welcome packet.',
    createdAt: '2026-02-05T14:30:00.000Z',
    updatedAt: '2026-02-05T15:00:00.000Z',
  },
  {
    id: '2',
    clientName: 'Michael Chen',
    clientEmail: 'mchen@example.com',
    requestedDate: '2026-02-12',
    requestedTime: '14:00',
    message: 'Follow-up appointment to review test results.',
    status: 'confirmed',
    createdAt: '2026-02-06T10:00:00.000Z',
    updatedAt: '2026-02-06T10:30:00.000Z',
  },
  {
    id: '3',
    clientName: 'Emily Davis',
    clientEmail: 'emily.davis@example.com',
    clientPhone: '555-0456',
    requestedDate: '2026-02-15',
    requestedTime: '11:00',
    status: 'pending',
    createdAt: '2026-02-08T09:00:00.000Z',
    updatedAt: '2026-02-08T09:00:00.000Z',
  },
];

// In-memory storage for development
let bookingRequests: BookingRequest[] = [...sampleBookingRequests];
const availabilityWindows: AvailabilityWindow[] = [...sampleAvailabilityWindows];

// Rate limiting storage: email -> array of timestamps
const rateLimitStorage = new Map<string, number[]>();

/**
 * Generate time slots in 30-minute increments between start and end times
 */
function generateTimeSlots(startTime: string, endTime: string): string[] {
  const slots: string[] = [];
  const [startHour, startMinute] = startTime.split(':').map(Number);
  const [endHour, endMinute] = endTime.split(':').map(Number);

  const startMinutes = startHour * 60 + startMinute;
  const endMinutes = endHour * 60 + endMinute;

  for (let minutes = startMinutes; minutes < endMinutes; minutes += 30) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    slots.push(`${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`);
  }

  return slots;
}

/**
 * Get available time slots for a specific date
 */
export async function getAvailableSlotsForDate(date: string): Promise<TimeSlot[]> {
  // Parse date and get day of week
  const dateObj = new Date(date + 'T00:00:00');
  const dayOfWeek = dateObj.getDay();

  // Find availability windows for this day of week
  const windows = availabilityWindows.filter(
    w => w.dayOfWeek === dayOfWeek && w.isActive
  );

  // If no availability windows for this day, return empty array
  if (windows.length === 0) {
    return [];
  }

  // Generate all possible time slots
  const allSlots: string[] = [];
  for (const window of windows) {
    const slots = generateTimeSlots(window.startTime, window.endTime);
    allSlots.push(...slots);
  }

  // Get confirmed bookings for this date
  const confirmedBookings = bookingRequests.filter(
    b => b.requestedDate === date && b.status === 'confirmed'
  );

  // Mark slots as available or unavailable
  const timeSlots: TimeSlot[] = allSlots.map(time => ({
    time,
    available: !confirmedBookings.some(b => b.requestedTime === time),
  }));

  return timeSlots;
}

/**
 * Create a new booking request
 */
export async function createBookingRequest(
  data: CreateBookingRequestData
): Promise<BookingRequest> {
  const now = new Date().toISOString();

  const newBooking: BookingRequest = {
    id: crypto.randomUUID(),
    clientName: data.clientName,
    clientEmail: data.clientEmail,
    clientPhone: data.clientPhone,
    requestedDate: data.requestedDate,
    requestedTime: data.requestedTime,
    message: data.message,
    status: 'pending',
    createdAt: now,
    updatedAt: now,
  };

  bookingRequests.push(newBooking);
  return newBooking;
}

/**
 * Get all booking requests for a specific date
 */
export async function getBookingsByDate(date: string): Promise<BookingRequest[]> {
  return bookingRequests.filter(b => b.requestedDate === date);
}

/**
 * Check rate limit for email (max 3 requests per day)
 * Returns true if under limit, false if limit exceeded
 */
export function checkRateLimit(email: string): boolean {
  const now = Date.now();
  const oneDayMs = 24 * 60 * 60 * 1000;
  const normalizedEmail = email.toLowerCase().trim();

  // Get existing timestamps for this email
  const timestamps = rateLimitStorage.get(normalizedEmail) || [];

  // Filter out timestamps older than 24 hours
  const recentTimestamps = timestamps.filter(ts => now - ts < oneDayMs);

  // Check if under limit
  if (recentTimestamps.length >= 3) {
    return false;
  }

  // Add current timestamp
  recentTimestamps.push(now);
  rateLimitStorage.set(normalizedEmail, recentTimestamps);

  return true;
}
