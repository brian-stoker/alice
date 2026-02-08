import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | OLIV - Functional Medicine",
  description:
    "OLIV Functional Medicine's refund and cancellation policy for nutrition consultations and services.",
};

export default function RefundPolicyPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-serif font-semibold mb-4">
              Refund Policy
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
                  Overview
                </h2>
                <p>
                  At OLIV Functional Medicine, we are committed to providing
                  exceptional service and support. This refund policy outlines
                  the terms and conditions for refunds and cancellations of our
                  services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  Consultation Services
                </h2>
                <p className="mb-4">
                  <strong>Initial Consultations:</strong> Payment for initial
                  consultations is required at the time of booking. If you need
                  to cancel or reschedule your appointment, please provide at
                  least 48 hours notice. Cancellations made with less than 48
                  hours notice will forfeit 50% of the consultation fee.
                  No-shows will forfeit the full consultation fee.
                </p>
                <p>
                  <strong>Follow-up Consultations:</strong> The same 48-hour
                  cancellation policy applies to all follow-up consultations.
                  Rescheduling is available with adequate notice at no
                  additional charge.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  Program Packages
                </h2>
                <p className="mb-4">
                  If you have purchased a multi-session package or program, the
                  following refund terms apply:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Refunds are available within 7 days of purchase if no
                    services have been rendered.
                  </li>
                  <li>
                    After services have begun, refunds will be calculated on a
                    pro-rata basis for any unused sessions, minus a 20%
                    administrative fee.
                  </li>
                  <li>
                    Package refunds must be requested in writing and will be
                    processed within 14 business days of approval.
                  </li>
                  <li>
                    Promotional or discounted packages may have different refund
                    terms, which will be clearly communicated at the time of
                    purchase.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  Laboratory Testing
                </h2>
                <p>
                  Laboratory testing fees are paid directly to the testing
                  laboratory and are non-refundable once the test kit has been
                  ordered or the sample has been collected. OLIV Functional
                  Medicine does not control laboratory refund policies. Please
                  contact the testing laboratory directly with any questions
                  about their refund policies.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  Supplements and Products
                </h2>
                <p>
                  Supplements and products recommended through OLIV are ordered
                  through third-party vendors. Returns and refunds for
                  supplements must be handled directly with the vendor according
                  to their return policy. OLIV does not accept returns of
                  supplements or products.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  Emergency Cancellations
                </h2>
                <p>
                  We understand that emergencies happen. In cases of medical
                  emergency, family emergency, or other extenuating
                  circumstances, we will work with you to reschedule or refund
                  your appointment as appropriate. Documentation may be required
                  for emergency cancellations.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  Refund Processing
                </h2>
                <p>
                  All approved refunds will be processed within 14 business days
                  and will be returned to the original method of payment.
                  Processing times may vary depending on your financial
                  institution.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  No Guarantee of Results
                </h2>
                <p>
                  Functional nutrition is a collaborative process that requires
                  active participation and commitment. While we are dedicated to
                  supporting your health journey, we cannot guarantee specific
                  results or outcomes. Refunds are not provided based on
                  dissatisfaction with health outcomes, as individual results
                  vary based on numerous factors including compliance with
                  recommendations, individual biochemistry, and underlying health
                  conditions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  How to Request a Refund
                </h2>
                <p>
                  To request a refund, please contact us in writing via email at
                  info@olivfunctionalmedicine.com with your name, date of
                  service, and reason for the refund request. We will respond to
                  your request within 3-5 business days.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  Policy Updates
                </h2>
                <p>
                  OLIV Functional Medicine reserves the right to update this
                  refund policy at any time. Changes will be posted on this page
                  with an updated effective date. Your continued use of our
                  services after changes are posted constitutes acceptance of
                  the updated policy.
                </p>
              </div>

              <div className="bg-secondary rounded-lg p-6 mt-8">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  Questions?
                </h2>
                <p>
                  If you have any questions about our refund policy, please
                  don't hesitate to contact us. We're here to help and committed
                  to ensuring a positive experience.
                </p>
                <p className="mt-4">
                  <strong>Contact:</strong> info@olivfunctionalmedicine.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
