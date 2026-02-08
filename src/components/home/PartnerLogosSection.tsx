export default function PartnerLogosSection() {
  const partners = [
    "THEIA",
    "Genova Diagnostics",
    "Dutch Testing"
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-foreground mb-12">
          Trusted Testing Partners
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 flex items-center justify-center min-h-[150px] shadow-sm border border-gray-100"
            >
              <p className="text-xl md:text-2xl font-semibold text-primary text-center">
                {partner}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
