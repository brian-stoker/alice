import type { Metadata } from "next";
import { FAQAccordion } from "./FAQAccordion";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions about OLIV's functional nutrition approach, testing, pricing, appointments, and how to get started on your health journey.",
  openGraph: {
    title: "FAQs | OLIV - Functional Medicine",
    description:
      "Frequently asked questions about OLIV's functional nutrition approach, testing, pricing, appointments, and how to get started on your health journey.",
    url: "https://oliv-functional-medicine.com/faqs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQs | OLIV - Functional Medicine",
    description:
      "Frequently asked questions about OLIV's functional nutrition approach, testing, pricing, appointments, and how to get started on your health journey.",
  },
  alternates: {
    canonical: "https://oliv-functional-medicine.com/faqs",
  },
};

const faqs = [
  {
    question: "What is functional nutrition?",
    answer:
      "Functional nutrition is a personalized, science-based approach to nutrition that addresses the root causes of health issues rather than just treating symptoms. It considers your unique biochemistry, genetics, lifestyle, and environment to create a customized nutrition plan that supports your body's natural ability to heal and thrive.",
  },
  {
    question: "How is OLIV different from a regular nutritionist?",
    answer:
      "At OLIV, we go beyond basic nutrition counseling. We use advanced testing including genomics, comprehensive metabolic panels, and specialized diagnostics to understand what's happening in your body at a cellular level. This data-driven approach allows us to identify root causes and create truly personalized nutrition strategies. We also provide ongoing support and adjust your plan as your body responds and your needs evolve.",
  },
  {
    question: "What does the first consultation include?",
    answer:
      "Your initial consultation includes a comprehensive health history review, discussion of your current symptoms and health goals, review of any existing lab work, and development of a testing strategy. We'll take time to understand your unique situation and create a roadmap for your functional nutrition journey. This consultation typically lasts 60-90 minutes.",
  },
  {
    question: "How long does a typical program last?",
    answer:
      "Program length varies based on individual needs and health goals. Most clients work with us for a minimum of 3-6 months to see significant, lasting results. Functional nutrition is about sustainable change, not quick fixes. Many clients choose to continue with ongoing support to maintain their progress and optimize their health over the long term.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "At this time, OLIV does not directly bill insurance. However, we can provide you with a superbill (detailed receipt) that you may submit to your insurance company for potential reimbursement, depending on your plan's coverage for nutrition services. Some HSA and FSA accounts may also cover functional nutrition consultations and testing. We recommend checking with your insurance provider about out-of-network benefits.",
  },
  {
    question: "What testing do you use?",
    answer:
      "We partner with leading diagnostic laboratories including THEIA, Genova Diagnostics, and Dutch Testing. Depending on your needs, testing may include genomic analysis, comprehensive metabolic panels, micronutrient testing, hormone analysis, gut health assessment, and other specialized tests. All testing recommendations are personalized based on your symptoms, health history, and goals.",
  },
  {
    question: "Is this a substitute for medical care?",
    answer:
      "No, functional nutrition is complementary to, not a replacement for, medical care. We work alongside your healthcare team to support your overall wellness. Functional nutrition addresses nutritional factors that influence health, but we do not diagnose, treat, or cure diseases. We recommend maintaining a relationship with your primary care physician and specialists as needed.",
  },
  {
    question: "How do I get started?",
    answer:
      "Getting started is simple. Schedule a free discovery call or initial consultation through our booking system. During this call, we'll discuss your health concerns, answer any questions you have about our approach, and determine if functional nutrition is right for you. If we're a good fit, we'll schedule your comprehensive initial assessment and begin your personalized health journey.",
  },
];

export default function FAQsPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section
        className="parallax-bg parallax-overlay relative"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80)",
        }}
      >
        <div className="min-h-[50vh] flex items-center justify-center">
          <div className="text-center max-w-3xl mx-auto px-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold mb-4 text-white">
              Frequently Asked Questions
            </h1>
            <p className="text-lg sm:text-xl font-sans text-white/80">
              Everything you need to know about functional nutrition and working
              with OLIV
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <FAQAccordion faqs={faqs} />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="parallax-bg parallax-overlay-light relative"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920&q=80)",
        }}
      >
        <div className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg font-sans text-white/80 mb-8">
              We're here to help. Schedule a free discovery call to discuss your
              specific situation and learn how functional nutrition can support
              your health goals.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-accent text-white hover:bg-[#c99560] transition-colors font-serif font-semibold rounded-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
