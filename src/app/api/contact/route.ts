import { NextRequest, NextResponse } from 'next/server';
import { sendContactNotification } from '@/lib/email';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

/**
 * Basic email validation using regex
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * POST /api/contact
 * Handles contact form submissions
 */
export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Server-side validation
    const errors: string[] = [];

    if (!body.name || body.name.trim().length === 0) {
      errors.push('Name is required');
    }

    if (!body.email || body.email.trim().length === 0) {
      errors.push('Email is required');
    } else if (!isValidEmail(body.email)) {
      errors.push('Email is invalid');
    }

    if (!body.message || body.message.trim().length === 0) {
      errors.push('Message is required');
    }

    // Return validation errors if any
    if (errors.length > 0) {
      return NextResponse.json(
        { error: errors.join('. ') },
        { status: 400 }
      );
    }

    // Send notification email (currently just logs to console)
    await sendContactNotification({
      name: body.name.trim(),
      email: body.email.trim(),
      phone: body.phone?.trim(),
      message: body.message.trim(),
    });

    // Return success response
    return NextResponse.json(
      { message: 'Thank you for your message! We will be in touch within 24 hours.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request. Please try again.' },
      { status: 500 }
    );
  }
}
