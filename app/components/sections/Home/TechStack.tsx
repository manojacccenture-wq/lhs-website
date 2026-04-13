
import ImageCard from "../../ui/ImageCard";


const techStack = [
  { name: "Next.js", icon: "/tech/next.svg" },
  { name: "React", icon: "/tech/react.svg" },
  { name: "Flutter", icon: "/tech/flutter.svg" },
  { name: "Angular", icon: "/tech/angular.svg" },
  { name: "MySQL", icon: "/tech/mysql.svg" },
  { name: "MongoDB", icon: "/tech/mongodb.svg" },
  { name: "JavaScript", icon: "/tech/js.svg" },
];

export default function TechStack() {
  return (
    <section className="relative py-20 px-4 text-center overflow-visible">

      {/* SOFT BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10 " />

      {/* TOP LABEL */}
      <p className="text-primary mx-auto">
        — MODERN, SECURE, AND SCALABLE FOR ENTERPRISE-GRADE F&B OPERATIONS.
      </p>

      {/* TITLE */}
      <h2 className="mb-12">Technology Stack</h2>

      {/* TECH ITEMS */}
      <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
        {techStack.map((tech, i) => (
          <ImageCard
            key={i}
            icon={tech.icon}
            label={tech.name}
            variant="tech"
          />
        ))}
      </div>

      {/* FADED BACK TEXT (OPTIONAL ADVANCED) */}
      <p className="mx-auto opacity-5 whitespace-nowrap pointer-events-none">
        With a modern tech stack powering our operations
      </p>

    </section>
  );
}