import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Explore curated resources for functional nutrition including recommended books, articles, testing partners, and educational materials to support your health journey.",
  openGraph: {
    title: "Resources | OLIV - Functional Medicine",
    description:
      "Explore curated resources for functional nutrition including recommended books, articles, testing partners, and educational materials to support your health journey.",
    url: "https://oliv-functional-medicine.com/resources",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resources | OLIV - Functional Medicine",
    description:
      "Explore curated resources for functional nutrition including recommended books, articles, testing partners, and educational materials to support your health journey.",
  },
  alternates: {
    canonical: "https://oliv-functional-medicine.com/resources",
  },
};

export default function ResourcesPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section
        className="parallax-bg parallax-overlay relative"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1920&q=80)",
        }}
      >
        <div className="min-h-[50vh] flex items-center justify-center">
          <div className="text-center max-w-3xl mx-auto px-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold mb-4 text-white">
              Resources
            </h1>
            <p className="text-lg sm:text-xl font-sans text-white/80">
              Curated tools and knowledge to support your functional nutrition
              journey
            </p>
          </div>
        </div>
      </section>

      {/* Recommended Books Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground mb-8">
              Recommended Books
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ScrollReveal animation="scale" delay={0}>
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow h-full">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  The Metabolic Approach to Cancer
                </h3>
                <p className="font-sans text-sm text-text-muted mb-3">
                  By Dr. Nasha Winters & Jess Higgins Kelley
                </p>
                <p className="font-sans text-text-muted">
                  An integrative approach to cancer treatment emphasizing
                  metabolic health and nutrition.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="scale" delay={100}>
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow h-full">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  The Longevity Paradox
                </h3>
                <p className="font-sans text-sm text-text-muted mb-3">
                  By Dr. Steven Gundry
                </p>
                <p className="font-sans text-text-muted">
                  How to die young at a ripe old age through nutrition and
                  lifestyle choices.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="scale" delay={200}>
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow h-full">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  Deep Nutrition
                </h3>
                <p className="font-sans text-sm text-text-muted mb-3">
                  By Dr. Catherine Shanahan
                </p>
                <p className="font-sans text-text-muted">
                  Why your genes need traditional food and the science behind
                  ancestral nutrition.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="scale" delay={300}>
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow h-full">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  The Wahls Protocol
                </h3>
                <p className="font-sans text-sm text-text-muted mb-3">
                  By Dr. Terry Wahls
                </p>
                <p className="font-sans text-text-muted">
                  A radical new way to treat autoimmune conditions using Paleo
                  principles.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="scale" delay={400}>
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow h-full">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  The Thyroid Connection
                </h3>
                <p className="font-sans text-sm text-text-muted mb-3">
                  By Dr. Amy Myers
                </p>
                <p className="font-sans text-text-muted">
                  Why you feel tired, brain-fogged, and overweight, and how to get
                  your life back.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="scale" delay={500}>
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow h-full">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  Medical Medium
                </h3>
                <p className="font-sans text-sm text-text-muted mb-3">
                  By Anthony William
                </p>
                <p className="font-sans text-text-muted">
                  Secrets behind chronic and mystery illness and how to finally
                  heal.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testing Partners Section */}
      <section className="bg-secondary py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground mb-8">
              Testing Partners
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal animation="default" delay={0}>
              <div className="bg-white rounded-lg p-8 border-t-4 border-primary h-full">
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  THEIA
                </h3>
                <p className="font-sans text-text-muted mb-4">
                  Comprehensive metabolic and functional testing for a complete
                  health picture.
                </p>
                <p className="font-sans text-sm text-text-muted italic">
                  Partnered laboratory for advanced diagnostics
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="default" delay={150}>
              <div className="bg-white rounded-lg p-8 border-t-4 border-accent h-full">
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  Genova Diagnostics
                </h3>
                <p className="font-sans text-text-muted mb-4">
                  Advanced laboratory testing for nutritional status, gut health,
                  and metabolic markers.
                </p>
                <p className="font-sans text-sm text-text-muted italic">
                  Industry-leading functional medicine testing
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="default" delay={300}>
              <div className="bg-white rounded-lg p-8 border-t-4 border-primary h-full">
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  Dutch Testing
                </h3>
                <p className="font-sans text-text-muted mb-4">
                  Detailed hormone metabolite analysis for understanding your
                  hormonal patterns.
                </p>
                <p className="font-sans text-sm text-text-muted italic">
                  Precision hormone testing
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Articles & Educational Content */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground mb-8">
              Educational Articles
            </h2>
          </ScrollReveal>
          <div className="space-y-6">
            <ScrollReveal animation="left" delay={0}>
              <div className="bg-white border-l-4 border-accent rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  Understanding Functional Medicine
                </h3>
                <p className="font-sans text-text-muted mb-3">
                  Learn the core principles of functional medicine and how it
                  differs from conventional healthcare approaches.
                </p>
                <span className="inline-block text-sm font-sans text-primary font-semibold">
                  Coming Soon
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="right" delay={100}>
              <div className="bg-white border-l-4 border-primary rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  The Gut-Brain Connection
                </h3>
                <p className="font-sans text-text-muted mb-3">
                  Explore the fascinating relationship between gut health and
                  mental wellness, and why it matters for overall health.
                </p>
                <span className="inline-block text-sm font-sans text-primary font-semibold">
                  Coming Soon
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="left" delay={200}>
              <div className="bg-white border-l-4 border-accent rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  Nutrigenomics: How Your Genes Influence Nutrition
                </h3>
                <p className="font-sans text-text-muted mb-3">
                  Discover how genetic variations affect your nutritional needs and
                  how personalized nutrition can optimize your health.
                </p>
                <span className="inline-block text-sm font-sans text-primary font-semibold">
                  Coming Soon
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="right" delay={300}>
              <div className="bg-white border-l-4 border-primary rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  Supporting Hormone Balance Naturally
                </h3>
                <p className="font-sans text-text-muted mb-3">
                  Evidence-based strategies for supporting healthy hormone function
                  through nutrition and lifestyle.
                </p>
                <span className="inline-block text-sm font-sans text-primary font-semibold">
                  Coming Soon
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Helpful Links Section */}
      <section className="bg-secondary py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground mb-8 text-center">
              Helpful Links
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal animation="default" delay={0}>
              <div className="bg-white rounded-lg p-6 h-full">
                <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                  Institute for Functional Medicine
                </h3>
                <p className="font-sans text-text-muted text-sm">
                  Leading organization for functional medicine education and
                  research
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="default" delay={100}>
              <div className="bg-white rounded-lg p-6 h-full">
                <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                  Environmental Working Group
                </h3>
                <p className="font-sans text-text-muted text-sm">
                  Resources for clean eating and reducing toxic exposures
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="default" delay={200}>
              <div className="bg-white rounded-lg p-6 h-full">
                <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                  National Association of Nutrition Professionals
                </h3>
                <p className="font-sans text-text-muted text-sm">
                  Professional organization supporting holistic nutrition
                  practitioners
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="default" delay={300}>
              <div className="bg-white rounded-lg p-6 h-full">
                <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                  PubMed Central
                </h3>
                <p className="font-sans text-text-muted text-sm">
                  Free archive of biomedical and life sciences journal literature
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg sm:text-xl font-sans text-white/80 mb-8">
              Put these resources to work in your own personalized functional
              nutrition plan.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-accent text-white hover:bg-[#c99560] transition-colors font-serif font-semibold rounded-lg"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
