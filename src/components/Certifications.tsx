import React, { useState } from 'react';
import { SectionWrapper } from './ui/SectionWrapper';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { certificatesData } from '../data/certificates';
import { Certificate } from '../data/types';
import { CertificateModal } from './CertificateModal';
import { Award, Calendar, ExternalLink, Maximize2, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <SectionWrapper
      id="certifications"
      eyebrow="Verified Academic & Practical Credentials"
      title="Certifications & Milestones"
      subtitle="Accredited academic achievements and enterprise simulation credentials verified through rigorous coursework, proctored examinations, and technical challenges."
    >
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {certificatesData.map((cert: Certificate) => {
          return (
            <Card
              key={cert.id}
              hoverable
              padding="none"
              className="flex flex-col justify-between h-full group border border-slate-200/80 dark:border-surface-dark-border bg-white/80 dark:bg-surface-dark-card/80 backdrop-blur-md overflow-hidden transition-all duration-300 hover:shadow-xl dark:hover:shadow-amber-soft/20 hover:border-accent-500/40 dark:hover:border-accent-500/40 rounded-xl"
            >
              <div>
                {/* Certificate Image Preview with interactive overlay */}
                <div
                  className="relative aspect-[16/10] overflow-hidden bg-slate-100/80 dark:bg-slate-950/80 border-b border-slate-200/80 dark:border-surface-dark-border cursor-pointer group/img"
                  onClick={() => setSelectedCert(cert)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedCert(cert);
                    }
                  }}
                  aria-label={`View full certificate for ${cert.title}`}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                    loading="lazy"
                  />

                  {/* Top-Right Badge: Score or Simulation */}
                  {cert.gradeOrScore ? (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-amber-500/90 text-slate-950 font-bold text-[11px] font-mono shadow-md backdrop-blur-xs flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-slate-950" />
                      <span>{cert.gradeOrScore}</span>
                    </div>
                  ) : (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-900/85 text-accent-300 border border-accent-500/35 font-medium text-[11px] font-mono shadow-md backdrop-blur-xs flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-accent-300" />
                      <span>Enterprise Simulation</span>
                    </div>
                  )}

                  {/* Hover Inspect Overlay */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900/90 text-accent-400 border border-accent-500/40 text-xs font-semibold shadow-lg">
                      <Maximize2 className="w-3.5 h-3.5" />
                      Inspect Certificate
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 sm:p-6 space-y-4">
                  {/* Issuer & Date Row */}
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="font-semibold text-accent-700 dark:text-accent-400 truncate flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 shrink-0" />
                      {cert.issuer}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 font-mono shrink-0 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {cert.issueDate}
                    </span>
                  </div>

                  {/* Certificate Title */}
                  <h3
                    onClick={() => setSelectedCert(cert)}
                    className="font-display font-bold text-lg text-slate-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors cursor-pointer line-clamp-2"
                  >
                    {cert.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {cert.description}
                  </p>

                  {/* Dedicated "What I Learned:" Block */}
                  <div className="p-3.5 rounded-r-lg rounded-l-xs bg-amber-500/10 dark:bg-amber-500/10 border-l-3 border-amber-500 text-xs">
                    <div className="flex items-center gap-1.5 font-bold text-amber-800 dark:text-amber-400 mb-1 tracking-wide uppercase text-[10px] font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>What I Learned:</span>
                    </div>
                    <p className="text-slate-800 dark:text-slate-200 italic leading-relaxed">
                      "{cert.whatILearned}"
                    </p>
                  </div>

                  {/* Skills / Competency Pills */}
                  <div>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.slice(0, 4).map((skill, idx) => (
                        <Badge key={idx} variant="accent" size="sm">
                          {skill}
                        </Badge>
                      ))}
                      {cert.skills.length > 4 && (
                        <span className="text-[11px] text-slate-400 dark:text-slate-500 self-center font-mono">
                          +{cert.skills.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer: View Action */}
              <div className="p-5 pt-0 sm:p-6 sm:pt-0">
                <div className="pt-4 border-t border-slate-200/60 dark:border-surface-dark-border/60 flex items-center justify-between gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedCert(cert)}
                    className="w-full"
                    icon={<Maximize2 className="w-3.5 h-3.5" />}
                  >
                    View Details &amp; Credential
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Accessible Reusable Modal */}
      <CertificateModal
        item={selectedCert ? { type: 'certificate', data: selectedCert } : null}
        onClose={() => setSelectedCert(null)}
      />
    </SectionWrapper>
  );
};
