import Image from "next/image";

interface AboutCardProps {
  title: string;
  description: string;
  image: string;
  icon: string;
  index?: number; // ⚠️ added for stagger control
}

function AboutCard({ title, description, image, icon, index }: AboutCardProps) {
  return (
    <div
      className={`
        min-w-[260px] md:min-w-[300px] lg:min-w-[320px]
        border-neutral-300
        rounded-xl overflow-hidden bg-white border shadow-sm hover:shadow-md transition
        ${index !== undefined && index % 2 !== 0 ? "lg:mt-8" : "lg:-mt-0"}
      `}
      
    >
      {/* Image Container */}
      <div className="relative w-full h-[200px] md:h-[240px] flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          width={180}
          height={180}
          className="object-contain"
        />
      </div>

      {/* Content */}
<div className="px-0 pb-4 pt-2 mx-auto relative text-center">

  {/* ICON - absolute right */}
  <div className="absolute top-2 right-4 p-2 rounded-full bg-teal-500/10">
    <Image src={icon} alt={title} width={40} height={40} />
  </div>

  {/* TITLE */}
  <h3 className="font-bold text-base md:text-lg">
    {title}
  </h3>

  {/* DESCRIPTION */}
  <p className="text-sm md:text-base mt-1">
    {description}
  </p>

</div>
    </div>
  );
}

export default function AboutCards() {
  const testImage1 = "/about/Title_1.svg"
  const testImage2 = "/about/Title_2.svg"
  const testImage3 = "/about/Title_3.svg"
  const testImage4 = "/about/Title_4.svg"
  const imgIcon1 = "/about/Title_Icon_1.svg";
  const imgIcon2 = "/about/Title_Icon_2.svg";
  const imgIcon3 = "/about/Title_Icon_3.svg";
  const imgIcon4 = "/about/Title_Icon_4.svg";



  const cards: AboutCardProps[] = [
    {
      title: "Clarity Through Data",
      description: "Measure, track, improve",
      image: testImage1,
      icon: imgIcon1
    },
    {
      title: "Designed to Scale",
      description: "Built to scale seamlessly",
      image: testImage2,
      icon: imgIcon2
    },
    {
      title: "Built on Experience",
      description: "20 years shaping solutions",
      image: testImage4,
      icon: imgIcon3
    },
    {
      title: "People Who Execute",
      description: "Ownership beyond ideas",
      image: testImage3,
      icon: imgIcon4
    },
  ];

  return (
    <section className="p-3">
      <div className=" ">
        {/* SCROLL CONTAINER */}
        <div className="flex gap-3 md:gap-9 overflow-x-auto scrollbar-hide">
          {cards.map((card, idx) => (
            <AboutCard key={idx} {...card} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}