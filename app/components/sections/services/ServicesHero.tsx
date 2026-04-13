'use client';

import Button from "@/app/components/ui/Button";
import HeroWrapper from "../Home/HeroWrapper";

export default function ServicesHero() {
  return (
    <HeroWrapper>
      <section className="relative w-full py-16 md:py-32 px-6 md:px-12 overflow-hidden">
        <div className="max-w-3xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-7">
            <span 
              className="text-sm font-bold tracking-[2.24px] uppercase"
              style={{ color: "var(--color-primary-1)" }}
            >
              From Concept to Scalable Code
            </span>
          </div>

          {/* Main Title */}
          <h1 
            className="text-5xl md:text-6xl font-bold text-center mb-7 leading-tight"
            style={{ color: "var(--color-text-title)" }}
          >
            Enterprise Technology Services Built for Operational Reality
          </h1>

          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl text-center mb-12 leading-relaxed"
            style={{ color: "var(--color-text-subtitle)" }}
          >
            We don't deliver theoretical frameworks. We deliver running systems — staffed, maintained, and accountable to defined outcomes
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <Button variant="primary">
              Get started
            </Button>
            <button 
              className="font-semibold text-base transition-opacity hover:opacity-70 flex items-center gap-1"
              style={{ color: "var(--color-text-title)" }}
            >
              Learn more →
            </button>
          </div>
        </div>
      </section>
    </HeroWrapper>
  );
}
