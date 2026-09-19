'use client';

import { Code2, Database, Globe, Server, Layout, BarChart3 } from 'lucide-react';
import { personal } from '@/data/portfolioData';
import { SectionHeading } from './SectionHeading';

const highlights = [
  { icon: Server, label: 'Backend Development', color: 'bg-accent', iconColor: 'text-white' },
  { icon: Globe, label: 'Full-Stack Web', color: 'bg-accent-vivid dark:bg-accent-vivid-dark', iconColor: 'text-text' },
  { icon: Code2, label: 'REST API Design', color: 'bg-accent-green', iconColor: 'text-white' },
  { icon: Database, label: 'Database Architecture', color: 'bg-accent-yellow', iconColor: 'text-text' },
  { icon: Layout, label: 'Business Applications', color: 'bg-accent-pink', iconColor: 'text-white' },
  { icon: BarChart3, label: 'Performance & Scale', color: 'bg-accent', iconColor: 'text-white' },
];

const stats = [
  { value: '2+', label: 'Years Building' },
  { value: '10+', label: 'Production Systems' },
  { value: '100%', label: 'Commitment to Quality' },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Building Reliable Software"
          subtitle="A developer focused on building practical and reliable solutions that scale."
        />

        <div className="max-w-5xl mx-auto">
          <div className="nb-card p-8 sm:p-10">
            <p className="text-lg text-text dark:text-dark-text leading-relaxed mb-6">
              {personal.description}
            </p>
            <p className="text-text-secondary dark:text-dark-text-secondary leading-relaxed text-base mb-8">
              I specialize in building fast, scalable full-stack applications with{' '}
              <span className="font-bold text-accent">Next.js</span> and{' '}
              <span className="font-bold text-accent-vivid dark:text-accent-vivid-dark">TypeScript</span> — powering backend
              services, secure REST APIs, and modern, responsive web interfaces. My experience spans
              designing efficient database architectures, developing secure REST APIs, and deploying
              production-ready systems that handle real business operations.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8 pt-6 border-t-3 border-border dark:border-dark-border">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-accent dark:text-accent">{stat.value}</div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-text-muted dark:text-dark-text-muted mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 text-sm font-semibold text-text dark:text-dark-text p-3 rounded-lg border-3 border-border/30 dark:border-dark-border/30 bg-bg-alt/40 dark:bg-dark-bg-alt/40 hover:border-accent hover:bg-bg-alt dark:hover:bg-dark-bg-alt transition-colors"
                  >
                    <div className={`w-9 h-9 rounded-lg ${item.color} flex items-center justify-center shrink-0 shadow-[3px_3px_0_var(--color-shadow)]`}>
                      <Icon className={`w-4 h-4 ${item.iconColor}`} />
                    </div>
                    <span className="leading-snug">{item.label}</span>
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
