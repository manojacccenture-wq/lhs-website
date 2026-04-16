import Image from "next/image";

const logos = Array(10).fill("/TICL_Company.svg");

export default function Trusted() {
  return (
    <section className="text-center py-12 md:py-20 overflow-hidden">
      {/* HEADER */}
      <div className="mb-8 md:mb-12">
        <h3
          className="text-xs md:text-lg font-bold uppercase tracking-wider mb-2 md:mb-3 text-primary"

        >
          — Trusted By
        </h3>
        <h2
          className="text-2xl md:text-4xl font-bold"
        >
          Don&apos;t take our word for it
        </h2>
      </div>

      {/* MARQUEE WRAPPER */}
      <div className="relative mt-12">
        {/* LEFT BLUR */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />

        {/* RIGHT BLUR */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

        {/* TRACK */}
        <div className="flex w-max animate-marquee gap-12 opacity-60 py-6">
          {/* ORIGINAL */}
          {logos.map((src, i) => (
            <div key={`logo-${i}`} className="flex-shrink-0 flex items-center h-16">
              <Image
                src={src}
                alt="company"
                width={160}
                height={64}
                className="
    w-auto h-auto max-h-16
    opacity-40 grayscale
    hover:opacity-100 hover:grayscale-0 hover:scale-105
    transition-all duration-700 ease-in-out
  "
              />
            </div>
          ))}

          {/* DUPLICATE (IMPORTANT FOR LOOP) */}
          {logos.map((src, i) => (
            <div key={`logo-dup-${i}`} className="flex-shrink-0 flex items-center h-16">
              <Image
                src={src}
                alt="company"
                width={160}
                height={64}
                className="
    w-auto h-auto max-h-16
    opacity-40 grayscale
    hover:opacity-100 hover:grayscale-0 hover:scale-105
    transition-all duration-700 ease-in-out
  "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}