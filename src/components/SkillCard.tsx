'use client';

import { skills } from '@/data/portfolioData';
import { SectionHeading } from './SectionHeading';

const categories = [
  { key: 'backend', label: 'Backend', color: 'bg-accent', dot: 'bg-accent' },
  { key: 'frontend', label: 'Frontend', color: 'bg-accent-vivid', dot: 'bg-accent-vivid' },
  { key: 'database', label: 'Database', color: 'bg-accent-green', dot: 'bg-accent-green' },
  { key: 'development', label: 'Development', color: 'bg-accent-pink', dot: 'bg-accent-pink' },
] as const;

const levelConfig = {
  primary: { label: 'Primary', bar: 'bg-accent', width: '100%' },
  strong: { label: 'Strong', bar: 'bg-accent-vivid', width: '75%' },
  working: { label: 'Working', bar: 'bg-text-muted dark:bg-dark-text-muted', width: '50%' },
} as const;

export function SkillCard() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="My Skills"
          title="Technical Skills"
          subtitle="Skills and expertise I bring to every project."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const items = skills.filter((s) => s.category === category.key);
            if (items.length === 0) return null;

            return (
              <div
                key={category.key}
                className="nb-card p-6"
              >
                <div className="flex items-center gap-2 mb-6">
                  <div className={`w-3 h-3 rounded-sm ${category.color}`} />
                  <h3 className="text-sm font-bold text-text-secondary dark:text-dark-text-secondary uppercase tracking-widest">
                    {category.label}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {items.map((skill) => {
                    const cfg = levelConfig[skill.level];
                    return (
                      <li key={skill.name}>
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="text-sm font-medium text-text dark:text-dark-text">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted dark:text-dark-text-muted">
                            {cfg.label}
                          </span>
                        </div>
                        <div className="h-1.5 w-full bg-bg-alt dark:bg-dark-bg-alt rounded-full overflow-hidden border border-border/30 dark:border-dark-border/30">
                          <div
                            className={`h-full rounded-full ${cfg.bar}`}
                            style={{ width: cfg.width }}
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
