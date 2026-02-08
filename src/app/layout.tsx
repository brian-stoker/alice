import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import PromoBanner from "@/components/PromoBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://oliv-functional-medicine.com'),
  title: {
    default: "OLIV - Functional Medicine",
    template: "%s | OLIV - Functional Medicine",
  },
  description: "Personalized functional medicine and nutrition services to help you achieve optimal health and wellness.",
  keywords: [
    "functional medicine",
    "nutrition",
    "gut health",
    "brain health",
    "holistic wellness",
    "personalized nutrition",
    "functional testing",
    "chronic fatigue",
    "inflammation",
    "food sensitivities",
  ],
  authors: [{ name: "Courtney Castler, MS-HNFM" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://oliv-functional-medicine.com",
    siteName: "OLIV - Functional Medicine",
    title: "OLIV - Functional Medicine",
    description: "Personalized functional medicine and nutrition services to help you achieve optimal health and wellness.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OLIV - Functional Medicine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OLIV - Functional Medicine",
    description: "Personalized functional medicine and nutrition services to help you achieve optimal health and wellness.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${cormorant.variable} antialiased`}
      >
        <PromoBanner />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
