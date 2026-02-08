import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "Discover OLIV's functional nutrition methodology - root-cause analysis, advanced testing, personalized plans, and ongoing support for optimal health.",
  openGraph: {
    title: "Our Approach | OLIV - Functional Medicine",
    description:
      "Discover OLIV's functional nutrition methodology - root-cause analysis, advanced testing, personalized plans, and ongoing support for optimal health.",
    url: "https://oliv-functional-medicine.com/our-approach",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Approach | OLIV - Functional Medicine",
    description:
      "Discover OLIV's functional nutrition methodology - root-cause analysis, advanced testing, personalized plans, and ongoing support for optimal health.",
  },
  alternates: {
    canonical: "https://oliv-functional-medicine.com/our-approach",
  },
};

export default function OurApproachPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold mb-4">
              Our Approach to Functional Nutrition
            </h1>
            <p className="text-lg sm:text-xl font-sans text-primary-light">
              At OLIV, we believe true health comes from understanding the root causes of imbalance, not just treating symptoms.
            </p>
          </div>
        </div>
      </section>

      {/* Root-Cause Analysis Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-primary mb-6">
                Root-Cause Analysis
              </h2>
              <p className="text-lg font-sans text-text-muted mb-4">
                Many conventional approaches to health focus on managing symptoms rather than understanding why they occur in the first place. At OLIV, we take a fundamentally different approach.
              </p>
              <p className="text-lg font-sans text-text-muted mb-4">
                We dig deeper. We look beyond the surface to identify the underlying imbalances—whether they're nutritional deficiencies, hormonal dysregulation, gut health issues, or other root causes—that are driving your symptoms.
              </p>
              <p className="text-lg font-sans text-text-muted">
                By addressing the root cause, we don't just mask the problem; we help you achieve lasting, meaningful health improvements.
              </p>
              {/* TODO: Courtney - Review root-cause analysis messaging and methodology description */}
            </div>
            <div className="bg-secondary rounded-lg p-8 sm:p-10">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-accent text-white">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-foreground">
                      Comprehensive Analysis
                    </h3>
                    <p className="text-text-muted font-sans text-sm mt-1">
                      We evaluate multiple body systems and factors to identify what's really going on
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-accent text-white">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-foreground">
                      Data-Driven Insights
                    </h3>
                    <p className="text-text-muted font-sans text-sm mt-1">
                      Advanced testing and biomarker analysis guide our clinical recommendations
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-accent text-white">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-foreground">
                      Addressing Root Causes
                    </h3>
                    <p className="text-text-muted font-sans text-sm mt-1">
                      Rather than treating symptoms, we fix what's actually causing them
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Genomics & Advanced Testing Section */}
      <section className="bg-secondary py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 md:order-1 bg-white rounded-lg p-8 sm:p-10">
              <h3 className="text-2xl font-serif font-semibold text-primary mb-6">
                Our Testing Partnerships
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-serif font-semibold text-foreground mb-2">
                    THEIA
                  </h4>
                  <p className="font-sans text-text-muted text-sm">
                    Comprehensive metabolic and functional testing for a complete health picture
                  </p>
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-foreground mb-2">
                    Genova Diagnostics
                  </h4>
                  <p className="font-sans text-text-muted text-sm">
                    Advanced laboratory testing for nutritional status, gut health, and metabolic markers
                  </p>
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-foreground mb-2">
                    Dutch Testing
                  </h4>
                  <p className="font-sans text-text-muted text-sm">
                    Detailed hormone metabolite analysis for understanding your hormonal patterns
                  </p>
                </div>
              </div>
              {/* TODO: Courtney - Confirm testing partnerships and add any additional details about each */}
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-primary mb-6">
                Genomics & Advanced Testing
              </h2>
              <p className="text-lg font-sans text-text-muted mb-4">
                One size doesn't fit all when it comes to nutrition and health. Your unique biology deserves a personalized approach.
              </p>
              <p className="text-lg font-sans text-text-muted mb-4">
                We partner with leading diagnostic laboratories to provide advanced testing that goes beyond standard blood work. Our comprehensive testing approach includes:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span className="font-sans text-text-muted">
                    <strong>Genomic analysis</strong> to understand how your genes influence nutrition and health
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span className="font-sans text-text-muted">
                    <strong>Micronutrient testing</strong> to identify deficiencies that could be affecting your health
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span className="font-sans text-text-muted">
                    <strong>Metabolic markers</strong> to assess how your body is functioning at a cellular level
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span className="font-sans text-text-muted">
                    <strong>Specialized testing</strong> for hormones, gut health, and other key body systems
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Personalized Nutrition Plans Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-primary mb-6">
                Personalized Nutrition Plans
              </h2>
              <p className="text-lg font-sans text-text-muted mb-4">
                Your health journey is unique, and your nutrition plan should reflect that. We don't believe in generic meal plans or cookie-cutter recommendations.
              </p>
              <p className="text-lg font-sans text-text-muted mb-4">
                Every nutrition plan we create is tailored specifically to you, taking into account:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span className="font-sans text-text-muted">
                    <strong>Your test results</strong> and biomarker data
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span className="font-sans text-text-muted">
                    <strong>Your lifestyle</strong> and practical constraints
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span className="font-sans text-text-muted">
                    <strong>Your health goals</strong> and aspirations
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span className="font-sans text-text-muted">
                    <strong>Your preferences</strong> and cultural considerations
                  </span>
                </li>
              </ul>
              <p className="text-lg font-sans text-text-muted">
                Beyond nutrition, we integrate complementary therapies and lifestyle recommendations to support your complete wellness.
              </p>
              {/* TODO: Courtney - Review personalized plan approach and add details on integrative therapies offered */}
            </div>

            <div className="bg-secondary rounded-lg p-8 sm:p-10">
              <h3 className="text-2xl font-serif font-semibold text-primary mb-6">
                What's Included
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-serif font-semibold text-foreground mb-2">
                    Detailed Nutrition Strategy
                  </h4>
                  <p className="font-sans text-sm text-text-muted">
                    Custom food recommendations based on your unique needs and preferences
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-serif font-semibold text-foreground mb-2">
                    Supplementation Protocol
                  </h4>
                  <p className="font-sans text-sm text-text-muted">
                    Targeted supplements to address identified deficiencies and support your goals
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-serif font-semibold text-foreground mb-2">
                    Lifestyle Modifications
                  </h4>
                  <p className="font-sans text-sm text-text-muted">
                    Practical recommendations for sleep, stress, movement, and other key wellness factors
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-serif font-semibold text-foreground mb-2">
                    Integrative Therapies
                  </h4>
                  <p className="font-sans text-sm text-text-muted">
                    Additional modalities to complement your nutrition plan and optimize results
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Support Section */}
      <section className="bg-secondary py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-white rounded-lg p-8 sm:p-10">
                <h3 className="text-2xl font-serif font-semibold text-primary mb-6">
                  The OLIV Difference
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="inline-block px-3 py-1 bg-accent text-white rounded-full text-sm font-semibold mb-2">
                      Ongoing
                    </div>
                    <p className="font-sans text-text-muted">
                      Your plan evolves as you do, adapting to your progress and changing needs
                    </p>
                  </div>

                  <div className="pt-4">
                    <div className="inline-block px-3 py-1 bg-accent text-white rounded-full text-sm font-semibold mb-2">
                      Collaborative
                    </div>
                    <p className="font-sans text-text-muted">
                      You're a partner in your health journey, with your input shaping every decision
                    </p>
                  </div>

                  <div className="pt-4">
                    <div className="inline-block px-3 py-1 bg-accent text-white rounded-full text-sm font-semibold mb-2">
                      Accountable
                    </div>
                    <p className="font-sans text-text-muted">
                      We track your progress and adjust your plan to ensure you're getting results
                    </p>
                  </div>

                  <div className="pt-4">
                    <div className="inline-block px-3 py-1 bg-accent text-white rounded-full text-sm font-semibold mb-2">
                      Proactive
                    </div>
                    <p className="font-sans text-text-muted">
                      We stay ahead of challenges and optimize for long-term wellness
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-primary mb-6">
                Ongoing Support & Partnership
              </h2>
              <p className="text-lg font-sans text-text-muted mb-4">
                Working with OLIV isn't a one-time consultation. It's an ongoing partnership dedicated to your long-term health and wellness.
              </p>
              <p className="text-lg font-sans text-text-muted mb-4">
                Once your personalized plan is in place, we don't just send you off. We stay engaged with regular check-ins and consultations to:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span className="font-sans text-text-muted">
                    <strong>Monitor your progress</strong> and celebrate your wins
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span className="font-sans text-text-muted">
                    <strong>Adjust your plan</strong> as your body responds and your needs evolve
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span className="font-sans text-text-muted">
                    <strong>Address challenges</strong> and troubleshoot any issues that arise
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span className="font-sans text-text-muted">
                    <strong>Optimize continuously</strong> to help you achieve your best health
                  </span>
                </li>
              </ul>
              <p className="text-lg font-sans text-text-muted">
                This is true functional medicine—a sustainable, supportive approach to building lasting health.
              </p>
              {/* TODO: Courtney - Review ongoing support structure and add specifics about check-in frequencies and program duration */}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-4">
            Ready to Start Your Functional Medicine Journey?
          </h2>
          <p className="text-lg sm:text-xl font-sans text-primary-light mb-8">
            Discover how our personalized approach can help you achieve optimal health and wellness.
          </p>
          <a
            href="/start-your-journey"
            className="inline-block px-8 py-3 bg-accent text-primary hover:bg-[#c99560] transition-colors font-serif font-semibold rounded-lg"
          >
            Start Your Journey Today
          </a>
        </div>
      </section>
    </div>
  );
}
