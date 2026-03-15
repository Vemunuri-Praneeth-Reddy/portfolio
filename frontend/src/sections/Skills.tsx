import type { Skill as SkillType } from '../types'
import { skills } from '../data'

function SkillCard({ category, items }: SkillType) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <span
            key={skill}
            className="text-sm font-medium text-accent bg-accent/10 px-4 py-2 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section heading */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
          <div className="w-16 h-1 bg-accent mt-3 rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((item, index) => (
            <SkillCard key={index} {...item} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills