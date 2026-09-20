import { Project } from './types';

/**
 * Verified Projects Data Source
 * 
 * To add a new project in the future, simply add a new object to this array.
 * The Projects section and modal dialog render completely from this data source.
 */
export const projectsData: Project[] = [
  {
    id: "temp-converter",
    title: "Temperature Converter (GUI)",
    description: "A graphical desktop application built with C and the Windows API (Win32) to seamlessly convert temperatures across Celsius, Fahrenheit, and Kelvin scales.",
    status: "Completed",
    language: "C",
    frameworkOrTools: ["Windows API (Win32)", "Desktop GUI"],
    features: [
      "Graphical user interface built using native Win32 controls",
      "Converts between Celsius, Fahrenheit, and Kelvin scales",
      "User-friendly input fields, dropdown selection, and real-time calculation"
    ],
    internshipTask: "ProDigy InfoTech Software Development Internship — Task 01",
    githubUrl: "https://github.com/suopvoom/PRODIGY_SD_01"
  },
  {
    id: "number-guessing-game",
    title: "Number Guessing Game",
    description: "An interactive command-line guessing game in C that generates random targets, validates player inputs, and tracks attempt counts with dynamic high/low hints.",
    status: "Completed",
    language: "C",
    frameworkOrTools: ["Standard C Library", "CLI"],
    features: [
      "Pseudorandom number generation with seed initialization",
      "Robust user input handling and boundary validation",
      "Dynamic high/low feedback guidance after every guess",
      "Attempt counting and performance summary upon completion"
    ],
    internshipTask: "ProDigy InfoTech Software Development Internship — Task 02",
    githubUrl: "https://github.com/suopvoom/PRODIGY_SD_02"
  },
  {
    id: "contact-management-system",
    title: "Contact Management System",
    description: "A persistent C-based records utility enabling full CRUD operations for contacts using custom C structures and low-level disk file streams.",
    status: "Completed",
    language: "C",
    frameworkOrTools: ["Standard C I/O", "File Systems"],
    features: [
      "Add, view, edit, and delete contact records with formatted output",
      "Structured data records using custom C structs",
      "Persistent binary/text disk file storage across sessions"
    ],
    concepts: ["Structures", "File Handling"],
    internshipTask: "ProDigy InfoTech Software Development Internship — Task 03",
    githubUrl: "https://github.com/suopvoom/PRODIGY_SD_03"
  },
  {
    id: "sudoku-solver",
    title: "Sudoku Solver",
    description: "An algorithmic solver for 9×9 Sudoku grids in C, employing backtracking and recursive constraint satisfaction to systematically find valid configurations.",
    status: "Completed",
    language: "C",
    frameworkOrTools: ["Algorithmic Logic", "Matrix Operations"],
    features: [
      "Automatically solves 9×9 Sudoku puzzle matrices",
      "Validates constraint rules across rows, columns, and 3×3 sub-grids",
      "Efficient recursive backtracking logic to find complete solutions"
    ],
    concepts: ["Backtracking algorithm", "Recursion"],
    internshipTask: "ProDigy InfoTech Software Development Internship — Task 04",
    githubUrl: "https://github.com/suopvoom/PRODIGY_SD_04"
  },
  {
    id: "budget-buddy",
    title: "BudgetBuddy",
    description: "A smart price-tracking and shopping assistant concept — aims to help users track product prices, compare marketplace listings, and receive notifications when price drops occur.",
    status: "In Progress",
    language: "TypeScript / Python",
    frameworkOrTools: ["React", "Tailwind CSS", "REST APIs", "Local Storage"],
    features: [
      "Target price threshold monitoring architecture for budget-conscious students",
      "Marketplace listing comparison concept designed to alert users on price drops",
      "Modular frontend interface with client-side state and local storage persistence"
    ],
    concepts: ["Asynchronous State", "Client Caching", "API Architecture"],
    githubUrl: "https://github.com/suopvoom/budget-buddybysuop"
  }
];
