'use client';

import { useState } from 'react';
import Button from '../../ui/Button';
import clsx from 'clsx';
import Image from 'next/image';

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
  { id: 'enterprise-pos', label: 'Enterprise POS', icon: '/products/Enterpise_POS_Icon.svg' },
  { id: 'franchise-mgmt', label: 'Franchise Management', icon: '/products/Enterpise_POS_Icon.svg' },
  { id: 'central-kitchen', label: 'Central Kitchen', icon: '/products/Enterpise_POS_Icon.svg' },
  { id: 'vendor-settlement', label: 'Vendor Settlement', icon: '/products/Enterpise_POS_Icon.svg' },
  { id: 'bi-reporting', label: 'BI Reporting', icon: '/products/Enterpise_POS_Icon.svg' },
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
    image: '/products/Enterprise POS.svg',
  },
  'franchise-mgmt': {
    title: 'Franchise Management',
    description: 'Centralized control with local autonomy for franchise networks',
    features: [
      'Unit-level profitability',
      'Compliance tracking',
      'Performance dashboards',
    ],
    image: '/products/Enterprise POS.svg',
  },
  'central-kitchen': {
    title: 'Central Kitchen Operations',
    description: 'Production planning and ingredient management at scale',
    features: [
      'Recipe management',
      'Production scheduling',
      'Quality assurance',
    ],
    image: '/products/Enterprise POS.svg',
  },
  'vendor-settlement': {
    title: 'Vendor Settlement',
    description: 'Automated accounting for supplier payments and settlements',
    features: [
      'Invoice matching',
      'Payment automation',
      'Audit trails',
    ],
    image: '/products/Enterprise POS.svg',
  },
  'bi-reporting': {
    title: 'BI & Analytics',
    description: 'Executive dashboards with operational insights and forecasting',
    features: [
      'Real-time metrics',
      'Predictive analytics',
      'Custom reporting',
    ],
    image: '/products/Enterprise POS.svg',
  },
};

export default function ProductsTabs() {
  const [activeTab, setActiveTab] = useState<string>('enterprise-pos');
  const content = tabContents[activeTab];

  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6">

          {/* Left Column - Vertical Tabs */}
          <div className="flex flex-col gap-4 w-full md:w-64 shrink-0">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                variant="ghost"
                className={clsx(
                  "px-7 py-5 rounded-2xl text-left w-full justify-start",
                  activeTab === tab.id
                    ? "border-2 bg-white border-[var(--color-primary-1)] text-primary"
                    : "border border-neutral-300 bg-white text-[var(--color-text-subtitle)]"
                )}
              >
                <div className="relative w-8 h-8 rounded-lg shrink-0">
                  <Image
                    src={tab.icon}
                    alt={tab.label}
                    width={20}
                    height={20}
                  />
                </div>

                <span className="font-semibold text-sm">
                  {tab.label}
                </span>
              </Button>
            ))}
          </div>

          {/* Right Column - Content */}
          <div className="w-full h-full">
            <div className="relative w-full aspect-[15/9]">
              <Image
                src={content.image}
                alt={content.title}
                fill
                className="object-none"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}