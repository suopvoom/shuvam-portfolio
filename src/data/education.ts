import { EducationItem } from './types';

/**
 * Two-entry education timeline:
 * 1. Institute of Engineering and Management (IEM), Kolkata — BCA — Current student
 * 2. New Barrackpur Colony Boys' High School — Secondary & Higher Secondary — Completed
 *
 * No invented marks or years — explicit placeholders used for missing dates.
 */
export const educationData: EducationItem[] = [
  {
    institution: "Institute of Engineering and Management (IEM), Kolkata",
    degreeOrLevel: "Bachelor of Computer Applications (BCA)",
    status: "Current Student",
    duration: "2024 – 2027 (Expected)",
    location: "Kolkata, West Bengal, India",
    highlights: [
      "Rigorous undergraduate curriculum emphasizing computer science fundamentals and structured programming.",
      "Core coursework in C, C++, Data Structures, Computer Organization, and Web Systems.",
      "Active participant in technical society workshops and departmental engineering labs."
    ],
    relevantFocus: [
      "Programming in C & C++",
      "Data Structures & Algorithms",
      "Computer Organization & Architecture",
      "Web Technologies"
    ]
  },
  {
    institution: "New Barrackpur Colony Boys' High School",
    degreeOrLevel: "Secondary & Higher Secondary Education",
    status: "Completed",
    duration: "[YEAR - SECONDARY & HIGHER SECONDARY]", // [REPLACE WITH REAL YEARS e.g. 2022 - 2024]
    location: "New Barrackpur, West Bengal, India",
    highlights: [
      "Completed secondary and higher secondary schooling with focus on science and mathematics fundamentals.",
      "Built foundational analytical discipline, problem-solving skills, and academic rigor."
    ],
    relevantFocus: [
      "Mathematics & Quantitative Logic",
      "Science Fundamentals",
      "Computer Science Foundation"
    ]
  }
];
