"use client";

export default function DeliveryHero() {
  return (
    <section className="w-full py-24 px-6 relative bg-gradient-to-b from-primary/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-6 items-start">
          {/* Subtitle */}
          <p className="text-primary text-base font-semibold tracking-widest uppercase">FROM CONCEPT TO EXECUTION</p>

          {/* Main Heading */}
          <h1 className="text-neutral-800 text-5xl font-bold leading-[60px] max-w-2xl">
            From concept to execution.
          </h1>

          {/* Description */}
          <p className="text-neutral-600 text-lg leading-7 max-w-2xl">
            Ensuring the final result meets your goals and exceeds with your audience, ensuring the final result meets your goals and exceeds with your audience.
          </p>

          {/* CTA Button */}
          <a
            href="#timeline"
            className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full transition-colors text-lg"
          >
            Get started
          </a>
        </div>
      </div>
    </section>
  );
}
