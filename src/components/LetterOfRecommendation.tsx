import React, { useState } from 'react';
import { SectionWrapper } from './ui/SectionWrapper';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { recommendationData } from '../data/recommendation';
import { CertificateModal } from './CertificateModal';
import {
  FileCheck,
  Quote,
  Building2,
  Calendar,
  UserCheck,
  Maximize2,
  Download,
  Award,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export const LetterOfRecommendation: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const lor = recommendationData;

  return (
    <SectionWrapper
      id="recommendation"
      eyebrow="Executive Endorsement"
      title="Letter of Recommendation"
      subtitle="Official corporate recommendation awarded upon successful completion of the Software Development Internship at Prodigy InfoTech."
    >
      <div className="relative">
        {/* Main Recommendation Feature Card */}
        <div className="relative rounded-2xl border border-accent-500/35 dark:border-accent-500/30 bg-white/80 dark:bg-surface-dark-card/80 backdrop-blur-md p-6 sm:p-8 lg:p-10 shadow-xl dark:shadow-amber-soft/10 overflow-hidden">
          {/* Subtle background glow effect */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Recommender details, quotes, key highlights (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Header Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-500/15 text-accent-800 dark:text-accent-400 border border-accent-500/30 text-xs font-semibold font-mono">
                  <Sparkles className="w-3.5 h-3.5" />
                  Engineering Manager Endorsement
                </span>
                {lor.cin && (
                  <span className="text-[11px] font-mono text-slate-600 dark:text-slate-400 px-2.5 py-1 rounded-full bg-white/70 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700">
                    Ref: {lor.cin}
                  </span>
                )}
              </div>

              {/* Recommender Info Header */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
                  Software Development Internship Recommendation
                </h3>
                <div className="mt-2 flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-600 dark:text-slate-400">
                  <span className="flex items-center gap-1.5 font-semibold text-slate-900 dark:text-slate-200">
                    <Building2 className="w-4 h-4 text-accent-500 shrink-0" />
                    {lor.organization} ({lor.location})
                  </span>
                  <span className="flex items-center gap-1.5 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    {lor.date}
                  </span>
                </div>
              </div>

              {/* Endorsing Manager Signature Card */}
              <div className="p-4 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-surface-dark-border/80 flex items-start gap-3.5 shadow-2xs">
                <div className="p-2.5 rounded-lg bg-accent-500/10 text-accent-600 dark:text-accent-500 border border-accent-500/20 shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    {lor.recommenderName}
                  </div>
                  <div className="text-xs text-accent-700 dark:text-accent-400 font-medium">
                    {lor.recommenderTitle} • {lor.organization}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    Candidate: <span className="font-semibold text-slate-800 dark:text-slate-300">{lor.candidateName}</span> ({lor.candidateInstitution})
                  </div>
                </div>
              </div>

              {/* Featured Key Quotes */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-semibold">
                  <Quote className="w-3.5 h-3.5 text-accent-500" />
                  Key Excerpts from Recommender
                </div>
                <div className="space-y-2.5">
                  {lor.keyQuotes.slice(0, 3).map((quote, idx) => (
                    <blockquote
                      key={idx}
                      className="pl-3.5 border-l-2 border-accent-500/50 text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed"
                    >
                      "{quote}"
                    </blockquote>
                  ))}
                </div>
              </div>

              {/* "What This Endorsement Means" Block */}
              <div className="p-4 rounded-xl bg-accent-500/10 dark:bg-accent-500/10 border-l-3 border-accent-500 text-xs sm:text-sm">
                <div className="flex items-center gap-1.5 font-bold text-accent-800 dark:text-accent-400 mb-1 tracking-wide uppercase text-[10px] font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>What This Endorsement Means:</span>
                </div>
                <p className="text-slate-800 dark:text-slate-200 italic leading-relaxed">
                  "{lor.whatThisMeans}"
                </p>
              </div>

              {/* Endorsed Strengths Pills */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 font-semibold">
                  Recognized Competencies &amp; Qualities
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {lor.keyStrengths.map((strength, idx) => (
                    <Badge key={idx} variant="accent" size="sm">
                      {strength}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => setShowModal(true)}
                  icon={<Maximize2 className="w-4 h-4" />}
                >
                  View Full Recommendation
                </Button>
                {lor.pdfUrl && (
                  <Button
                    href={lor.pdfUrl}
                    download
                    variant="outline"
                    size="md"
                    icon={<Download className="w-4 h-4" />}
                  >
                    Download Official PDF
                  </Button>
                )}
              </div>
            </div>

            {/* Right Column: High-Res Interactive Document Preview (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div
                className="group/doc relative w-full max-w-sm rounded-xl overflow-hidden border-2 border-slate-200/90 dark:border-surface-dark-border bg-white/90 dark:bg-slate-950/90 shadow-2xl transition-all duration-300 hover:border-accent-500/60 hover:shadow-amber-soft/30 cursor-pointer"
                onClick={() => setShowModal(true)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setShowModal(true);
                  }
                }}
                aria-label="Click to open Letter of Recommendation document"
              >
                {/* Document Image */}
                <div className="relative aspect-[1/1.414] overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <img
                    src={lor.documentImage}
                    alt="Prodigy InfoTech Letter of Recommendation"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/doc:scale-105"
                    loading="lazy"
                  />

                  {/* Hover Inspect Overlay */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/doc:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-2 backdrop-blur-[2px]">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900/95 text-accent-400 border border-accent-500/50 text-xs font-semibold shadow-xl">
                      <Maximize2 className="w-4 h-4" />
                      Inspect Full Document
                    </span>
                    <span className="text-[11px] text-slate-300 font-mono">
                      High-Resolution Direct Scan
                    </span>
                  </div>
                </div>

                {/* Document Card Footer */}
                <div className="p-3.5 bg-slate-50/90 dark:bg-surface-dark-elevated/90 border-t border-slate-200/80 dark:border-surface-dark-border flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-800 dark:text-slate-300 flex items-center gap-1.5">
                    <FileCheck className="w-4 h-4 text-emerald-500" />
                    Verified Corporate LOR
                  </span>
                  <span className="text-[11px] text-accent-700 dark:text-accent-400 font-medium">
                    Click to Enlarge
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accessible Document Preview Modal */}
      <CertificateModal
        item={showModal ? { type: 'recommendation', data: lor } : null}
        onClose={() => setShowModal(false)}
      />
    </SectionWrapper>
  );
};
