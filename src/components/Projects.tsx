'use client';

import { projects } from '@/data/portfolioData';
import { ProjectGrid } from './ProjectCard';
import { SectionHeading } from './SectionHeading';

export function Projects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Featured Projects"
          subtitle="Real applications built to solve real problems."
        />

        <ProjectGrid projects={featured} />
      </div>
    </section>
  );
}
