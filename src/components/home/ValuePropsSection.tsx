import ScrollReveal from "@/components/ScrollReveal";

const values = [
  {
    title: "High Standards",
    description:
      "We maintain the highest standards in functional nutrition practice, ensuring every recommendation meets rigorous quality benchmarks.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01z" />
      </svg>
    ),
  },
  {
    title: "Results-Driven",
    description:
      "Our approach focuses on measurable, lasting results. We track progress and adjust protocols to ensure you reach your health goals.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Science-based",
    description:
      "Every recommendation is backed by current research and evidence-based functional medicine principles for optimal outcomes.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" />
        <path d="M8.5 2h7" />
        <path d="M7 16.5h10" />
      </svg>
    ),
  },
  {
    title: "Comprehensive",
    description:
      "We look at the complete picture of your health — from gut function and hormones to nutrition, stress, and lifestyle factors.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
];

export default function ValuePropsSection() {
  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <ScrollReveal key={value.title} delay={index * 150}>
              <div className="relative bg-white rounded-2xl p-8 h-full flex flex-col border-t-4 border-accent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
