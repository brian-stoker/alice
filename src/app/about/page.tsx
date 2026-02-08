import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | OLIV - Functional Medicine",
  description:
    "Learn about Courtney Castler, MS-HNFM, founder of OLIV Functional Medicine. Discover our mission to transform healthcare through personalized nutrition and functional medicine.",
};

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* Hero/Header Section */}
      <section className="bg-primary text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-2xl font-sans italic mb-4">
              "Nutrition is Information. Capable of guiding the body to heal and
              flourish."
            </p>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Placeholder Image */}
              <div className="flex justify-center">
                <div className="w-full aspect-square bg-gray-300 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-gray-600 text-lg font-sans">
                      Courtney Castler
                    </p>
                  </div>
                </div>
              </div>

              {/* Biography Text */}
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
                  Courtney Castler, MS-HNFM
                </h2>
                <p className="text-lg font-sans text-text-muted mb-4">
                  Founder of OLIV Functional Medicine
                </p>
                <div className="space-y-4 text-base font-sans text-text-muted leading-relaxed">
                  <p>
                    Courtney has dedicated her career to understanding the root
                    causes of chronic health issues through functional nutrition.
                    With a Master of Science in Holistic Nutrition and Functional
                    Medicine, she brings a scientific and compassionate approach
                    to every patient interaction.
                  </p>
                  <p>
                    Her approach combines genomics, biometrics, and advanced
                    testing to create personalized nutrition plans that address
                    the underlying causes of disease rather than simply managing
                    symptoms. She believes that when you give the body the right
                    nutritional support and tools, it has an incredible ability
                    to heal.
                  </p>
                  <p>
                    Courtney's mission is to empower individuals to take control
                    of their health through education, personalized nutrition, and
                    a deep understanding of how food and lifestyle choices impact
                    overall wellness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-xl font-sans text-text-muted">
              Transform the way people experience healthcare by placing nutrition
              at the center of healing.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground text-center mb-16">
              Our Core Values
            </h2>

            {/* Values Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Integrity */}
              <div className="bg-secondary rounded-lg p-8 border-t-4 border-primary hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-serif text-xl font-semibold mr-4">
                    ✓
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-foreground">
                    Integrity
                  </h3>
                </div>
                <p className="font-sans text-text-muted">
                  Honest, transparent, and ethical in all we do
                </p>
              </div>

              {/* Innovation */}
              <div className="bg-secondary rounded-lg p-8 border-t-4 border-accent hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-foreground font-serif text-xl font-semibold mr-4">
                    ◆
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-foreground">
                    Innovation
                  </h3>
                </div>
                <p className="font-sans text-text-muted">
                  Embracing the latest research and methodologies
                </p>
              </div>

              {/* Authenticity */}
              <div className="bg-secondary rounded-lg p-8 border-t-4 border-primary hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-serif text-xl font-semibold mr-4">
                    ♡
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-foreground">
                    Authenticity
                  </h3>
                </div>
                <p className="font-sans text-text-muted">
                  Genuine care for each individual's unique journey
                </p>
              </div>

              {/* Reliability */}
              <div className="bg-secondary rounded-lg p-8 border-t-4 border-accent hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-foreground font-serif text-xl font-semibold mr-4">
                    ◉
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-foreground">
                    Reliability
                  </h3>
                </div>
                <p className="font-sans text-text-muted">
                  Consistent, dependable support throughout your health journey
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
              Ready to Transform Your Health?
            </h2>
            <p className="text-lg font-sans mb-8">
              Schedule a consultation with Courtney to begin your personalized
              functional medicine journey.
            </p>
            <a
              href="/contact"
              className="inline-block bg-accent text-foreground font-sans font-semibold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
