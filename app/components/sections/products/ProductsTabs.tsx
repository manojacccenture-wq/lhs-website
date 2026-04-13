'use client';

import { useState } from 'react';

interface TabItem {
  id: string;
  label: string;
  icon: string;
}

interface TabContent {
  title: string;
  description: string;
  features: string[];
  image: string;
}

const tabs: TabItem[] = [
  { id: 'enterprise-pos', label: 'Enterprise POS', icon: 'http://localhost:3845/assets/0d9d8492db752a4d3879fa04ea9d65e92edf9b42.svg' },
  { id: 'franchise-mgmt', label: 'Franchise Management', icon: 'http://localhost:3845/assets/0d9d8492db752a4d3879fa04ea9d65e92edf9b42.svg' },
  { id: 'central-kitchen', label: 'Central Kitchen', icon: 'http://localhost:3845/assets/0d9d8492db752a4d3879fa04ea9d65e92edf9b42.svg' },
  { id: 'vendor-settlement', label: 'Vendor Settlement', icon: 'http://localhost:3845/assets/0d9d8492db752a4d3879fa04ea9d65e92edf9b42.svg' },
  { id: 'bi-reporting', label: 'BI Reporting', icon: 'http://localhost:3845/assets/0d9d8492db752a4d3879fa04ea9d65e92edf9b42.svg' },
];

const tabContents: Record<string, TabContent> = {
  'enterprise-pos': {
    title: 'Enterprise Point of Sale',
    description: 'Real-time order management and payment processing across all outlets',
    features: [
      'Multi-outlet operations',
      'Real-time inventory sync',
      'Customer loyalty integration',
    ],
    image: 'http://localhost:3845/assets/placeholder.png',
  },
  'franchise-mgmt': {
    title: 'Franchise Management',
    description: 'Centralized control with local autonomy for franchise networks',
    features: [
      'Unit-level profitability',
      'Compliance tracking',
      'Performance dashboards',
    ],
    image: 'http://localhost:3845/assets/placeholder.png',
  },
  'central-kitchen': {
    title: 'Central Kitchen Operations',
    description: 'Production planning and ingredient management at scale',
    features: [
      'Recipe management',
      'Production scheduling',
      'Quality assurance',
    ],
    image: 'http://localhost:3845/assets/placeholder.png',
  },
  'vendor-settlement': {
    title: 'Vendor Settlement',
    description: 'Automated accounting for supplier payments and settlements',
    features: [
      'Invoice matching',
      'Payment automation',
      'Audit trails',
    ],
    image: 'http://localhost:3845/assets/placeholder.png',
  },
  'bi-reporting': {
    title: 'BI & Analytics',
    description: 'Executive dashboards with operational insights and forecasting',
    features: [
      'Real-time metrics',
      'Predictive analytics',
      'Custom reporting',
    ],
    image: 'http://localhost:3845/assets/placeholder.png',
  },
};

export default function ProductsTabs() {
  const [activeTab, setActiveTab] = useState<string>('enterprise-pos');
  const content = tabContents[activeTab];

  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-8 items-start">
          {/* Left Column - Vertical Tabs */}
          <div className="flex flex-col gap-4 w-full md:w-64 shrink-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-7 py-5 rounded-2xl font-normal text-left transition-all flex items-center gap-4 ${
                  activeTab === tab.id
                    ? 'border-2 bg-white'
                    : 'border border-neutral-300 bg-white'
                }`}
                style={activeTab === tab.id ? {
                  borderColor: "var(--color-primary-1)",
                  color: "var(--color-primary-1)"
                } : {
                  color: "var(--color-text-subtitle)"
                }}
              >
                <div 
                  className="w-8 h-8 rounded-lg shrink-0"
                  style={{ 
                    backgroundColor: "var(--color-primary-1)", 
                    opacity: 0.1 
                  }}
                >
                  <img src={tab.icon} alt="" className="w-full h-full" />
                </div>
                <span className="font-semibold text-sm">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Right Column - Content */}
          <div className="flex-1 bg-white rounded-3xl border border-neutral-300 p-8 md:p-12 shadow-sm">
            <div className="max-w-2xl">
              <h3 
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ color: "var(--color-text-title)" }}
              >
                {content.title}
              </h3>
              
              <p 
                className="text-lg mb-8 leading-relaxed"
                style={{ color: "var(--color-text-subtitle)" }}
              >
                {content.description}
              </p>

              <div className="space-y-3 mb-8">
                {content.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div 
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: "var(--color-primary-1)" }}
                    />
                    <span 
                      className="text-base"
                      style={{ color: "var(--color-text-subtitle)" }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button 
                className="px-6 py-3 rounded-full font-semibold text-base text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--color-primary-1)" }}
              >
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
