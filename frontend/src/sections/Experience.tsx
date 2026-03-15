import type { Experience as ExperienceType } from '../types'
import { experience } from '../data'

function ExperienceCard({ role, company, duration, description, tech }: ExperienceType) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{role}</h3>
          <p className="text-accent font-medium mt-1">{company}</p>
        </div>
        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap">
          {duration}
        </span>
      </div>
      <p className="text-gray-600 leading-relaxed mb-4">{description}</p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section heading */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Experience</h2>
          <div className="w-16 h-1 bg-accent mt-3 rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {experience.map((item, index) => (
            <ExperienceCard key={index} {...item} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Experience

