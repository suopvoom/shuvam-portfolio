import React, { useState } from 'react';
import { SectionWrapper } from './ui/SectionWrapper';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { skillsData } from '../data/skills';
import { SkillItem } from '../data/types';
import { Code2, GitBranch, Cloud, CheckCircle2, ChevronDown, ChevronUp, List, LayoutGrid, HelpCircle, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const [viewMode, setViewMode] = useState<'matrix' | 'accessible'>('matrix');
  const [expandedSkill, setExpandedSkill] = useState<string | null>('C++'); // Pre-expand one to show interaction

  const coreSkills = skillsData.filter(s => s.tier === 'core');
  const workingSkills = skillsData.filter(s => s.tier === 'working');

  const toggleSkill = (name: string) => {
    setExpandedSkill(prev => (prev === name ? null : name));
  };

  const getSkillIcon = (name: string) => {
    switch (name) {
      case 'C':
      case 'C++':
      case 'Python':
        return <Code2 className="w-5 h-5 text-accent-500" />;
      case 'Git':
      case 'GitHub':
        return <GitBranch className="w-5 h-5 text-sky-500" />;
      case 'AWS':
        return <Cloud className="w-5 h-5 text-amber-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-accent-500" />;
    }
  };

  return (
    <SectionWrapper
      id="skills"
      eyebrow="Technical Proficiency"
      title="Skills &amp; Capabilities"
      subtitle="An honest, qualitative breakdown of my technical toolkit. Grouped into Core Strengths and Working Knowledge—without arbitrary percentage bars."
    >
      {/* View Switcher: Interactive Matrix vs Accessible List */}
      <div className="flex items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-1.5 p-1 rounded-lg bg-slate-100 dark:bg-surface-dark-elevated border border-surface-light-border dark:border-surface-dark-border">
          <button
            onClick={() => setViewMode('matrix')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              viewMode === 'matrix'
                ? 'bg-white dark:bg-surface-dark text-accent-600 dark:text-accent-400 font-semibold shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
            aria-pressed={viewMode === 'matrix'}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            Interactive View
          </button>
          <button
            onClick={() => setViewMode('accessible')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              viewMode === 'accessible'
                ? 'bg-white dark:bg-surface-dark text-accent-600 dark:text-accent-400 font-semibold shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
            aria-pressed={viewMode === 'accessible'}
          >
            <List className="w-3.5 h-3.5" />
            Accessible List
          </button>
        </div>

        <div className="text-xs text-slate-500 dark:text-slate-400 font-mono hidden sm:block">
          Tap or click any skill card to expand details
        </div>
      </div>

      {viewMode === 'matrix' ? (
        <div className="space-y-12">
          {/* Group 1: Core Strengths (Comfortable with) */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-500 animate-pulse" />
              <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white tracking-tight">
                Core Strengths <span className="text-sm font-normal text-slate-500 dark:text-slate-400 font-mono">(Comfortable with)</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {coreSkills.map((skill: SkillItem) => {
                const isExpanded = expandedSkill === skill.name;
                return (
                  <div
                    key={skill.name}
                    onClick={() => toggleSkill(skill.name)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleSkill(skill.name);
                      }
                    }}
                    tabIndex={0}
                    role="button"
                    aria-expanded={isExpanded}
                    aria-label={`${skill.name} skill details`}
                    className="cursor-pointer focus-visible:ring-2 focus-visible:ring-accent-500 rounded-xl"
                  >
                    <Card
                      hoverable
                      className={`h-full border transition-all duration-300 ${
                        isExpanded
                          ? 'border-accent-500/60 dark:border-accent-500/60 shadow-amber-soft dark:bg-surface-dark-card'
                          : 'hover:border-accent-500/30'
                      }`}
                    >
                      {/* Card Header */}
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 rounded-xl bg-accent-500/10 border border-accent-500/20">
                            {getSkillIcon(skill.name)}
                          </div>
                          <div>
                            <h4 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                              {skill.name}
                            </h4>
                            <span className="text-xs font-mono text-accent-700 dark:text-accent-400 font-medium">
                              {skill.proficiencyLabel}
                            </span>
                          </div>
                        </div>

                        <div className="p-1 text-slate-400 dark:text-slate-500">
                          {isExpanded ? <ChevronUp className="w-4 h-4 text-accent-500" /> : <ChevronDown className="w-4 h-4" />}
                        </div>
                      </div>

                      {/* Brief Description */}
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {skill.contextNote}
                      </p>

                      {/* Expandable Application Concepts */}
                      {isExpanded && (
                        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-surface-dark-border/60 animate-fade-in">
                          <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2">
                            Practical Competencies
                          </span>
                          <div className="space-y-1.5">
                            {skill.practicalApplications.map((app, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-accent-500 shrink-0" />
                                <span>{app}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Group 2: Working Knowledge (Moderate / Learning) */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
              <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white tracking-tight">
                Working Knowledge <span className="text-sm font-normal text-slate-500 dark:text-slate-400 font-mono">(Moderate / Learning)</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {workingSkills.map((skill: SkillItem) => {
                const isExpanded = expandedSkill === skill.name;
                return (
                  <div
                    key={skill.name}
                    onClick={() => toggleSkill(skill.name)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleSkill(skill.name);
                      }
                    }}
                    tabIndex={0}
                    role="button"
                    aria-expanded={isExpanded}
                    aria-label={`${skill.name} skill details`}
                    className="cursor-pointer focus-visible:ring-2 focus-visible:ring-accent-500 rounded-xl"
                  >
                    <Card
                      hoverable
                      className={`h-full border transition-all duration-300 ${
                        isExpanded
                          ? 'border-sky-500/60 dark:border-sky-500/60 shadow-md dark:bg-surface-dark-card'
                          : 'hover:border-sky-500/30'
                      }`}
                    >
                      {/* Card Header */}
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20">
                            {getSkillIcon(skill.name)}
                          </div>
                          <div>
                            <h4 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                              {skill.name}
                            </h4>
                            <span className="text-xs font-mono text-sky-700 dark:text-sky-400 font-medium">
                              {skill.proficiencyLabel}
                            </span>
                          </div>
                        </div>

                        <div className="p-1 text-slate-400 dark:text-slate-500">
                          {isExpanded ? <ChevronUp className="w-4 h-4 text-sky-500" /> : <ChevronDown className="w-4 h-4" />}
                        </div>
                      </div>

                      {/* Brief Description */}
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {skill.contextNote}
                      </p>

                      {/* Expandable Application Concepts */}
                      {isExpanded && (
                        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-surface-dark-border/60 animate-fade-in">
                          <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2">
                            Practical Competencies
                          </span>
                          <div className="space-y-1.5">
                            {skill.practicalApplications.map((app, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                                <span>{app}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        /* Accessible Screen-Reader Friendly List View */
        <div className="space-y-8 p-6 glass-card rounded-2xl border">
          <div>
            <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-3">
              1. Core Strengths (Comfortable With)
            </h3>
            <ul className="space-y-4">
              {coreSkills.map((s) => (
                <li key={s.name} className="border-l-2 border-accent-500 pl-4">
                  <div className="font-bold text-slate-900 dark:text-white text-base">{s.name}</div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{s.contextNote}</p>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Applications: {s.practicalApplications.join(', ')}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-slate-100 dark:border-surface-dark-border/60">
            <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-3">
              2. Working Knowledge (Moderate / Learning)
            </h3>
            <ul className="space-y-4">
              {workingSkills.map((s) => (
                <li key={s.name} className="border-l-2 border-sky-500 pl-4">
                  <div className="font-bold text-slate-900 dark:text-white text-base">{s.name}</div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{s.contextNote}</p>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Applications: {s.practicalApplications.join(', ')}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Honest Skill Level Note */}
      <div className="mt-12 p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-surface-dark-card border border-surface-light-border dark:border-surface-dark-border flex items-center gap-3 text-xs text-slate-600 dark:text-slate-400">
        <HelpCircle className="w-5 h-5 text-accent-500 shrink-0" />
        <div>
          <strong className="text-slate-900 dark:text-white">Authenticity Standard:</strong> Skills are classified purely into practical working confidence tiers without arbitrary percentage meters.
        </div>
      </div>
    </SectionWrapper>
  );
};
