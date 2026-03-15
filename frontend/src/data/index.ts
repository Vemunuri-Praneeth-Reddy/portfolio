import type { Education, Experience, Project, Skill } from '../types'

export const education: Education[] = [
  {
    degree: "Bachelor of Technology,EEE",
    institution: "National Institute of Technology Warangal",
    year: "2021 - 2025",
    description: "CGPA : 8.12"
  },
  {
    degree: "Intermediate",
    institution: "Narayana Junior College Hyderabad",
    year: "2019 - 2021",
    description: "Percentage : 98.2"
  },
  {
    degree: "Class-X",
    institution: "Tejaswi High School",
    year: "2018 - 2019",
    description: "CGPA : 10"
  }
]

export const experience: Experience[] = [
  {
    role: "Software Engineer",
    company: "Rapido",
    duration: "July 2025 - Present",
    description: "Built full-stack features with React and Go, designed large-scale data pipelines with Apache Spark and Airflow, and managed Kubernetes clusters on GCP for production workloads.",
    tech: ["Go", "React", "PostgreSQL","Airflow","Spark"]
  }
]

export const projects: Project[] = [
  {
    title: "Hotel Booking Website",
    description: "A full-stack room booking platform with secure authentication, account management, and real-time room availability — built with the MERN stack.",
    tech: ["React", "TypeScript", "Node.js"],
    github: "https://github.com/yourusername/project",
    live: "https://yourproject.com"
  },
  {
  title: "Gym Database Management System",
  description: "A relational database system to manage gym memberships, trainer schedules, and equipment inventory — with normalized schema design and complex SQL queries for reporting.",
  tech: ["MySQL", "GitHub"],
  github: "https://github.com/yourusername/gym-db",
  }
]

export const skills: Skill[] = [
  {
    category: "Languages",
    items: ["Golang", "SQL", "JavaScript (ES6+)", "Scala", "C++"]
  },
  {
    category: "Frameworks & Libraries",
    items: ["React.js", "Next.js", "Express.js", "Gin"]
  },
  {
    category: "Data & Streaming",
    items: ["Apache Spark", "Apache Airflow", "Kafka"]
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "BigQuery"]
  },
  {
    category: "Cloud & DevOps",
    items: ["GCP", "Kubernetes", "GOCD"]
  },
  {
    category: "Developer Tools",
    items: ["Git", "GitHub", "VS Code", "IntelliJ", "Postman"]
  }
]