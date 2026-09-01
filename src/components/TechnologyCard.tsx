'use client';

import { technologies } from '@/data/portfolioData';
import { SectionHeading } from './SectionHeading';

const categories = [
  { key: 'backend', label: 'Backend' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'database', label: 'Database' },
  { key: 'tools', label: 'Tools' },
] as const;

export function TechnologyCard() {
  return (
    <section id="technologies" className="py-24 sm:py-32 bg-zinc-900/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Technologies I Work With"
          subtitle="A focused set of tools and technologies I use to build reliable software."
        />

        <div className="space-y-12">
          {categories.map((category) => {
            const items = technologies.filter((t) => t.category === category.key);
            if (items.length === 0) return null;

            return (
              <div key={category.key}>
                <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">
                  {category.label}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {items.map((tech) => (
                    <div
                      key={tech.name}
                      className="rounded-lg border border-zinc-800/50 bg-zinc-900/30 p-5 hover:border-zinc-700/50 transition-colors"
                    >
                      <h4 className="text-base font-semibold text-zinc-100 mb-2">{tech.name}</h4>
                      <p className="text-sm text-zinc-400 leading-relaxed">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
