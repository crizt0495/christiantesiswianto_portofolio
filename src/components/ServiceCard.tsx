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

export function ServiceCard() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What I Can Build"
          subtitle="Services and solutions I can provide to bring your ideas to life."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Globe;
            return (
              <div
                key={service.title}
                className="rounded-xl border border-zinc-800/50 bg-zinc-900/30 p-6 hover:border-zinc-700/50 transition-colors"
              >
                <Icon className="w-5 h-5 text-zinc-500 mb-4" />
                <h3 className="text-base font-semibold text-zinc-100 mb-2">{service.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
