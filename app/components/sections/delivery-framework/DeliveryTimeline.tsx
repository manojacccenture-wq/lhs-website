"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

interface Step {
  phase: number;
  title: string;
  duration: string;
  whatHappens: string;
  output: string;
  side: "left" | "right";
}

const steps: Step[] = [
  {
    phase: 1,
    title: "Discovery & Scoping",
    duration: "Day 1 to 5",
    whatHappens: "Operational environment assessment. Stakeholder interviews. Technical audit of existing systems.",
    output: "Scoping document, integration map, risk register",
    side: "right",
  },
  {
    phase: 2,
    title: "Architecture & Design",
    duration: "Day 6 to 15",
    whatHappens: "Solution architecture. Integration design. Data model. UI wireframes for custom applications.",
    output: "Technical specification, signed-off architecture",
    side: "left",
  },
  {
    phase: 3,
    title: "Development & Configuration",
    duration: "Day 16 to 40",
    whatHappens: "Custom development. System configuration. Data migration setup. API integrations.",
    output: "Configured system, custom modules, test data",
    side: "right",
  },
  {
    phase: 4,
    title: "Integration & Testing",
    duration: "Day 41 to 50",
    whatHappens: "System integration testing. UAT preparation. Performance optimization. Security audit.",
    output: "Test reports, UAT cases, optimization plan",
    side: "left",
  },
  {
    phase: 5,
    title: "Deployment & Training",
    duration: "Day 51 to 60",
    whatHappens: "User acceptance testing. Staff training. Go-live preparation. Hot-fix procedures.",
    output: "Trained teams, deployment checklist, runbooks",
    side: "right",
  },
  {
    phase: 6,
    title: "Support & Optimization",
    duration: "Ongoing",
    whatHappens: "Post-go-live support. Performance monitoring. Process optimization. Continuous improvement.",
    output: "Support plan, optimization roadmap",
    side: "left",
  },
];

interface StepCardProps {
  step: Step;
  isActive: boolean;
}

function StepCard({ step, isActive }: StepCardProps) {
  return (
    <div className={`bg-white border rounded-3xl p-8 shadow-sm transition-all duration-300 ${
      isActive
        ? "border-primary/30 shadow-lg shadow-primary/10"
        : "border-neutral-300"
    }`}>
      {/* Title */}
      <h3 className={`text-2xl font-bold leading-[28px] mb-2 transition-colors duration-300 ${
        isActive ? "text-neutral-800" : "text-neutral-600"
      }`}>
        {step.title}
      </h3>

      {/* Duration Badge */}
      <div className="inline-block bg-primary/10 rounded-full px-4 py-1 mb-6">
        <p className="text-primary text-sm font-medium">{step.duration}</p>
      </div>

      {/* What Happens */}
      <div className="mb-6">
        <p className="text-neutral-800 text-sm font-bold mb-2">What Happens</p>
        <p className="text-neutral-600 text-sm leading-6">{step.whatHappens}</p>
      </div>

      {/* Output */}
      <div>
        <p className="text-neutral-800 text-sm font-bold mb-2">Output</p>
        <p className="text-neutral-600 text-sm leading-6">{step.output}</p>
      </div>
    </div>
  );
}

interface StepRowProps {
  step: Step;
  index: number;
  isActive: boolean;
}

