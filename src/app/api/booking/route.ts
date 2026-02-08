import { NextRequest, NextResponse } from 'next/server';
import { createBookingRequest, checkRateLimit } from '@/lib/booking';
import { sendBookingNotification } from '@/lib/email';

interface BookingFormData {
  clientName: string;
  clientEmail: string;
  clientPhone?: string;
  requestedDate: string;
  requestedTime: string;
  message?: string;
}

/**
 * Basic email validation using regex
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate date format (YYYY-MM-DD)
 */
function isValidDate(dateString: string): boolean {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(dateString)) {
    return false;
  }

  const date = new Date(dateString + 'T00:00:00');
  return !isNaN(date.getTime());
}

/**
 * Validate time format (HH:MM)
 */
function isValidTime(timeString: string): boolean {
  const timeRegex = /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/;
  return timeRegex.test(timeString);
}

/**
 * POST /api/booking
 * Handles booking request submissions
 */
export async function POST(request: NextRequest) {
  try {
    const body: BookingFormData = await request.json();

    // Server-side validation
    const errors: string[] = [];

    if (!body.clientName || body.clientName.trim().length === 0) {
      errors.push('Name is required');
    }

    if (!body.clientEmail || body.clientEmail.trim().length === 0) {
      errors.push('Email is required');
    } else if (!isValidEmail(body.clientEmail)) {
      errors.push('Email is invalid');
    }

    if (!body.requestedDate || !isValidDate(body.requestedDate)) {
      errors.push('Valid date is required');
    }

    if (!body.requestedTime || !isValidTime(body.requestedTime)) {
      errors.push('Valid time is required');
    }

    // Validate that requested date is not in the past
    if (body.requestedDate) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const requestedDate = new Date(body.requestedDate + 'T00:00:00');

      if (requestedDate < today) {
        errors.push('Cannot book appointments for past dates');
      }
    }

    // Return validation errors if any
    if (errors.length > 0) {
      return NextResponse.json(
        { error: errors.join('. ') },
        { status: 400 }
      );
    }

    // Check rate limit
    if (!checkRateLimit(body.clientEmail)) {
      return NextResponse.json(
        { error: 'You have reached the maximum number of booking requests (3) for today. Please try again tomorrow or call us directly.' },
        { status: 429 }
      );
    }

    // Create booking request
    const booking = await createBookingRequest({
      clientName: body.clientName.trim(),
      clientEmail: body.clientEmail.trim(),
      clientPhone: body.clientPhone?.trim(),
      requestedDate: body.requestedDate,
      requestedTime: body.requestedTime,
      message: body.message?.trim(),
    });

    // Send notification email to admin
    await sendBookingNotification({
      clientName: booking.clientName,
      clientEmail: booking.clientEmail,
      clientPhone: booking.clientPhone,
      requestedDate: booking.requestedDate,
      requestedTime: booking.requestedTime,
      message: booking.message,
    });

    // Return success response
    return NextResponse.json(
      {
        message: 'Your request has been submitted. We\'ll confirm your appointment within 24 hours.',
        booking: {
          id: booking.id,
          requestedDate: booking.requestedDate,
          requestedTime: booking.requestedTime,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error processing booking request:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request. Please try again.' },
      { status: 500 }
    );
  }
}
