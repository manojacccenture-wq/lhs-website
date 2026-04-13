'use client';

export default function ProductsSplitSection() {
  return (
    <section className="py-16 md:py-24 px-6">


      <div className="grid grid-cols-2 grid-rows-1 gap-4">
        <div >
          
        </div>
        <div >2</div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Purple Card */}
          <div className="rounded-3xl overflow-hidden shrink-0" style={{ backgroundColor: "rgba(138, 71, 254, 0.15)" }}>
            <div className="aspect-square flex items-center justify-center p-8">
              <div className="w-full h-full rounded-2xl bg-white shadow-lg flex items-center justify-center">
                <svg viewBox="0 0 200 200" className="w-32 h-32" style={{ color: "var(--color-primary-1)" }}>
                  <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="8" opacity="0.2" />
                  <circle cx="100" cy="100" r="40" fill="currentColor" opacity="0.8" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: "var(--color-text-title)" }}>
              Simplify <span style={{ color: "var(--color-primary-1)" }}>Workflows</span>, Amplify <span style={{ color: "var(--color-primary-1)" }}>Productivity</span>.
            </h2>

            <p className="text-lg leading-relaxed" style={{ color: "var(--color-text-subtitle)" }}>
              We've unified F&B operations into a single platform that eliminates silos, reduces manual work, and lets your team focus on what matters—delighting customers.
            </p>

            <div className="space-y-3 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full shrink-0 mt-1 flex items-center justify-center" style={{ backgroundColor: "var(--color-primary-1)" }}>
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-base" style={{ color: "var(--color-text-subtitle)" }}>
                  Real-time visibility into all operations
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full shrink-0 mt-1 flex items-center justify-center" style={{ backgroundColor: "var(--color-primary-1)" }}>
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-base" style={{ color: "var(--color-text-subtitle)" }}>
                  Streamlined workflows and processes
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full shrink-0 mt-1 flex items-center justify-center" style={{ backgroundColor: "var(--color-primary-1)" }}>
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-base" style={{ color: "var(--color-text-subtitle)" }}>
                  Data-driven decision making
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
