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

const cardAccents = [
  'bg-accent text-white',
  'bg-accent-vivid text-text dark:text-dark-text',
];

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
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Globe;
            return (
              <div
                key={service.title}
                className="nb-card-flat p-6 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-11 h-11 rounded-lg ${cardAccents[index % cardAccents.length]} flex items-center justify-center shadow-[3px_3px_0_var(--color-shadow)] group-hover:shadow-[4px_4px_0_var(--color-shadow)] transition-all`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-text-muted dark:text-dark-text-muted">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-base font-bold text-text dark:text-dark-text mb-2 uppercase tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed">
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
