import { NextRequest, NextResponse } from 'next/server';
import { getAllWindows, createWindow, CreateWindowData } from '@/lib/scheduling';

/**
 * GET /api/availability
 * List all availability windows
 */
export async function GET() {
  try {
    const windows = await getAllWindows();
    return NextResponse.json({ windows });
  } catch (error) {
    console.error('Error fetching availability windows:', error);
    return NextResponse.json(
      { error: 'Failed to fetch availability windows' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/availability
 * Create a new availability window
 */
export async function POST(request: NextRequest) {
  try {
    const data: CreateWindowData = await request.json();

    // Validate required fields
    if (data.dayOfWeek === undefined || data.dayOfWeek === null) {
      return NextResponse.json(
        { error: 'Day of week is required' },
        { status: 400 }
      );
    }

    if (!data.startTime || !data.startTime.trim()) {
      return NextResponse.json(
        { error: 'Start time is required' },
        { status: 400 }
      );
    }

    if (!data.endTime || !data.endTime.trim()) {
      return NextResponse.json(
        { error: 'End time is required' },
        { status: 400 }
      );
    }

    const window = await createWindow(data);
    return NextResponse.json({ window }, { status: 201 });
  } catch (error) {
    console.error('Error creating availability window:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to create availability window';
    return NextResponse.json(
      { error: errorMessage },
      { status: 400 }
    );
  }
}
