import HeroSection from "@/components/home/HeroSection";
import DiscoverSection from "@/components/home/DiscoverSection";
import WellbeingSection from "@/components/home/WellbeingSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import LifestyleSection from "@/components/home/LifestyleSection";
import ValuePropsSection from "@/components/home/ValuePropsSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import PartnerLogosSection from "@/components/home/PartnerLogosSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <DiscoverSection />
      <WellbeingSection />
      <WhyChooseSection />
      <LifestyleSection />
      <ValuePropsSection />
      <TestimonialSection />
      <PartnerLogosSection />
      <CTASection />
    </div>
  );
}
