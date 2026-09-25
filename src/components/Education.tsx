import React from 'react';
import { SectionWrapper } from './ui/SectionWrapper';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { educationData } from '../data/education';
import { GraduationCap, School, MapPin, Calendar, CheckCircle2, Award } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <SectionWrapper
      id="education"
      eyebrow="Academic Foundation"
      title="Education &amp; Schooling"
      subtitle="Full academic timeline reflecting undergraduate computer applications at IEM Kolkata and foundational schooling at New Barrackpur Colony Boys' High School."
    >
      <div className="max-w-4xl mx-auto relative">
        {/* Vertical Timeline Track for Desktop */}
        <div className="hidden md:block absolute left-8 top-6 bottom-6 w-[2px] bg-slate-200/80 dark:bg-surface-dark-border" />

        <div className="space-y-8 md:space-y-12">
          {educationData.map((edu, index) => {
            const isCurrent = edu.status === 'Current Student';
            return (
              <div key={index} className="relative flex flex-col md:flex-row items-start gap-6 md:gap-10">
                {/* Timeline Node Indicator */}
                <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-2xl bg-white/85 dark:bg-surface-dark-card/85 backdrop-blur-md border-2 border-accent-500/40 shadow-sm shrink-0 z-10">
                  {isCurrent ? (
                    <GraduationCap className="w-7 h-7 text-accent-500" />
                  ) : (
                    <School className="w-7 h-7 text-sky-500" />
                  )}
                </div>

                {/* Timeline Card */}
                <div className="flex-1 w-full">
                  <Card
                    hoverable
                    padding="lg"
                    className={`border transition-all duration-300 ${
                      isCurrent ? 'border-accent-500/40 shadow-amber-soft' : 'border-slate-200/80 dark:border-surface-dark-border'
                    }`}
                  >
                    {/* Header: Institution & Status */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1 md:hidden">
                          {isCurrent ? (
                            <GraduationCap className="w-5 h-5 text-accent-500" />
                          ) : (
                            <School className="w-5 h-5 text-sky-500" />
                          )}
                          <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                            {edu.duration}
                          </span>
                        </div>

                        <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                          {edu.institution}
                        </h3>
                        <p className="text-base font-semibold text-accent-700 dark:text-accent-400 mt-0.5">
                          {edu.degreeOrLevel}
                        </p>
                      </div>

                      <div className="flex flex-col sm:items-end gap-1.5">
                        <Badge
                          variant="status"
                          status={isCurrent ? 'In Progress' : 'Completed'}
                        >
                          {edu.status}
                        </Badge>
                        <span className="hidden md:flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-accent-500" />
                          {edu.duration}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono mb-6">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{edu.location}</span>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2 mb-6">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                        Academic Highlights
                      </h4>
                      <ul className="space-y-1.5">
                        {edu.highlights.map((highlight, hIdx) => (
                          <li
                            key={hIdx}
                            className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2"
                          >
                            <CheckCircle2 className="w-4 h-4 text-accent-500 mt-0.5 shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Relevant Modules */}
                    {edu.relevantFocus && (
                      <div className="pt-4 border-t border-slate-200/60 dark:border-surface-dark-border/60">
                        <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2 font-semibold">
                          Key Focus Areas
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {edu.relevantFocus.map((course, cIdx) => (
                            <span
                              key={cIdx}
                              className="text-xs font-mono px-2.5 py-1 rounded bg-white/70 dark:bg-surface-dark-elevated text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-surface-dark-border"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};
