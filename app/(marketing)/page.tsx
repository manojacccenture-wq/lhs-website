import Hero from "@/app/components/sections/Hero";
import Trusted from "@/app/components/sections/Trusted";
import Services from "@/app/components/sections/Services";
import WhyChoose from "@/app/components/sections/WhyChoose";
import Insights from "@/app/components/sections/Insights";
import CTA from "@/app/components/sections/CTA";
import TechStack from "@/app/components/sections/TechStack";
import Testimonial from "@/app/components/sections/Testimonial";
import Contact from "@/app/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Trusted />
      <Services />
      <WhyChoose />
      <Insights />
      <CTA />
      <TechStack />
      <Testimonial />
      <Contact />
    </>
  );
}