interface FeatureCard {
  title: string;
  description: string;
  icon: string;
  highlighted?: boolean;
}

function FeatureCardComponent({ title, description, icon, highlighted = false }: FeatureCard) {
  return (
    <div
      className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition p-6 md:p-8 h-full flex flex-col"
      style={{
        backgroundColor: highlighted ? "transparent" : "var(--color-neutral-100)",
        background: highlighted ? "linear-gradient(135deg, var(--color-primary-1), #005c50)" : undefined,
        borderColor: "var(--color-neutral-300)",
        border: highlighted ? "none" : "1px solid var(--color-neutral-300)",
        color: highlighted ? "white" : undefined,
      }}
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
        style={{
          backgroundColor: highlighted ? "rgba(255, 255, 255, 0.1)" : "var(--color-primary-1)",
          opacity: highlighted ? 1 : 0.1,
        }}
      >
        <img src={icon} alt="" className="w-7 h-7" style={{ filter: highlighted ? "brightness(0) invert(1)" : undefined }} />
      </div>

      {/* Content */}
      <h3 className="font-bold text-lg md:text-xl mb-3" style={{ color: highlighted ? "white" : "var(--color-text-title)" }}>
        {title}
      </h3>
      <p className="text-sm md:text-base leading-relaxed" style={{ color: highlighted ? "rgba(255, 255, 255, 0.9)" : "var(--color-text-body)" }}>
        {description}
      </p>
    </div>
  );
}

export default function WhatSetsUsApart() {
  const imgIcon4 = "http://localhost:3845/assets/1cb32be2b146b37828224f243ffad11c8d3a465c.svg";

  const features: FeatureCard[] = [
    {
      title: "Domain Depth:",
      description: "When your plant needs an MIS that reads SAP data, surfaces production exceptions, and routes approval workflows — you need someone who has built that before. Repeatedly.",
      icon: imgIcon4,
      highlighted: true,
    },
    {
      title: "Operational Continuity",
      description: "We don't handover and disappear. Our manpower model means the same team that built your system can run it with defined SLAs, escalation paths, and executive reporting baked in from day one.",
      icon: imgIcon4,
    },
    {
      title: "Systems Integration Maturity:",
      description: "SAP R3, Oracle, .NET/Java, IoT devices, QR/RFID hardware, cloud and on-prem architectures — we operate across the full stack, not within a single layer of it.",
      icon: imgIcon4,
    },
    {
      title: "Platform Experience:",
      description: "Three enterprise platforms in production. Not in beta. Not in 'pilot.' In live, operational environments serving real clients with real accountability.",
      icon: imgIcon4,
    },
    {
      title: "Client-First Approach",
      description: "When your plant needs an MIS that reads SAP data, surfaces production exceptions, and routes approval workflows — you need someone who has built that before.",
      icon: imgIcon4,
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary uppercase mx-auto">
            "we exceed them. Here's what sets us apart:"
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: "var(--color-text-title)" }}>
            What Sets us apart
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, idx) => (
            <FeatureCardComponent key={idx} {...feature} highlighted={idx === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
