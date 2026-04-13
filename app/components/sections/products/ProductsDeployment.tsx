'use client';

interface DeploymentOption {
  id: string;
  title: string;
  description: string;
  features: string[];
  bgColor: string;
}

export default function ProductsDeployment() {
  const deploymentOptions: DeploymentOption[] = [
    {
      id: 'on-premise',
      title: 'On-Premise',
      description: 'Deploy on your own infrastructure for maximum control and security.',
      features: ['Full Data Control', 'Maximum Security', 'Custom Configuration'],
      bgColor: 'from-blue-500 to-blue-600',
    },
    {
      id: 'private-cloud',
      title: 'Private Cloud',
      description: 'Dedicated cloud infrastructure with enterprise-grade reliability.',
      features: ['Dedicated Resources', 'High Availability', 'Automatic Backups'],
      bgColor: 'from-pink-500 to-pink-600',
    },
    {
      id: 'managed-saas',
      title: 'Managed SaaS',
      description: 'Enterprise SaaS solution with ongoing support and updates.',
      features: ['Always Up-to-Date', 'Zero Maintenance', '24/7 Support'],
      bgColor: 'from-teal-400 to-teal-500',
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold text-center"
            style={{ color: "var(--color-text-title)" }}
          >
            Multiple Ways to Deploy
          </h2>
          <p
            className="text-lg text-center mt-4 max-w-2xl mx-auto"
            style={{ color: "var(--color-text-subtitle)" }}
          >
            Choose the deployment model that best fits your business needs and infrastructure requirements.
          </p>
        </div>

        {/* Deployment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deploymentOptions.map((option) => (
            <div
              key={option.id}
              className="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Card Header - Colored Background */}
              <div className={`bg-linear-to-br ${option.bgColor} p-8 text-white`}>
                <h3 className="text-2xl font-bold">{option.title}</h3>
              </div>

              {/* Card Body */}
              <div className="bg-white p-8 space-y-4">
                <p className="text-base leading-relaxed" style={{ color: "var(--color-text-subtitle)" }}>
                  {option.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 pt-4 border-t border-neutral-200">
                  {option.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: "var(--color-primary-1)" }}
                      />
                      <span
                        className="text-sm"
                        style={{ color: "var(--color-text-subtitle)" }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
