import ScrollReveal from "@/components/ScrollReveal";

export default function LifestyleSection() {
  return (
    <section
      className="parallax-bg parallax-overlay relative flex items-center justify-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=80)",
        minHeight: "60vh",
      }}
    >
      <div className="container mx-auto px-4 max-w-3xl text-center text-white py-20">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-8 leading-tight">
            Not a program. A lifestyle.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
            Sustainable wellness is not about quick fixes or restrictive
            protocols — it is about building healthy habits that last a
            lifetime. We provide ongoing support, education, and guidance to
            help you integrate functional nutrition principles into your daily
            life. As your needs evolve, so does your care plan. With OLIV,
            you are embracing a new way of living that supports your long-term
            health and vitality.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
