import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Appointment",
  description:
    "Schedule your functional medicine consultation with OLIV. Choose a convenient time for your appointment and take the first step toward optimal health.",
  openGraph: {
    title: "Book Appointment | OLIV - Functional Medicine",
    description:
      "Schedule your functional medicine consultation with OLIV. Choose a convenient time for your appointment and take the first step toward optimal health.",
    url: "https://oliv-functional-medicine.com/book",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Appointment | OLIV - Functional Medicine",
    description:
      "Schedule your functional medicine consultation with OLIV. Choose a convenient time for your appointment and take the first step toward optimal health.",
  },
  alternates: {
    canonical: "https://oliv-functional-medicine.com/book",
  },
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
