import { NextRequest, NextResponse } from 'next/server';
import { getAvailableSlotsForDate } from '@/lib/booking';

/**
 * GET /api/booking/slots?date=YYYY-MM-DD
 * Returns available time slots for the given date
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');

    // Validate date parameter
    if (!date) {
      return NextResponse.json(
        { error: 'Date parameter is required' },
        { status: 400 }
      );
    }

    // Validate date format (YYYY-MM-DD)
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(date)) {
      return NextResponse.json(
        { error: 'Invalid date format. Expected YYYY-MM-DD' },
        { status: 400 }
      );
    }

    // Validate that date is not in the past
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const requestedDate = new Date(date + 'T00:00:00');

    if (requestedDate < today) {
      return NextResponse.json(
        { error: 'Cannot request slots for past dates' },
        { status: 400 }
      );
    }

    // Get available slots
    const slots = await getAvailableSlotsForDate(date);

    return NextResponse.json({ slots }, { status: 200 });
  } catch (error) {
    console.error('Error fetching available slots:', error);
    return NextResponse.json(
      { error: 'An error occurred while fetching available slots' },
      { status: 500 }
    );
  }
}
