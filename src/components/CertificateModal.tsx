import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  Download,
  Award,
  Calendar,
  CheckCircle,
  FileCheck,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Building2,
  UserCheck,
  Quote
} from 'lucide-react';
import { Certificate, LetterOfRecommendation } from '../data/types';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';

export type ModalItem =
  | { type: 'certificate'; data: Certificate }
  | { type: 'recommendation'; data: LetterOfRecommendation };

interface CertificateModalProps {
  item: ModalItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ item, onClose }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  // Close on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (item) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [item, onClose]);

  // Reset zoom on item change
  useEffect(() => {
    setIsZoomed(false);
  }, [item]);

  const isCert = item?.type === 'certificate';
  const cert = isCert ? (item.data as Certificate) : null;
  const lor = !isCert && item ? (item.data as LetterOfRecommendation) : null;

  const title = cert ? cert.title : lor?.title;
  const issuer = cert ? cert.issuer : lor?.organization;
  const date = cert ? cert.issueDate : lor?.date;
  const imageSrc = cert ? cert.image : lor?.documentImage;
  const pdfUrl = cert ? cert.pdfUrl : lor?.pdfUrl;

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          key="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-8 bg-slate-950/85 backdrop-blur-md overflow-y-auto"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-modal-title"
        >
          <motion.div
            key="modal-content"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-surface-dark-card border border-surface-dark-border rounded-2xl shadow-2xl overflow-hidden my-auto"
          >
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-surface-dark-border/80 bg-surface-dark-elevated/80 backdrop-blur-sm shrink-0">
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2 rounded-lg bg-accent-500/10 text-accent-400 border border-accent-500/20 shrink-0">
                  {isCert ? <Award className="w-5 h-5" /> : <FileCheck className="w-5 h-5" />}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-accent-400 font-semibold truncate">
                      {isCert ? 'Verified Certificate' : 'Official Letter of Recommendation'}
                    </span>
                    {cert?.gradeOrScore && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 shrink-0">
                        {cert.gradeOrScore}
                      </span>
                    )}
                    {lor?.cin && (
                      <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 shrink-0">
                        CIN: {lor.cin}
                      </span>
                    )}
                  </div>
                  <h2
                    id="certificate-modal-title"
                    className="text-base sm:text-lg font-bold text-white truncate font-display"
                  >
                    {title}
                  </h2>
                </div>
              </div>

              {/* Actions: Close button */}
              <div className="flex items-center gap-2 shrink-0 ml-4">
                {pdfUrl && (
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-colors"
                    title="Open Original PDF"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Open PDF</span>
                  </a>
                )}
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 border border-transparent hover:border-slate-700 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Two column on large screens, single column scrollable on mobile */}
            <div className="overflow-y-auto flex-1 p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left: Document Image Viewer (5 cols or 7 cols depending on aspect) */}
              <div className="lg:col-span-7 flex flex-col items-center justify-center">
                <div
                  className={`relative w-full rounded-xl overflow-hidden border border-surface-dark-border/80 bg-slate-950/60 shadow-inner flex items-center justify-center transition-all ${
                    isZoomed ? 'cursor-zoom-out max-h-[85vh] overflow-auto' : 'cursor-zoom-in max-h-[520px]'
                  }`}
                  onClick={() => setIsZoomed(!isZoomed)}
                  title="Click to toggle zoom"
                >
                  <img
                    src={imageSrc}
                    alt={title}
                    className={`w-full object-contain transition-transform duration-300 ${
                      isZoomed ? 'scale-125' : 'scale-100 hover:scale-[1.02]'
                    }`}
                    loading="eager"
                  />

                  {/* Floating zoom indicator */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-sm border border-slate-700/60 text-[11px] font-mono text-slate-300 flex items-center gap-1.5 pointer-events-none shadow-lg">
                    {isZoomed ? <ZoomOut className="w-3 h-3 text-accent-400" /> : <ZoomIn className="w-3 h-3 text-accent-400" />}
                    <span>{isZoomed ? 'Click to Fit' : 'Click to Zoom'}</span>
                  </div>
                </div>

                <div className="w-full flex items-center justify-between text-xs text-slate-400 font-mono mt-2 px-1">
                  <span>Direct High-Resolution Render</span>
                  {pdfUrl && (
                    <a
                      href={pdfUrl}
                      download
                      className="text-accent-400 hover:text-accent-300 inline-flex items-center gap-1 transition-colors"
                    >
                      <Download className="w-3 h-3" />
                      Download Original PDF
                    </a>
                  )}
                </div>
              </div>

              {/* Right: Detailed Metadata & Context (5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  {/* Meta Summary Cards */}
                  <div className="p-3.5 rounded-xl bg-surface-dark-elevated/70 border border-surface-dark-border/70 space-y-2 text-xs">
                    <div className="flex items-center gap-2 text-slate-300">
                      <Building2 className="w-4 h-4 text-accent-400 shrink-0" />
                      <span className="font-semibold text-white">{issuer}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 font-mono text-[11px]">
                      <Calendar className="w-3.5 h-3.5 text-accent-400/80 shrink-0" />
                      <span>{date}</span>
                      {cert?.period && <span className="text-slate-500">({cert.period})</span>}
                    </div>
                    {cert?.signer && (
                      <div className="flex items-center gap-2 text-slate-300 text-[11px] pt-1 border-t border-surface-dark-border/50">
                        <UserCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <div>
                          <span className="text-white font-medium">{cert.signer}</span>
                          {cert.signerTitle && (
                            <span className="text-slate-400 block text-[10px]">{cert.signerTitle}</span>
                          )}
                        </div>
                      </div>
                    )}
                    {lor?.recommenderName && (
                      <div className="flex items-center gap-2 text-slate-300 text-[11px] pt-1 border-t border-surface-dark-border/50">
                        <UserCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <div>
                          <span className="text-white font-medium">{lor.recommenderName}</span>
                          <span className="text-slate-400 block text-[10px]">
                            {lor.recommenderTitle} • {lor.organization}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Overview
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {cert ? cert.description : lor?.summary}
                    </p>
                  </div>

                  {/* What I Learned / What This Means - Golden Accent Block */}
                  <div className="p-3.5 rounded-xl bg-accent-500/10 border border-accent-500/30 text-xs sm:text-sm">
                    <div className="flex items-center gap-1.5 text-accent-400 font-semibold mb-1">
                      <CheckCircle className="w-4 h-4 text-accent-400 shrink-0" />
                      <span>{isCert ? 'What I Learned:' : 'What This Endorsement Means:'}</span>
                    </div>
                    <p className="text-slate-200 leading-relaxed italic">
                      "{isCert ? cert?.whatILearned : lor?.whatThisMeans}"
                    </p>
                  </div>

                  {/* LOR Specific: Key Quotes */}
                  {lor && lor.keyQuotes && (
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
                        <Quote className="w-3.5 h-3.5 text-accent-400" />
                        Manager Recognition Highlights
                      </h4>
                      <div className="space-y-2">
                        {lor.keyQuotes.map((quote, idx) => (
                          <blockquote
                            key={idx}
                            className="pl-3 border-l-2 border-accent-500/40 text-xs text-slate-300 italic"
                          >
                            "{quote}"
                          </blockquote>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Skills / Strengths Tags */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      {isCert ? 'Validated Competencies' : 'Endorsed Strengths'}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {isCert &&
                        cert?.skills.map((skill, idx) => (
                          <Badge key={idx} variant="accent" size="sm">
                            {skill}
                          </Badge>
                        ))}
                      {lor &&
                        lor.keyStrengths.map((strength, idx) => (
                          <Badge key={idx} variant="accent" size="sm">
                            {strength}
                          </Badge>
                        ))}
                    </div>
                  </div>

                  {/* Verification Codes / Credential Details */}
                  {cert?.verificationCodes && cert.verificationCodes.length > 0 && (
                    <div className="p-3 rounded-lg bg-surface-dark-elevated/40 border border-surface-dark-border/50 text-[11px] font-mono text-slate-400 space-y-1">
                      {cert.verificationCodes.map((c, idx) => (
                        <div key={idx} className="flex justify-between items-center">
                          <span className="text-slate-500">{c.label}:</span>
                          <span className="text-slate-300 font-semibold">{c.code}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {cert?.credentialId && (
                    <div className="p-3 rounded-lg bg-surface-dark-elevated/40 border border-surface-dark-border/50 text-[11px] font-mono text-slate-400 flex justify-between items-center">
                      <span className="text-slate-500">Roll / Credential No:</span>
                      <span className="text-slate-300 font-semibold">{cert.credentialId}</span>
                    </div>
                  )}
                </div>

                {/* Bottom Action Buttons */}
                <div className="pt-3 border-t border-surface-dark-border/80 flex items-center justify-end gap-3 mt-4">
                  <Button variant="ghost" size="sm" onClick={onClose}>
                    Close
                  </Button>
                  {cert?.credentialUrl && (
                    <Button
                      href={cert.credentialUrl}
                      external
                      variant="outline"
                      size="sm"
                      icon={<ExternalLink className="w-3.5 h-3.5" />}
                    >
                      Verify Online
                    </Button>
                  )}
                  {pdfUrl && (
                    <Button
                      href={pdfUrl}
                      download
                      variant="primary"
                      size="sm"
                      icon={<Download className="w-3.5 h-3.5" />}
                    >
                      Download Document
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
