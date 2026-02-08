import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-8">
          Schedule a free consultation
        </h2>
        <p className="text-lg text-text-muted mb-10 max-w-2xl mx-auto">
          Ready to take the first step toward optimal health?
          Let's discuss your goals and how we can help you achieve them.
        </p>
        <Link
          href="/start-your-journey"
          className="inline-block bg-primary hover:bg-primary-light text-white px-10 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
        >
          Get Started Today
        </Link>
      </div>
    </section>
  );
}
