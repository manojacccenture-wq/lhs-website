import HeroWrapper from "./HeroWrapper";
import Button from "../ui/Button";

// =============================
export default function Hero() {
  return (
    <HeroWrapper>
      <section className="text-center py-20 px-4">
        <h4 className="text-green-300">
          From Concept to Scalable Code
        </h4>

        <h1>
          Turning Vision Into <br /> Scalable Reality
        </h1>

        <p className="mx-auto max-w-xl md:max-w-lg lg:max-w-sm mt-4 ">
          We build smart, scalable software that transforms
          ideas into streamlined, real-world solutions.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Button variant="primary" size="md">
            Get Started
          </Button>

          <Button variant="outline" size="md">
            Learn More
          </Button>
        </div>
      </section>
    </HeroWrapper>
  );
}