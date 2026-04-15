'use client';

import Button from "@/app/components/ui/Button";

const checkIcon = "http://localhost:3845/assets/ff83e2af7ff6cc547fadf2c374cf304a38e4c9e3.svg";
const indentIcon = "http://localhost:3845/assets/282a175057cd1f1ad97227ebeaa15996aa2b02a4.svg";

export default function ProductsDifferentiators() {
  const indents = [
    { id: 1, title: "Indent #004", status: "IN PROGRESS", statusColor: "#F59E0B" },
    { id: 2, title: "Indent #003", status: "COMPLETED", statusColor: "#00C2A8" },
    { id: 3, title: "Indent #002", status: "IN PROGRESS", statusColor: "#F59E0B" },
    { id: 4, title: "Indent #001", status: "COMPLETED", statusColor: "#00C2A8" },
  ];

  return (
    <section className="w-full py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span style={{ color: "var(--color-neutral-800)" }}>
              "Key{' '}
            </span>
            <span style={{ color: "var(--color-primary-1)" }}>
              Differentiation
            </span>
            <span style={{ color: "var(--color-neutral-800)" }}>
              ."
            </span>
          </h2>
        </div>

        {/* Split Content - Reversed (Content Left, Card Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <div>
              <span 
                className="text-xs uppercase font-semibold tracking-wide"
                style={{ color: "var(--color-neutral-600)" }}
              >
                KEY FEATURES
              </span>
              <h3 
                className="text-3xl md:text-4xl font-bold mt-4 mb-4"
                style={{ color: "var(--color-neutral-800)" }}
              >
                What makes us different
              </h3>
              <p 
                className="text-lg leading-relaxed"
                style={{ color: "var(--color-neutral-600)" }}
              >
                Purpose-built for Indian food operations with compliance, regional expertise, and seamless integration capabilities.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {[
                "[X] Real-time visibility",
                "[Y] Localized compliance",
                "[Z] Seamless integrations",
                "[W] 24/7 expert support"
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

          {/* Right - Pink Card with Recent Indents */}
          <div 
            className="rounded-3xl p-8 md:p-12 text-white min-h-[500px] flex flex-col justify-center order-1 lg:order-2"
            style={{
              background: "linear-gradient(135deg, rgba(219, 112, 147, 1) 0%, rgba(188, 112, 147, 1) 49%, rgba(219, 123, 160, 1) 74.5%, rgba(230, 145, 180, 1) 100%)"
            }}
          >
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6" style={{ color: "var(--color-neutral-800)" }}>
                Recent Indents
              </h3>
              
              {/* Indents List */}
              <div className="space-y-4">
                {indents.map((indent) => (
                  <div key={indent.id} className="flex items-center gap-4">
                    {/* Status Indicator */}
                    <div 
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: indent.statusColor }}
                    >
                      <img src={indentIcon} alt="indent" className="w-3 h-3" style={{ filter: 'brightness(0) invert(1)' }} />
                    </div>
                    
                    {/* Indent Info */}
                    <div className="flex-1">
                      <p style={{ color: "var(--color-neutral-800)" }} className="font-semibold">
                        {indent.title}
                      </p>
                      <p 
                        className="text-sm"
                        style={{ color: "var(--color-neutral-600)" }}
                      >
                        {indent.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-8 py-2 text-neutral-600 text-sm font-semibold hover:text-neutral-800 transition">
                View All Indents
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
         
