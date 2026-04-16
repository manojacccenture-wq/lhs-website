"use client";

import { useState } from "react";
import AccordionItem from "../../ui/AccordionItem";

const items = [
  {
    title: "Client-First Approach",
    icon: "/WhyChooseUs_1.svg",
    content: (
      <>
        <p className="text-primary font-medium">
          Built Around Your Operations, Not Just Requirements
        </p>
        <p className="text-sm text-neutral-600 mt-2">
          We study how your business actually runs before writing code.
        </p>

        <p className="text-primary font-medium mt-4">
          Single Ownership, Zero Confusion
        </p>
        <p className="text-sm text-neutral-600 mt-2">
          A dedicated point ensures faster decisions.
        </p>
      </>
    ),
  },
  {
    title: "Skilled & Passionate Team",
    icon: "/WhyChooseUs_2.svg",
    content: <p className="text-sm text-neutral-600">Our team delivers excellence.</p>,
  },
  {
    title: "Transparent Communication",
    icon: "/WhyChooseUs_3.svg",
    content: <p className="text-sm text-neutral-600">Clear updates always.</p>,
  },
  {
    title: "Cost-Effective Solutions",
    icon: "/WhyChooseUs_4.svg",
    content: <p className="text-sm text-neutral-600">Smart pricing strategy.</p>,
  },
  {
    title: "Timely Delivery, Every Time",
    icon: "/WhyChooseUs_5.svg",
    content: <p className="text-sm text-neutral-600">We respect deadlines.</p>,
  },
  {
    title: "End-to-End IT Solutions",
    icon: "/WhyChooseUs_6.svg",
    content: <p className="text-sm text-neutral-600">Complete lifecycle support.</p>,
  },
];

export default function WhyChoose() {
  const [activeIndex, setActiveIndex] = useState(0); // ✅ first open

  return (
    <section className="mx-auto max-w-6xl py-16 md:py-20 px-4 md:px-6">

      {/* HEADER */}
<h2 className="text-center max-w-4xl text-sm md:text-base mx-auto mb-4 md:mb-8" style={{ color: "var(--color-primary-1)" }}>
  &ldquo;WE DON&rsquo;T JUST MEET EXPECTATIONS—WE EXCEED THEM. HERE&rsquo;S WHAT SETS US APART:&rdquo;
</h2>
      <h2 className="text-center text-xl md:text-2xl mb-8 md:mb-12 font-bold" style={{ color: "var(--color-neutral-800)" }}>
        Why Choose Us?
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

        {items.map((item, i) => (
          <AccordionItem
            key={i}
            title={item.title}
            icon={item.icon}
            isOpen={activeIndex === i}
            onClick={() => setActiveIndex(i)}
          >
            {item.content}
          </AccordionItem>
        ))}

      </div>
    </section>
  );
}