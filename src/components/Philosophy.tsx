'use client';

import { philosophies } from '@/data/portfolioData';
import { SectionHeading } from './SectionHeading';

export function Philosophy() {
  return (
    <section className="py-24 sm:py-32 bg-zinc-900/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="How I Build Software"
          subtitle="Core principles that guide every project I take on."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {philosophies.map((item) => (
            <div
              key={item.number}
              className="rounded-xl border border-zinc-800/50 bg-zinc-900/30 p-6"
            >
              <span className="text-2xl font-bold text-zinc-800">{item.number}</span>
              <h3 className="text-base font-semibold text-zinc-100 mt-3 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
