import Link from "next/link";

export default function Footer() {
  const footerLinks = {
    row1: [
      { label: "Resources", href: "/resources" },
      { label: "FAQs", href: "/faqs" },
      { label: "Our Story", href: "/about" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact Us", href: "/start-your-journey" },
      { label: "Blog", href: "/blog" },
    ],
    row2: [
      { label: "Refund Policy", href: "/refund-policy" },
      { label: "Notice of Privacy Practices", href: "/privacy-practices" },
      { label: "Office Policies", href: "/office-policies" },
    ],
    row3: [
      {
        label: "Client Portal",
        href: "#",
        external: true,
      },
      {
        label: "Supplements",
        href: "#",
        external: true,
      },
    ],
  };

  return (
    <footer className="bg-secondary border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Navigation Links */}
        <div className="space-y-6">
          {/* Row 1 */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {footerLinks.row1.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-dark hover:text-primary transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {footerLinks.row2.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-dark hover:text-primary transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Row 3 - External Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {footerLinks.row3.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-dark hover:text-primary transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Medical Disclaimer */}
        <div className="mt-10 pt-8 border-t border-primary/10">
          <p className="text-xs text-text-muted text-center max-w-4xl mx-auto leading-relaxed">
            The services provided at OLIV are not a substitute for medical care,
            medical advice, or a detailed discussion with your primary care
            physician or another licensed healthcare provider.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-6">
          <p className="text-xs text-text-muted text-center">
            &copy; {new Date().getFullYear()} OLIV - Functional Medicine. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
