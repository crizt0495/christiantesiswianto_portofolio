'use client';

import { skills } from '@/data/portfolioData';
import { SectionHeading } from './SectionHeading';

const categories = [
  { key: 'backend', label: 'Backend' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'database', label: 'Database' },
  { key: 'development', label: 'Development' },
] as const;

const levelLabel = {
  primary: { label: 'Primary', color: 'text-blue-400' },
  strong: { label: 'Strong', color: 'text-zinc-300' },
  working: { label: 'Working', color: 'text-zinc-500' },
} as const;

export function SkillCard() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
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
                className="rounded-xl border border-zinc-800/50 bg-zinc-900/30 p-6"
              >
                <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-5">
                  {category.label}
                </h3>
                <ul className="space-y-3">
                  {items.map((skill) => (
                    <li key={skill.name} className="flex items-center justify-between gap-3">
                      <span className="text-sm text-zinc-300">{skill.name}</span>
                      <span className={`text-xs font-medium ${levelLabel[skill.level].color}`}>
                        {levelLabel[skill.level].label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
