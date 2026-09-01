'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle, ArrowUpRight, Sparkles } from 'lucide-react';
import { Project } from '@/data/portfolioData';
import { Badge } from './Badge';
import { Button } from './Button';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="group relative rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none"
    >
      <div className="relative aspect-video overflow-hidden border-b border-zinc-200 dark:border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-600/10 to-violet-600/20 bg-glow-orb" />
        <div className="absolute inset-0 bg-dot-grid opacity-40" />
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.name} screenshot`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl font-bold text-zinc-900/10 group-hover:text-zinc-900/15 group-hover:scale-110 transition-all duration-500 dark:text-white/10 dark:group-hover:text-white/20">
              {project.name.charAt(0)}
            </div>
          </div>
        )}
        <div className="absolute top-4 left-4">
          <Badge>
            <Sparkles className="w-3 h-3 mr-1" />
            {project.featured ? 'Featured' : 'Project'}
          </Badge>
        </div>
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 grid place-items-center w-9 h-9 rounded-lg bg-white/80 backdrop-blur border border-zinc-200 dark:bg-zinc-900/80 dark:border-white/10">
          <ArrowUpRight className="w-4 h-4 text-zinc-900 dark:text-white" />
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between gap-3 mb-2">
          <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-zinc-950 transition-colors dark:text-zinc-100 dark:group-hover:text-white">
            {project.name}
          </h3>
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5 line-clamp-3">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button variant="secondary" size="sm" onClick={() => onViewDetails(project)}>
            View Details
            <ArrowUpRight className="w-3.5 h-3.5" />
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
    </motion.article>
  );
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-white/80 dark:bg-zinc-950/85 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-white/10 dark:bg-zinc-950"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="sticky top-4 right-4 ml-auto w-9 h-9 rounded-lg border border-zinc-200 bg-white/80 backdrop-blur-sm flex items-center justify-center text-zinc-600 hover:text-zinc-900 hover:border-indigo-400/40 transition-colors z-10 dark:border-white/10 dark:bg-zinc-900/80 dark:text-zinc-400 dark:hover:text-white"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-6 sm:p-8">
          <div className="relative aspect-video rounded-xl bg-gradient-to-br from-blue-600/20 via-indigo-600/10 to-violet-600/20 bg-glow-orb border border-zinc-200 overflow-hidden flex items-center justify-center mb-6 dark:border-white/10">
            <div className="absolute inset-0 bg-dot-grid opacity-40" />
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.name} screenshot`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <div className="relative text-6xl font-bold text-zinc-900/15 dark:text-white/15">
                {project.name.charAt(0)}
              </div>
            )}
          </div>

          <h2
            id="project-modal-title"
            className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-3"
          >
            {project.name}
          </h2>

          <div className="flex flex-wrap gap-1.5 mb-7">
            {project.technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>

          <div className="space-y-6">
            <section>
              <h3 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">
                Overview
              </h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {project.overview}
              </p>
            </section>

            <section>
              <h3 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">
                Problem
              </h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {project.problem}
              </p>
            </section>

            <section>
              <h3 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">
                Solution
              </h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {project.solution}
              </p>
            </section>

            <section>
              <h3 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-3">
                Key Features
              </h3>
              <ul className="space-y-2.5">
                {project.keyFeatures.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-zinc-700 dark:text-zinc-300"
                  >
                    <CheckCircle className="w-4 h-4 text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">
                Challenges
              </h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {project.challenges}
              </p>
            </section>

            <section>
              <h3 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">
                Results
              </h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {project.results}
              </p>
            </section>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-6 mt-6 border-t border-zinc-200 dark:border-white/5">
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
      </motion.div>
    </motion.div>
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