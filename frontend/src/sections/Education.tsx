import type { Education } from '../types'
import { education } from '../data'

function EducationCard({ degree, institution, year, description }: Education) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{degree}</h3>
          <p className="text-accent font-medium mt-1">{institution}</p>
        </div>
        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap">
          {year}
        </span>
      </div>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}

function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section heading */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Education</h2>
          <div className="w-16 h-1 bg-accent mt-3 rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {education.map((item, index) => (
            <EducationCard key={index} {...item} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Education