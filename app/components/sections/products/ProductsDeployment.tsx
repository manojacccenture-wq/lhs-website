'use client';
import Image from "next/image";

const deploymentIcon = "/products/terminal-pc.svg";

const deploymentOptions = [
  { id: 'on-premise', label: 'On-Premise' },
  { id: 'private-cloud', label: 'Private Cloud' },
  { id: 'managed-saas', label: 'Managed SaaS' },
];

export default function ProductsDeployment() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div
          className="rounded-3xl p-12 md:p-16 relative overflow-hidden"
          style={{ backgroundColor: "#F5FBFA" }}
        >
          {/* Fade gradients */}
          <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-primary/10 to-transparent rounded-3xl pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-primary/10 to-transparent rounded-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Title */}
            <h2 className="text-center text-4xl md:text-5xl font-bold mb-16 leading-tight">
              <span style={{ color: "var(--color-neutral-800)" }}>Deployment </span>
              <span style={{ color: "var(--color-primary-1)" }}>options</span>
            </h2>

            {/* Deployment Cards */}
            <div className="flex flex-col md:flex-row gap-12 justify-center items-end">
              {deploymentOptions.map((option) => (
                <div key={option.id} className="flex flex-col items-center gap-6">
                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, var(--color-primary-1) 0%, #005c50 100%)"
                    }}
                  >
                    <Image
                      src={deploymentIcon}
                      alt={option.label}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>

                  {/* Label */}
                  <h3
                    className="text-2xl font-bold text-center"
                    style={{ color: "var(--color-neutral-800)" }}
                  >
                    {option.label}
                  </h3>
                </div>
              ))}

            </div> {/* Deployment Cards */}
          </div> {/* relative z-10 */}
        </div> {/* card container */}
      </div> {/* max-w */}
    </section>
  );
}





