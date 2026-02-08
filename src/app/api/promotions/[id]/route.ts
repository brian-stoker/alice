import { NextRequest, NextResponse } from 'next/server';
import {
  getPromotionById,
  updatePromotion,
  deletePromotion,
  togglePromotionActive,
  UpdatePromotionData
} from '@/lib/promotions-admin';

/**
 * GET /api/promotions/[id]
 * Get a single promotion by ID
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const promotion = await getPromotionById(id);

    if (!promotion) {
      return NextResponse.json(
        { error: 'Promotion not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ promotion });
  } catch (error) {
    console.error('Error fetching promotion:', error);
    return NextResponse.json(
      { error: 'Failed to fetch promotion' },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/promotions/[id]
 * Update a promotion
 */
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data: UpdatePromotionData = await request.json();

    // Validate if provided
    if (data.title !== undefined && !data.title.trim()) {
      return NextResponse.json(
        { error: 'Title cannot be empty' },
        { status: 400 }
      );
    }

    if (data.discountValue !== undefined && !data.discountValue.trim()) {
      return NextResponse.json(
        { error: 'Discount value cannot be empty' },
        { status: 400 }
      );
    }

    const result = await updatePromotion(id, data);

    if (result.error) {
      if (result.error === 'Promotion not found') {
        return NextResponse.json(
          { error: result.error },
          { status: 404 }
        );
      }
      return NextResponse.json(
        { error: result.error },
        { status: 400 }
      );
    }

    return NextResponse.json({ promotion: result.promotion });
  } catch (error) {
    console.error('Error updating promotion:', error);
    return NextResponse.json(
      { error: 'Failed to update promotion' },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/promotions/[id]
 * Delete a promotion
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const success = await deletePromotion(id);

    if (!success) {
      return NextResponse.json(
        { error: 'Promotion not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting promotion:', error);
    return NextResponse.json(
      { error: 'Failed to delete promotion' },
      { status: 500 }
    );
  }
}

/**
 * PATCH /api/promotions/[id]
 * Toggle promotion active status
 */
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const result = await togglePromotionActive(id);

    if (result.error) {
      return NextResponse.json(
        { error: result.error },
        { status: 404 }
      );
    }

    return NextResponse.json({ promotion: result.promotion });
  } catch (error) {
    console.error('Error toggling promotion active status:', error);
    return NextResponse.json(
      { error: 'Failed to toggle promotion status' },
      { status: 500 }
    );
  }
}
