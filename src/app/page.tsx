export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section - Demonstrates Cormorant Garamond for headings */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-serif font-semibold text-foreground mb-4">
            OLIV
          </h1>
          <h2 className="text-3xl font-serif font-medium text-primary mb-6">
            Functional Medicine
          </h2>
          <p className="text-lg font-sans text-text-muted max-w-2xl mx-auto">
            Personalized functional medicine and nutrition services to help you achieve optimal health and wellness.
          </p>
        </div>

        {/* Font Demo Section */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
          <div className="bg-secondary p-8 rounded-lg">
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
              Cormorant Garamond
            </h3>
            <p className="font-sans text-text-muted">
              This elegant serif font (Cormorant Garamond) is used for all headings, providing a sophisticated and professional appearance.
            </p>
          </div>

          <div className="bg-secondary p-8 rounded-lg">
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
              Montserrat
            </h3>
            <p className="font-sans text-text-muted">
              This modern sans-serif font (Montserrat) is used for body text, ensuring excellent readability and a clean aesthetic.
            </p>
          </div>
        </div>

        {/* Brand Colors Demo */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-3xl font-serif font-semibold text-center mb-8">
            Brand Colors
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="h-24 bg-[#2c5f4f] rounded-lg mb-2"></div>
              <p className="font-sans text-sm text-text-muted">Primary</p>
            </div>
            <div className="text-center">
              <div className="h-24 bg-[#3d7a65] rounded-lg mb-2"></div>
              <p className="font-sans text-sm text-text-muted">Primary Light</p>
            </div>
            <div className="text-center">
              <div className="h-24 bg-[#e8f1ed] border border-gray-200 rounded-lg mb-2"></div>
              <p className="font-sans text-sm text-text-muted">Secondary</p>
            </div>
            <div className="text-center">
              <div className="h-24 bg-[#d4a574] rounded-lg mb-2"></div>
              <p className="font-sans text-sm text-text-muted">Accent</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
