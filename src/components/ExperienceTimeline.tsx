'use client';

import { experiences } from '@/data/portfolioData';
import { SectionHeading } from './SectionHeading';
import { Badge } from './Badge';

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Journey"
          title="Experience & Growth"
          subtitle="My professional path as I build and ship real-world software."
        />

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-3.5 sm:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-blue-500/60 via-indigo-500/40 to-transparent" />

            {experiences.map((exp) => (
              <div key={exp.id} className="relative pl-10 sm:pl-12 pb-10 last:pb-0">
                <div className="absolute left-0 top-2 w-7 h-7 sm:w-9 sm:h-9 rounded-full border border-zinc-200 bg-white flex items-center justify-center dark:border-white/10 dark:bg-zinc-950">
                  <div
                    className={`w-2.5 h-2.5 rounded-full ${
                      exp.current
                        ? 'bg-gradient-to-r from-blue-500 to-violet-500 animate-pulse-soft'
                        : 'bg-zinc-400 dark:bg-zinc-600'
                    }`}
                  />
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                      {exp.position}
                    </h3>
                    {exp.current && <Badge>Current</Badge>}
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                    <span>{exp.organization}</span>
                    <span className="text-zinc-400 dark:text-zinc-700">·</span>
                    <span>{exp.period}</span>
                  </div>

                  <ul className="space-y-2.5 mb-5">
                    {exp.responsibilities.map((resp, i) => (
                      <li
                        key={i}
                        className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed flex items-start gap-2.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-violet-400 mt-2 shrink-0" />
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