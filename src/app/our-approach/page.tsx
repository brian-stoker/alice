import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

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
    <div className="bg-background">
      {/* Hero Section - Parallax with nature/science image */}
      <section
        className="parallax-bg parallax-overlay flex items-center justify-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1532187863486-abf4dbce1253?w=1920&q=80)",
          minHeight: "70vh",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal animation="scale">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-white mb-6">
              Our Approach to Functional Nutrition
            </h1>
            <p className="text-lg sm:text-xl font-sans text-white/90 max-w-3xl mx-auto leading-relaxed">
              At OLIV, we believe true health comes from understanding the root
              causes of imbalance, not just treating symptoms.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Root-Cause Analysis Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <ScrollReveal animation="left">
              <div>
                <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-primary mb-6">
                  Root-Cause Analysis
                </h2>
                <p className="text-lg font-sans text-text-muted mb-4">
                  Many conventional approaches to health focus on managing
                  symptoms rather than understanding why they occur in the first
                  place. At OLIV, we take a fundamentally different approach.
                </p>
                <p className="text-lg font-sans text-text-muted mb-4">
                  We dig deeper. We look beyond the surface to identify the
                  underlying imbalances—whether they&apos;re nutritional deficiencies,
                  hormonal dysregulation, gut health issues, or other root
                  causes—that are driving your symptoms.
                </p>
                <p className="text-lg font-sans text-text-muted">
                  By addressing the root cause, we don&apos;t just mask the problem;
                  we help you achieve lasting, meaningful health improvements.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="right">
              <div className="bg-secondary rounded-2xl p-8 sm:p-10 shadow-lg">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-accent text-white shadow-md">
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
                      <h3 className="font-serif font-semibold text-foreground text-lg">
                        Comprehensive Analysis
                      </h3>
                      <p className="text-text-muted font-sans text-sm mt-1">
                        We evaluate multiple body systems and factors to identify
                        what&apos;s really going on
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-accent text-white shadow-md">
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
                      <h3 className="font-serif font-semibold text-foreground text-lg">
                        Data-Driven Insights
                      </h3>
                      <p className="text-text-muted font-sans text-sm mt-1">
                        Advanced testing and biomarker analysis guide our clinical
                        recommendations
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-accent text-white shadow-md">
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
                      <h3 className="font-serif font-semibold text-foreground text-lg">
                        Addressing Root Causes
                      </h3>
                      <p className="text-text-muted font-sans text-sm mt-1">
                        Rather than treating symptoms, we fix what&apos;s actually
                        causing them
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Parallax Divider - Personalized Care */}
      <section
        className="parallax-bg parallax-overlay-light flex items-center justify-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1920&q=80)",
          minHeight: "40vh",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-white leading-relaxed">
              &ldquo;Your unique biology deserves a personalized approach — not
              generic plans, but precision care built around you.&rdquo;
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Genomics & Advanced Testing Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <ScrollReveal animation="left">
              <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-lg border border-secondary">
                <h3 className="text-2xl font-serif font-semibold text-primary mb-6">
                  Our Testing Partnerships
                </h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-serif font-semibold text-foreground mb-2">
                      THEIA
                    </h4>
                    <p className="font-sans text-text-muted text-sm">
                      Comprehensive metabolic and functional testing for a
                      complete health picture
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-serif font-semibold text-foreground mb-2">
                      Genova Diagnostics
                    </h4>
                    <p className="font-sans text-text-muted text-sm">
                      Advanced laboratory testing for nutritional status, gut
                      health, and metabolic markers
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-serif font-semibold text-foreground mb-2">
                      Dutch Testing
                    </h4>
                    <p className="font-sans text-text-muted text-sm">
                      Detailed hormone metabolite analysis for understanding your
                      hormonal patterns
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="right">
              <div>
                <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-primary mb-6">
                  Genomics & Advanced Testing
                </h2>
                <p className="text-lg font-sans text-text-muted mb-4">
                  One size doesn&apos;t fit all when it comes to nutrition and
                  health. Your unique biology deserves a personalized approach.
                </p>
                <p className="text-lg font-sans text-text-muted mb-6">
                  We partner with leading diagnostic laboratories to provide
                  advanced testing that goes beyond standard blood work. Our
                  comprehensive testing approach includes:
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold mt-1 flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="font-sans text-text-muted">
                      <strong>Genomic analysis</strong> to understand how your
                      genes influence nutrition and health
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold mt-1 flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="font-sans text-text-muted">
                      <strong>Micronutrient testing</strong> to identify
                      deficiencies that could be affecting your health
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold mt-1 flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="font-sans text-text-muted">
                      <strong>Metabolic markers</strong> to assess how your body
                      is functioning at a cellular level
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold mt-1 flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="font-sans text-text-muted">
                      <strong>Specialized testing</strong> for hormones, gut
                      health, and other key body systems
                    </span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Personalized Nutrition Plans Section */}
      <section className="bg-secondary py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <ScrollReveal animation="left">
              <div>
                <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-primary mb-6">
                  Personalized Nutrition Plans
                </h2>
                <p className="text-lg font-sans text-text-muted mb-4">
                  Your health journey is unique, and your nutrition plan should
                  reflect that. We don&apos;t believe in generic meal plans or
                  cookie-cutter recommendations.
                </p>
                <p className="text-lg font-sans text-text-muted mb-4">
                  Every nutrition plan we create is tailored specifically to you,
                  taking into account:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold mt-1 flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="font-sans text-text-muted">
                      <strong>Your test results</strong> and biomarker data
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold mt-1 flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="font-sans text-text-muted">
                      <strong>Your lifestyle</strong> and practical constraints
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold mt-1 flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="font-sans text-text-muted">
                      <strong>Your health goals</strong> and aspirations
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold mt-1 flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="font-sans text-text-muted">
                      <strong>Your preferences</strong> and cultural
                      considerations
                    </span>
                  </li>
                </ul>
                <p className="text-lg font-sans text-text-muted">
                  Beyond nutrition, we integrate complementary therapies and
                  lifestyle recommendations to support your complete wellness.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="right">
              <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-lg">
                <h3 className="text-2xl font-serif font-semibold text-primary mb-6">
                  What&apos;s Included
                </h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-serif font-semibold text-foreground mb-2">
                      Detailed Nutrition Strategy
                    </h4>
                    <p className="font-sans text-sm text-text-muted">
                      Custom food recommendations based on your unique needs and
                      preferences
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-serif font-semibold text-foreground mb-2">
                      Supplementation Protocol
                    </h4>
                    <p className="font-sans text-sm text-text-muted">
                      Targeted supplements to address identified deficiencies and
                      support your goals
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-serif font-semibold text-foreground mb-2">
                      Lifestyle Modifications
                    </h4>
                    <p className="font-sans text-sm text-text-muted">
                      Practical recommendations for sleep, stress, movement, and
                      other key wellness factors
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-serif font-semibold text-foreground mb-2">
                      Integrative Therapies
                    </h4>
                    <p className="font-sans text-sm text-text-muted">
                      Additional modalities to complement your nutrition plan and
                      optimize results
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Parallax Divider - Ongoing Support */}
      <section
        className="parallax-bg parallax-overlay flex items-center justify-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&q=80)",
          minHeight: "40vh",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-white leading-relaxed">
              &ldquo;True functional medicine is a sustainable, supportive
              approach to building lasting health.&rdquo;
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Ongoing Support Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <ScrollReveal animation="left">
              <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-lg border border-secondary">
                <h3 className="text-2xl font-serif font-semibold text-primary mb-8">
                  The OLIV Difference
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="inline-block px-4 py-1.5 bg-accent text-white rounded-full text-sm font-semibold mb-2 shadow-sm">
                      Ongoing
                    </div>
                    <p className="font-sans text-text-muted">
                      Your plan evolves as you do, adapting to your progress and
                      changing needs
                    </p>
                  </div>

                  <div>
                    <div className="inline-block px-4 py-1.5 bg-primary text-white rounded-full text-sm font-semibold mb-2 shadow-sm">
                      Collaborative
                    </div>
                    <p className="font-sans text-text-muted">
                      You&apos;re a partner in your health journey, with your input
                      shaping every decision
                    </p>
                  </div>

                  <div>
                    <div className="inline-block px-4 py-1.5 bg-accent text-white rounded-full text-sm font-semibold mb-2 shadow-sm">
                      Accountable
                    </div>
                    <p className="font-sans text-text-muted">
                      We track your progress and adjust your plan to ensure
                      you&apos;re getting results
                    </p>
                  </div>

                  <div>
                    <div className="inline-block px-4 py-1.5 bg-primary text-white rounded-full text-sm font-semibold mb-2 shadow-sm">
                      Proactive
                    </div>
                    <p className="font-sans text-text-muted">
                      We stay ahead of challenges and optimize for long-term
                      wellness
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="right">
              <div>
                <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-primary mb-6">
                  Ongoing Support & Partnership
                </h2>
                <p className="text-lg font-sans text-text-muted mb-4">
                  Working with OLIV isn&apos;t a one-time consultation. It&apos;s an
                  ongoing partnership dedicated to your long-term health and
                  wellness.
                </p>
                <p className="text-lg font-sans text-text-muted mb-4">
                  Once your personalized plan is in place, we don&apos;t just send
                  you off. We stay engaged with regular check-ins and
                  consultations to:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold mt-1 flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="font-sans text-text-muted">
                      <strong>Monitor your progress</strong> and celebrate your
                      wins
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold mt-1 flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="font-sans text-text-muted">
                      <strong>Adjust your plan</strong> as your body responds and
                      your needs evolve
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold mt-1 flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="font-sans text-text-muted">
                      <strong>Address challenges</strong> and troubleshoot any
                      issues that arise
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold mt-1 flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="font-sans text-text-muted">
                      <strong>Optimize continuously</strong> to help you achieve
                      your best health
                    </span>
                  </li>
                </ul>
                <p className="text-lg font-sans text-text-muted">
                  This is true functional medicine—a sustainable, supportive
                  approach to building lasting health.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section - Parallax */}
      <section
        className="parallax-bg parallax-overlay flex items-center justify-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1532187863486-abf4dbce1253?w=1920&q=80)",
          minHeight: "50vh",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white mb-4">
              Ready to Start Your Functional Medicine Journey?
            </h2>
            <p className="text-lg sm:text-xl font-sans text-white/90 mb-8 max-w-2xl mx-auto">
              Discover how our personalized approach can help you achieve optimal
              health and wellness.
            </p>
            <Link
              href="/start-your-journey"
              className="inline-block px-10 py-4 bg-accent text-white hover:bg-accent/90 hover:shadow-lg transition-all duration-300 font-sans font-semibold rounded-lg text-lg"
            >
              Start Your Journey Today
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
