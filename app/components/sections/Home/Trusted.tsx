import Image from "next/image";

const logos = Array(10).fill("/TICL_Company.svg");

export default function Trusted() {
  return (
    <section className="text-center py-10 overflow-hidden mt-[5%]">
      <h1 className="text-primary">— Trusted By</h1>
      <h1 className="font-semibold">Don't take our word for it</h1>

      {/* MARQUEE WRAPPER */}
      <div className="relative mt-[5%]">

        {/* LEFT BLUR */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />

        {/* RIGHT BLUR */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

        {/* TRACK */}
        <div className="flex w-max animate-marquee gap-10 opacity-50">

          {/* ORIGINAL */}
          {logos.map((src, i) => (
            <div key={`logo-${i}`} className="flex-shrink-0">
              <Image src={src} alt="company" width={160} height={80} />
            </div>
          ))}

          {/* DUPLICATE (IMPORTANT FOR LOOP) */}
          {logos.map((src, i) => (
            <div key={`logo-dup-${i}`} className="flex-shrink-0">
              <Image src={src} alt="company" width={160} height={80} />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}