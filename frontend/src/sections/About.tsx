function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section heading */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          <div className="w-16 h-1 bg-accent mt-3 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="max-w-3xl">
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            I'm Vemunuri Praneeth Reddy, a Software Engineer with a B.Tech degree in Computer Science. I enjoy building clean, scalable applications that solve real problems.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            I'm passionate about writing good code, learning new technologies, and turning ideas into products. I'm currently focused on backend development with Go and building modern frontends with React and TypeScript.
          </p>

          {/* Resume button */}
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200"
          >
            Download Resume
          </a>
        </div>

      </div>
    </section>
  )
}

export default About