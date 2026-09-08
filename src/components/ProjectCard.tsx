'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ExternalLink, Github, CheckCircle, ArrowUpRight, Maximize2 } from 'lucide-react';
import { Project } from '@/data/portfolioData';
import { Badge } from './Badge';
import { Button } from './Button';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  return (
    <article className="group nb-card overflow-hidden relative">
      <div className="relative aspect-video overflow-hidden border-b-3 border-border dark:border-dark-border bg-bg-alt dark:bg-dark-bg-alt">
        {project.image ? (
          <>
            <Image
              src={project.image}
              alt={`${project.name} screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent/8 to-accent-vivid/8">
            <div className="text-7xl font-bold text-text dark:text-dark-text opacity-8">
              {project.name.charAt(0)}
            </div>
          </div>
        )}
        <div className="absolute top-3 left-3 z-10">
          <Badge variant="accent" className="text-[10px] px-2 py-0.5">
            ★ Featured
          </Badge>
        </div>
        <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0">
          <button
            onClick={() => onViewDetails(project)}
            className="w-8 h-8 rounded-lg border-3 border-border dark:border-dark-border bg-white dark:bg-dark-bg-card flex items-center justify-center text-text dark:text-dark-text shadow-[3px_3px_0_var(--color-shadow)] dark:shadow-[3px_3px_0_var(--color-dark-shadow)] hover:bg-accent hover:text-white hover:border-accent hover:shadow-[4px_4px_0_var(--color-accent)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all duration-100"
            aria-label="Expand"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-lg font-bold text-text dark:text-dark-text uppercase tracking-tight leading-tight">
            {project.name}
          </h3>
          <ArrowUpRight className="w-5 h-5 text-text-muted dark:text-dark-text-muted shrink-0 mt-0.5 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </div>
        <p className="text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed mb-5 line-clamp-3">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-[10px]">
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
              variant="accent"
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-text/30 dark:bg-dark-text/30 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto nb-card bg-bg dark:bg-dark-bg scrollbar-thin"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="sticky top-4 right-4 ml-auto w-10 h-10 rounded-lg border-3 border-border dark:border-dark-border bg-white dark:bg-dark-bg-card flex items-center justify-center text-text dark:text-dark-text hover:bg-error hover:text-white hover:border-error shadow-[3px_3px_0_var(--color-shadow)] dark:shadow-[3px_3px_0_var(--color-dark-shadow)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all duration-100 z-20"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Hero Screenshot */}
        <div className="relative aspect-video border-b-3 border-border dark:border-dark-border overflow-hidden bg-bg-alt dark:bg-dark-bg-alt">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.name} screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              priority
              className="object-cover object-top"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/8 to-accent-vivid/8">
              <div className="text-8xl font-bold text-text dark:text-dark-text opacity-8">
                {project.name.charAt(0)}
              </div>
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-bg dark:from-dark-bg to-transparent" />
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h2
              id="project-modal-title"
              className="text-2xl sm:text-3xl font-bold text-text dark:text-dark-text uppercase tracking-tight"
            >
              {project.name}
            </h2>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech) => (
              <Badge key={tech} className="text-[10px]">{tech}</Badge>
            ))}
          </div>

          <div className="space-y-6">
            {[
              { title: 'Overview', content: project.overview, icon: '📋' },
              { title: 'Problem', content: project.problem, icon: '❓' },
              { title: 'Solution', content: project.solution, icon: '💡' },
              { title: 'Challenges', content: project.challenges, icon: '⚡' },
              { title: 'Results', content: project.results, icon: '🎯' },
            ].map((section) => (
              <section key={section.title}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm">{section.icon}</span>
                  <h3 className="text-xs font-bold text-text-secondary dark:text-dark-text-secondary uppercase tracking-widest">
                    {section.title}
                  </h3>
                </div>
                <p className="text-sm text-text dark:text-dark-text leading-relaxed pl-7">{section.content}</p>
              </section>
            ))}

            <section>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm">✅</span>
                <h3 className="text-xs font-bold text-text-secondary dark:text-dark-text-secondary uppercase tracking-widest">
                  Key Features
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-7">
                {project.keyFeatures.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-sm text-text dark:text-dark-text p-2.5 rounded-lg border-3 border-border/30 dark:border-dark-border/30 bg-bg-alt/40 dark:bg-dark-bg-alt/40"
                  >
                    <CheckCircle className="w-4 h-4 text-accent-green shrink-0 mt-0.5" />
                    <span className="leading-snug">{feature}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-6 mt-6 border-t-3 border-border dark:border-dark-border">
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
