import type { Project as ProjectType } from '../types'
import { projects } from '../data'

function ProjectCard({ title, description, tech, github, live }: ProjectType) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 flex flex-col">
      
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-4 flex-1">{description}</p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((item) => (
          <span
            key={item}
            className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-accent hover:underline"
        >
          GitHub →
        </a>
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent hover:underline"
          >
            Live →
          </a>
        )}
      </div>

    </div>
  )
}

function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section heading */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
          <div className="w-16 h-1 bg-accent mt-3 rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((item, index) => (
            <ProjectCard key={index} {...item} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects
