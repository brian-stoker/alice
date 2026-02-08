import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notice of Privacy Practices | OLIV - Functional Medicine",
  description:
    "OLIV Functional Medicine's Notice of Privacy Practices and commitment to protecting your health information in compliance with HIPAA regulations.",
};

export default function PrivacyPracticesPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-serif font-semibold mb-4">
              Notice of Privacy Practices
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
              <div className="bg-accent bg-opacity-10 border-l-4 border-accent p-6 rounded">
                <p className="font-semibold text-foreground mb-2">
                  THIS NOTICE DESCRIBES HOW HEALTH INFORMATION ABOUT YOU MAY BE
                  USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS
                  INFORMATION. PLEASE REVIEW IT CAREFULLY.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  Our Commitment to Your Privacy
                </h2>
                <p>
                  OLIV Functional Medicine is committed to protecting the privacy
                  of your health information. We are required by law to maintain
                  the privacy of protected health information (PHI) and to
                  provide you with this notice of our legal duties and privacy
                  practices. This notice describes how we may use and disclose
                  your health information and your rights regarding your health
                  information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  How We May Use and Disclose Your Health Information
                </h2>

                <h3 className="text-xl font-serif font-semibold text-foreground mb-3 mt-6">
                  Treatment
                </h3>
                <p>
                  We may use and disclose your health information to provide,
                  coordinate, or manage your nutrition care and related services.
                  This includes consultation with other healthcare providers
                  regarding your treatment and referring you to other providers
                  for services.
                </p>

                <h3 className="text-xl font-serif font-semibold text-foreground mb-3 mt-6">
                  Payment
                </h3>
                <p>
                  We may use and disclose your health information to bill and
                  collect payment for services provided. This may include
                  providing information to your insurance company or other
                  third-party payers.
                </p>

                <h3 className="text-xl font-serif font-semibold text-foreground mb-3 mt-6">
                  Healthcare Operations
                </h3>
                <p>
                  We may use and disclose your health information for our
                  healthcare operations, including quality assessment and
                  improvement activities, training programs, and business
                  management activities.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  Other Uses and Disclosures
                </h2>
                <p className="mb-4">
                  We may use or disclose your health information in the following
                  situations without your authorization:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    When required by law (e.g., reporting abuse, neglect, or
                    domestic violence)
                  </li>
                  <li>
                    For public health activities (e.g., reporting disease
                    outbreaks)
                  </li>
                  <li>
                    To prevent or lessen a serious threat to health or safety
                  </li>
                  <li>
                    In response to a court order, subpoena, or other lawful
                    process
                  </li>
                  <li>
                    For law enforcement purposes, as required by law
                  </li>
                  <li>
                    To coroners, medical examiners, or funeral directors as
                    necessary
                  </li>
                  <li>
                    For research purposes, when approved by an institutional
                    review board
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  Uses and Disclosures Requiring Your Authorization
                </h2>
                <p>
                  Other uses and disclosures of your health information not
                  described in this notice will be made only with your written
                  authorization. You may revoke your authorization at any time by
                  providing written notice. The revocation will not affect uses
                  and disclosures already made in reliance on your authorization.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  Your Rights Regarding Your Health Information
                </h2>

                <h3 className="text-xl font-serif font-semibold text-foreground mb-3 mt-6">
                  Right to Inspect and Copy
                </h3>
                <p>
                  You have the right to inspect and obtain a copy of your health
                  information that may be used to make decisions about your care.
                  We may charge a reasonable fee for copying and mailing costs.
                </p>

                <h3 className="text-xl font-serif font-semibold text-foreground mb-3 mt-6">
                  Right to Amend
                </h3>
                <p>
                  If you believe that information in your record is incorrect or
                  incomplete, you may request that we amend the information. We
                  may deny your request in certain circumstances, and will
                  provide you with information about our denial and your rights.
                </p>

                <h3 className="text-xl font-serif font-semibold text-foreground mb-3 mt-6">
                  Right to an Accounting of Disclosures
                </h3>
                <p>
                  You have the right to request an accounting of certain
                  disclosures of your health information made by us during the
                  six years prior to your request.
                </p>

                <h3 className="text-xl font-serif font-semibold text-foreground mb-3 mt-6">
                  Right to Request Restrictions
                </h3>
                <p>
                  You have the right to request restrictions on certain uses and
                  disclosures of your health information. We are not required to
                  agree to your request, except in certain limited circumstances.
                </p>

                <h3 className="text-xl font-serif font-semibold text-foreground mb-3 mt-6">
                  Right to Request Confidential Communications
                </h3>
                <p>
                  You have the right to request that we communicate with you
                  about your health information in a certain way or at a certain
                  location. We will accommodate reasonable requests.
                </p>

                <h3 className="text-xl font-serif font-semibold text-foreground mb-3 mt-6">
                  Right to a Paper Copy of This Notice
                </h3>
                <p>
                  You have the right to obtain a paper copy of this notice, even
                  if you have agreed to receive it electronically.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  Our Responsibilities
                </h2>
                <p className="mb-4">We are required by law to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Maintain the privacy of your protected health information
                  </li>
                  <li>
                    Provide you with this notice of our legal duties and privacy
                    practices
                  </li>
                  <li>Follow the terms of the notice currently in effect</li>
                  <li>
                    Notify you if we are unable to agree to a requested
                    restriction
                  </li>
                  <li>
                    Notify affected individuals following a breach of unsecured
                    protected health information
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  Changes to This Notice
                </h2>
                <p>
                  We reserve the right to change this notice and to make the
                  revised or changed notice effective for health information we
                  already have about you as well as any information we receive in
                  the future. We will post a copy of the current notice in our
                  office and on our website. The notice will contain the
                  effective date on the first page.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  Complaints
                </h2>
                <p className="mb-4">
                  If you believe your privacy rights have been violated, you may
                  file a complaint with us or with the Secretary of the U.S.
                  Department of Health and Human Services. To file a complaint
                  with us, contact:
                </p>
                <div className="bg-secondary rounded p-4">
                  <p className="font-semibold">OLIV Functional Medicine</p>
                  <p>Privacy Officer</p>
                  <p>info@olivfunctionalmedicine.com</p>
                </div>
                <p className="mt-4">
                  You will not be retaliated against for filing a complaint.
                </p>
              </div>

              <div className="bg-primary bg-opacity-5 rounded-lg p-6 mt-8">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  Contact Information
                </h2>
                <p>
                  If you have questions about this Notice of Privacy Practices or
                  need more information about our privacy practices, please
                  contact us:
                </p>
                <div className="mt-4 space-y-1">
                  <p>
                    <strong>Email:</strong> info@olivfunctionalmedicine.com
                  </p>
                  <p>
                    <strong>Website:</strong> www.olivfunctionalmedicine.com
                  </p>
                </div>
              </div>

              <div className="border-t-2 border-gray-200 pt-6 mt-8">
                <p className="text-sm italic">
                  Acknowledgment: By receiving services from OLIV Functional
                  Medicine, you acknowledge that you have been provided with an
                  opportunity to review this Notice of Privacy Practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
