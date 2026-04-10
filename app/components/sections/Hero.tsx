// =============================
// Hero.tsx

import HeroWrapper from "./HeroWrapper";

// =============================
export default function Hero() {
  return (
    <HeroWrapper>
      <section className="text-center py-20 px-4">
        <p className="text-green-500 text-sm mb-2">
          TECH-DRIVEN REAL WORLD SOLUTION
        </p>
        <h1 className="text-4xl md:text-5xl font-bold">
          Turning Vision Into <br /> Scalable Reality
        </h1>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          Build scalable systems with real impact.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-green-500 text-white px-6 py-3 rounded-full">
            Get Started
          </button>
          <button className="border px-6 py-3 rounded-full">
            Learn More
          </button>
        </div>
      </section>
    </HeroWrapper>
  );
}
