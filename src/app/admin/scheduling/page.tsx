'use client';

import { useState, useEffect } from 'react';
import { AvailabilityWindow } from '@/lib/scheduling';

const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

interface FormData {
  dayOfWeek: number;
  startTime: string;
  endTime: string;
  isActive: boolean;
}

export default function SchedulingPage() {
  const [windows, setWindows] = useState<AvailabilityWindow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [editingWindow, setEditingWindow] = useState<AvailabilityWindow | null>(null);
  const [formData, setFormData] = useState<FormData>({
    dayOfWeek: 1,
    startTime: '09:00',
    endTime: '17:00',
    isActive: true,
  });
  const [formError, setFormError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Fetch windows
  const fetchWindows = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/availability');
      if (!response.ok) throw new Error('Failed to fetch availability windows');
      const data = await response.json();
      setWindows(data.windows);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWindows();
  }, []);

  // Handle create/update
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    setSubmitting(true);

    try {
      const url = editingWindow
        ? `/api/availability/${editingWindow.id}`
        : '/api/availability';
      const method = editingWindow ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to save availability window');
      }

      await fetchWindows();
      setShowForm(false);
      setEditingWindow(null);
      setFormData({
        dayOfWeek: 1,
        startTime: '09:00',
        endTime: '17:00',
        isActive: true,
      });
    } catch (err) {
      setFormError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setSubmitting(false);
    }
  };

  // Handle delete
  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this availability window?')) return;

    try {
      const response = await fetch(`/api/availability/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to delete availability window');
      }

      await fetchWindows();
    } catch (err) {
      alert(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  // Handle toggle active
  const handleToggleActive = async (id: string) => {
    try {
      const response = await fetch(`/api/availability/${id}`, {
        method: 'PATCH',
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to toggle availability window');
      }

      await fetchWindows();
    } catch (err) {
      alert(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  // Handle edit
  const handleEdit = (window: AvailabilityWindow) => {
    setEditingWindow(window);
    setFormData({
      dayOfWeek: window.dayOfWeek,
      startTime: window.startTime,
      endTime: window.endTime,
      isActive: window.isActive,
    });
    setShowForm(true);
    setFormError(null);
  };

  // Cancel form
  const handleCancel = () => {
    setShowForm(false);
    setEditingWindow(null);
    setFormData({
      dayOfWeek: 1,
      startTime: '09:00',
      endTime: '17:00',
      isActive: true,
    });
    setFormError(null);
  };

  // Group windows by day
  const windowsByDay = windows.reduce((acc, window) => {
    if (!acc[window.dayOfWeek]) {
      acc[window.dayOfWeek] = [];
    }
    acc[window.dayOfWeek].push(window);
    return acc;
  }, {} as Record<number, AvailabilityWindow[]>);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-text-muted">Loading availability windows...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif font-bold text-text-dark">
            Availability Management
          </h1>
          <p className="mt-2 text-text-muted">
            Manage your recurring weekly availability windows for appointments
          </p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="bg-primary hover:bg-primary-light text-white font-medium py-2 px-6 rounded-lg transition-colors"
        >
          Add Availability
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4">
          {error}
        </div>
      )}

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <h2 className="text-2xl font-serif font-bold text-text-dark mb-4">
              {editingWindow ? 'Edit Availability Window' : 'Add Availability Window'}
            </h2>

            {formError && (
              <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-3 mb-4 text-sm">
                {formError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Day of Week */}
              <div>
                <label htmlFor="dayOfWeek" className="block text-sm font-medium text-text-dark mb-1">
                  Day of Week
                </label>
                <select
                  id="dayOfWeek"
                  value={formData.dayOfWeek}
                  onChange={(e) => setFormData({ ...formData, dayOfWeek: parseInt(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                >
                  {DAYS_OF_WEEK.map((day, index) => (
                    <option key={index} value={index}>
                      {day}
                    </option>
                  ))}
                </select>
              </div>

              {/* Start Time */}
              <div>
                <label htmlFor="startTime" className="block text-sm font-medium text-text-dark mb-1">
                  Start Time
                </label>
                <input
                  type="time"
                  id="startTime"
                  value={formData.startTime}
                  onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              {/* End Time */}
              <div>
                <label htmlFor="endTime" className="block text-sm font-medium text-text-dark mb-1">
                  End Time
                </label>
                <input
                  type="time"
                  id="endTime"
                  value={formData.endTime}
                  onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              {/* Active Status */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isActive"
                  checked={formData.isActive}
                  onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                  className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                />
                <label htmlFor="isActive" className="ml-2 text-sm text-text-dark">
                  Active
                </label>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 bg-primary hover:bg-primary-light text-white font-medium py-2 px-4 rounded-lg transition-colors disabled:opacity-50"
                >
                  {submitting ? 'Saving...' : editingWindow ? 'Update' : 'Create'}
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  disabled={submitting}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-text-dark font-medium py-2 px-4 rounded-lg transition-colors disabled:opacity-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Weekly Calendar View */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
          {DAYS_OF_WEEK.map((day, index) => (
            <div key={index} className="bg-white p-4 min-h-[200px]">
              <h3 className="font-semibold text-lg text-text-dark mb-3 border-b pb-2">
                {day}
              </h3>
              <div className="space-y-2">
                {windowsByDay[index]?.length > 0 ? (
                  windowsByDay[index].map((window) => (
                    <div
                      key={window.id}
                      className={`p-3 rounded-lg border-2 ${
                        window.isActive
                          ? 'bg-secondary border-primary'
                          : 'bg-gray-50 border-gray-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-sm text-text-dark">
                          {window.startTime} - {window.endTime}
                        </span>
                        <button
                          onClick={() => handleToggleActive(window.id)}
                          className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                            window.isActive ? 'bg-primary' : 'bg-gray-300'
                          }`}
                          title={window.isActive ? 'Active' : 'Inactive'}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              window.isActive ? 'translate-x-5' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(window)}
                          className="text-xs text-primary hover:text-primary-light font-medium"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(window.id)}
                          className="text-xs text-red-600 hover:text-red-700 font-medium"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-text-muted italic">No availability</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="text-sm text-text-muted">Total Windows</div>
          <div className="text-2xl font-bold text-text-dark mt-1">{windows.length}</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="text-sm text-text-muted">Active Windows</div>
          <div className="text-2xl font-bold text-primary mt-1">
            {windows.filter((w) => w.isActive).length}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="text-sm text-text-muted">Inactive Windows</div>
          <div className="text-2xl font-bold text-text-muted mt-1">
            {windows.filter((w) => !w.isActive).length}
          </div>
        </div>
      </div>
    </div>
  );
}
