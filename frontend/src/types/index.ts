export interface Education {
  degree: string
  institution: string
  year: string
  description: string
}

export interface Experience {
  role: string
  company: string
  duration: string
  description: string
  tech: string[]
}

export interface Project {
  title: string
  description: string
  tech: string[]
  github: string
  live?: string
}

export interface Skill {
  category: string
  items: string[]
}