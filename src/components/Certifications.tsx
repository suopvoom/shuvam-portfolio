import React, { useState, useEffect } from 'react';
import { SectionWrapper } from './ui/SectionWrapper';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { certificatesData } from '../data/certificates';
import { Certificate } from '../data/types';
import { Award, ExternalLink, X, Calendar, CheckCircle, FileText } from 'lucide-react';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedCert) {
        setSelectedCert(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCert]);

  return (
    <SectionWrapper
      id="certifications"
      eyebrow="Academic &amp; Practical Validation"
      title="Certifications &amp; Milestones"
      subtitle="Genuine academic certifications and technical workshop verifications earned through coursework and independent study."
    >
      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {certificatesData.map((cert: Certificate) => {
          return (
            <Card
              key={cert.id}
              hoverable
              className="flex flex-col justify-between h-full group border transition-all duration-300"
            >
              <div>
                {/* Certificate Thumbnail Placeholder */}
                <div className="relative aspect-[4/3] rounded-lg bg-slate-100 dark:bg-surface-dark-elevated border border-surface-light-border dark:border-surface-dark-border flex flex-col items-center justify-center p-4 text-center mb-4 group-hover:border-accent-500/30 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-accent-500/10 border border-accent-500/30 flex items-center justify-center text-accent-600 dark:text-accent-400 mb-2">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    [CERTIFICATE PREVIEW]
                  </span>
                </div>

                {/* Title & Issuer */}
                <h3 className="font-display font-bold text-base text-slate-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {cert.issuer}
                </p>

                {/* Date */}
                <div className="flex items-center gap-1.5 text-xs text-accent-700 dark:text-accent-400 font-mono mt-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{cert.issueDate}</span>
                </div>
              </div>

              {/* View Button */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-surface-dark-border/60">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedCert(cert)}
                  className="w-full"
                  icon={<FileText className="w-3.5 h-3.5" />}
                >
                  View Details
                </Button>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Accessible Certificate Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
        >
          <div
            className="glass-modal rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-surface-dark-elevated transition-colors"
              aria-label="Close certificate modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-accent-500/10 text-accent-600 dark:text-accent-400 border border-accent-500/20">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-accent-700 dark:text-accent-400 uppercase tracking-wider block">
                  Verified Academic Milestone
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Issued: {selectedCert.issueDate}
                </span>
              </div>
            </div>

            <h3
              id="cert-modal-title"
              className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white mb-2"
            >
              {selectedCert.title}
            </h3>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300 mb-4">
              Issuer: {selectedCert.issuer}
            </p>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {selectedCert.description}
            </p>

            {/* Skills Covered */}
            <div className="mb-6">
              <span className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2">
                Competencies Validated
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedCert.skills.map((skill, idx) => (
                  <Badge key={idx} variant="accent" size="sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Credential ID / Placeholder Notice */}
            <div className="p-3.5 rounded-lg bg-slate-100 dark:bg-surface-dark-elevated border border-surface-light-border dark:border-surface-dark-border text-xs text-slate-600 dark:text-slate-400 font-mono mb-6">
              <div>Credential ID: {selectedCert.credentialId || '[PENDING REGISTRATION ID]'}</div>
              <div className="text-[11px] text-slate-400 dark:text-slate-500 mt-1">
                Note: Verification PDF or scanned certificate can be attached in `/public/certificates/`.
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3">
              <Button variant="ghost" size="sm" onClick={() => setSelectedCert(null)}>
                Close
              </Button>
              {selectedCert.credentialUrl ? (
                <Button
                  href={selectedCert.credentialUrl}
                  external
                  variant="primary"
                  size="sm"
                  icon={<ExternalLink className="w-3.5 h-3.5" />}
                >
                  Verify Online
                </Button>
              ) : (
                <Button variant="secondary" size="sm" disabled>
                  Official Record Archived
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </SectionWrapper>
  );
};
