import { NextRequest, NextResponse } from 'next/server';
import { getAllPromotions, createPromotion, CreatePromotionData } from '@/lib/promotions-admin';

/**
 * GET /api/promotions
 * List all promotions (for admin)
 */
export async function GET() {
  try {
    const promotions = await getAllPromotions();
    return NextResponse.json({ promotions });
  } catch (error) {
    console.error('Error fetching promotions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch promotions' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/promotions
 * Create a new promotion
 */
export async function POST(request: NextRequest) {
  try {
    const data: CreatePromotionData = await request.json();

    // Validate required fields
    if (!data.title || !data.title.trim()) {
      return NextResponse.json(
        { error: 'Title is required' },
        { status: 400 }
      );
    }

    if (!data.discountType) {
      return NextResponse.json(
        { error: 'Discount type is required' },
        { status: 400 }
      );
    }

    if (!data.discountValue || !data.discountValue.trim()) {
      return NextResponse.json(
        { error: 'Discount value is required' },
        { status: 400 }
      );
    }

    if (!data.startDate) {
      return NextResponse.json(
        { error: 'Start date is required' },
        { status: 400 }
      );
    }

    if (!data.endDate) {
      return NextResponse.json(
        { error: 'End date is required' },
        { status: 400 }
      );
    }

    const result = await createPromotion(data);

    if (result.error) {
      return NextResponse.json(
        { error: result.error },
        { status: 400 }
      );
    }

    return NextResponse.json({ promotion: result.promotion }, { status: 201 });
  } catch (error) {
    console.error('Error creating promotion:', error);
    return NextResponse.json(
      { error: 'Failed to create promotion' },
      { status: 500 }
    );
  }
}
