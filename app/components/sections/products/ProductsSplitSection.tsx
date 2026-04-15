'use client';

import Button from "@/app/components/ui/Button";

const checkIcon = "/products/Check_Icon.svg";

export default function ProductsSplitSection() {
  return (
    <section className="w-full py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span style={{ color: "var(--color-neutral-800)" }}>
              "Simplify{' '}
            </span>
            <span style={{ color: "var(--color-primary-1)" }}>
              Workflows
            </span>
            <span style={{ color: "var(--color-neutral-800)" }}>
              , Amplify
            </span>
            <span style={{ color: "var(--color-primary-1)" }}>
              {" "}Productivity
            </span>
            <span style={{ color: "var(--color-neutral-800)" }}>
              ."
            </span>
          </h2>
        </div>

        {/* Split Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Purple Card with Circle Chart */}
          <div 
            className="rounded-3xl p-8 md:p-12 text-white min-h-[500px] flex flex-col justify-center"
            style={{
              background: "linear-gradient(135deg, rgba(160, 161, 253, 1) 0%, rgba(124, 126, 253, 1) 49%, rgba(156, 158, 254, 1) 74.5%, rgba(188, 189, 254, 1) 100%)"
            }}
          >
            <div className="bg-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--color-neutral-800)" }}>
                Spend by Category
              </h3>
              
              {/* Circle Chart Placeholder */}
              <div className="w-40 h-40 rounded-full mx-auto mb-8 flex items-center justify-center border-8" 
                style={{ borderColor: "var(--color-primary-1)", backgroundColor: "var(--color-neutral-300)" }}>
                <div className="text-center">
                  <p className="text-3xl font-bold" style={{ color: "var(--color-neutral-800)" }}>$85k</p>
                  <p className="text-xs text-neutral-600">Total</p>
                </div>
              </div>

              {/* Category List */}
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "var(--color-primary-1)" }}></span>
                  <span style={{ color: "var(--color-neutral-800)" }}>Dairy</span>
                  <span style={{ color: "var(--color-neutral-600)" }} className="ml-auto">$43,500</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#F59E0B" }}></span>
                  <span style={{ color: "var(--color-neutral-800)" }}>Vegetables</span>
                  <span style={{ color: "var(--color-neutral-600)" }} className="ml-auto">$19,750</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FBBF24" }}></span>
                  <span style={{ color: "var(--color-neutral-800)" }}>Packaging</span>
                  <span style={{ color: "var(--color-neutral-600)" }} className="ml-auto">$13,750</span>
                </div>
              </div>

              <button className="w-full mt-8 py-2 text-neutral-600 text-sm font-semibold hover:text-neutral-800 transition">
                Download Category Report
              </button>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div>
              <span 
                className="text-xs uppercase font-semibold tracking-wide"
                style={{ color: "var(--color-neutral-600)" }}
              >
                IMPROVE PRODUCTIVITY
              </span>
              <h3 
                className="text-3xl md:text-4xl font-bold mt-4 mb-4"
                style={{ color: "var(--color-neutral-800)" }}
              >
                Proof statement
              </h3>
              <p 
                className="text-lg leading-relaxed"
                style={{ color: "var(--color-neutral-600)" }}
              >
                Get rid of endless spreadsheets and binders collecting dust, or hours wasted on searching and emailing.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              {[
                "[X] deployments operational",
                "[Y] daily transactions processed",
                "[Z] outlets on a single"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div 
                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "var(--color-primary-1)", opacity: 0.1 }}
                  >
                    <img src={checkIcon} alt="check" className="w-4 h-4" />
                  </div>
                  <p 
                    className="text-lg font-normal leading-relaxed"
                    style={{ color: "var(--color-neutral-600)" }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button variant="primary">
                Get started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
