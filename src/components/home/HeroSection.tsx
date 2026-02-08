import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-primary-dark to-primary text-white">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative z-10 container mx-auto px-4 py-24 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 text-white">
          Heal your gut and protect your brain
        </h1>
        <p className="text-2xl md:text-3xl mb-4 text-white/90">
          OLIV functional nutrition practice
        </p>
        <p className="text-lg md:text-xl mb-10 text-white/80">
          Courtney Castler, MS-HNFM
        </p>
        <Link
          href="/start-your-journey"
          className="inline-block bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
        >
          Book a Free Call
        </Link>
      </div>
    </section>
  );
}
