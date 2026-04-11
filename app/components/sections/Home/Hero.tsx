import HeroWrapper from "./HeroWrapper";
import Button from "../../ui/Button";





export default function Hero() {



  return (
    <HeroWrapper>
      <section className="text-center py-20 px-4 mt-[5%]">

        {/* TEXT */}
        <h4 className="text-primary">
          From Concept to Scalable Code
        </h4>

        <h1>
          Turning Vision Into <br /> Scalable Reality
        </h1>

        <p className="mt-4 mx-auto">
          We build smart, scalable software that transforms
          ideas into streamlined, real-world solutions.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Button variant="primary">Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>



      </section>
    </HeroWrapper>
  );
}