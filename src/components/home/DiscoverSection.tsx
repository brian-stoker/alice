import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function DiscoverSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16 md:mb-24">
          {/* Left column - Headings */}
          <div>
            <ScrollReveal animation="left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-4">
                Discover Precision Health and Wellness
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="left" delay={200}>
              <p className="text-xl md:text-2xl text-primary font-light leading-relaxed">
                Restore your health with our root-cause approach
              </p>
            </ScrollReveal>
          </div>

          {/* Right column - Description */}
          <div>
            <ScrollReveal animation="right" delay={300}>
              <p className="text-lg text-text-muted leading-relaxed">
                At OLIV, we believe in uncovering the underlying factors that
                impact your health. Through comprehensive functional nutrition
                assessments and personalized protocols, we address the root
                causes of your health concerns rather than just treating
                symptoms.
              </p>
            </ScrollReveal>
            <ScrollReveal animation="right" delay={500}>
              <p className="text-lg text-text-muted leading-relaxed mt-6">
                Our evidence-based approach combines cutting-edge testing,
                nutritional science, and lifestyle modifications to help you
                achieve lasting wellness.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Hero-main graphic */}
        <ScrollReveal animation="scale" delay={200}>
          <div className="flex justify-center">
            <Image
              src="/images/hero-main.png"
              alt="OLIV functional medicine approach"
              width={900}
              height={600}
              className="w-full max-w-4xl h-auto rounded-2xl"
              priority={false}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
