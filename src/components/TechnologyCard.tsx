'use client';

import { technologies } from '@/data/portfolioData';
import { SectionHeading } from './SectionHeading';

const categories = [
  { key: 'backend', label: 'Backend', color: 'bg-accent' },
  { key: 'frontend', label: 'Frontend', color: 'bg-accent-vivid' },
  { key: 'database', label: 'Database', color: 'bg-accent-green' },
  { key: 'tools', label: 'Tools', color: 'bg-accent-yellow' },
] as const;

export function TechnologyCard() {
  return (
    <section id="technologies" className="py-24 sm:py-32 nb-section-alt">
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
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-3 h-3 rounded-sm ${category.color}`} />
                  <h3 className="text-sm font-bold text-text-secondary dark:text-dark-text-secondary uppercase tracking-widest">
                    {category.label}
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {items.map((tech) => (
                    <div
                      key={tech.name}
                      className="nb-card-flat p-5 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_var(--color-shadow)] dark:hover:shadow-[6px_6px_0_var(--color-dark-shadow)] transition-all duration-150"
                    >
                      <h4 className="text-base font-bold text-text dark:text-dark-text mb-2 uppercase tracking-tight">
                        {tech.name}
                      </h4>
                      <p className="text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                        {tech.description}
                      </p>
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
