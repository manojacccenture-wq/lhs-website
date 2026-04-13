import Button from "@/app/components/ui/Button";

export default function ServicesCTA() {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div 
          className="rounded-3xl overflow-hidden p-12 md:p-20 text-center"
          style={{ background: "linear-gradient(135deg, var(--color-primary-1), #005c50)" }}
        >
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight"
          >
            Have a problem worth solving?
          </h2>
          <Button variant="primary" className="mt-8">
            Let's Explore
          </Button>
        </div>
      </div>
    </section>
  );
}
