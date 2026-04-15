'use client';

import Image from "next/image";
import { useState } from 'react';
import Button from '../../ui/Button';

interface Tab {
  id: string;
  label: string;
  icon: string;
  description?: string;
}

interface TabContent {
  badge: string;
  title: string;
  description: string;
  differencePoints: DifferencePoint[];
  features: {
    title: string;
    description: string;
  }[];
}



type DifferencePoint = {
  number: string;
  title: string;
  description: string;
};

type Feature = {
  title: string;
  description: string;
};

type Props = {
  badge: string;
  title: string;
  description: string;
  differencePoints: DifferencePoint[];
  features: Feature[];
};


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

const tabContentMap: Record<string, TabContent> = {
  "it-services": {
    badge: "IMPROVE PRODUCTIVITY",
    title: "Your Critical Systems Staffed by Engineers Who Know What Downtime Costs",
    description:
      "SAP support, infrastructure administration...",
    differencePoints,
    features: [
      { title: "Dedicated Engineers", description: "Always available" },
      { title: "SLA Monitoring", description: "Measured performance" },
      { title: "Escalation Control", description: "No downtime risk" },
      { title: "Monthly Reports", description: "Full visibility" },
    ],
  },

  "analytics": {
    badge: "REALTIME INSIGHTS",
    title: "Analytics that drive decisions instantly",
    description: "Live dashboards and predictive insights...",
    differencePoints,
    features: [
      { title: "Live Dashboards", description: "Real-time metrics" },
      { title: "Alerts", description: "Instant notifications" },
    ],
  },
  "projects": {
    badge: "REALTIME INSIGHTS",
    title: "Analytics that drive decisions instantly",
    description: "Live dashboards and predictive insights...",
    differencePoints,
    features: [
      { title: "Live Dashboards", description: "Real-time metrics" },
      { title: "Alerts", description: "Instant notifications" },
    ],
  },
  "reports": {
    badge: "REALTIME INSIGHTS",
    title: "Analytics that drive decisions instantly",
    description: "Live dashboards and predictive insights...",
    differencePoints,
    features: [
      { title: "Live Dashboards", description: "Real-time metrics" },
      { title: "Alerts", description: "Instant notifications" },
    ],
  },
};



function TabContentCard({
  badge,
  title,
  description,
  differencePoints,
  features,
}: Props) {
  return (
    <div className="bg-white rounded-3xl border border-neutral-300 p-8 md:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Left Column - Text Content */}
        <div className="space-y-8">

          {/* Badge */}
          <div
            className="inline-block px-4 py-2 rounded-2xl font-semibold text-sm"
            style={{
              backgroundColor: "var(--color-primary-1)",
              color: "white",
            }}
          >
            {badge}
          </div>

          {/* Title */}
          <h3
            className="text-2xl md:text-3xl font-bold"
            style={{ color: "var(--color-text-title)" }}
          >
            {title}
          </h3>

          {/* Description */}
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--color-text-subtitle)" }}
          >
            {description}
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
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white border border-neutral-300 rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl shrink-0"
                  style={{
                    backgroundColor: "var(--color-primary-1)",
                    opacity: 0.1,
                  }}
                />

                <div>
                  <p
                    className="text-sm md:text-base font-bold"
                    style={{ color: "var(--color-text-title)" }}
                  >
                    {feature.title}
                  </p>

                  <p
                    className="text-xs md:text-sm"
                    style={{ color: "var(--color-text-subtitle)" }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default function PowerfulFeatures() {
  const [activeTab, setActiveTab] = useState('it-services');

  const activeContent = tabContentMap[activeTab];

  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p
            className="text-primary uppercase mb-4 mx-auto font-bold"

          >
            Features
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mx-auto"

          >
            Powerful features to supercharge your productivity
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 justify-center mb-8 flex-wrap">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <Button
                key={tab.id}
                variant="outline"
                size="md"
                onClick={() => setActiveTab(tab.id)}
                className={`
          !rounded-2xl !px-7 !py-4 !font-bold !text-sm
          flex items-center gap-3 transition-all
          ${isActive ? "btn-tab-active" : "btn-tab"}
        `}
                leftIcon={
                  <Image
                    src={tab.icon}
                    alt={tab.label}
                    width={20}
                    height={20}
                  />
                }
              >
                {tab.label}
              </Button>
            );
          })}
        </div>

        <TabContentCard
          badge={activeContent.badge}
          title={activeContent.title}
          description={activeContent.description}
          differencePoints={activeContent.differencePoints}
          features={activeContent.features}
        />

      </div>
    </section>
  );
}
