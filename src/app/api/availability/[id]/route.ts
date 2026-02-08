import { NextRequest, NextResponse } from 'next/server';
import {
  getWindowById,
  updateWindow,
  deleteWindow,
  toggleWindowActive,
  UpdateWindowData,
} from '@/lib/scheduling';

/**
 * GET /api/availability/[id]
 * Get a single availability window by ID
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const window = await getWindowById(id);

    if (!window) {
      return NextResponse.json(
        { error: 'Availability window not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ window });
  } catch (error) {
    console.error('Error fetching availability window:', error);
    return NextResponse.json(
      { error: 'Failed to fetch availability window' },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/availability/[id]
 * Update an availability window
 */
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data: UpdateWindowData = await request.json();

    const window = await updateWindow(id, data);

    if (!window) {
      return NextResponse.json(
        { error: 'Availability window not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ window });
  } catch (error) {
    console.error('Error updating availability window:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to update availability window';
    return NextResponse.json(
      { error: errorMessage },
      { status: 400 }
    );
  }
}

/**
 * DELETE /api/availability/[id]
 * Delete an availability window
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const success = await deleteWindow(id);

    if (!success) {
      return NextResponse.json(
        { error: 'Availability window not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting availability window:', error);
    return NextResponse.json(
      { error: 'Failed to delete availability window' },
      { status: 500 }
    );
  }
}

/**
 * PATCH /api/availability/[id]
 * Toggle active status of an availability window
 */
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const window = await toggleWindowActive(id);

    if (!window) {
      return NextResponse.json(
        { error: 'Availability window not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ window });
  } catch (error) {
    console.error('Error toggling availability window:', error);
    return NextResponse.json(
      { error: 'Failed to toggle availability window' },
      { status: 500 }
    );
  }
}
