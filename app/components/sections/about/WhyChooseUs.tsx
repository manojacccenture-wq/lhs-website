interface TimelineItem {
  year: string;
  period: string;
  title: string;
  description: string;
}

export default function WhyChooseUs() {
  const timelineItems: TimelineItem[] = [
    {
      year: "2006",
      period: "year 1 to 3",
      title: "Where It Started",
      description: "Entered enterprise tech through real-world deployments — not labs, not prototypes.",
    },
    {
      year: "2011",
      period: "year 5 to 7",
      title: "Entering Large Enterprise Systems",
      description: "Began working with large organizations, navigating complex workflows, approvals, and operational dependencies.",
    },
    {
      year: "2016",
      period: "year 10+",
      title: "Mastering Execution at Scale",
      description: "Handled multiple large-scale deployments across locations. Strengthened ability to deliver, maintain, and evolve systems over time.",
    },
    {
      year: "2021",
      period: "Years 15+",
      title: "Earning Enterprise Trust",
      description: "Built long-term working relationships within the Tata ecosystem, including companies like JUSCO and Tata Steel.",
    },
    {
      year: "2026",
      period: "Year 20 +",
      title: "Next Phase: Structured Platforms",
      description: "Moving from custom execution to building scalable, structured systems. Backed by years of real-world validation, not assumptions.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6" style={{ backgroundColor: "var(--color-neutral-200)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary uppercase mx-auto">
            "We don't just meet expectations—we exceed them. Here's what sets us apart:"
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: "var(--color-text-title)" }}>
            Why Choose Us?
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line with gradient */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary via-primary to-transparent" style={{ backgroundColor: "var(--color-primary-1)" }} />

          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-12">
            {timelineItems.map((item, idx) => (
              <div key={idx} className={`relative pl-20 md:pl-0 ${idx % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2"}`}>
                {/* Dot */}
                <div
                  className="absolute left-0 md:left-1/2 -translate-x-1/2 top-2 w-4 h-4 rounded-full border-4"
                  style={{ backgroundColor: "var(--color-neutral-200)", borderColor: "var(--color-primary-1)" }}
                />

                {/* Period Badge */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 transform md:translate-y-12 z-10">
                  <div className="px-3 py-1 rounded-full text-xs font-bold text-white" style={{ background: "linear-gradient(to right, var(--color-primary-1), #005c50)" }}>
                    {item.period}
                  </div>
                </div>

                {/* Card */}
                <div className="pt-8 md:pt-0 md:w-5/12" style={{ marginLeft: idx % 2 === 0 ? "0" : "auto", marginRight: idx % 2 === 0 ? "auto" : "0" }}>
                  <div className="p-4 md:p-6 rounded-xl bg-white border shadow-sm" style={{ borderColor: "var(--color-neutral-300)" }}>
                    <p className="font-bold text-2xl md:text-3xl mb-2" style={{ color: "var(--color-primary-1)" }}>
                      {item.year}
                    </p>
                    <h3 className="font-bold text-lg md:text-xl mb-2" style={{ color: "var(--color-text-title)" }}>
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base" style={{ color: "var(--color-text-body)" }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
