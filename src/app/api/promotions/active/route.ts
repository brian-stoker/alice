import { NextResponse } from 'next/server';
import { getActivePromotions } from '@/lib/promotions';

export async function GET() {
  try {
    const activePromotions = await getActivePromotions();
    return NextResponse.json(activePromotions);
  } catch (error) {
    console.error('Error in promotions API:', error);
    return NextResponse.json(
      { error: 'Failed to fetch promotions' },
      { status: 500 }
    );
  }
}
