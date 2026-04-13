'use client';

export default function ProductsCTA() {
  return (
    <section>
      <div
        className="py-16 md:py-24 px-6 text-center bg-linear-to-r from-teal-500 to-teal-600 rounded-3xl mx-6 md:mx-auto max-w-7xl"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          So, Are You Ready to Streamline Your Food Chain Operations?
        </h2>
        
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Join leading food businesses across India who have transformed their operations with our platform.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            className="px-8 py-3 rounded-2xl font-semibold text-teal-600 bg-white hover:bg-gray-100 transition-colors"
          >
            Schedule Demo
          </button>
          <button
            className="px-8 py-3 rounded-2xl font-semibold text-white border-2 border-white hover:bg-white/10 transition-colors"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
