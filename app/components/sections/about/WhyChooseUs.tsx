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
    <section className="py-16 md:py-24 px-6" >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-bold uppercase mx-auto">
            {"We don't just meet expectations—we exceed them. Here's what sets us apart:"}
          </p>
          <h2 className="mt-[1%] font-bold" >
            Why Choose Us?
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line with gradient */}
          <div className="absolute left-1/2 -translate-x-1/2 md:left-1/2 md:translate-x-0 top-0 bottom-0 w-0.5 bg-primary-vertical-gradient" />

          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-12">
            {timelineItems.map((item, idx) => {

              const isLeft = idx % 2 == 0;
              const cardLeft = idx % 2 !== 0;


              return (
                <div
                  key={idx}
                  className={`relative pl-20 md:pl-0 ${isLeft ? "md:pr-1/2" : "md:pl-1/2"
                    }`}
                >

                  {/* DOT */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-4 flex items-center justify-center">

                    <div className="absolute w-10 h-10 rounded-full bg-primary-soft" />

                    <div className="relative w-4 h-4 rounded-full border-4 border-primary bg-white" />

                  </div>
                  {/* MOBILE VIEW */}
                  <div className="flex flex-col items-center md:hidden mt-6">

                    {/* PERIOD */}
                    <span className="px-6 py-2 rounded-md text-xs font-bold text-white bg-primary-gradient mt-[5%]">
                      {item.period}
                    </span>

                    {/* YEAR */}
                    <p className="text-primary font-bold text-lg mt-2">
                      {item.year}
                    </p>

                  </div>

                  {/* LEFT SIDE (Period OR Year) */}
                  <div
                    className={`
          hidden md:block absolute top-2 text-primary font-bold text-sm md:text-base
${isLeft
                        ? "left-0 md:left-[calc(50%-24px)] md:-translate-x-full text-right pr-4"
                        : "left-0 md:left-[calc(50%-24px)] md:-translate-x-full text-right pr-4"}
        `}
                  >
                    {isLeft ? (
                      <span className="px-6 py-2 rounded-md text-xs font-bold text-white bg-primary-gradient">
                        {item.period}
                      </span>
                    ) : (
                      item.year
                    )}
                  </div>

                  {/* RIGHT SIDE (Year OR Period) */}

                  <div
                    className={`
hidden md:block absolute top-2 text-primary font-bold text-sm md:text-base
          ${isLeft
                        ? "left-0 md:left-[calc(50%+24px)] pl-4"
                        : "left-0 md:left-[calc(50%+24px)] pl-4"}
        `}
                  >
                    {isLeft ? (
                      item.year
                    ) : (
                      <span className="px-6 py-2 rounded-md text-xs font-bold  text-white bg-primary-gradient">
                        {item.period}
                      </span>
                    )}
                  </div>

                  {/* CARD */}
                  <div
                    className={`pt-10  md:pt-12 w-full md:w-5/12 ${cardLeft ? "md:mr-auto" : "md:ml-auto"}`}
                  >
                    <div className="p-4 md:p-6 rounded-xl bg-white border border-neutral-300 shadow-sm ">
                      <h3 className="font-bold text-lg md:text-xl mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
