'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function NewPromotionPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    discountType: 'percentage' as 'percentage' | 'fixed',
    discountValue: '',
    code: '',
    startDate: '',
    endDate: '',
    isActive: true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // Client-side validation
      if (!formData.title.trim()) {
        throw new Error('Title is required');
      }

      if (!formData.discountValue || parseFloat(formData.discountValue) <= 0) {
        throw new Error('Discount value must be greater than 0');
      }

      if (formData.discountType === 'percentage' && parseFloat(formData.discountValue) > 100) {
        throw new Error('Percentage discount cannot exceed 100%');
      }

      if (!formData.startDate || !formData.endDate) {
        throw new Error('Start and end dates are required');
      }

      if (new Date(formData.endDate) <= new Date(formData.startDate)) {
        throw new Error('End date must be after start date');
      }

      // Prepare data (remove empty optional fields)
      const submitData = {
        title: formData.title.trim(),
        description: formData.description.trim() || undefined,
        discountType: formData.discountType,
        discountValue: formData.discountValue,
        code: formData.code.trim() || undefined,
        startDate: formData.startDate,
        endDate: formData.endDate,
        isActive: formData.isActive,
      };

      const response = await fetch('/api/promotions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create promotion');
      }

      // Success - redirect to promotions list
      router.push('/admin/promotions');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif font-semibold text-text-dark mb-2">
            Create New Promotion
          </h1>
          <p className="text-text-muted">
            Set up a new promotional campaign or discount code.
          </p>
        </div>
        <Link
          href="/admin/promotions"
          className="text-text-muted hover:text-text-dark transition-colors"
        >
          Cancel
        </Link>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8 space-y-6">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            <p className="font-medium">Error</p>
            <p className="text-sm">{error}</p>
          </div>
        )}

        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-text-dark mb-2">
            Title <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="e.g., Spring Wellness Special"
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-text-dark mb-2">
            Description <span className="text-text-muted text-xs">(optional)</span>
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Brief description of the promotion"
          />
        </div>

        {/* Discount Type & Value */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="discountType" className="block text-sm font-medium text-text-dark mb-2">
              Discount Type <span className="text-red-600">*</span>
            </label>
            <select
              id="discountType"
              name="discountType"
              value={formData.discountType}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="percentage">Percentage (%)</option>
              <option value="fixed">Fixed Amount ($)</option>
            </select>
          </div>

          <div>
            <label htmlFor="discountValue" className="block text-sm font-medium text-text-dark mb-2">
              Discount Value <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              {formData.discountType === 'fixed' && (
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">$</span>
              )}
              <input
                type="number"
                id="discountValue"
                name="discountValue"
                value={formData.discountValue}
                onChange={handleChange}
                required
                min="0.01"
                step="0.01"
                max={formData.discountType === 'percentage' ? '100' : undefined}
                className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                  formData.discountType === 'fixed' ? 'pl-8' : ''
                }`}
                placeholder={formData.discountType === 'percentage' ? '20' : '50'}
              />
              {formData.discountType === 'percentage' && (
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted">%</span>
              )}
            </div>
          </div>
        </div>

        {/* Promotion Code */}
        <div>
          <label htmlFor="code" className="block text-sm font-medium text-text-dark mb-2">
            Promotion Code <span className="text-text-muted text-xs">(optional)</span>
          </label>
          <input
            type="text"
            id="code"
            name="code"
            value={formData.code}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-mono"
            placeholder="e.g., SPRING2026"
          />
          <p className="mt-1 text-xs text-text-muted">
            Leave empty for automatic promotions. Must be unique if provided.
          </p>
        </div>

        {/* Date Range */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="startDate" className="block text-sm font-medium text-text-dark mb-2">
              Start Date <span className="text-red-600">*</span>
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="endDate" className="block text-sm font-medium text-text-dark mb-2">
              End Date <span className="text-red-600">*</span>
            </label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        {/* Active Toggle */}
        <div className="flex items-center space-x-3 pt-2">
          <input
            type="checkbox"
            id="isActive"
            name="isActive"
            checked={formData.isActive}
            onChange={handleChange}
            className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-2 focus:ring-primary"
          />
          <label htmlFor="isActive" className="text-sm font-medium text-text-dark">
            Active (promotion will be available immediately if within date range)
          </label>
        </div>

        {/* Submit Buttons */}
        <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
          <Link
            href="/admin/promotions"
            className="px-6 py-2 border border-gray-300 text-text-dark rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Creating...' : 'Create Promotion'}
          </button>
        </div>
      </form>
    </div>
  );
}
