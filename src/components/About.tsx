'use client';

import { Code2, Database, Globe, Server, Layout, BarChart3 } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const highlights = [
  { icon: Server, label: 'Backend Development' },
  { icon: Globe, label: 'Full-Stack Web Development' },
  { icon: Code2, label: 'REST API' },
  { icon: Database, label: 'Database Architecture' },
  { icon: Layout, label: 'Business Applications' },
  { icon: BarChart3, label: 'Application Performance' },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="A developer focused on building practical and reliable solutions."
        />

        <div className="max-w-3xl mx-auto">
          <div className="rounded-xl border border-zinc-800/50 bg-zinc-900/30 p-8 sm:p-10">
            <p className="text-zinc-300 leading-relaxed mb-8">
              Software developer focused on building practical, reliable, and scalable digital
              solutions. I work primarily with Golang for backend development and Next.js for modern
              web applications, supported by strong database experience with PostgreSQL and MySQL.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 text-sm text-zinc-400"
                  >
                    <Icon className="w-4 h-4 text-zinc-500 shrink-0" />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
