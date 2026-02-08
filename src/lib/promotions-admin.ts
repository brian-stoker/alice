/**
 * Admin Promotions Data Functions
 *
 * Provides functions for managing promotions in the admin panel.
 * Uses sample data when DB is not connected.
 */

export interface Promotion {
  id: string;
  title: string;
  description?: string;
  discountType: 'percentage' | 'fixed';
  discountValue: string;
  code?: string;
  startDate: string; // YYYY-MM-DD
  endDate: string; // YYYY-MM-DD
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreatePromotionData {
  title: string;
  description?: string;
  discountType: 'percentage' | 'fixed';
  discountValue: string;
  code?: string;
  startDate: string;
  endDate: string;
  isActive?: boolean;
}

export interface UpdatePromotionData {
  title?: string;
  description?: string;
  discountType?: 'percentage' | 'fixed';
  discountValue?: string;
  code?: string;
  startDate?: string;
  endDate?: string;
  isActive?: boolean;
}

export type PromotionStatus = 'active' | 'scheduled' | 'expired' | 'inactive';

// Sample data for development
const samplePromotions: Promotion[] = [
  {
    id: '1',
    title: 'Spring Wellness Special',
    description: 'Limited time offer - 20% off all initial consultations',
    discountType: 'percentage',
    discountValue: '20',
    code: 'SPRING2026',
    startDate: '2026-02-01',
    endDate: '2026-03-31',
    isActive: true,
    createdAt: '2026-01-15T12:00:00.000Z',
    updatedAt: '2026-01-15T12:00:00.000Z',
  },
  {
    id: '2',
    title: 'Summer Health Package',
    description: '$50 off comprehensive wellness packages',
    discountType: 'fixed',
    discountValue: '50',
    code: 'SUMMER50',
    startDate: '2026-06-01',
    endDate: '2026-08-31',
    isActive: true,
    createdAt: '2026-01-20T10:00:00.000Z',
    updatedAt: '2026-01-20T10:00:00.000Z',
  },
  {
    id: '3',
    title: 'New Year Health Goals',
    description: 'Start your health journey - 15% discount on first visit',
    discountType: 'percentage',
    discountValue: '15',
    code: 'NEWYEAR2026',
    startDate: '2026-01-01',
    endDate: '2026-01-31',
    isActive: true,
    createdAt: '2025-12-15T12:00:00.000Z',
    updatedAt: '2025-12-15T12:00:00.000Z',
  },
];

// In-memory storage for development
let promotions: Promotion[] = [...samplePromotions];

/**
 * Compute promotion status based on dates and isActive flag
 */
export function getPromotionStatus(promotion: Promotion): PromotionStatus {
  if (!promotion.isActive) {
    return 'inactive';
  }

  const now = new Date();
  const start = new Date(promotion.startDate);
  const end = new Date(promotion.endDate);

  // Set time to midnight for accurate date comparison
  now.setHours(0, 0, 0, 0);
  start.setHours(0, 0, 0, 0);
  end.setHours(0, 0, 0, 0);

  if (now < start) {
    return 'scheduled';
  }

  if (now > end) {
    return 'expired';
  }

  return 'active';
}

/**
 * Validate promotion data
 */
function validatePromotionData(data: CreatePromotionData | UpdatePromotionData, excludeId?: string): string | null {
  // Validate discount value
  if (data.discountValue !== undefined) {
    const value = parseFloat(data.discountValue);
    if (isNaN(value) || value <= 0) {
      return 'Discount value must be greater than 0';
    }

    if (data.discountType === 'percentage' && value > 100) {
      return 'Percentage discount cannot exceed 100%';
    }
  }

  // Validate dates
  if (data.startDate && data.endDate) {
    const start = new Date(data.startDate);
    const end = new Date(data.endDate);

    if (end <= start) {
      return 'End date must be after start date';
    }
  }

  // Validate unique code
  if (data.code) {
    const existingPromo = promotions.find(p => p.code === data.code && p.id !== excludeId);
    if (existingPromo) {
      return 'Promotion code already exists';
    }
  }

  return null;
}

/**
 * Get all promotions sorted by createdAt descending
 */
export async function getAllPromotions(): Promise<Promotion[]> {
  return [...promotions].sort((a, b) =>
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

/**
 * Get a single promotion by ID
 */
export async function getPromotionById(id: string): Promise<Promotion | null> {
  return promotions.find(p => p.id === id) || null;
}

/**
 * Create a new promotion
 */
export async function createPromotion(data: CreatePromotionData): Promise<{ promotion?: Promotion; error?: string }> {
  // Validate data
  const validationError = validatePromotionData(data);
  if (validationError) {
    return { error: validationError };
  }

  const now = new Date().toISOString();

  const newPromotion: Promotion = {
    id: crypto.randomUUID(),
    title: data.title,
    description: data.description,
    discountType: data.discountType,
    discountValue: data.discountValue,
    code: data.code,
    startDate: data.startDate,
    endDate: data.endDate,
    isActive: data.isActive !== undefined ? data.isActive : true,
    createdAt: now,
    updatedAt: now,
  };

  promotions.push(newPromotion);
  return { promotion: newPromotion };
}

/**
 * Update an existing promotion
 */
export async function updatePromotion(id: string, data: UpdatePromotionData): Promise<{ promotion?: Promotion; error?: string }> {
  const index = promotions.findIndex(p => p.id === id);
  if (index === -1) {
    return { error: 'Promotion not found' };
  }

  const existingPromotion = promotions[index];

  // Merge data for validation
  const mergedData = {
    ...existingPromotion,
    ...data,
  };

  // Validate merged data
  const validationError = validatePromotionData(mergedData, id);
  if (validationError) {
    return { error: validationError };
  }

  const now = new Date().toISOString();

  const updatedPromotion: Promotion = {
    ...existingPromotion,
    ...data,
    updatedAt: now,
  };

  promotions[index] = updatedPromotion;
  return { promotion: updatedPromotion };
}

/**
 * Delete a promotion
 */
export async function deletePromotion(id: string): Promise<boolean> {
  const index = promotions.findIndex(p => p.id === id);
  if (index === -1) return false;

  promotions.splice(index, 1);
  return true;
}

/**
 * Toggle promotion active status
 */
export async function togglePromotionActive(id: string): Promise<{ promotion?: Promotion; error?: string }> {
  const index = promotions.findIndex(p => p.id === id);
  if (index === -1) {
    return { error: 'Promotion not found' };
  }

  const now = new Date().toISOString();
  const updatedPromotion: Promotion = {
    ...promotions[index],
    isActive: !promotions[index].isActive,
    updatedAt: now,
  };

  promotions[index] = updatedPromotion;
  return { promotion: updatedPromotion };
}
