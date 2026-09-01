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
            <div className="absolute left-3 sm:left-4 top-2 bottom-2 w-px bg-zinc-800" />

            {experiences.map((exp) => (
              <div key={exp.id} className="relative pl-10 sm:pl-12 pb-12 last:pb-0">
                <div className="absolute left-0 top-2 w-7 h-7 sm:w-9 sm:h-9 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      exp.current ? 'bg-blue-500' : 'bg-zinc-600'
                    }`}
                  />
                </div>

                <div className="rounded-xl border border-zinc-800/50 bg-zinc-900/30 p-6">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-zinc-100">{exp.position}</h3>
                    {exp.current && <Badge>Current</Badge>}
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-400 mb-4">
                    <span>{exp.organization}</span>
                    <span className="text-zinc-700">·</span>
                    <span>{exp.period}</span>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.responsibilities.map((resp, i) => (
                      <li
                        key={i}
                        className="text-sm text-zinc-300 leading-relaxed flex items-start gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-zinc-600 mt-2 shrink-0" />
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
