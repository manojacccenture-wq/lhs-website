'use client';

interface Differentiator {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export default function ProductsDifferentiators() {
  const differentiators: Differentiator[] = [
    {
      id: 'built-for-india',
      title: 'Built for India',
      description: 'Designed specifically for Indian food industry operations with localized compliance and regional best practices.',
      icon: '🏢',
    },
    {
      id: 'real-time-insights',
      title: 'Real-Time Insights',
      description: 'Get instant visibility into your entire food chain operations with comprehensive dashboards and analytics.',
      icon: '📊',
    },
    {
      id: 'seamless-integration',
      title: 'Seamless Integration',
      description: 'Connect with your existing systems and tools effortlessly. Our APIs support all major platforms and services.',
      icon: '🔗',
    },
    {
      id: 'expert-support',
      title: 'Expert Support',
      description: 'Dedicated support team available 24/7 to help you succeed with implementation, training, and ongoing optimization.',
      icon: '👥',
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold text-center"
            style={{ color: "var(--color-text-title)" }}
          >
            Why Choose Our Platform
          </h2>
          <p
            className="text-lg text-center mt-4 max-w-2xl mx-auto"
            style={{ color: "var(--color-text-subtitle)" }}
          >
            Experience the difference with a solution built by industry experts, for your success.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentiators.map((item) => (
            <div key={item.id} className="flex gap-6 p-8 bg-linear-to-br from-purple-50 to-transparent rounded-3xl border border-neutral-200 hover:border-neutral-300 transition-colors">
              {/* Icon */}
              <div className="shrink-0">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                  style={{ backgroundColor: "rgba(0, 194, 168, 0.1)" }}
                >
                  {item.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-2">
                <h3
                  className="text-xl font-bold"
                  style={{ color: "var(--color-text-title)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--color-text-subtitle)" }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
