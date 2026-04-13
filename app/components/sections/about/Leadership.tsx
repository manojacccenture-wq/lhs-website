export default function Leadership() {
  const imgImage4 = "http://localhost:3845/assets/e2314edb89a406bd922d2996cafcad17574f9742.png";
  const imgReport = "http://localhost:3845/assets/0519e2d803d9d0a91a73729b318f312271690f7a.svg";

  return (
    <section className="py-16 md:py-24 px-6" style={{ backgroundColor: "var(--color-neutral-200)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary uppercase mx-auto">
            Built on Execution, Not Assumptions
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: "var(--color-text-title)" }}>
            Leadership
          </h2>
        </div>

        {/* Leadership Card */}
        <div className="bg-white rounded-xl overflow-hidden shadow-md border" style={{ borderColor: "var(--color-neutral-300)" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
            {/* Image */}
            <div className="relative h-64 md:h-auto md:col-span-1 overflow-hidden rounded-xl md:rounded-none">
              <img alt="Janaki Raman" className="w-full h-full object-cover" src={imgImage4} />
            </div>

            {/* Content */}
            <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-center">
              {/* Name & Title */}
              <div className="mb-6">
              <h3 className="font-bold text-2xl md:text-3xl mb-2" style={{ color: "var(--color-text-title)" }}>
                Janaki Raman
              </h3>
              <p className="text-sm md:text-base" style={{ color: "var(--color-text-body)" }}>
                  Managing Director, Livelihood system.
                </p>
              </div>

              {/* Experience Subtitle */}
              <p className="font-bold text-lg mb-4" style={{ color: "var(--color-text-title)" }}>
                His Experience
              </p>

              {/* Experience List */}
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="shrink-0 mt-1">
                    <img src={imgReport} alt="" className="w-6 h-6" style={{ filter: "brightness(0) saturate(100%) invert(47%) sepia(78%) saturate(597%) hue-rotate(120deg)" }} />
                  </div>
                  <p className="text-sm md:text-base" style={{ color: "var(--color-text-body)" }}>
                    Led long-term engagements within the Tata ecosystem, including JUSCO and Tata Steel
                  </p>
                </div>

                <div className="flex gap-3">
                  <div className="shrink-0 mt-1">
                    <img src={imgReport} alt="" className="w-6 h-6" style={{ filter: "brightness(0) saturate(100%) invert(47%) sepia(78%) saturate(597%) hue-rotate(120deg)" }} />
                  </div>
                  <p className="text-sm md:text-base" style={{ color: "var(--color-text-body)" }}>
                    Delivered and maintained systems across multi-location, high-dependency operations
                  </p>
                </div>

                <div className="flex gap-3">
                  <div className="shrink-0 mt-1">
                    <img src={imgReport} alt="" className="w-6 h-6" style={{ filter: "brightness(0) saturate(100%) invert(47%) sepia(78%) saturate(597%) hue-rotate(120deg)" }} />
                  </div>
                  <p className="text-sm md:text-base" style={{ color: "var(--color-text-body)" }}>
                    Over two decades of leading enterprise system deployments across complex environments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
