'use client';

import { useState } from 'react';

interface Tab {
  id: string;
  label: string;
  icon: string;
  description?: string;
}

interface DifferencePoint {
  number: string;
  title: string;
  description: string;
}

const tabs: Tab[] = [
  {
    id: 'it-services',
    label: 'IT SERVICES & MANPOWER',
    icon: 'http://localhost:3845/assets/780e7c27c4d3b26f8a6e5d3f1a8c2b9e.svg',
  },
  {
    id: 'analytics',
    label: 'Realtime Analytics',
    icon: 'http://localhost:3845/assets/963b6816e904e52c159b32d909aac0269d62cc75.svg',
  },
  {
    id: 'projects',
    label: 'TURNKEY DIGITAL PROJECTS',
    icon: 'http://localhost:3845/assets/6b38aa1b806baeae45bd40b26d0c61b9bbbd16d4.svg',
  },
  {
    id: 'reports',
    label: 'Monthly Reports',
    icon: 'http://localhost:3845/assets/6b38aa1b806baeae45bd40b26d0c61b9bbbd16d4.svg',
  },
];

const differencePoints: DifferencePoint[] = [
  {
    number: '01',
    title: 'Dedicated resource model',
    description: 'your team, our accountability',
  },
  {
    number: '02',
    title: 'SLA-defined deliverables',
    description: 'measurable, reported, escalation-protected',
  },
  {
    number: '03',
    title: 'Performance reviews',
    description: 'monthly scorecards, quarterly alignment',
  },
];

export default function PowerfulFeatures() {
  const [activeTab, setActiveTab] = useState('it-services');

  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p 
            className="text-sm font-bold tracking-[2.24px] uppercase mb-4"
            style={{ color: "var(--color-primary-1)" }}
          >
            Features
          </p>
          <h2 
            className="text-3xl md:text-4xl font-bold"
            style={{ color: "var(--color-text-title)" }}
          >
            Powerful features to supercharge your productivity
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 justify-center mb-8 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-7 py-4 rounded-2xl font-bold text-sm transition-all flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'border-2 bg-white text-primary-1'
                  : 'border border-neutral-300 bg-white text-text-subtitle'
              }`}
              style={activeTab === tab.id ? {
                borderColor: "var(--color-primary-1)",
                color: "var(--color-primary-1)"
              } : {}}
            >
              <img src={tab.icon} alt="" className="w-6 h-6" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-3xl border border-neutral-300 p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-block px-4 py-2 rounded-2xl font-semibold text-sm" style={{ backgroundColor: "var(--color-primary-1)", color: "white" }}>
                IMPROVE PRODUCTIVITY
              </div>

              {/* Title */}
              <h3 
                className="text-2xl md:text-3xl font-bold"
                style={{ color: "var(--color-text-title)" }}
              >
                Your Critical Systems Staffed by Engineers Who Know What Downtime Costs
              </h3>

              {/* Description */}
              <p 
                className="text-base leading-relaxed"
                style={{ color: "var(--color-text-subtitle)" }}
              >
                SAP support, infrastructure administration, network monitoring, helpdesk operations — deployed under structured SLA governance with measurable performance reporting. Our manpower engagements are built for continuity, not coverage.
              </p>

              {/* What makes us different */}
              <div className="pt-4">
                <h4 
                  className="text-xl font-bold mb-6"
                  style={{ color: "var(--color-primary-1)" }}
                >
                  What makes us different
                </h4>
                <div className="space-y-4">
                  {differencePoints.map((point, idx) => (
                    <div key={idx} className="flex gap-4">
                      <span 
                        className="text-2xl font-bold"
                        style={{ color: "var(--color-primary-1)" }}
                      >
                        {point.number}
                      </span>
                      <div>
                        <p 
                          className="font-semibold"
                          style={{ color: "var(--color-text-subtitle)" }}
                        >
                          {point.title}
                        </p>
                        <p 
                          className="text-sm"
                          style={{ color: "var(--color-text-subtitle)" }}
                        >
                          {point.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Feature Cards */}
            <div className="space-y-6">
              {[1, 2, 3, 4].map((idx) => (
                <div
                  key={idx}
                  className="bg-white border border-neutral-300 rounded-2xl p-6 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-10 h-10 rounded-xl shrink-0"
                      style={{ backgroundColor: "var(--color-primary-1)", opacity: 0.1 }}
                    />
                    <div>
                      <p 
                        className="text-sm md:text-base font-bold"
                        style={{ color: "var(--color-text-title)" }}
                      >
                        Feature {idx}
                      </p>
                      <p 
                        className="text-xs md:text-sm"
                        style={{ color: "var(--color-text-subtitle)" }}
                      >
                        Description text
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
