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
    <section id="technologies" className="py-24 sm:py-32 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Technologies I Work With"
          subtitle="A focused, battle-tested set of technologies I use to ship reliable software."
        />

        <div className="space-y-10">
          {categories.map((category) => {
            const items = technologies.filter((t) => t.category === category.key);
            if (items.length === 0) return null;

            return (
              <div key={category.key}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-px bg-gradient-to-r from-blue-500 to-transparent" />
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                    {category.label}
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {items.map((tech) => (
                    <div
                      key={tech.name}
                      className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] hover:border-indigo-500/30 card-hover transition-all"
                    >
                      <h4 className="text-base font-semibold text-zinc-100 mb-1.5 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-violet-400 group-hover:scale-150 transition-transform" />
                        {tech.name}
                      </h4>
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