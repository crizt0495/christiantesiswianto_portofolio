'use client';

import { Globe, Server, Briefcase, Database, Layers } from 'lucide-react';
import { services } from '@/data/portfolioData';
import { SectionHeading } from './SectionHeading';

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Server,
  Briefcase,
  Database,
  Layers,
};

const gradients: Record<string, string> = {
  Globe: 'from-blue-500/25 to-blue-500/5 text-blue-700 border-blue-400/30 dark:from-blue-500/25 dark:to-blue-500/5 dark:text-blue-300 dark:border-blue-400/20',
  Server:
    'from-indigo-500/25 to-indigo-500/5 text-indigo-700 border-indigo-400/30 dark:from-indigo-500/25 dark:to-indigo-500/5 dark:text-indigo-300 dark:border-indigo-400/20',
  Briefcase:
    'from-violet-500/25 to-violet-500/5 text-violet-700 border-violet-400/30 dark:from-violet-500/25 dark:to-violet-500/5 dark:text-violet-300 dark:border-violet-400/20',
  Database:
    'from-purple-500/25 to-purple-500/5 text-purple-700 border-purple-400/30 dark:from-purple-500/25 dark:to-purple-500/5 dark:text-purple-300 dark:border-purple-400/20',
  Layers:
    'from-fuchsia-500/25 to-fuchsia-500/5 text-fuchsia-700 border-fuchsia-400/30 dark:from-fuchsia-500/25 dark:to-fuchsia-500/5 dark:text-fuchsia-300 dark:border-fuchsia-400/20',
};

export function ServiceCard() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="What I Can Build"
          subtitle="Services and solutions I can provide to bring your ideas to life."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Globe;
            const gradient = gradients[service.icon] || gradients.Globe;
            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none"
              >
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${gradient} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}