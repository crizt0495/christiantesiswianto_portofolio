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
  'bg-accent',
  'bg-accent-vivid',
  'bg-accent-green',
  'bg-accent-yellow',
  'bg-accent-pink',
];

export function ServiceCard() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What I Can Build"
          subtitle="Services and solutions I can provide to bring your ideas to life."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Globe;
            return (
              <div
                key={service.title}
                className="nb-card-flat p-6 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_var(--color-shadow)] dark:hover:shadow-[6px_6px_0_var(--color-dark-shadow)] transition-all duration-150"
              >
                <div className={`w-10 h-10 rounded-lg ${cardAccents[index % cardAccents.length]} flex items-center justify-center mb-4`}>
                  <Icon className="w-5 h-5 text-white" />
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
