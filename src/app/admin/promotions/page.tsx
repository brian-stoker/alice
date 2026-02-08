'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getPromotionStatus, Promotion, PromotionStatus } from '@/lib/promotions-admin';

interface PromotionWithStatus extends Promotion {
  status: PromotionStatus;
}

export default function AdminPromotionsPage() {
  const [promotions, setPromotions] = useState<PromotionWithStatus[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPromotions();
  }, []);

  const fetchPromotions = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/promotions');
      if (!response.ok) throw new Error('Failed to fetch promotions');
      const data = await response.json();

      // Add computed status to each promotion
      const promotionsWithStatus = data.promotions.map((promo: Promotion) => ({
        ...promo,
        status: getPromotionStatus(promo),
      }));

      setPromotions(promotionsWithStatus);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) return;

    try {
      const response = await fetch(`/api/promotions/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete promotion');

      // Refresh the list
      await fetchPromotions();
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to delete promotion');
    }
  };

  const handleToggleActive = async (id: string) => {
    try {
      const response = await fetch(`/api/promotions/${id}`, {
        method: 'PATCH',
      });

      if (!response.ok) throw new Error('Failed to toggle promotion status');

      // Refresh the list
      await fetchPromotions();
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to toggle promotion status');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getStatusBadge = (status: PromotionStatus) => {
    const styles = {
      active: 'bg-green-100 text-green-800',
      scheduled: 'bg-blue-100 text-blue-800',
      expired: 'bg-gray-100 text-gray-600',
      inactive: 'bg-yellow-100 text-yellow-800',
    };

    const labels = {
      active: 'Active',
      scheduled: 'Scheduled',
      expired: 'Expired',
      inactive: 'Inactive',
    };

    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[status]}`}
      >
        {labels[status]}
      </span>
    );
  };

  const getDiscountDisplay = (promotion: Promotion) => {
    if (promotion.discountType === 'percentage') {
      return `${promotion.discountValue}% off`;
    } else {
      return `$${promotion.discountValue} off`;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-serif font-semibold text-text-dark mb-2">
              Promotions & Discounts
            </h1>
            <p className="text-text-muted">
              Create and manage promotional campaigns and discount codes.
            </p>
          </div>
          <Link
            href="/admin/promotions/new"
            className="bg-primary text-white font-medium px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            + New Promotion
          </Link>
        </div>
      </div>

      {/* Promotions List */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-text-muted">
            <div className="animate-pulse space-y-4">
              <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto"></div>
            </div>
          </div>
        ) : error ? (
          <div className="p-8 text-center text-red-600">
            <p className="font-medium">Error loading promotions</p>
            <p className="text-sm mt-1">{error}</p>
            <button
              onClick={fetchPromotions}
              className="mt-4 text-primary hover:text-primary/80 underline"
            >
              Try again
            </button>
          </div>
        ) : promotions.length === 0 ? (
          <div className="p-8 text-center text-text-muted">
            <p className="text-lg font-medium mb-2">No promotions yet</p>
            <p className="text-sm mb-4">Get started by creating your first promotion.</p>
            <Link
              href="/admin/promotions/new"
              className="inline-block bg-primary text-white font-medium px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Create First Promotion
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Discount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Code
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date Range
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Active
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {promotions.map((promotion) => (
                  <tr key={promotion.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-medium text-text-dark">{promotion.title}</div>
                        {promotion.description && (
                          <div className="text-sm text-text-muted truncate max-w-xs">
                            {promotion.description}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-text-dark font-medium">
                      {getDiscountDisplay(promotion)}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {promotion.code ? (
                        <code className="bg-gray-100 px-2 py-1 rounded text-xs font-mono">
                          {promotion.code}
                        </code>
                      ) : (
                        <span className="text-text-muted text-xs">No code</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-text-muted">
                      {formatDate(promotion.startDate)} - {formatDate(promotion.endDate)}
                    </td>
                    <td className="px-6 py-4">
                      {getStatusBadge(promotion.status)}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleToggleActive(promotion.id)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          promotion.isActive ? 'bg-primary' : 'bg-gray-300'
                        }`}
                        aria-label={`Toggle ${promotion.title} active status`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            promotion.isActive ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </td>
                    <td className="px-6 py-4 text-right text-sm font-medium">
                      <Link
                        href={`/admin/promotions/${promotion.id}/edit`}
                        className="text-primary hover:text-primary/80 mr-4"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(promotion.id, promotion.title)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Stats */}
      {!loading && !error && promotions.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-2xl font-bold text-text-dark">
              {promotions.length}
            </div>
            <div className="text-sm text-text-muted">Total Promotions</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-2xl font-bold text-green-600">
              {promotions.filter(p => p.status === 'active').length}
            </div>
            <div className="text-sm text-text-muted">Active</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-2xl font-bold text-blue-600">
              {promotions.filter(p => p.status === 'scheduled').length}
            </div>
            <div className="text-sm text-text-muted">Scheduled</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-2xl font-bold text-gray-600">
              {promotions.filter(p => p.status === 'expired').length}
            </div>
            <div className="text-sm text-text-muted">Expired</div>
          </div>
        </div>
      )}
    </div>
  );
}