const StepRow = React.forwardRef<HTMLDivElement, StepRowProps>(
  ({ step, index, isActive }, ref) => {
    if (step.side === "right") {
      return (
        <div ref={ref} className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 items-start">
          {/* Left spacer */}
          <div className="hidden lg:block" />

          {/* Center - Timeline Marker */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 hidden lg:flex justify-center -mt-6">
            <div className={`w-12 h-12 rounded-full border-4 transition-all duration-300 ${
              isActive
                ? "bg-primary border-primary shadow-lg shadow-primary/40"
                : "bg-white border-neutral-300"
            }`} />
          </div>

          {/* Right card */}
          <div className="flex justify-start lg:pl-8">
            <div className={`max-w-sm w-full transform transition-all duration-500 ${
              isActive 
                ? "opacity-100 translate-y-0" 
                : "opacity-60 translate-y-5"
            }`}>
              {/* Phase number */}
              <p className={`text-5xl font-bold leading-none mb-4 transition-colors duration-300 ${
                isActive ? "text-neutral-200" : "text-neutral-300"
              }`}>
                Phase {String(step.phase).padStart(2, "0")}
              </p>

              {/* Card */}
              <StepCard step={step} isActive={isActive} />
            </div>
          </div>
        </div>
      );
    }

    // Left side
    return (
      <div ref={ref} className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 items-start">
        {/* Left card */}
        <div className="flex justify-end lg:pr-8">
          <div className={`max-w-sm w-full transform transition-all duration-500 ${
            isActive 
              ? "opacity-100 translate-y-0" 
              : "opacity-60 translate-y-5"
          }`}>
            {/* Phase number */}
            <p className={`text-5xl font-bold leading-none mb-4 transition-colors duration-300 ${
              isActive ? "text-neutral-200" : "text-neutral-300"
            }`}>
              Phase {String(step.phase).padStart(2, "0")}
            </p>

            {/* Card */}
            <StepCard step={step} isActive={isActive} />
          </div>
        </div>

        {/* Center - Timeline Marker */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 hidden lg:flex justify-center -mt-6">
          <div className={`w-12 h-12 rounded-full border-4 transition-all duration-300 ${
            isActive
              ? "bg-primary border-primary shadow-lg shadow-primary/40"
              : "bg-white border-neutral-300"
          }`} />
        </div>

        {/* Right spacer */}
        <div className="hidden lg:block" />
      </div>
    );
  }
);
StepRow.displayName = "StepRow";

export default function DeliveryTimeline() {
  const [activeSteps, setActiveSteps] = useState<boolean[]>(steps.map(() => false));
  const [fillPercentage, setFillPercentage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const stepsRefs = useRef<(HTMLDivElement | null)[]>([]);

  const updateProgress = useCallback(() => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Calculate progress from top of timeline to bottom of viewport
    const distanceFromTop = -rect.top;
    const containerHeight = containerRef.current.offsetHeight;
    
    const progress = Math.max(0, Math.min(1, distanceFromTop / containerHeight));
    
    setFillPercentage(progress * 100);

    // Update active steps
    const newActiveSteps = stepsRefs.current.map((ref) => {
      if (!ref) return false;
      const stepRect = ref.getBoundingClientRect();
      return stepRect.top < windowHeight * 0.6; // 60% of viewport height
    });
    setActiveSteps(newActiveSteps);
  }, []);

  useEffect(() => {
    // Initial update
    updateProgress();

    // Use throttled scroll listener
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateProgress);
    };
  }, [updateProgress]);

  return (
    <section id="timeline" className="w-full py-24 px-6 relative bg-white">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        {/* Timeline Container */}
        <div className="relative">
          {/* Center Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 pointer-events-none">
            {/* Background Line (Inactive) */}
            <div className="absolute inset-0 bg-neutral-300" />

            {/* Fill Line (Active Progress) */}
            <div
              className="absolute top-0 left-0 right-0 bg-primary will-change-[height]"
              style={{ 
                height: `${fillPercentage}%`,
                transition: "height 0.1s linear"
              }}
            />
          </div>

          {/* Steps Container */}
          <div className="space-y-24 lg:space-y-32">
            {steps.map((step, index) => (
              <StepRow
                key={step.phase}
                step={step}
                index={index}
                isActive={activeSteps[index]}
                ref={(el) => { stepsRefs.current[index] = el; }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


interface StepCardProps {
  step: Step;
  isActive: boolean;
}

// function StepCard({ step, isActive }: StepCardProps) {
//   return (
//     <div className="w-full max-w-sm">
//       {/* Phase Number */}
//       <div className="mb-4">
//         <p className={`text-5xl font-bold leading-none transition-colors duration-300 ${
//           isActive ? "text-neutral-200" : "text-neutral-300"
//         }`}>
//           Phase {String(step.phase).padStart(2, "0")}
//         </p>
//       </div>

//       {/* Card */}
//       <div className={`bg-white border rounded-3xl p-8 shadow-sm transition-all duration-300 ${
//         isActive
//           ? "border-primary/30 shadow-lg shadow-primary/10"
//           : "border-neutral-300"
//       }`}>
//         {/* Title */}
//         <h3 className={`text-2xl font-bold leading-[28px] mb-2 transition-colors duration-300 ${
//           isActive ? "text-neutral-800" : "text-neutral-600"
//         }`}>
//           {step.title}
//         </h3>

//         {/* Duration Badge */}
//         <div className="inline-block bg-primary/10 rounded-full px-4 py-1 mb-6">
//           <p className="text-primary text-sm font-medium">{step.duration}</p>
//         </div>

//         {/* What Happens */}
//         <div className="mb-6">
//           <p className="text-neutral-800 text-sm font-bold mb-2">What Happens</p>
//           <p className="text-neutral-600 text-sm leading-6">{step.whatHappens}</p>
//         </div>

//         {/* Output */}
//         <div>
//           <p className="text-neutral-800 text-sm font-bold mb-2">Output</p>
//           <p className="text-neutral-600 text-sm leading-6">{step.output}</p>
//         </div>
//       </div>
//     </div>
//   );
// }
