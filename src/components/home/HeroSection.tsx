import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function HeroSection() {
  return (
    <section
      className="parallax-bg parallax-overlay hero-gradient-bottom relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1920&q=80)",
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <ScrollReveal>
          <p className="uppercase tracking-[0.35em] text-sm md:text-base font-medium text-white/80 mb-6">
            Heal your gut and protect your brain
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold tracking-wide mb-4 text-white">
            OLIV
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <p className="text-xl md:text-2xl lg:text-3xl font-light tracking-wide text-white/90 mb-2">
            functional nutrition practice
          </p>
        </ScrollReveal>

        <ScrollReveal delay={600}>
          <p className="text-base md:text-lg text-white/70 mb-12 tracking-wide">
            Courtney Castler, MS-HNFM
          </p>
        </ScrollReveal>

        <ScrollReveal delay={800}>
          <Link
            href="/start-your-journey"
            className="inline-block bg-accent hover:bg-accent/85 text-white px-10 py-4 rounded-full text-lg font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5"
          >
            Book a Free Call
          </Link>
        </ScrollReveal>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-60"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
