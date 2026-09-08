'use client';

import { skills } from '@/data/portfolioData';
import { SectionHeading } from './SectionHeading';

const categories = [
  { key: 'backend', label: 'Backend', color: 'bg-accent' },
  { key: 'frontend', label: 'Frontend', color: 'bg-accent-vivid' },
  { key: 'database', label: 'Database', color: 'bg-accent-green' },
  { key: 'development', label: 'Development', color: 'bg-accent-pink' },
] as const;

const levelStyle = {
  primary: { label: 'Primary', bg: 'bg-accent', text: 'text-white' },
  strong: { label: 'Strong', bg: 'bg-text dark:bg-dark-text', text: 'text-bg dark:text-dark-bg' },
  working: { label: 'Working', bg: 'bg-bg-alt dark:bg-dark-bg-alt', text: 'text-text-secondary dark:text-dark-text-secondary' },
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
                className="nb-card p-6"
              >
                <div className="flex items-center gap-2 mb-5">
                  <div className={`w-3 h-3 rounded-sm ${category.color}`} />
                  <h3 className="text-sm font-bold text-text-secondary dark:text-dark-text-secondary uppercase tracking-widest">
                    {category.label}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {items.map((skill) => (
                    <li key={skill.name} className="flex items-center justify-between gap-3">
                      <span className="text-sm font-medium text-text dark:text-dark-text">{skill.name}</span>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm ${levelStyle[skill.level].bg} ${levelStyle[skill.level].text}`}>
                        {levelStyle[skill.level].label}
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
