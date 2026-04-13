import Image from "next/image";

interface AboutCardProps {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

function AboutCard({ title, description, image, icon }: AboutCardProps) {
  return (
    <div className="rounded-xl overflow-hidden bg-white border shadow-sm hover:shadow-md transition" style={{ borderColor: "var(--color-neutral-300)" }}>
      {/* Image Container */}
      <div className="relative h-40 md:h-48 overflow-hidden">
        <img alt={title} className="w-full h-full object-cover" src={image} />
      </div>

      {/* Content */}
      <div className="p-4 md:p-6">
        <div className="flex items-start gap-3 mb-3">
          <div className="shrink-0 p-2 rounded-lg" style={{ backgroundColor: "var(--color-primary-1)", opacity: 0.1 }}>
            {icon}
          </div>
          <h3 className="font-bold text-base md:text-lg" style={{ color: "var(--color-text-title)" }}>
            {title}
          </h3>
        </div>
        <p className="text-sm md:text-base" style={{ color: "var(--color-text-body)" }}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default function AboutCards() {
  const imgIcon = "http://localhost:3845/assets/2077f9833b9814c449be4283c49bc75707dbf8a6.svg";
  const imgIcon1 = "http://localhost:3845/assets/2b1a89ef1d6568272c47ae2e5762e4ff4bfd4d9c.svg";
  const imgIcon2 = "http://localhost:3845/assets/71579d6155b9261c42587a5acd4aa94e5e613b61.svg";
  const imgIcon3 = "http://localhost:3845/assets/d67a9bf9816b328283ed7e3d3166d585cedb730e.svg";

  const imgTitle = "http://localhost:3845/assets/f8156e968281e474ce8c0c066312d21ed7b0047f.png";
  const imgTitle1 = "http://localhost:3845/assets/048d4a3546bafab7d4d3110f4d8a4a0a5d3077ec.png";
  const imgTitle2 = "http://localhost:3845/assets/c8ab785534a3297601d94f1c9512fe7e30324183.png";
  const imgTitle3 = "http://localhost:3845/assets/86df0ac9a84d672c76b0548e0620d5013e08e3b8.png";

  const cards: AboutCardProps[] = [
    {
      title: "Clarity Through Data",
      description: "Measure, track, improve",
      image: imgTitle,
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-white" style={{ color: "var(--color-primary-1)" }}>
          <img src={imgIcon} alt="icon" className="w-6 h-6" />
        </svg>
      ),
    },
    {
      title: "Designed to Scale",
      description: "Built to scale seamlessly",
      image: imgTitle1,
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-white" style={{ color: "var(--color-primary-1)" }}>
          <img src={imgIcon3} alt="icon" className="w-6 h-6" />
        </svg>
      ),
    },
    {
      title: "Built on Experience",
      description: "20 years shaping solutions",
      image: imgTitle2,
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-white" style={{ color: "var(--color-primary-1)" }}>
          <img src={imgIcon2} alt="icon" className="w-6 h-6" />
        </svg>
      ),
    },
    {
      title: "People Who Execute",
      description: "Ownership beyond ideas",
      image: imgTitle3,
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-white" style={{ color: "var(--color-primary-1)" }}>
          <img src={imgIcon1} alt="icon" className="w-6 h-6" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {cards.map((card, idx) => (
            <AboutCard key={idx} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
