import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export const profile = {
  name: "Moleboheng Mavis Hlalele",
  shortName: "Mavis",
  role: "Junior Software Engineer",
  location: "Johannesburg, South Africa",
  email: "molebohenghlalele114@gmail.com",
  phone: "060 993 0830",
  github: "https://github.com/moleboheng24",
  linkedin: "https://www.linkedin.com/in/moleboheng-hlalele-70b739360?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  Prompt_Engineering_Case_Study: "https://intelligent-artisan-studio.lovable.app/case-studies/prompt-engineering",

};

export const technicalSkills = [
  "Python",
  "Java",
  "OOP",
  "Data Structures & Algorithms",
  "SQL & Database Design",
  "Web Development",
  "Mobile Development",
  "Testing & Debugging",
  "Systems Analysis & Design",
  "Deployment & Integration",
  "CI/CD Pipelines",
  "Project Management Basics",
];

export const softSkills = [
  "Critical thinking",
  "Analytical problem solving",
  "Team player",
  "Resilient & adaptable",
  "Mentoring & communication",
  "Goal-driven",
];

export const projects = [
  {
    name: "Command-line Banking System",
    description:
      "A Java application that handles accounts, deposits, withdrawals and statements, built around clean OOP design and unit tests.",
    tech: ["Java", "OOP", "JUnit"],
    image: project1,
    tone: "mint-soft",
  },
  {
    name: "Student Records Database",
    description:
      "A relational database and Python interface for capturing, querying and reporting on student records with validated input.",
    tech: ["Python", "SQL", "Systems Design"],
    image: project2,
    tone: "berry-soft",
  },
  {
    name: "Mobile Task Companion",
    description:
      "A mobile app prototype for tracking daily study tasks, with local storage, reminders and a simple, accessible interface.",
    tech: ["Mobile Dev", "REST APIs", "Git"],
    image: project3,
    tone: "sun-soft",
  },
];

export const education = [
  {
    period: "2023 – 2024",
    title: "Diploma: Software Engineering (NQF 6)",
    detail: "WeThinkCode_ · Johannesburg Campus · 242/240 credits — Pass",
  },
  {
    period: "2017",
    title: "National Senior Certificate (Matric)",
    detail: "Academy of Excellence CI/S",
  },
  {
    period: "2024",
    title: "Python Mentorship Programme",
    detail: "WeThinkCode_ · Student-led certification of participation",
  },
];

export const experience = [
  {
    period: "2024",
    title: "Python Mentor",
    detail:
      "Facilitated Python fundamentals sessions for first-year students and guided them through structured problem solving.",
  },
  {
    period: "2024",
    title: "Recruitment Ambassador",
    detail:
      "Ran digital literacy workshops and explained technology learning pathways to prospective students.",
  },
  {
    period: "2024",
    title: "Front Desk Assistant",
    detail:
      "Managed visitors, calls and queries at WeThinkCode_ campus operations with careful attention to detail.",
  },
];
