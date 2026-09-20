import { Certificate } from './types';
import eyTechnologyRiskImg from '../assets/certificates/ey-technology-risk.png';
import deloitteCyberImg from '../assets/certificates/deloitte-cyber.png';
import deloitteDataAnalyticsImg from '../assets/certificates/deloitte-data-analytics.png';
import deloitteTechnologyImg from '../assets/certificates/deloitte-technology.png';
import swayamAiMarketingImg from '../assets/certificates/swayam-ai-marketing.png';

/**
 * Genuine academic and technical certifications.
 * Uses direct Vite-bundled asset imports to guarantee 100% reliable image resolution
 * across both local development and production Vercel environments.
 */
export const certificatesData: Certificate[] = [
  {
    id: "cert-ey-technology-risk",
    title: "Technology Risk Virtual Job Simulation",
    issuer: "EY (via Forage)",
    issueDate: "June 24th, 2026",
    period: "April 2026 – June 2026",
    image: eyTechnologyRiskImg,
    pdfUrl: "/certificates/ey-technology-risk.pdf",
    skills: ["Technology Risk", "Enterprise Systems", "Business Analysis", "Stakeholder Communication", "Risk Mitigation"],
    tasks: ["Basics of Technology Risk", "Interacting with the business", "Probing questions", "Teamwork", "Conclusion"],
    signer: "Tom Brunskill",
    signerTitle: "Co-Founder of Forage",
    verificationCodes: [
      { label: "Enrolment Code", code: "myZYwN3edBiP3bE4d" },
      { label: "User Code", code: "69007a3117a27298b4b5a791" }
    ],
    description: "Completed an intensive virtual job simulation assessing real-world enterprise technology risks. Evaluated complex information systems, formulated probing risk assessments for key business stakeholders, and synthesized technology control recommendations.",
    whatILearned: "Mastered the core methodologies of enterprise technology risk assessment, stakeholder probing, and business-critical systems evaluation in collaborative environments."
  },
  {
    id: "cert-deloitte-cyber",
    title: "Cyber Job Simulation",
    issuer: "Deloitte (via Forage)",
    issueDate: "June 24th, 2026",
    period: "April 2026 – June 2026",
    image: deloitteCyberImg,
    pdfUrl: "/certificates/deloitte-cyber.pdf",
    skills: ["Cyber Security", "Threat Analysis", "Defensive Security", "Security Architecture", "Vulnerability Assessment"],
    tasks: ["Cyber security"],
    signer: "Tina McCreery",
    signerTitle: "Chief Human Resources Officer, Deloitte",
    verificationCodes: [
      { label: "Enrolment Code", code: "hFHj6J9scWaKTD9gd" },
      { label: "User Code", code: "69007a3117a27298b4b5a791" }
    ],
    description: "Engaged in enterprise cybersecurity tasks simulating real-world security challenges at Deloitte. Analyzed security postures, identified vulnerabilities in critical infrastructure, and structured defensive security mitigation strategies.",
    whatILearned: "Gained hands-on proficiency in enterprise cybersecurity principles, threat detection frameworks, and defensive risk mitigation strategies."
  },
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
  }
];
