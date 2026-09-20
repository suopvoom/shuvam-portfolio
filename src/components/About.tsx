import React from 'react';
import { SectionWrapper } from './ui/SectionWrapper';
import { Card } from './ui/Card';
import { profileData } from '../data/profile';
import { Target, Layers, CheckCircle2, GraduationCap, School } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <SectionWrapper
      id="about"
      eyebrow="Biography &amp; Direction"
      title="About Me"
      subtitle="Structured engineering logic, computer science fundamentals, and continuous skill building."
    >
      <div className="space-y-8">
        {/* Narrative Bio */}
        <div className="prose dark:prose-invert max-w-4xl text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed space-y-4">
          {profileData.bio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* 2-Column Grid: Career Objective & Academic Background */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Career Objective */}
          <Card className="border-l-4 border-l-accent-500 bg-accent-500/5 dark:bg-accent-500/10 h-full flex flex-col justify-between">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-accent-500/20 text-accent-700 dark:text-accent-400 shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                  Career Objective
                </h3>
                <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {profileData.careerGoal}
                </p>
              </div>
            </div>
          </Card>

          {/* Academic Background */}
          <Card className="border-l-4 border-l-accent-500/50 bg-slate-50/50 dark:bg-surface-dark-card/50 h-full flex flex-col justify-between">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-accent-500/15 text-accent-700 dark:text-accent-400 shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                  Academic Background
                </h3>
                <div className="mt-2 space-y-2">
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
                      {profileData.degree}
                    </p>
                    <p className="text-xs sm:text-sm text-accent-600 dark:text-accent-400 font-medium mt-0.5">
                      {profileData.institution}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800/80">
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                      <School className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>Schooling: New Barrackpur Colony Boys' High School</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Core Competencies & Focus Areas */}
        <Card className="bg-slate-50/50 dark:bg-surface-dark-card/50">
          <h3 className="font-display font-semibold text-slate-900 dark:text-white text-base mb-4 flex items-center gap-2">
            <Layers className="w-4 h-4 text-accent-500" />
            Core Competencies &amp; Focus Areas
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {profileData.focusAreas.map((area, index) => (
              <div
                key={index}
                className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 py-2 px-3 rounded-lg bg-white/60 dark:bg-surface-dark/60 border border-slate-200/50 dark:border-slate-800/60 shadow-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-accent-500 shrink-0" />
                <span className="font-medium">{area}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </SectionWrapper>
  );
};

