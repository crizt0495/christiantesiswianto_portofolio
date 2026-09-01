'use client';

import { philosophies } from '@/data/portfolioData';
import { SectionHeading } from './SectionHeading';

export function Philosophy() {
  return (
    <section className="py-24 sm:py-32 bg-zinc-100/50 dark:bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="My Principles"
          title="How I Build Software"
          subtitle="Core principles that guide every project I take on."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {philosophies.map((item) => (
            <div
              key={item.number}
              className="group relative rounded-2xl border border-zinc-200 bg-white p-6 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none"
            >
              <span
                className="absolute -top-3 -right-2 text-6xl font-bold text-zinc-100 dark:text-white/[0.04] group-hover:text-indigo-500/10 dark:group-hover:text-indigo-500/10 transition-colors duration-300"
                aria-hidden="true"
              >
                {item.number}
              </span>
              <span className="text-sm font-bold text-gradient">{item.number}</span>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mt-3 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}