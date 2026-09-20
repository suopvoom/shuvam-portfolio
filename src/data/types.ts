/**
 * Data architecture types for Shuvam Chowdhury's Portfolio
 * Following strict authenticity guardrails and structured data models.
 */

export type ProjectStatus = 'Completed' | 'In Progress' | 'Planned';

export interface Project {
  id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  language: string;
  frameworkOrTools: string[];
  features: string[];
  concepts?: string[];
  internshipTask?: string;
  githubUrl: string;
  liveDemoUrl?: string;
}

export type SkillTier = 'core' | 'working';
export type SkillProficiency = 'Comfortable with' | 'Moderate / Learning' | 'Proficient' | 'Comfortable' | 'Familiar' | 'Learning';

export interface SkillItem {
  name: string;
  tier: SkillTier;
  group: 'Core strengths' | 'Working knowledge';
  proficiencyLabel: 'Comfortable with' | 'Moderate / Learning';
  contextNote: string;
  practicalApplications: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  period?: string;
  credentialId?: string;
  credentialUrl?: string;
  image: string;
  pdfUrl?: string;
  skills: string[];
  description: string;
  whatILearned: string;
  signer?: string;
  signerTitle?: string;
  gradeOrScore?: string;
  verificationCodes?: { label: string; code: string }[];
  tasks?: string[];
}

export interface LetterOfRecommendation {
  id: string;
  title: string;
  organization: string;
  cin?: string;
  date: string;
  recommenderName: string;
  recommenderTitle: string;
  location?: string;
  candidateName: string;
  candidateInstitution: string;
  role: string;
  summary: string;
  whatThisMeans: string;
  keyQuotes: string[];
  keyStrengths: string[];
  documentImage: string;
  pdfUrl?: string;
}

export interface EducationItem {
  institution: string;
  degreeOrLevel: string;
  status: 'Current Student' | 'Completed';
  duration: string;
  location: string;
  highlights: string[];
  relevantFocus?: string[];
}

export interface Profile {
  name: string;
  headline: string;
  subtitle: string;
  bio: string[];
  careerGoal: string;
  focusAreas: string[];
  currentlyLearning: string[];
  location: string;
  institution: string;
  degree: string;
  email: string;
  phone: string;
  phoneRaw: string;
  linkedinUrl: string;
  githubUrl: string;
  resumePath: string;
}
