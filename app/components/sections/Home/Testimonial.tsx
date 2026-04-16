import Image from "next/image";

type Props = {
  name: string;
  role: string;
  image: string;
  quote: string;
};

function TestimonialCard({
  name,
  role,
  image,
  quote,
}: Props) {
  return (
    <div
      className="
        card
        relative
        overflow-hidden
        p-8 md:p-12
        rounded-[32px]
      "
      style={{
        background:
          "linear-gradient(135deg, rgba(0,194,168,0.08), rgba(0,194,168,0.02))",
      }}
    >
      {/* TOP PROFILE */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            width={48}
            height={48}
            className="object-cover"
          />
        </div>

        <div className="text-left">
          <p className="font-semibold" style={{ color: "var(--color-neutral-800)" }}>{name}</p>
          <p className="text-sm" style={{ color: "var(--color-neutral-600)" }}>{role}</p>
        </div>
      </div>

      {/* QUOTE ICON */}
      <div className="absolute right-10 top-10 text-[120px] text-neutral-200 opacity-40 pointer-events-none">
        “
      </div>

      {/* QUOTE */}
      <p className="text-xl md:text-2xl font-semibold leading-relaxed max-w-4xl" style={{ color: "var(--color-neutral-800)" }}>
        {quote}
      </p>
    </div>
  );
}

export default function Testimonial() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-20">
      <TestimonialCard
        name="Jankiraman"
        role="Managing Director at Livelihood System"
        image="/user.jpg"
        quote="Technology is easy. Making it work consistently on the field is the real problem we solve."
      />
    </section>
  );
}