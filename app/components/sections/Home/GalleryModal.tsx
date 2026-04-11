"use client";

import { useState } from "react";
import Button from "../../ui/Button";
import FeatureCard from "../../ui/FeatureCard";
import Image from "next/image";

const slides = [
  {
    variant: "green",
    title: "Run Smarter Food Operations Across Every Outlet.",
    description:
      "Streamline kitchen, inventory, and sales with a single ERP solution that scales with your franchise.",
  },
  {
    variant: "blue",
    title: "Year founded",
    description:
      "First enterprise deployment in industry. SAP integration capability established.",
  },
  {
    variant: "yellow",
    title: "Card 3",
    description:
      "First enterprise deployment in industry. SAP integration capability established.",
  },
] as const;

// ✅ reusable icon
const Icon = () => (
  <span className="relative block w-10 h-10">
    <Image src="/Circle.png" alt="icon" fill className="object-contain" />
  </span>
);

// ✅ reusable phone group
const Phones = () => (
  <div className="absolute -top-16 flex items-center gap-0 z-10">
    {["/phone_1.svg", "/phone_2.svg", "/phone_3.svg"].map((src) => (
      <div key={src} className="relative">
        <Image
          src={src}
          alt="phone"
          width={180}
          height={360}
          className="h-[260px] w-auto object-contain"
        />
      </div>
    ))}
  </div>
);

// ✅ reusable card renderer
const Card = ({
  slide,
  children,
}: {
  slide: (typeof slides)[number];
  children?: React.ReactNode;
}) => (
  <FeatureCard
    variant={slide.variant}
    title={slide.title}
    description={slide.description}
    icon={<Icon />}
  >
    {children}
  </FeatureCard>
);

export default function GalleryModal() {
  const [index, setIndex] = useState(0);

  const prevIndex = (index - 1 + slides.length) % slides.length;
  const nextIndex = (index + 1) % slides.length;

  return (
    <>
      {/* CAROUSEL */}
      <div className="relative flex justify-center items-center mt-10">

        {/* LEFT */}
        <div className="hidden md:block absolute left-[10%] lg:left-[15%] scale-90 opacity-50 blur-[1px]">
          <Card slide={slides[prevIndex]} />
        </div>

        {/* CENTER */}
        <div key={index} className="z-10 animate-[fade_0.6s_ease]">
          <Card slide={slides[index]}>
            <Phones />
          </Card>
        </div>

        {/* RIGHT */}
        <div className="hidden md:block absolute right-[10%] lg:right-[15%] scale-90 opacity-50 blur-[1px]">
          <Card slide={slides[nextIndex]} />
        </div>
      </div>

      {/* NAVIGATION */}
      <div className="mt-10 flex justify-center gap-4">
        {[
          { dir: -1, path: "M15 19l-7-7 7-7" },
          { dir: 1, path: "M9 5l7 7-7 7" },
        ].map(({ dir, path }) => (
          <Button
            key={dir}
            onClick={() =>
              setIndex((i) => (i + dir + slides.length) % slides.length)
            }
            className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-105 transition active:scale-95"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d={path} />
            </svg>
          </Button>
        ))}
      </div>
    </>
  );
}