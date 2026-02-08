import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Office Policies | OLIV - Functional Medicine",
  description:
    "OLIV Functional Medicine's office policies including appointment scheduling, cancellation, communication guidelines, and client responsibilities.",
};

export default function OfficePoliciesPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-serif font-semibold mb-4">
              Office Policies
            </h1>
            <p className="text-lg font-sans text-primary-light">
              Effective Date: January 1, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg p-8 space-y-6 font-sans text-text-muted leading-relaxed">
              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  Welcome to OLIV Functional Medicine
                </h2>
                <p>
                  We are committed to providing you with exceptional care and
                  support on your functional nutrition journey. These office
                  policies are designed to ensure a positive experience for all
                  clients and to help us serve you effectively. By scheduling an
                  appointment with OLIV Functional Medicine, you agree to adhere
                  to these policies.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  Appointment Scheduling
                </h2>
                <p className="mb-4">
                  <strong>Booking Appointments:</strong> Appointments can be
                  scheduled through our online booking system, by email, or by
                  phone. We recommend booking in advance to secure your preferred
                  date and time.
                </p>
                <p className="mb-4">
                  <strong>Appointment Confirmation:</strong> You will receive a
                  confirmation email upon booking. Please review the details and
                  notify us immediately if there are any discrepancies.
                </p>
                <p>
                  <strong>Appointment Reminders:</strong> We will send automated
                  reminders 48 hours and 24 hours before your scheduled
                  appointment. It is your responsibility to keep track of your
                  appointments.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  Cancellation and Rescheduling Policy
                </h2>
                <p className="mb-4">
                  <strong>Advance Notice Required:</strong> We require at least
                  48 hours notice for cancellations or rescheduling. This allows
                  us to offer your appointment time to another client.
                </p>
                <p className="mb-4">
                  <strong>Late Cancellations:</strong> Cancellations made with
                  less than 48 hours notice will result in a charge of 50% of the
                  appointment fee.
                </p>
                <p className="mb-4">
                  <strong>No-Shows:</strong> Failing to attend a scheduled
                  appointment without prior notification will result in the full
                  appointment fee being charged.
                </p>
                <p className="mb-4">
                  <strong>How to Cancel or Reschedule:</strong> Please contact us
                  as soon as possible via email at info@olivfunctionalmedicine.com
                  or through your client portal to cancel or reschedule.
                </p>
                <p>
                  <strong>Emergency Situations:</strong> We understand that true
                  emergencies occur. In cases of medical emergency or other
                  extenuating circumstances, please contact us to discuss your
                  situation.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  Late Arrival Policy
                </h2>
                <p>
                  We value your time and ask that you arrive on time for your
                  scheduled appointment. If you arrive more than 15 minutes late,
                  we may need to reschedule your appointment to avoid impacting
                  other clients' scheduled times. The late cancellation fee may
                  apply if rescheduling is necessary due to late arrival.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  Payment Policies
                </h2>
                <p className="mb-4">
                  <strong>Payment Due:</strong> Payment for all services is due
                  at the time of booking unless other arrangements have been made
                  in advance.
                </p>
                <p className="mb-4">
                  <strong>Accepted Payment Methods:</strong> We accept major
                  credit cards, debit cards, HSA/FSA cards, and electronic bank
                  transfers.
                </p>
                <p className="mb-4">
                  <strong>Package Programs:</strong> Payment plans may be
                  available for package programs. Please inquire for details.
                </p>
                <p>
                  <strong>Outstanding Balances:</strong> Services will not be
                  provided if there is an outstanding balance on your account
                  unless prior arrangements have been made.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  Communication and Correspondence
                </h2>
                <p className="mb-4">
                  <strong>Email Communication:</strong> Email is our primary
                  method of communication. Please ensure we have your current
                  email address and that you check it regularly.
                </p>
                <p className="mb-4">
                  <strong>Response Time:</strong> We strive to respond to all
                  emails within 1-2 business days. Please note that email is not
                  appropriate for urgent or emergency situations.
                </p>
                <p className="mb-4">
                  <strong>Between-Session Questions:</strong> Brief questions
                  between sessions can be sent via email. Complex questions or
                  issues may require scheduling an additional consultation.
                </p>
                <p>
                  <strong>Emergency Situations:</strong> If you are experiencing
                  a medical emergency, please call 911 or go to your nearest
                  emergency room. OLIV Functional Medicine does not provide
                  emergency medical services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  Client Responsibilities
                </h2>
                <p className="mb-4">
                  As a client of OLIV Functional Medicine, you are responsible
                  for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Providing accurate and complete health information during
                    your consultations
                  </li>
                  <li>
                    Informing us of any changes to your health status,
                    medications, or supplements
                  </li>
                  <li>
                    Following through with recommended testing and providing
                    results in a timely manner
                  </li>
                  <li>
                    Communicating openly about your ability to implement
                    recommendations
                  </li>
                  <li>
                    Maintaining regular communication and attending scheduled
                    appointments
                  </li>
                  <li>
                    Notifying your primary care physician or specialists about
                    nutritional recommendations, especially if you have chronic
                    health conditions
                  </li>
                  <li>
                    Understanding that functional nutrition is complementary to,
                    not a replacement for, medical care
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  Confidentiality and Privacy
                </h2>
                <p>
                  All information shared during consultations is confidential and
                  protected under HIPAA regulations. Please review our Notice of
                  Privacy Practices for complete information about how we protect
                  and use your health information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  Professional Boundaries
                </h2>
                <p className="mb-4">
                  <strong>Scope of Practice:</strong> As a functional nutrition
                  practitioner, services provided are within the scope of
                  nutrition and wellness consultation. We do not diagnose, treat,
                  or cure diseases.
                </p>
                <p className="mb-4">
                  <strong>Collaboration with Healthcare Providers:</strong> We
                  encourage collaboration with your medical team and may request
                  to communicate with your healthcare providers when appropriate.
                </p>
                <p>
                  <strong>Professional Relationship:</strong> The
                  practitioner-client relationship is professional in nature. We
                  maintain appropriate boundaries to ensure effective, ethical
                  care.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  Laboratory Testing
                </h2>
                <p className="mb-4">
                  <strong>Testing Recommendations:</strong> Laboratory testing
                  recommendations are personalized based on your individual needs
                  and health goals.
                </p>
                <p className="mb-4">
                  <strong>Testing Fees:</strong> Laboratory testing fees are
                  separate from consultation fees and are paid directly to the
                  testing laboratory.
                </p>
                <p className="mb-4">
                  <strong>Results Review:</strong> Test results will be reviewed
                  during a scheduled consultation. We will provide you with
                  copies of your results and interpretation.
                </p>
                <p>
                  <strong>Timely Completion:</strong> To ensure continuity of
                  care, please complete recommended testing in a timely manner.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  Supplement and Product Recommendations
                </h2>
                <p>
                  Supplement recommendations are personalized based on your
                  testing results and health needs. While we may recommend
                  specific brands or products based on quality and clinical
                  effectiveness, you are not required to purchase supplements
                  through any particular vendor. We do not receive compensation
                  from supplement sales unless specifically disclosed.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  Client Records
                </h2>
                <p>
                  We maintain detailed records of your health history,
                  consultations, test results, and recommendations. These records
                  are kept confidential and stored securely. You have the right
                  to request copies of your records at any time.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  Termination of Services
                </h2>
                <p className="mb-4">
                  Either party may terminate the professional relationship at any
                  time. If you choose to discontinue services, we ask that you
                  notify us in writing. We will provide you with appropriate
                  referrals if requested.
                </p>
                <p>
                  We reserve the right to terminate services if office policies
                  are repeatedly violated, if payment obligations are not met, or
                  if the professional relationship is no longer beneficial or
                  appropriate.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  Policy Updates
                </h2>
                <p>
                  These office policies may be updated from time to time. You
                  will be notified of significant changes, and the current
                  version will always be available on our website.
                </p>
              </div>

              <div className="bg-secondary rounded-lg p-6 mt-8">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  Questions or Concerns
                </h2>
                <p>
                  If you have questions about these policies or any concerns
                  about your care, please don't hesitate to contact us. We are
                  committed to providing you with excellent service and support.
                </p>
                <p className="mt-4">
                  <strong>Contact:</strong> info@olivfunctionalmedicine.com
                </p>
              </div>

              <div className="border-t-2 border-gray-200 pt-6 mt-8">
                <p className="text-sm italic">
                  By scheduling an appointment with OLIV Functional Medicine, you
                  acknowledge that you have read, understood, and agree to abide
                  by these office policies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
