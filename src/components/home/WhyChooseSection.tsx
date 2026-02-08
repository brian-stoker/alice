import ScrollReveal from "@/components/ScrollReveal";

const features = [
  {
    title: "Root-Cause Approach",
    description:
      "We go beyond symptom management to uncover and address the underlying factors affecting your health, creating lasting change from within.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
        <path d="M11 8v6M8 11h6" />
      </svg>
    ),
  },
  {
    title: "Advanced Testing",
    description:
      "Access cutting-edge functional lab testing to gain deep insights into your gut health, hormones, nutrient levels, and metabolic function.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.5 2v6.5a2 2 0 0 0 2 2H22" />
        <path d="M4 7V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1" />
        <path d="M2 13h10" />
        <path d="m5 10-3 3 3 3" />
      </svg>
    ),
  },
  {
    title: "Personalized Plans",
    description:
      "Receive a tailored nutrition and lifestyle protocol designed specifically for your unique biochemistry, goals, and daily routine.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 20h9" />
        <path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838.838-2.872a2 2 0 0 1 .506-.855z" />
      </svg>
    ),
  },
  {
    title: "Ongoing Support",
    description:
      "Benefit from continuous guidance, check-ins, and plan adjustments so you never feel alone on your journey to optimal health.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Why Choose OLIV?
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              A dedicated partner in your journey to lasting health and vitality
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal
              key={feature.title}
              delay={index * 150}
              animation="scale"
            >
              <div className="group bg-white border border-gray-100 rounded-2xl p-8 h-full flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-primary mb-6 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
