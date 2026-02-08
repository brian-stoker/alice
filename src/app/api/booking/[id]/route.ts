import { NextRequest, NextResponse } from 'next/server';
import {
  getBookingById,
  confirmBooking,
  declineBooking,
  updateBookingNotes,
} from '@/lib/booking-admin';

/**
 * GET /api/booking/[id] - Get a single booking request
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const booking = await getBookingById(id);

    if (!booking) {
      return NextResponse.json(
        { error: 'Booking request not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(booking);
  } catch (error) {
    console.error('Error fetching booking:', error);
    return NextResponse.json(
      { error: 'Failed to fetch booking request' },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/booking/[id] - Update booking status or notes
 */
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { action, adminNotes } = body;

    let updatedBooking;

    switch (action) {
      case 'confirm':
        updatedBooking = await confirmBooking(id);
        break;

      case 'decline':
        updatedBooking = await declineBooking(id);
        break;

      case 'update_notes':
        if (typeof adminNotes !== 'string') {
          return NextResponse.json(
            { error: 'adminNotes must be a string' },
            { status: 400 }
          );
        }
        updatedBooking = await updateBookingNotes(id, adminNotes);
        break;

      default:
        return NextResponse.json(
          { error: 'Invalid action. Must be: confirm, decline, or update_notes' },
          { status: 400 }
        );
    }

    if (!updatedBooking) {
      return NextResponse.json(
        { error: 'Booking request not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedBooking);
  } catch (error) {
    console.error('Error updating booking:', error);
    return NextResponse.json(
      { error: 'Failed to update booking request' },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/booking/[id] - Cancel a booking request
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Update status to cancelled instead of deleting
    const booking = await getBookingById(id);
    if (!booking) {
      return NextResponse.json(
        { error: 'Booking request not found' },
        { status: 404 }
      );
    }

    // Use updateBookingNotes to simulate cancellation
    // In real implementation, you'd have a separate cancelBooking function
    const updatedBooking = await updateBookingNotes(
      id,
      booking.adminNotes ? `${booking.adminNotes}\n[CANCELLED]` : '[CANCELLED]'
    );

    return NextResponse.json({ success: true, booking: updatedBooking });
  } catch (error) {
    console.error('Error cancelling booking:', error);
    return NextResponse.json(
      { error: 'Failed to cancel booking request' },
      { status: 500 }
    );
  }
}
