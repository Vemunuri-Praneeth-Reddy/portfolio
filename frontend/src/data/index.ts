import type { Education, Experience, Project, Skill } from '../types'

export const education: Education[] = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Your University Name",
    year: "2020 - 2024",
    description: "Brief line about what you studied or achieved"
  }
]

export const experience: Experience[] = [
  {
    role: "Software Engineer",
    company: "Company Name",
    duration: "Jan 2024 - Present",
    description: "What you did, what you built, what you owned",
    tech: ["Go", "React", "PostgreSQL"]
  }
]

export const projects: Project[] = [
  {
    title: "Project Name",
    description: "What it does and why you built it",
    tech: ["React", "TypeScript", "Node.js"],
    github: "https://github.com/yourusername/project",
    live: "https://yourproject.com"
  }
]

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS"]
  },
  {
    category: "Backend",
    items: ["Go", "Node.js", "REST APIs"]
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "PostgreSQL"]
  }
]