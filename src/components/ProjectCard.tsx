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
    <article className="group rounded-xl border border-zinc-800/50 bg-zinc-900/30 overflow-hidden hover:border-zinc-700/50 transition-colors">
      <div className="aspect-video bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 flex items-center justify-center border-b border-zinc-800/50">
        <div className="text-5xl font-bold text-zinc-700/30 group-hover:text-zinc-600/30 transition-colors">
          {project.name.charAt(0)}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-zinc-100 mb-2">{project.name}</h3>
        <p className="text-sm text-zinc-400 leading-relaxed mb-4 line-clamp-3">
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
            variant="secondary"
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/80 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl border border-zinc-800 bg-zinc-950 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="sticky top-4 right-4 ml-auto w-9 h-9 rounded-lg border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm flex items-center justify-center text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-6 sm:p-8">
          <div className="aspect-video rounded-lg bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 flex items-center justify-center border border-zinc-800/50 mb-6">
            <div className="text-6xl font-bold text-zinc-700/30">{project.name.charAt(0)}</div>
          </div>

          <h2
            id="project-modal-title"
            className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-3"
          >
            {project.name}
          </h2>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>

          <div className="space-y-6">
            <section>
              <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                Overview
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">{project.overview}</p>
            </section>

            <section>
              <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                Problem
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">{project.problem}</p>
            </section>

            <section>
              <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                Solution
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">{project.solution}</p>
            </section>

            <section>
              <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                Key Features
              </h3>
              <ul className="space-y-2">
                {project.keyFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                    <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                Challenges
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">{project.challenges}</p>
            </section>

            <section>
              <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                Results
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">{project.results}</p>
            </section>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-6 mt-6 border-t border-zinc-800/50">
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
                variant="primary"
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
