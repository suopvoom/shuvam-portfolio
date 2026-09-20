import { Certificate } from './types';
import deloitteDataAnalyticsImg from '../assets/certificates/deloitte-data-analytics.png';
import deloitteTechnologyImg from '../assets/certificates/deloitte-technology.png';
import swayamAiMarketingImg from '../assets/certificates/swayam-ai-marketing.png';
import prodigyLorImg from '../assets/certificates/prodigy-lor.png';

/**
 * Genuine academic and technical certifications.
 * Uses direct Vite-bundled asset imports to guarantee 100% reliable image resolution
 * across both local development and production Vercel environments.
 */
export const certificatesData: Certificate[] = [
  {
    id: "cert-deloitte-data-analytics",
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte (via Forage)",
    issueDate: "April 15th, 2026",
    period: "January 2026 – April 2026",
    image: deloitteDataAnalyticsImg,
    pdfUrl: "/certificates/deloitte-data-analytics.pdf",
    skills: ["Data Analysis", "Forensic Technology", "Pattern Recognition", "Data Modeling", "Business Insights"],
    tasks: ["Data analysis", "Forensic technology"],
    signer: "Tina McCreery",
    signerTitle: "Chief Human Resources Officer, Deloitte",
    verificationCodes: [
      { label: "Enrolment Code", code: "Rb7R3v99TMoKBJeG7" },
      { label: "User Code", code: "69007a3117a27298b4b5a791" }
    ],
    description: "Completed a comprehensive virtual simulation focused on practical enterprise data analysis and forensic investigation. Evaluated real-world datasets, identified statistical anomalies and critical patterns, and structured data-driven findings for strategic organizational decisions.",
    whatILearned: "Developed a disciplined approach to forensic data analysis, translating complex datasets into actionable analytical insights for technical and business decision-making."
  },
  {
    id: "cert-deloitte-technology",
    title: "Technology Job Simulation",
    issuer: "Deloitte (via Forage)",
    issueDate: "December 23rd, 2025",
    period: "October 2025 – December 2025",
    image: deloitteTechnologyImg,
    pdfUrl: "/certificates/deloitte-technology.pdf",
    skills: ["Software Engineering", "Coding Standards", "Application Development", "System Architecture", "Problem Solving"],
    tasks: ["Coding", "Development"],
    signer: "Tina McCreery",
    signerTitle: "Chief Human Resources Officer, Deloitte",
    verificationCodes: [
      { label: "Enrolment Code", code: "jB5W7EWqDrmH7fRhu" },
      { label: "User Code", code: "69007a3117a27298b4b5a791" }
    ],
    description: "Engaged in enterprise-grade software development tasks simulating real Deloitte engineering projects. Worked through structured programming requirements, algorithmic problem-solving, modular code organization, and collaborative software engineering practices.",
    whatILearned: "Strengthened professional software engineering practices, writing modular, maintainable code aligned with enterprise development standards."
  },
  {
    id: "cert-swayam-ai-marketing",
    title: "AI in Digital and Social Media Marketing",
    issuer: "SWAYAM / JAIN (Deemed-to-be University), Bengaluru",
    issueDate: "January 31st, 2026",
    period: "July 2025 Semester (Proctored Exam: 12 Dec 2025)",
    gradeOrScore: "91.2% Consolidated Score",
    image: swayamAiMarketingImg,
    pdfUrl: "/certificates/swayam-ai-marketing.pdf",
    credentialId: "WB10020320",
    credentialUrl: "https://swayam.gov.in/",
    skills: ["Artificial Intelligence", "Digital Marketing Algorithms", "Predictive Analytics", "Consumer Insights", "Data-Driven Strategy"],
    signer: "Dr. Dinesh N & Prof. Vasanthi Srinivasan",
    signerTitle: "Pro Vice Chancellor, JAIN University & National Coordinator, IIM Bangalore",
    description: "Successfully completed a rigorous, three-credit academic curriculum offered by JAIN University under the Government of India's SWAYAM initiative. Explored the practical integration of AI models, machine learning algorithms, and predictive analytics in digital engagement and audience segmentation.",
    whatILearned: "Gained practical mastery over AI-driven analytics, data modeling, and algorithmic content strategies with an exceptional 91.2% academic distinction."
  },
  {
    id: "cert-prodigy-internship",
    title: "Software Development Internship",
    issuer: "Prodigy InfoTech",
    issueDate: "February 1st, 2026",
    period: "January 2026 – February 2026",
    gradeOrScore: "Manager Endorsement",
    image: prodigyLorImg,
    pdfUrl: "/certificates/prodigy-lor.pdf",
    credentialId: "PIT/JAN26/00382",
    skills: ["Software Engineering", "Clean Code", "Problem Solving", "Team Collaboration", "Rapid Adaptation"],
    tasks: ["Software development", "Code optimization", "Team collaboration"],
    signer: "Deven Chopra",
    signerTitle: "Software Engineering Manager, Prodigy InfoTech",
    verificationCodes: [
      { label: "CIN", code: "PIT/JAN26/00382" }
    ],
    description: "Successfully completed the Software Development Internship at Prodigy InfoTech. Formally recognized and recommended by Software Engineering Manager Deven Chopra for exceptional coding standards, problem-solving abilities, and teamwork.",
    whatILearned: "Mastered writing clean, efficient production code and collaborating effectively in an agile software engineering workflow."
  }
];
