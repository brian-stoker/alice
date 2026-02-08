import ScrollReveal from "@/components/ScrollReveal";

export default function WellbeingSection() {
  return (
    <section
      className="parallax-bg parallax-overlay relative flex items-center justify-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80)",
        minHeight: "60vh",
      }}
    >
      <div className="container mx-auto px-4 max-w-3xl text-center text-white py-20">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-8 leading-tight">
            Wellbeing — designed around you
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
            Every individual is unique, and so is their path to optimal health.
            We take the time to understand your health history, lifestyle, goals,
            and challenges to create a personalized nutrition and wellness plan
            that fits seamlessly into your life. Your journey to better health
            should feel empowering, not overwhelming — and we are here to guide
            you every step of the way.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
