'use client';

import { Code2, Database, Globe, Server, Layout, BarChart3 } from 'lucide-react';
import { personal } from '@/data/portfolioData';
import { SectionHeading } from './SectionHeading';

const highlights = [
  { icon: Server, label: 'Backend Development', color: 'from-blue-500 to-blue-600' },
  { icon: Globe, label: 'Full-Stack Web', color: 'from-indigo-500 to-indigo-600' },
  { icon: Code2, label: 'REST API Design', color: 'from-violet-500 to-violet-600' },
  { icon: Database, label: 'Database Architecture', color: 'from-purple-500 to-purple-600' },
  { icon: Layout, label: 'Business Applications', color: 'from-fuchsia-500 to-fuchsia-600' },
  { icon: BarChart3, label: 'Performance & Scale', color: 'from-pink-500 to-pink-600' },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Crafting Solutions That Scale"
          subtitle="I focus on building software that is not just functional, but reliable, maintainable, and built for the long term."
        />

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3 rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:p-10 backdrop-blur-sm">
            <p className="text-zinc-300 leading-relaxed text-base mb-6">
              {personal.description}
            </p>
            <p className="text-zinc-400 leading-relaxed text-sm">
              I specialize in building robust backend systems with <span className="text-indigo-300 font-medium">Golang</span> and creating modern, responsive web applications with{' '}
              <span className="text-indigo-300 font-medium">Next.js</span> and{' '}
              <span className="text-indigo-300 font-medium">TypeScript</span>. My experience spans
              designing efficient database architectures, developing secure REST APIs, and deploying
              production-ready systems that handle real business operations.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/5">
              <div>
                <div className="text-2xl font-bold text-gradient mb-1">2+</div>
                <div className="text-xs text-zinc-500">Years Building</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gradient mb-1">Production</div>
                <div className="text-xs text-zinc-500">Grade Systems</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gradient mb-1">Backend</div>
                <div className="text-xs text-zinc-500">Focused Dev</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 gap-3">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="group rounded-xl border border-white/10 bg-white/[0.02] p-4 hover:bg-white/[0.05] hover:border-indigo-500/30 transition-all duration-300 cursor-default"
                >
                  <div
                    className={`w-9 h-9 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 shadow-lg`}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-xs font-medium text-zinc-200 leading-snug">
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}