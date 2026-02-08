import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import DiscoverSection from "@/components/home/DiscoverSection";
import WellbeingSection from "@/components/home/WellbeingSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import LifestyleSection from "@/components/home/LifestyleSection";
import ValuePropsSection from "@/components/home/ValuePropsSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import PartnerLogosSection from "@/components/home/PartnerLogosSection";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Personalized Functional Medicine & Nutrition",
  description: "Transform your health with OLIV Functional Medicine. Expert functional nutrition, comprehensive testing, and personalized wellness plans to address root causes of chronic health issues.",
  openGraph: {
    title: "OLIV - Personalized Functional Medicine & Nutrition",
    description: "Transform your health with OLIV Functional Medicine. Expert functional nutrition, comprehensive testing, and personalized wellness plans to address root causes of chronic health issues.",
    url: "https://oliv-functional-medicine.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OLIV - Personalized Functional Medicine & Nutrition",
    description: "Transform your health with OLIV Functional Medicine. Expert functional nutrition, comprehensive testing, and personalized wellness plans to address root causes of chronic health issues.",
  },
};

export default function Home() {
  // JSON-LD Structured Data for Organization
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OLIV - Functional Medicine",
    url: "https://oliv-functional-medicine.com",
    logo: "https://oliv-functional-medicine.com/logo.png",
    description: "Personalized functional medicine and nutrition services to help you achieve optimal health and wellness.",
    founder: {
      "@type": "Person",
      name: "Courtney Castler",
      jobTitle: "Functional Medicine Practitioner",
      honorificSuffix: "MS-HNFM",
    },
    areaServed: "Worldwide",
    serviceType: [
      "Functional Medicine",
      "Nutrition Counseling",
      "Functional Testing",
      "Personalized Wellness Plans",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
    </>
  );
}
