import Link from "next/link";
import MobileNav from "./MobileNav";

export default function Header() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Approach", href: "/our-approach" },
    { label: "Blog", href: "/blog" },
    { label: "Start Your Journey", href: "/start-your-journey" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-3xl font-serif font-semibold text-primary hover:text-primary-light transition-colors"
          >
            OLIV
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-dark hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <MobileNav navLinks={navLinks} />
          </div>
        </div>
      </div>
    </header>
  );
}
