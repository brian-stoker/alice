import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start Your Journey",
  description:
    "Begin your personalized functional medicine journey with OLIV. Schedule a free consultation to discuss your health goals and create a customized wellness plan.",
  openGraph: {
    title: "Start Your Journey | OLIV - Functional Medicine",
    description:
      "Begin your personalized functional medicine journey with OLIV. Schedule a free consultation to discuss your health goals and create a customized wellness plan.",
    url: "https://oliv-functional-medicine.com/start-your-journey",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Start Your Journey | OLIV - Functional Medicine",
    description:
      "Begin your personalized functional medicine journey with OLIV. Schedule a free consultation to discuss your health goals and create a customized wellness plan.",
  },
  alternates: {
    canonical: "https://oliv-functional-medicine.com/start-your-journey",
  },
};

export default function StartYourJourneyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // JSON-LD Structured Data for LocalBusiness
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "OLIV - Functional Medicine",
    url: "https://oliv-functional-medicine.com",
    description: "Personalized functional medicine and nutrition services",
    founder: {
      "@type": "Person",
      name: "Courtney Castler",
      jobTitle: "Functional Medicine Practitioner",
      honorificSuffix: "MS-HNFM",
    },
    areaServed: "Worldwide",
    priceRange: "$$",
    serviceType: [
      "Functional Medicine Consultation",
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
      {children}
    </>
  );
}
