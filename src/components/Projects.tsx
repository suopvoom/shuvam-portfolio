import React, { useState, useRef } from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import { SectionWrapper } from './ui/SectionWrapper';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { ProjectModal } from './ProjectModal';
import { projectsData } from '../data/projects';
import { Project } from '../data/types';
import { Github, ExternalLink, Briefcase, Code2, ArrowUpRight, Sparkles, Lightbulb } from 'lucide-react';

export const Projects: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [triggerElement, setTriggerElement] = useState<HTMLElement | null>(null);

  const openModal = (project: Project, e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => {
    setTriggerElement(e.currentTarget);
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  // Staggered grid container animation
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: prefersReducedMotion
        ? { duration: 0.1 }
        : { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <SectionWrapper
      id="projects"
      eyebrow="Practical Engineering"
      title="Featured Projects"
      subtitle="A data-driven showcase of verified codebases, including my ProDigy InfoTech C internship projects and ongoing software tools. Each project links to its real GitHub repository."
    >
      {/* Responsive Projects Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projectsData.map((project: Project) => {
          const isInProgress = project.status === 'In Progress';

          return (
            <motion.div key={project.id} variants={itemVariants} className="h-full flex flex-col">
              <Card
                hoverable
                tabIndex={0}
                role="button"
                aria-label={`View details for ${project.title}`}
                onClick={(e) => openModal(project, e)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openModal(project, e);
                  }
                }}
                className={`h-full flex flex-col justify-between border cursor-pointer group transition-all duration-300 focus-visible:ring-2 focus-visible:ring-accent-500 rounded-xl ${
                  isInProgress
                    ? 'border-amber-500/40 dark:border-amber-500/30 hover:border-amber-500/70 shadow-amber-soft'
                    : 'hover:border-accent-500/40'
                }`}
              >
                <div>
                  {/* Top Bar: Status Badge & Internship Task Label */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <Badge variant="status" status={project.status}>
                      {project.status}
                    </Badge>

                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-surface-dark-elevated text-slate-800 dark:text-slate-200 border border-surface-light-border dark:border-surface-dark-border font-semibold">
                      {project.language}
                    </span>
                  </div>

                  {/* Internship Program Label (where applicable) */}
                  {project.internshipTask && (
                    <div className="mb-2.5">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-accent-700 dark:text-accent-400 font-medium line-clamp-1">
                        <Briefcase className="w-3 h-3 text-accent-500 shrink-0" />
                        {project.internshipTask}
                      </span>
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors tracking-tight">
                    {project.title}
                  </h3>

                  {/* One-Line Description */}
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Concepts Pills (where applicable) */}
                  {project.concepts && project.concepts.length > 0 && (
                    <div className="mt-4 flex flex-wrap items-center gap-1.5">
                      {project.concepts.map((concept, cIdx) => (
                        <span
                          key={cIdx}
                          className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-accent-500/10 text-accent-700 dark:text-accent-300 border border-accent-500/20"
                        >
                          <Lightbulb className="w-2.5 h-2.5 text-accent-500" />
                          {concept}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer: Tech Stack Tags & Actions */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-surface-dark-border/60">
                  {/* Framework / Tools Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.frameworkOrTools.map((tool) => (
                      <span
                        key={tool}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-surface-dark-elevated text-slate-600 dark:text-slate-400 border border-surface-light-border dark:border-surface-dark-border transition-colors group-hover:border-accent-500/30"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons: Real GitHub Repo & View Details */}
                  <div className="flex items-center justify-between gap-2 pt-1">
                    <Button
                      href={project.githubUrl}
                      external
                      variant="outline"
                      size="sm"
                      icon={<Github className="w-3.5 h-3.5" />}
                      onClick={(e) => e.stopPropagation()} // Let link open without opening modal
                    >
                      Repository
                    </Button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(project, e);
                      }}
                      className="inline-flex items-center gap-1 text-xs font-mono text-accent-700 dark:text-accent-400 hover:text-accent-600 dark:hover:text-accent-300 font-semibold p-1 transition-colors"
                      aria-label={`Open details modal for ${project.title}`}
                    >
                      <span>Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Detail Modal Component with Focus Trapping */}
      <ProjectModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={closeModal}
        triggerElementRef={triggerElement}
      />
    </SectionWrapper>
  );
};
