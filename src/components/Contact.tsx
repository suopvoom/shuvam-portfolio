import React, { useState } from 'react';
import { SectionWrapper } from './ui/SectionWrapper';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { profileData } from '../data/profile';
import { Mail, Phone, Linkedin, Github, MapPin, Copy, Check, Send, AlertCircle, CheckCircle2, Info, ArrowUpRight } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);

  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [formValidated, setFormValidated] = useState<boolean>(false);
  const [isValidating, setIsValidating] = useState<boolean>(false);

  const copyToClipboard = async (text: string, type: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsValidating(true);

    // Honest handling: simulate client-side validation check.
    // Explicitly states that backend integration is required rather than simulating fake delivery.
    setTimeout(() => {
      setIsValidating(false);
      setFormValidated(true);
    }, 500);
  };

  return (
    <SectionWrapper
      id="contact"
      eyebrow="Direct Communication"
      title="Get In Touch"
      subtitle="Available for software developer internships, academic collaboration, and engineering discussions. Reach out directly via phone, email, or LinkedIn."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left 5 Columns: Direct Contact Cards with Click-to-Action & Copy */}
        <div className="lg:col-span-5 space-y-4">
          {/* Email Card */}
          <Card hoverable className="border transition-all duration-300">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="p-3 rounded-xl bg-accent-500/10 text-accent-600 dark:text-accent-400 border border-accent-500/20 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                    Email Address
                  </span>
                  <a
                    href={`mailto:${profileData.email}`}
                    className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white hover:text-accent-600 dark:hover:text-accent-400 transition-colors break-all"
                  >
                    {profileData.email}
                  </a>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    Click to open mail client
                  </span>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(profileData.email, 'email')}
                className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-surface-dark-elevated border border-surface-light-border dark:border-surface-dark-border transition-all relative group"
                aria-label="Copy email address"
                title="Copy to clipboard"
              >
                {copiedType === 'email' ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
                {copiedType === 'email' && (
                  <span className="absolute -top-7 right-0 px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-mono text-[10px] font-bold shadow-md animate-fade-in">
                    Copied!
                  </span>
                )}
              </button>
            </div>
          </Card>

          {/* Phone Card */}
          <Card hoverable className="border transition-all duration-300">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="p-3 rounded-xl bg-accent-500/10 text-accent-600 dark:text-accent-400 border border-accent-500/20 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                    Direct Phone
                  </span>
                  <a
                    href={`tel:${profileData.phoneRaw}`}
                    className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white hover:text-accent-600 dark:hover:text-accent-400 transition-colors font-mono"
                  >
                    {profileData.phone}
                  </a>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    Click to call directly
                  </span>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(profileData.phone, 'phone')}
                className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-surface-dark-elevated border border-surface-light-border dark:border-surface-dark-border transition-all relative group"
                aria-label="Copy phone number"
                title="Copy to clipboard"
              >
                {copiedType === 'phone' ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
                {copiedType === 'phone' && (
                  <span className="absolute -top-7 right-0 px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-mono text-[10px] font-bold shadow-md animate-fade-in">
                    Copied!
                  </span>
                )}
              </button>
            </div>
          </Card>

          {/* LinkedIn Profile Card */}
          <Card hoverable className="border transition-all duration-300">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                    LinkedIn Network
                  </span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">
                    Shuvam Chowdhury
                  </span>
                </div>
              </div>

              <Button
                href={profileData.linkedinUrl}
                external
                variant="outline"
                size="sm"
                icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                iconPosition="right"
              >
                Connect
              </Button>
            </div>
          </Card>

          {/* Location & Academic Base */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-surface-dark-card border border-surface-light-border dark:border-surface-dark-border text-xs text-slate-600 dark:text-slate-400 space-y-1 font-mono">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-medium">
              <MapPin className="w-4 h-4 text-accent-500" />
              <span>{profileData.location}</span>
            </div>
            <div className="pl-6 text-[11px] text-slate-500">
              {profileData.institution} &bull; Department of Computer Applications
            </div>
          </div>
        </div>

        {/* Right 7 Columns: Client-Side Validated Contact Form */}
        <div className="lg:col-span-7">
          <Card padding="lg" className="border">
            <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
              Complete the form below to initiate communication. Includes client-side input validation.
            </p>

            {formValidated ? (
              <div className="p-6 rounded-xl bg-accent-500/10 border border-accent-500/30 text-slate-900 dark:text-white space-y-4 animate-fade-in">
                <div className="flex items-center gap-3 text-accent-600 dark:text-accent-400">
                  <CheckCircle2 className="w-6 h-6 shrink-0" />
                  <h4 className="font-display font-bold text-base sm:text-lg">
                    Form Inputs Validated Successfully
                  </h4>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Thank you, <strong className="text-slate-900 dark:text-white">{formData.name}</strong>. Your message inputs were validated cleanly on the client side.
                </p>

                {/* Honest Backend Notice */}
                <div className="p-3.5 rounded-lg bg-white/60 dark:bg-surface-dark/80 border border-accent-500/20 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                  <div className="flex items-center gap-1.5 font-semibold text-accent-700 dark:text-accent-400">
                    <Info className="w-4 h-4" />
                    <span>Backend Notice (Form Not Yet Connected)</span>
                  </div>
                  <p>
                    This form is running client-side validation only. To deliver messages to your inbox in production, connect this form handler to a live service such as <strong>Formspree</strong> or <strong>EmailJS</strong>. In the meantime, please contact via the direct email or phone cards.
                  </p>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setFormValidated(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                >
                  Reset Form
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Your Name <span className="text-accent-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className={`w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-surface-dark-elevated text-slate-900 dark:text-white border text-sm transition-colors focus-visible:ring-2 focus-visible:ring-accent-500 ${
                      errors.name
                        ? 'border-red-500 dark:border-red-400'
                        : 'border-surface-light-border dark:border-surface-dark-border'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500 dark:text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Your Email <span className="text-accent-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@company.com"
                    className={`w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-surface-dark-elevated text-slate-900 dark:text-white border text-sm transition-colors focus-visible:ring-2 focus-visible:ring-accent-500 ${
                      errors.email
                        ? 'border-red-500 dark:border-red-400'
                        : 'border-surface-light-border dark:border-surface-dark-border'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500 dark:text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Subject (Optional)
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Software Internship / Collaboration"
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-surface-dark-elevated text-slate-900 dark:text-white border border-surface-light-border dark:border-surface-dark-border text-sm transition-colors focus-visible:ring-2 focus-visible:ring-accent-500"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Message <span className="text-accent-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className={`w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-surface-dark-elevated text-slate-900 dark:text-white border text-sm transition-colors focus-visible:ring-2 focus-visible:ring-accent-500 resize-y ${
                      errors.message
                        ? 'border-red-500 dark:border-red-400'
                        : 'border-surface-light-border dark:border-surface-dark-border'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500 dark:text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    disabled={isValidating}
                    icon={<Send className="w-4 h-4" />}
                    className="w-full sm:w-auto"
                  >
                    {isValidating ? 'Validating...' : 'Validate Message'}
                  </Button>
                </div>
              </form>
            )}
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
};
