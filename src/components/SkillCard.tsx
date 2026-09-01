'use client';

import { skills } from '@/data/portfolioData';
import { SectionHeading } from './SectionHeading';

const categories = [
  { key: 'backend', label: 'Backend' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'database', label: 'Database' },
  { key: 'development', label: 'Dev Tools' },
] as const;

const levelConfig = {
  primary: { label: 'Primary', color: 'bg-gradient-to-r from-blue-500 to-indigo-500', width: '100%' },
  strong: { label: 'Strong', color: 'bg-gradient-to-r from-indigo-500 to-violet-500', width: '75%' },
  working: { label: 'Working', color: 'bg-gradient-to-r from-zinc-500 to-zinc-600', width: '50%' },
} as const;

export function SkillCard() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="My Skills"
          title="Technical Expertise"
          subtitle="Technologies and tools I use daily to build production systems."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((category) => {
            const items = skills.filter((s) => s.category === category.key);
            if (items.length === 0) return null;

            return (
              <div
                key={category.key}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05] transition-colors duration-300"
              >
                <h3 className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-6">
                  {category.label}
                </h3>
                <ul className="space-y-5">
                  {items.map((skill) => {
                    const cfg = levelConfig[skill.level];
                    return (
                      <li key={skill.name}>
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="text-sm text-zinc-200 font-medium">{skill.name}</span>
                          <span className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">
                            {cfg.label}
                          </span>
                        </div>
                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${cfg.color}`}
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