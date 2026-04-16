'use client';

import Button from "@/app/components/ui/Button";
import HeroWrapper from "../Home/HeroWrapper";

export default function IndustriesHero() {
  return (
    <HeroWrapper>
      <section className="relative w-full py-16 md:py-32 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-7">
            <h2 
              className="text-primary"
              
            >
              “Our Advantage: Multi-Domain Knowledge”
            </h2>
          </div>

          {/* Main Title */}
          <h1 
            className="mx-auto"
            
          >
            Industries We Serve
          </h1>

          {/* Subtitle */}
          <p 
            className="mx-auto"
            
          >
            Domain depth, not breadth. We deliver in environments where operational failure is not an option.
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-6 flex-wrap mt-[5%]">
            <Button variant="primary">
              Get started
            </Button>
          </div>
        </div>
      </section>
    </HeroWrapper>
  );
}
