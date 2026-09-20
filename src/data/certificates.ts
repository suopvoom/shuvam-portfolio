import { Certificate } from './types';

/**
 * Genuine academic and coursework certifications.
 * Easy to update: add a new object to the array to render a new certificate card automatically.
 */
export const certificatesData: Certificate[] = [
  {
    id: "cert-cs-foundations",
    title: "Computer Science & Programming Foundations",
    issuer: "Institute of Engineering & Management (IEM)",
    issueDate: "2024",
    credentialId: "[CREDENTIAL ID - IEM-BCA-2024-CS1]",
    credentialUrl: undefined, // [REPLACE WITH VERIFICATION LINK OR LEAVE UNDEFINED]
    thumbnailUrl: undefined,  // [REPLACE WITH PATH TO CERTIFICATE IMAGE, e.g. '/certificates/cs-foundations.jpg']
    skills: ["C Programming", "Algorithmic Logic", "Computer Organization", "Problem Solving"],
    description: "Foundational academic coursework and laboratory evaluation covering structured programming, control structures, and computational thinking at IEM Kolkata."
  },
  {
    id: "cert-structured-c",
    title: "Structured Programming & Problem Solving in C",
    issuer: "Academic Curriculum & Lab Assessment",
    issueDate: "2024",
    credentialId: "[CREDENTIAL ID - IEM-BCA-2024-C2]",
    credentialUrl: undefined,
    thumbnailUrl: undefined,
    skills: ["Pointers", "Dynamic Memory Allocation", "Data Structures", "File Handling"],
    description: "Rigorous laboratory testing on pointer arithmetic, dynamic memory allocation (malloc/free), modular functions, and foundational data structures."
  },
  {
    id: "cert-technical-workshop",
    title: "Hands-on Technical Workshop & Engineering Lab",
    issuer: "IEM Kolkata Technical Society",
    issueDate: "2024",
    credentialId: "[CREDENTIAL ID - IEM-TECH-2024-W1]",
    credentialUrl: undefined,
    thumbnailUrl: undefined,
    skills: ["Git & Version Control", "Collaborative Problem Solving", "Technical Communication"],
    description: "Departmental practical workshop focusing on collaborative software development workflows, Git version control best practices, and team code reviews."
  },
  {
    id: "cert-web-fundamentals",
    title: "Modern Web Development Fundamentals",
    issuer: "Self-Directed Study & Online Coursework",
    issueDate: "2025",
    credentialId: "[CREDENTIAL ID - WEB-DEV-2025-01]",
    credentialUrl: undefined,
    thumbnailUrl: undefined,
    skills: ["HTML5", "CSS3 / Tailwind", "Modern JavaScript", "Responsive Design"],
    description: "Practical curriculum covering modern semantic HTML, responsive web design principles, CSS Flexbox/Grid, and asynchronous client-side JavaScript."
  }
];
