/**
 * Email notification utilities
 *
 * TODO: Integrate with Resend API for production email delivery
 * For now, this is a stub that logs email details to the console
 */

interface ContactNotificationParams {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

/**
 * Sends a contact form notification email
 *
 * @param params - Contact form submission details
 * @returns Promise that resolves when email is sent (or logged in stub mode)
 */
export async function sendContactNotification({
  name,
  email,
  phone,
  message,
}: ContactNotificationParams): Promise<void> {
  // TODO: Replace with actual Resend integration
  // For now, just log the email details
  console.log('📧 Contact Form Submission:');
  console.log('----------------------------');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Phone: ${phone || 'Not provided'}`);
  console.log(`Message: ${message}`);
  console.log('----------------------------');

  // Simulate async operation
  await new Promise(resolve => setTimeout(resolve, 100));
}
