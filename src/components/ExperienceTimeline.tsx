'use client';

import { experiences } from '@/data/portfolioData';
import { SectionHeading } from './SectionHeading';
import { Badge } from './Badge';

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experience & Journey"
          subtitle="My professional journey and continuous growth as a developer."
        />

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 sm:left-5 top-2 bottom-2 w-1 bg-border dark:bg-dark-border" />

            {experiences.map((exp) => (
              <div key={exp.id} className="relative pl-12 sm:pl-14 pb-12 last:pb-0">
                <div className="absolute left-0 top-2 w-9 h-9 sm:w-11 sm:h-11 rounded-lg border-3 border-border dark:border-dark-border bg-white dark:bg-dark-bg-card flex items-center justify-center shadow-[3px_3px_0_var(--color-shadow)] dark:shadow-[3px_3px_0_var(--color-dark-shadow)]">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      exp.current ? 'bg-accent-green' : 'bg-text-muted dark:bg-dark-text-muted'
                    }`}
                  />
                </div>

                <div className="nb-card p-6">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-lg font-bold text-text dark:text-dark-text uppercase tracking-tight">
                      {exp.position}
                    </h3>
                    {exp.current && <Badge variant="green">Current</Badge>}
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-text-secondary dark:text-dark-text-secondary mb-4 font-medium">
                    <span>{exp.organization}</span>
                    <span className="text-text-muted dark:text-dark-text-muted">·</span>
                    <span>{exp.period}</span>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.responsibilities.map((resp, i) => (
                      <li
                        key={i}
                        className="text-sm text-text dark:text-dark-text leading-relaxed flex items-start gap-2"
                      >
                        <span className="w-2 h-2 rounded-sm bg-accent shrink-0 mt-1.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
