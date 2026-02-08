import { db } from './db';
import { promotions } from './schema';
import { eq, and, lte, gte } from 'drizzle-orm';

// Type for public promotion
export type PublicPromotion = {
  id: string;
  title: string;
  description: string | null;
  discountType: string;
  discountValue: string;
  code: string | null;
  startDate: string;
  endDate: string;
};

// Sample data for fallback when DATABASE_URL is not set
const samplePromotions: PublicPromotion[] = [
  {
    id: '1',
    title: 'Spring Wellness Special',
    description: 'Start your wellness journey with 20% off initial consultations',
    discountType: 'percentage',
    discountValue: '20',
    code: 'SPRING20',
    startDate: '2024-03-01',
    endDate: '2024-04-30',
  },
  {
    id: '2',
    title: 'New Year Health Reset',
    description: 'Save $50 on comprehensive assessment packages',
    discountType: 'fixed',
    discountValue: '50',
    code: 'NEWYEAR50',
    startDate: '2024-01-01',
    endDate: '2024-01-31',
  },
];

/**
 * Get active promotions
 * Returns promotions where isActive=true, startDate <= now, and endDate >= now
 */
export async function getActivePromotions(): Promise<PublicPromotion[]> {
  const now = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

  // Use sample data if db is not available
  if (!db) {
    return samplePromotions.filter((promo) => {
      return promo.startDate <= now && promo.endDate >= now;
    });
  }

  try {
    const activePromotions = await db
      .select({
        id: promotions.id,
        title: promotions.title,
        description: promotions.description,
        discountType: promotions.discountType,
        discountValue: promotions.discountValue,
        code: promotions.code,
        startDate: promotions.startDate,
        endDate: promotions.endDate,
      })
      .from(promotions)
      .where(
        and(
          eq(promotions.isActive, true),
          lte(promotions.startDate, now),
          gte(promotions.endDate, now)
        )
      );

    return activePromotions as PublicPromotion[];
  } catch (error) {
    console.error('Error fetching active promotions:', error);
    // Return sample data as fallback
    return samplePromotions.filter((promo) => {
      return promo.startDate <= now && promo.endDate >= now;
    });
  }
}
