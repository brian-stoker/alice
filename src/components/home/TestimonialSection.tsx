import ScrollReveal from "@/components/ScrollReveal";

export default function TestimonialSection() {
  return (
    <section
      className="parallax-bg parallax-overlay relative flex items-center justify-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80)",
        minHeight: "50vh",
      }}
    >
      <div className="container mx-auto px-4 max-w-4xl text-center text-white py-24 md:py-32">
        <ScrollReveal>
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mx-auto mb-8 text-accent/80"
          >
            <path d="M11.3 2.6c-.3-.4-.8-.6-1.3-.6H6C4.9 2 4 2.9 4 4v4c0 1.1.9 2 2 2h2.6L7 14H4v4c0 2.2 1.8 4 4 4h1c1.1 0 2-.9 2-2v-6.7l.3-.4 1.5-4.5c.5-1.5.2-3.1-.8-4.3l-.7-.5zM23.3 2.6c-.3-.4-.8-.6-1.3-.6H18c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h2.6L19 14h-3v4c0 2.2 1.8 4 4 4h1c1.1 0 2-.9 2-2v-6.7l.3-.4 1.5-4.5c.5-1.5.2-3.1-.8-4.3l-.7-.5z" />
          </svg>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light italic leading-relaxed mb-10 text-white">
            Working with OLIV has been transformative. The personalized approach
            and attention to detail exceeded my expectations. I finally
            understand the root causes of my health issues and have a clear path
            forward.
          </blockquote>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-accent"></div>
            <cite className="text-base not-italic text-white/80 tracking-wide uppercase">
              Sarah M.
            </cite>
            <div className="w-12 h-px bg-accent"></div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
