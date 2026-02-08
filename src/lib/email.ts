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

interface BookingNotificationParams {
  clientName: string;
  clientEmail: string;
  clientPhone?: string;
  requestedDate: string;
  requestedTime: string;
  message?: string;
}

/**
 * Sends a booking request notification email to admin
 *
 * @param params - Booking request details
 * @returns Promise that resolves when email is sent (or logged in stub mode)
 */
export async function sendBookingNotification({
  clientName,
  clientEmail,
  clientPhone,
  requestedDate,
  requestedTime,
  message,
}: BookingNotificationParams): Promise<void> {
  // TODO: Replace with actual Resend integration
  // For now, just log the email details
  console.log('📅 Booking Request Submitted:');
  console.log('----------------------------');
  console.log(`Client Name: ${clientName}`);
  console.log(`Client Email: ${clientEmail}`);
  console.log(`Client Phone: ${clientPhone || 'Not provided'}`);
  console.log(`Requested Date: ${requestedDate}`);
  console.log(`Requested Time: ${requestedTime}`);
  console.log(`Message: ${message || 'No message provided'}`);
  console.log(`Admin Email: courtneyliz201@gmail.com`);
  console.log('----------------------------');

  // Simulate async operation
  await new Promise(resolve => setTimeout(resolve, 100));
}

interface BookingConfirmationParams {
  clientName: string;
  clientEmail: string;
  requestedDate: string;
  requestedTime: string;
}

/**
 * Sends a booking confirmation email to the client
 *
 * @param params - Booking confirmation details
 * @returns Promise that resolves when email is sent (or logged in stub mode)
 */
export async function sendBookingConfirmation({
  clientName,
  clientEmail,
  requestedDate,
  requestedTime,
}: BookingConfirmationParams): Promise<void> {
  // TODO: Replace with actual Resend integration
  // For now, just log the email details
  console.log('📧 Booking Confirmation Email:');
  console.log('----------------------------');
  console.log(`To: ${clientName} <${clientEmail}>`);
  console.log(`Subject: Your appointment is confirmed!`);
  console.log(`Date: ${requestedDate}`);
  console.log(`Time: ${requestedTime}`);
  console.log('----------------------------');

  // Simulate async operation
  await new Promise(resolve => setTimeout(resolve, 100));
}

interface BookingDeclinationParams {
  clientName: string;
  clientEmail: string;
  requestedDate: string;
  requestedTime: string;
}

/**
 * Sends a booking declination email to the client
 *
 * @param params - Booking declination details
 * @returns Promise that resolves when email is sent (or logged in stub mode)
 */
export async function sendBookingDeclination({
  clientName,
  clientEmail,
  requestedDate,
  requestedTime,
}: BookingDeclinationParams): Promise<void> {
  // TODO: Replace with actual Resend integration
  // For now, just log the email details
  console.log('📧 Booking Declination Email:');
  console.log('----------------------------');
  console.log(`To: ${clientName} <${clientEmail}>`);
  console.log(`Subject: Regarding your appointment request`);
  console.log(`Requested Date: ${requestedDate}`);
  console.log(`Requested Time: ${requestedTime}`);
  console.log('Message: We apologize, but the requested time is not available. Please request an alternative time.');
  console.log('----------------------------');

  // Simulate async operation
  await new Promise(resolve => setTimeout(resolve, 100));
}
