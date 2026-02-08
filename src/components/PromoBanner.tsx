'use client';

import { useState, useEffect } from 'react';
import type { PublicPromotion } from '@/lib/promotions';

export default function PromoBanner() {
  const [promotion, setPromotion] = useState<PublicPromotion | null>(null);
  const [isDismissed, setIsDismissed] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    // Check if banner was dismissed in this session
    const dismissed = sessionStorage.getItem('promoBannerDismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
      return;
    }

    // Fetch active promotions
    async function fetchPromotions() {
      try {
        const response = await fetch('/api/promotions/active');
        if (!response.ok) {
          throw new Error('Failed to fetch promotions');
        }
        const promotions: PublicPromotion[] = await response.json();

        // Get the most recent promotion (first one)
        if (promotions.length > 0) {
          setPromotion(promotions[0]);
        }
      } catch (error) {
        console.error('Error fetching promotions:', error);
      }
    }

    fetchPromotions();
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    sessionStorage.setItem('promoBannerDismissed', 'true');
  };

  const handleCopyCode = async () => {
    if (promotion?.code) {
      try {
        await navigator.clipboard.writeText(promotion.code);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      } catch (error) {
        console.error('Failed to copy code:', error);
      }
    }
  };

  const formatDiscount = (type: string, value: string) => {
    if (type === 'percentage') {
      return `${value}% Off`;
    } else if (type === 'fixed') {
      return `$${value} Off`;
    }
    return value;
  };

  // Don't render if no promotion, dismissed, or still loading
  if (!promotion || isDismissed) {
    return null;
  }

  return (
    <div className="bg-primary text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="flex-1 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
              <span className="font-serif font-semibold text-lg sm:text-xl">
                {promotion.title}
              </span>
              <span className="text-accent font-bold text-base sm:text-lg">
                {formatDiscount(promotion.discountType, promotion.discountValue)}
              </span>
            </div>
            {promotion.description && (
              <p className="text-sm sm:text-base text-primary-light mt-1">
                {promotion.description}
              </p>
            )}
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {promotion.code && (
              <button
                onClick={handleCopyCode}
                className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-[#c99560] transition-colors font-sans font-semibold text-sm sm:text-base whitespace-nowrap"
                aria-label={`Copy promo code ${promotion.code}`}
              >
                {copySuccess ? 'Copied!' : `Code: ${promotion.code}`}
              </button>
            )}

            <button
              onClick={handleDismiss}
              className="text-white hover:text-accent transition-colors p-1"
              aria-label="Dismiss promotion banner"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
