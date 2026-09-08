'use client';

import { useState } from 'react';
import { X, ExternalLink, Github, CheckCircle } from 'lucide-react';
import { Project } from '@/data/portfolioData';
import { Badge } from './Badge';
import { Button } from './Button';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  return (
    <article className="nb-card overflow-hidden group hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0_var(--color-shadow)] dark:hover:shadow-[8px_8px_0_var(--color-dark-shadow)] transition-all duration-150">
      <div className="aspect-video bg-bg-alt dark:bg-dark-bg-alt flex items-center justify-center border-b-3 border-border dark:border-dark-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent-vivid/10" />
        <div className="relative text-6xl font-bold text-text dark:text-dark-text opacity-10 group-hover:opacity-20 transition-opacity">
          {project.name.charAt(0)}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold text-text dark:text-dark-text mb-2 uppercase tracking-tight">
          {project.name}
        </h3>
        <p className="text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed mb-4 line-clamp-3">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button
            variant="primary"
            size="sm"
            onClick={() => onViewDetails(project)}
          >
            View Details
          </Button>
          {project.github && (
            <Button
              variant="ghost"
              size="sm"
              href={project.github}
              external
              icon={<Github className="w-3.5 h-3.5" />}
            >
              GitHub
            </Button>
          )}
          {project.liveDemo && (
            <Button
              variant="ghost"
              size="sm"
              href={project.liveDemo}
              external
              icon={<ExternalLink className="w-3.5 h-3.5" />}
            >
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-text/20 dark:bg-dark-text/20 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto nb-card bg-bg dark:bg-dark-bg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="sticky top-4 right-4 ml-auto w-10 h-10 rounded-lg border-3 border-border dark:border-dark-border bg-white dark:bg-dark-bg-card flex items-center justify-center text-text dark:text-dark-text hover:bg-bg-alt dark:hover:bg-dark-bg-alt shadow-[3px_3px_0_var(--color-shadow)] dark:shadow-[3px_3px_0_var(--color-dark-shadow)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all duration-100 z-10"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-6 sm:p-8">
          <div className="aspect-video rounded-lg bg-bg-alt dark:bg-dark-bg-alt flex items-center justify-center border-3 border-border dark:border-dark-border mb-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent-vivid/10" />
            <div className="relative text-7xl font-bold text-text dark:text-dark-text opacity-10">
              {project.name.charAt(0)}
            </div>
          </div>

          <h2
            id="project-modal-title"
            className="text-2xl sm:text-3xl font-bold text-text dark:text-dark-text mb-3 uppercase tracking-tight"
          >
            {project.name}
          </h2>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>

          <div className="space-y-6">
            {[
              { title: 'Overview', content: project.overview },
              { title: 'Problem', content: project.problem },
              { title: 'Solution', content: project.solution },
              { title: 'Challenges', content: project.challenges },
              { title: 'Results', content: project.results },
            ].map((section) => (
              <section key={section.title}>
                <h3 className="text-sm font-bold text-text-secondary dark:text-dark-text-secondary uppercase tracking-widest mb-2">
                  {section.title}
                </h3>
                <p className="text-sm text-text dark:text-dark-text leading-relaxed">{section.content}</p>
              </section>
            ))}

            <section>
              <h3 className="text-sm font-bold text-text-secondary dark:text-dark-text-secondary uppercase tracking-widest mb-2">
                Key Features
              </h3>
              <ul className="space-y-2">
                {project.keyFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text dark:text-dark-text">
                    <CheckCircle className="w-4 h-4 text-accent-green shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-6 mt-6 border-t-3 border-border dark:border-dark-border">
            {project.github && (
              <Button
                variant="secondary"
                size="md"
                href={project.github}
                external
                icon={<Github className="w-4 h-4" />}
              >
                View on GitHub
              </Button>
            )}
            {project.liveDemo && (
              <Button
                variant="accent"
                size="md"
                href={project.liveDemo}
                external
                icon={<ExternalLink className="w-4 h-4" />}
              >
                Live Demo
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onViewDetails={setSelectedProject}
          />
        ))}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
