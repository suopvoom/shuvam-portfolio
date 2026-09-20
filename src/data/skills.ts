import { SkillItem } from './types';

/**
 * Honest, two-tier skills data.
 * Group 1: Core strengths (comfortable with): C, C++, Python
 * Group 2: Working knowledge (moderate/learning): Git, GitHub, AWS
 * No numeric percentage bars or certified claims.
 */
export const skillsData: SkillItem[] = [
  // Core strengths (comfortable with)
  {
    name: "C",
    tier: "core",
    group: "Core strengths",
    proficiencyLabel: "Comfortable with",
    contextNote: "Comfortable writing structured, modular code, managing pointers, allocating dynamic memory (malloc/free), and implementing core data structures from scratch.",
    practicalApplications: [
      "Pointers & Memory Addressing",
      "Dynamic Memory Management",
      "Data Structures from Scratch",
      "Modular Function Architecture"
    ]
  },
  {
    name: "C++",
    tier: "core",
    group: "Core strengths",
    proficiencyLabel: "Comfortable with",
    contextNote: "Comfortable applying object-oriented paradigms, classes, encapsulation, inheritance, standard template library (STL) containers, and algorithmic problem solving.",
    practicalApplications: [
      "OOP (Classes, Inheritance, Polymorphism)",
      "Standard Template Library (Vectors, Sets, Maps)",
      "Algorithm Implementations",
      "Memory Safety & References"
    ]
  },
  {
    name: "Python",
    tier: "core",
    group: "Core strengths",
    proficiencyLabel: "Comfortable with",
    contextNote: "Comfortable utilizing Python for algorithmic logic, rapid prototyping, scripting, automation, and computational problem exploration.",
    practicalApplications: [
      "Algorithmic Problem Solving",
      "File I/O & Script Automation",
      "Data Manipulation & Structures",
      "Rapid Logic Prototyping"
    ]
  },

  // Working knowledge (moderate/learning)
  {
    name: "Git",
    tier: "working",
    group: "Working knowledge",
    proficiencyLabel: "Moderate / Learning",
    contextNote: "Working knowledge of local version control routines: tracking changes, branching, committing, merging, and inspecting log histories.",
    practicalApplications: [
      "Branching & Merging",
      "Commit Hygiene & Staging",
      "Merge Conflict Resolution",
      "Local History Inspection"
    ]
  },
  {
    name: "GitHub",
    tier: "working",
    group: "Working knowledge",
    proficiencyLabel: "Moderate / Learning",
    contextNote: "Working knowledge of remote repositories, pushing codebases, pull requests, issue tracking, and publishing open-source coursework.",
    practicalApplications: [
      "Remote Repository Management",
      "Pull Requests & Code Reviews",
      "Issue Tracking & Roadmaps",
      "Project Documentation (READMEs)"
    ]
  },
  {
    name: "AWS",
    tier: "working",
    group: "Working knowledge",
    proficiencyLabel: "Moderate / Learning",
    contextNote: "Actively studying cloud infrastructure fundamentals, compute instances (EC2), object storage (S3), and introductory cloud deployment concepts.",
    practicalApplications: [
      "Cloud Computing Fundamentals",
      "Basic EC2 Instance Configuration",
      "S3 Bucket Storage & Permissions",
      "Cloud Architecture Concepts"
    ]
  }
];
