import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function CTASection() {
  return (
    <section
      className="parallax-bg parallax-overlay relative flex items-center justify-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920&q=80)",
        minHeight: "50vh",
      }}
    >
      <div className="container mx-auto px-4 max-w-3xl text-center text-white py-24 md:py-32">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
            Schedule a free consultation
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light mb-12 max-w-2xl mx-auto">
            Ready to take the first step toward optimal health? Let us discuss
            your goals and how we can help you achieve them. Your journey to
            lasting wellness starts with a single conversation.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <Link
            href="/start-your-journey"
            className="inline-block bg-accent hover:bg-accent/85 text-white px-12 py-4 rounded-full text-lg font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5"
          >
            Get Started Today
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
