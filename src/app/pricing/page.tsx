import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Learn about OLIV's functional nutrition pricing and program options. Schedule a free discovery call to discuss your needs and receive a personalized quote.",
  openGraph: {
    title: "Pricing | OLIV - Functional Medicine",
    description:
      "Learn about OLIV's functional nutrition pricing and program options. Schedule a free discovery call to discuss your needs and receive a personalized quote.",
    url: "https://oliv-functional-medicine.com/pricing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | OLIV - Functional Medicine",
    description:
      "Learn about OLIV's functional nutrition pricing and program options. Schedule a free discovery call to discuss your needs and receive a personalized quote.",
  },
  alternates: {
    canonical: "https://oliv-functional-medicine.com/pricing",
  },
};

export default function PricingPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section
        className="parallax-bg parallax-overlay relative"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1470058869958-2a77bde3e86a?w=1920&q=80)",
        }}
      >
        <div className="min-h-[50vh] flex items-center justify-center">
          <div className="text-center max-w-3xl mx-auto px-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold mb-4 text-white">
              Pricing & Programs
            </h1>
            <p className="text-lg sm:text-xl font-sans text-white/80">
              Invest in your health with personalized functional nutrition
              support
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Discovery Call */}
            <ScrollReveal animation="default" delay={0}>
              <div className="bg-white border-2 border-secondary rounded-lg p-8 hover:shadow-lg transition-shadow h-full">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-serif font-semibold text-foreground mb-2">
                    Discovery Call
                  </h2>
                  <div className="text-4xl font-serif font-bold text-primary mb-2">
                    Free
                  </div>
                  <p className="text-sm font-sans text-text-muted">
                    30 minutes
                  </p>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex gap-3">
                    <span className="text-accent font-bold mt-1 flex-shrink-0">
                      ✓
                    </span>
                    <span className="font-sans text-text-muted">
                      Discuss your health concerns
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-accent font-bold mt-1 flex-shrink-0">
                      ✓
                    </span>
                    <span className="font-sans text-text-muted">
                      Learn about our approach
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-accent font-bold mt-1 flex-shrink-0">
                      ✓
                    </span>
                    <span className="font-sans text-text-muted">
                      Determine if we're a good fit
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-accent font-bold mt-1 flex-shrink-0">
                      ✓
                    </span>
                    <span className="font-sans text-text-muted">
                      No obligation
                    </span>
                  </div>
                </div>
                <a
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-secondary text-primary hover:bg-primary hover:text-white transition-colors font-serif font-semibold rounded-lg"
                >
                  Schedule Discovery Call
                </a>
              </div>
            </ScrollReveal>

            {/* Initial Assessment */}
            <ScrollReveal animation="default" delay={150}>
              <div className="bg-white border-2 border-accent rounded-lg p-8 hover:shadow-lg transition-shadow relative h-full">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-sans font-semibold">
                    Most Popular
                  </span>
                </div>
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-serif font-semibold text-foreground mb-2">
                    Comprehensive Assessment
                  </h2>
                  <div className="text-lg font-sans text-text-muted mb-2">
                    Contact for pricing
                  </div>
                  <p className="text-sm font-sans text-text-muted">
                    Initial consultation + testing
                  </p>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex gap-3">
                    <span className="text-accent font-bold mt-1 flex-shrink-0">
                      ✓
                    </span>
                    <span className="font-sans text-text-muted">
                      90-minute initial consultation
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-accent font-bold mt-1 flex-shrink-0">
                      ✓
                    </span>
                    <span className="font-sans text-text-muted">
                      Comprehensive health history
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-accent font-bold mt-1 flex-shrink-0">
                      ✓
                    </span>
                    <span className="font-sans text-text-muted">
                      Personalized testing recommendations
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-accent font-bold mt-1 flex-shrink-0">
                      ✓
                    </span>
                    <span className="font-sans text-text-muted">
                      Custom nutrition plan
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-accent font-bold mt-1 flex-shrink-0">
                      ✓
                    </span>
                    <span className="font-sans text-text-muted">
                      Supplementation protocol
                    </span>
                  </div>
                </div>
                <a
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-accent text-white hover:bg-[#c99560] transition-colors font-serif font-semibold rounded-lg"
                >
                  Get Started
                </a>
              </div>
            </ScrollReveal>

            {/* Ongoing Support */}
            <ScrollReveal animation="default" delay={300}>
              <div className="bg-white border-2 border-secondary rounded-lg p-8 hover:shadow-lg transition-shadow h-full">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-serif font-semibold text-foreground mb-2">
                    Ongoing Support
                  </h2>
                  <div className="text-lg font-sans text-text-muted mb-2">
                    Contact for pricing
                  </div>
                  <p className="text-sm font-sans text-text-muted">
                    Monthly or quarterly
                  </p>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex gap-3">
                    <span className="text-accent font-bold mt-1 flex-shrink-0">
                      ✓
                    </span>
                    <span className="font-sans text-text-muted">
                      Regular follow-up consultations
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-accent font-bold mt-1 flex-shrink-0">
                      ✓
                    </span>
                    <span className="font-sans text-text-muted">
                      Progress monitoring
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-accent font-bold mt-1 flex-shrink-0">
                      ✓
                    </span>
                    <span className="font-sans text-text-muted">
                      Plan adjustments as needed
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-accent font-bold mt-1 flex-shrink-0">
                      ✓
                    </span>
                    <span className="font-sans text-text-muted">
                      Email support between sessions
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-accent font-bold mt-1 flex-shrink-0">
                      ✓
                    </span>
                    <span className="font-sans text-text-muted">
                      Accountability and guidance
                    </span>
                  </div>
                </div>
                <a
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-secondary text-primary hover:bg-primary hover:text-white transition-colors font-serif font-semibold rounded-lg"
                >
                  Learn More
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="bg-secondary py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground text-center mb-12">
              What's Included
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal animation="left" delay={0}>
              <div className="bg-white rounded-lg p-6 border-l-4 border-primary h-full">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  Personalized Testing
                </h3>
                <p className="font-sans text-text-muted">
                  All testing recommendations are tailored to your specific needs.
                  Testing fees are separate and billed directly by the laboratory.
                  We'll discuss recommended testing and associated costs during
                  your initial consultation.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="right" delay={100}>
              <div className="bg-white rounded-lg p-6 border-l-4 border-accent h-full">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  Flexible Payment Options
                </h3>
                <p className="font-sans text-text-muted">
                  We offer flexible payment plans to make functional nutrition
                  accessible. HSA/FSA payments are accepted. Contact us to discuss
                  options that work for your budget.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="left" delay={200}>
              <div className="bg-white rounded-lg p-6 border-l-4 border-accent h-full">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  Insurance & Reimbursement
                </h3>
                <p className="font-sans text-text-muted">
                  While we don't bill insurance directly, we provide superbills for
                  potential reimbursement. Many clients receive partial
                  reimbursement through out-of-network benefits. Check with your
                  insurance provider for details.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="right" delay={300}>
              <div className="bg-white rounded-lg p-6 border-l-4 border-primary h-full">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  Investment in Your Health
                </h3>
                <p className="font-sans text-text-muted">
                  Functional nutrition is an investment in your long-term health
                  and wellness. We're committed to providing exceptional value and
                  supporting you every step of the way on your journey to optimal
                  health.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="parallax-bg parallax-overlay-light relative"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920&q=80)",
        }}
      >
        <div className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-4 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-lg sm:text-xl font-sans text-white/80 mb-8">
              Schedule a free discovery call to discuss your needs and receive a
              personalized quote for your functional nutrition journey.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-accent text-white hover:bg-[#c99560] transition-colors font-serif font-semibold rounded-lg"
            >
              Schedule Your Discovery Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
