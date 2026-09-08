'use client';

import { Code2, Database, Globe, Server, Layout, BarChart3 } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const highlights = [
  { icon: Server, label: 'Backend Development', color: 'bg-accent' },
  { icon: Globe, label: 'Full-Stack Web Development', color: 'bg-accent-vivid' },
  { icon: Code2, label: 'REST API', color: 'bg-accent-green' },
  { icon: Database, label: 'Database Architecture', color: 'bg-accent-yellow' },
  { icon: Layout, label: 'Business Applications', color: 'bg-accent-pink' },
  { icon: BarChart3, label: 'Application Performance', color: 'bg-accent' },
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
          <div className="nb-card p-8 sm:p-10">
            <p className="text-text dark:text-dark-text leading-relaxed mb-8 text-lg">
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
                    className="flex items-center gap-3 text-sm font-medium text-text-secondary dark:text-dark-text-secondary"
                  >
                    <div className={`w-8 h-8 rounded-md ${item.color} flex items-center justify-center shrink-0`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
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
