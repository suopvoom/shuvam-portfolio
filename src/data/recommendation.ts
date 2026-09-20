import { LetterOfRecommendation } from './types';

/**
 * Letter of Recommendation data from Prodigy InfoTech.
 * Extracted with high fidelity from the official corporate recommendation letter.
 */
export const recommendationData: LetterOfRecommendation = {
  id: "lor-prodigy-infotech",
  title: "Letter of Recommendation",
  organization: "Prodigy InfoTech",
  cin: "PIT/JAN26/00382",
  date: "February 1, 2026",
  recommenderName: "Deven Chopra",
  recommenderTitle: "Software Engineering Manager",
  location: "Mumbai, Maharashtra, India",
  candidateName: "Shuvam Chowdhury",
  candidateInstitution: "Institute of Engineering and Management (IEM), Kolkata",
  role: "Software Development Intern",
  summary: "Official recommendation letter from Software Engineering Manager Deven Chopra at Prodigy InfoTech recognizing exemplary software development contributions, clean code delivery, and problem-solving excellence during the software engineering internship.",
  whatThisMeans: "A direct engineering manager endorsement confirming hands-on software development competence, disciplined problem-solving, and dependable delivery in a collaborative production setting.",
  keyQuotes: [
    "During the internship, Shuvam has demonstrated exceptional skills in software development, problem-solving, and teamwork.",
    "His ability to quickly grasp new concepts, write clean, efficient code, and contribute effectively to our projects was truly commendable.",
    "He consistently exhibited a strong work ethic, high level of dedication, and enthusiasm for learning.",
    "I am confident that Shuvam has a bright future ahead in the field of software development."
  ],
  keyStrengths: [
    "Clean & Efficient Code",
    "Algorithmic Problem-Solving",
    "Rapid Technical Adaptation",
    "Engineering Teamwork",
    "Dedicated Work Ethic"
  ],
  documentImage: "/certificates/prodigy-lor.png",
  pdfUrl: "/certificates/prodigy-lor.pdf"
};
