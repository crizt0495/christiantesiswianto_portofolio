'use client';

import { philosophies } from '@/data/portfolioData';
import { SectionHeading } from './SectionHeading';

const cardColors = [
  'border-t-accent',
  'border-t-accent-vivid',
];

const numberStyles = [
  'bg-accent text-white',
  'bg-accent-vivid dark:bg-accent-vivid-dark text-text',
];

export function Philosophy() {
  return (
    <section className="py-24 sm:py-32 nb-section-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Principles"
          title="How I Build Software"
          subtitle="Core principles that guide every project I take on."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {philosophies.map((item, index) => (
            <div
              key={item.number}
              className={`nb-card p-6 ${cardColors[index % cardColors.length]} group`}
            >
              <div
                className={`w-11 h-11 rounded-lg ${numberStyles[index % numberStyles.length]} flex items-center justify-center font-bold text-lg shadow-[3px_3px_0_var(--color-shadow)] group-hover:shadow-[4px_4px_0_var(--color-shadow)] transition-all`}
              >
                {item.number}
              </div>
              <h3 className="text-base font-bold text-text dark:text-dark-text mt-4 mb-2 uppercase tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
