'use client';

interface Testimonial {
  name: string;
  title: string;
  quote: string;
  image: string;
}

function TestimonialCard({ name, title, quote, image }: Testimonial) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-neutral-300 shadow-sm hover:shadow-md transition">
      {/* Quote and Content */}
      <div className="p-6 h-full flex flex-col">
        <p 
          className="font-bold text-base mb-4 leading-relaxed"
          style={{ color: "var(--color-text-title)" }}
        >
          "{quote}"
        </p>

        {/* Author Info */}
        <div className="mt-auto flex items-center gap-3 pt-6 border-t border-neutral-300">
          <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
          <div>
            <p 
              className="font-bold text-sm"
              style={{ color: "var(--color-primary-1)" }}
            >
              {name}
            </p>
            <p 
              className="text-xs"
              style={{ color: "var(--color-text-subtitle)" }}
            >
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesTestimonials() {
  const testimonials: Testimonial[] = [
    {
      name: 'Robert B',
      title: 'CTO, CloudTech Solutions',
      quote: 'I found the perfect developer in hours, and the turnaround was fast and exceeded expectations!',
      image: 'http://localhost:3845/assets/14f3250d1a28819823a8c3b489a426e1cfbabbde.png',
    },
    {
      name: 'Adam Smith',
      title: 'CEO, TechSolutions',
      quote: 'We scaled quickly with exceptional talent and seamless, top-notch work!',
      image: 'http://localhost:3845/assets/1671de60e8f9df0233d1c73a5edd0c8ebee8c28d.svg',
    },
    {
      name: 'Michael T',
      title: 'Founder, Software Technologies',
      quote: 'Finding the perfect graphic designer was effortless, and the results were on-point!',
      image: 'http://localhost:3845/assets/328dee3a042b4413be4de12060eeb45b96407ccc.png',
    },
    {
      name: 'Mike Warren',
      title: 'Founder, InnovateCo',
      quote: 'I connected with talented developers who delivered faster than expected!',
      image: 'http://localhost:3845/assets/d6fffeae2c3bcc2cdc9911f739cbb3f4a8e5efe0.svg',
    },
    {
      name: 'Claire W',
      title: 'Head of Operations, NexGen Startups',
      quote: 'The platform made finding talented professionals easy, and the results were fantastic!',
      image: 'http://localhost:3845/assets/da56bc495f039f1fea40c9b82bab0875d1a2c433.png',
    },
    {
      name: 'John Doe',
      title: 'CEO, Innovations Inc',
      quote: 'I got cost-effective, high-quality design work that fit my vision perfectly!',
      image: 'http://localhost:3845/assets/cffa3c7e5984e5490bdd5cb908b382e5f24d3517.svg',
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold"
            style={{ color: "var(--color-text-title)" }}
          >
            What Our Happy User Says
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={idx} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
