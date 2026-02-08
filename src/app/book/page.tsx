'use client';

import { useState, useEffect } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

interface TimeSlot {
  time: string;
  available: boolean;
}

export default function BookPage() {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  // Generate array of next 28 days (4 weeks) for date picker
  const getNextFourWeeks = () => {
    const dates: Date[] = [];
    const today = new Date();

    for (let i = 0; i < 28; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }

    return dates;
  };

  const formatDate = (date: Date): string => {
    return date.toISOString().split('T')[0];
  };

  const formatDisplayDate = (dateString: string): string => {
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const formatDisplayTime = (timeString: string): string => {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  // Fetch available slots when date is selected
  useEffect(() => {
    if (!selectedDate) {
      setAvailableSlots([]);
      setSelectedTime('');
      return;
    }

    const fetchSlots = async () => {
      setLoadingSlots(true);
      try {
        const response = await fetch(`/api/booking/slots?date=${selectedDate}`);
        if (response.ok) {
          const data = await response.json();
          setAvailableSlots(data.slots);
        } else {
          console.error('Failed to fetch slots');
          setAvailableSlots([]);
        }
      } catch (error) {
        console.error('Error fetching slots:', error);
        setAvailableSlots([]);
      } finally {
        setLoadingSlots(false);
      }
    };

    fetchSlots();
  }, [selectedDate]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    // Client-side validation
    if (!formData.clientName.trim()) {
      setSubmitStatus({ type: 'error', message: 'Please enter your name' });
      setIsSubmitting(false);
      return;
    }

    if (!formData.clientEmail.trim()) {
      setSubmitStatus({ type: 'error', message: 'Please enter your email' });
      setIsSubmitting(false);
      return;
    }

    if (!selectedDate) {
      setSubmitStatus({ type: 'error', message: 'Please select a date' });
      setIsSubmitting(false);
      return;
    }

    if (!selectedTime) {
      setSubmitStatus({ type: 'error', message: 'Please select a time' });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          clientName: formData.clientName.trim(),
          clientEmail: formData.clientEmail.trim(),
          clientPhone: formData.clientPhone.trim() || undefined,
          requestedDate: selectedDate,
          requestedTime: selectedTime,
          message: formData.message.trim() || undefined,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message,
        });
        // Reset form
        setFormData({
          clientName: '',
          clientEmail: '',
          clientPhone: '',
          message: '',
        });
        setSelectedDate('');
        setSelectedTime('');
        setAvailableSlots([]);
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to submit booking request',
        });
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const availableDates = getNextFourWeeks();
  const availableTimeSlots = availableSlots.filter((slot) => slot.available);

  return (
    <div className="bg-background min-h-screen">
      {/* Parallax Hero Section */}
      <section
        className="parallax-bg parallax-overlay relative"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1920&q=80)',
        }}
      >
        <div className="min-h-[50vh] flex items-center justify-center">
          <div className="max-w-3xl mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-6 text-white">
              Book Your Appointment
            </h1>
            <p className="text-lg md:text-xl font-sans text-white/80">
              Select a date and time that works for you, and we'll confirm your
              appointment within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <ScrollReveal animation="default" delay={0}>
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-6">
                    Your Information
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label
                        htmlFor="clientName"
                        className="block text-sm font-sans font-medium text-foreground mb-2"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="clientName"
                        name="clientName"
                        value={formData.clientName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg font-sans focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="clientEmail"
                        className="block text-sm font-sans font-medium text-foreground mb-2"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="clientEmail"
                        name="clientEmail"
                        value={formData.clientEmail}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg font-sans focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="clientPhone"
                        className="block text-sm font-sans font-medium text-foreground mb-2"
                      >
                        Phone Number (optional)
                      </label>
                      <input
                        type="tel"
                        id="clientPhone"
                        name="clientPhone"
                        value={formData.clientPhone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg font-sans focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Date Selection */}
              <ScrollReveal animation="default" delay={100}>
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-6">
                    Select a Date <span className="text-red-500">*</span>
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {availableDates.map((date) => {
                      const dateString = formatDate(date);
                      const dayOfWeek = date.getDay();
                      // Check if it's a weekend (0 = Sunday, 6 = Saturday)
                      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

                      return (
                        <button
                          key={dateString}
                          type="button"
                          onClick={() => setSelectedDate(dateString)}
                          disabled={isWeekend}
                          className={`
                            p-3 rounded-lg border-2 font-sans text-sm transition-all
                            ${
                              selectedDate === dateString
                                ? 'border-primary bg-primary text-white'
                                : isWeekend
                                ? 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
                                : 'border-gray-300 bg-white text-foreground hover:border-primary'
                            }
                          `}
                        >
                          <div className="font-medium">
                            {date.toLocaleDateString('en-US', { weekday: 'short' })}
                          </div>
                          <div className="text-xs">
                            {date.toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                            })}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  <p className="text-sm text-text-muted font-sans mt-4">
                    Weekends are unavailable. Please select a weekday.
                  </p>
                </div>
              </ScrollReveal>

              {/* Time Selection */}
              {selectedDate && (
                <ScrollReveal animation="default" delay={0}>
                  <div className="bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-2">
                      Select a Time <span className="text-red-500">*</span>
                    </h2>
                    <p className="text-base text-text-muted font-sans mb-6">
                      {formatDisplayDate(selectedDate)}
                    </p>

                    {loadingSlots ? (
                      <div className="text-center py-8">
                        <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-gray-300 border-t-primary"></div>
                        <p className="text-text-muted font-sans mt-4">
                          Loading available times...
                        </p>
                      </div>
                    ) : availableTimeSlots.length > 0 ? (
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {availableTimeSlots.map((slot) => (
                          <button
                            key={slot.time}
                            type="button"
                            onClick={() => setSelectedTime(slot.time)}
                            className={`
                              p-3 rounded-lg border-2 font-sans text-sm transition-all
                              ${
                                selectedTime === slot.time
                                  ? 'border-primary bg-primary text-white'
                                  : 'border-gray-300 bg-white text-foreground hover:border-primary'
                              }
                            `}
                          >
                            {formatDisplayTime(slot.time)}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8 bg-secondary rounded-lg">
                        <p className="text-text-muted font-sans">
                          No available time slots for this date. Please select another
                          date.
                        </p>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              )}

              {/* Additional Message */}
              <ScrollReveal animation="default" delay={200}>
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-6">
                    Additional Information (optional)
                  </h2>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-sans font-medium text-foreground mb-2"
                    >
                      Tell us about your health goals or questions
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg font-sans focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Share any concerns or topics you'd like to discuss during your appointment (optional)"
                    />
                    <p className="text-sm text-text-muted font-sans mt-2">
                      Note: Please do not include any sensitive health information at
                      this time.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Submit Status */}
              {submitStatus.type && (
                <div
                  className={`rounded-lg p-4 ${
                    submitStatus.type === 'success'
                      ? 'bg-green-50 border border-green-200'
                      : 'bg-red-50 border border-red-200'
                  }`}
                >
                  <p
                    className={`font-sans ${
                      submitStatus.type === 'success'
                        ? 'text-green-800'
                        : 'text-red-800'
                    }`}
                  >
                    {submitStatus.message}
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting || !selectedDate || !selectedTime}
                  className={`
                    px-8 py-4 rounded-lg font-sans font-semibold text-lg transition-all
                    ${
                      isSubmitting || !selectedDate || !selectedTime
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-primary text-white hover:bg-primary-light'
                    }
                  `}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Medical Disclaimer */}
      <section className="bg-secondary py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-text-muted font-sans text-center">
              <strong>Medical Disclaimer:</strong> The services provided at OLIV are
              not a substitute for medical care, medical advice, or a detailed
              discussion with your primary care physician or another licensed
              healthcare provider.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
