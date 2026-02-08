import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Courtney Castler, MS-HNFM, founder of OLIV Functional Medicine. Discover our mission to transform healthcare through personalized nutrition and functional medicine.",
  openGraph: {
    title: "About Us | OLIV - Functional Medicine",
    description:
      "Learn about Courtney Castler, MS-HNFM, founder of OLIV Functional Medicine. Discover our mission to transform healthcare through personalized nutrition and functional medicine.",
    url: "https://oliv-functional-medicine.com/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | OLIV - Functional Medicine",
    description:
      "Learn about Courtney Castler, MS-HNFM, founder of OLIV Functional Medicine. Discover our mission to transform healthcare through personalized nutrition and functional medicine.",
  },
  alternates: {
    canonical: "https://oliv-functional-medicine.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* Hero Section - Parallax with botanical garden */}
      <section
        className="parallax-bg parallax-overlay flex items-center justify-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1920&q=80)",
          minHeight: "70vh",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal animation="scale">
            <p className="text-xl md:text-3xl lg:text-4xl font-serif italic text-white max-w-3xl mx-auto leading-relaxed">
              &ldquo;Nutrition is Information. Capable of guiding the body to
              heal and flourish.&rdquo;
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Portrait Image */}
              <ScrollReveal animation="left">
                <div className="flex justify-center">
                  <div className="relative overflow-hidden rounded-2xl shadow-xl border-4 border-accent/30">
                    <Image
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                      alt="Courtney Castler, MS-HNFM - Founder of OLIV Functional Medicine"
                      width={400}
                      height={500}
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </ScrollReveal>

              {/* Biography Text */}
              <ScrollReveal animation="right">
                <div>
                  <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-4">
                    Courtney Castler, MS-HNFM
                  </h2>
                  <p className="text-lg font-sans text-accent font-semibold mb-6">
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
                      Courtney&apos;s mission is to empower individuals to take control
                      of their health through education, personalized nutrition, and
                      a deep understanding of how food and lifestyle choices impact
                      overall wellness.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Divider - Mission Statement */}
      <section
        className="parallax-bg parallax-overlay-light flex items-center justify-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1920&q=80)",
          minHeight: "50vh",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-white mb-6">
              Our Mission
            </h2>
            <p className="text-xl md:text-2xl font-sans text-white/90 max-w-3xl mx-auto leading-relaxed">
              Transform the way people experience healthcare by placing nutrition
              at the center of healing.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground text-center mb-16">
                Our Core Values
              </h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Integrity */}
              <ScrollReveal animation="scale" delay={100}>
                <div className="group bg-gradient-to-br from-secondary to-white rounded-2xl p-8 border border-primary/10 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 cursor-default">
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-white font-serif text-2xl font-semibold mr-4 shadow-md group-hover:shadow-lg transition-shadow">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-serif font-semibold text-foreground">
                      Integrity
                    </h3>
                  </div>
                  <p className="font-sans text-text-muted leading-relaxed">
                    Honest, transparent, and ethical in all we do
                  </p>
                </div>
              </ScrollReveal>

              {/* Innovation */}
              <ScrollReveal animation="scale" delay={200}>
                <div className="group bg-gradient-to-br from-white to-secondary rounded-2xl p-8 border border-accent/20 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 cursor-default">
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center text-white font-serif text-2xl font-semibold mr-4 shadow-md group-hover:shadow-lg transition-shadow">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-serif font-semibold text-foreground">
                      Innovation
                    </h3>
                  </div>
                  <p className="font-sans text-text-muted leading-relaxed">
                    Embracing the latest research and methodologies
                  </p>
                </div>
              </ScrollReveal>

              {/* Authenticity */}
              <ScrollReveal animation="scale" delay={300}>
                <div className="group bg-gradient-to-br from-secondary to-white rounded-2xl p-8 border border-primary/10 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 cursor-default">
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-white font-serif text-2xl font-semibold mr-4 shadow-md group-hover:shadow-lg transition-shadow">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-serif font-semibold text-foreground">
                      Authenticity
                    </h3>
                  </div>
                  <p className="font-sans text-text-muted leading-relaxed">
                    Genuine care for each individual&apos;s unique journey
                  </p>
                </div>
              </ScrollReveal>

              {/* Reliability */}
              <ScrollReveal animation="scale" delay={400}>
                <div className="group bg-gradient-to-br from-white to-secondary rounded-2xl p-8 border border-accent/20 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 cursor-default">
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center text-white font-serif text-2xl font-semibold mr-4 shadow-md group-hover:shadow-lg transition-shadow">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-serif font-semibold text-foreground">
                      Reliability
                    </h3>
                  </div>
                  <p className="font-sans text-text-muted leading-relaxed">
                    Consistent, dependable support throughout your health journey
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Parallax */}
      <section
        className="parallax-bg parallax-overlay flex items-center justify-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1470058869958-2a77bde3e86a?w=1920&q=80)",
          minHeight: "50vh",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-white mb-4">
              Ready to Transform Your Health?
            </h2>
            <p className="text-lg md:text-xl font-sans text-white/90 mb-8 max-w-2xl mx-auto">
              Schedule a consultation with Courtney to begin your personalized
              functional medicine journey.
            </p>
            <Link
              href="/start-your-journey"
              className="inline-block bg-accent text-white font-sans font-semibold py-4 px-10 rounded-lg hover:bg-accent/90 hover:shadow-lg transition-all duration-300 text-lg"
            >
              Get Started Today
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
