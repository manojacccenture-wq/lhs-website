import Button from "@/app/components/ui/Button";
import HeroWrapper from "../Home/HeroWrapper";

export default function AboutHero() {
  return (
    <HeroWrapper>
    <section className="relative w-full py-20 px-6 md:py-32 overflow-hidden mx-autoA" >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-50" style={{ backgroundImage: "linear-gradient(rgba(200, 220, 200, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(200, 220, 200, 0.1) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-linear-to-b from-white to-transparent opacity-60" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center ">
        {/* Subtitle */}
        <h3 className="text-primary mx-auto">
          From Concept to Scalable Code
        </h3>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: "var(--color-text-title)" }}>
          Making Complex Operations Work Seamlessly
        </h1>

        {/* Description */}
        <p className="mx-auto">
          From ground-level execution to large-scale systems, built to perform.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="primary">Get started</Button>
          <button className="px-6 py-3 text-base font-medium transition-colors" style={{ color: "var(--color-text-title)" }}>
            Learn more →
          </button>
        </div>
      </div>
    </section>
    </HeroWrapper>
  );
}
