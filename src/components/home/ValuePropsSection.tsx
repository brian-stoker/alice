export default function ValuePropsSection() {
  const values = [
    {
      title: "High Standards",
      description: "We maintain the highest standards in functional nutrition practice"
    },
    {
      title: "Results-Driven",
      description: "Our approach focuses on measurable, lasting results"
    },
    {
      title: "Science-based",
      description: "Every recommendation is backed by current research"
    },
    {
      title: "Comprehensive",
      description: "We look at the complete picture of your health"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="bg-secondary rounded-lg p-8 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-text-muted">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
