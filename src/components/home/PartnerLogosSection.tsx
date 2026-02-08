import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const partners = [
  {
    name: "THEIA",
    src: "/images/partners/theia.png",
    width: 200,
    height: 80,
  },
  {
    name: "Genova Diagnostics",
    src: "/images/partners/genova.jpg",
    width: 200,
    height: 80,
  },
  {
    name: "Dutch Testing",
    src: "/images/partners/dutch.png",
    width: 200,
    height: 80,
  },
  {
    name: "Fullscript",
    src: "/images/partners/fullscript.webp",
    width: 200,
    height: 80,
  },
];

export default function PartnerLogosSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Trusted Testing Partners
            </h2>
            <p className="text-text-muted max-w-xl mx-auto">
              We work with industry-leading laboratories to deliver accurate,
              comprehensive testing
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center">
          {partners.map((partner, index) => (
            <ScrollReveal key={partner.name} delay={index * 100}>
              <div className="flex items-center justify-center p-6 md:p-8 rounded-xl bg-gray-50 border border-gray-100 transition-all duration-500 hover:border-primary/20 hover:shadow-md group">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={partner.width}
                  height={partner.height}
                  className="max-h-16 w-auto object-contain grayscale opacity-60 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
