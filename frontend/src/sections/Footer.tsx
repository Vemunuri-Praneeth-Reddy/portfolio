function Footer() {
  return (
    <footer className="bg-gray-400 py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left — name */}
        <span className="text-black font-bold text-lg">Vemunuri Praneeth Reddy</span>

        {/* Center — copyright */}
        <span className="text-black/70 text-sm">
          © {new Date().getFullYear()} All rights reserved.
        </span>

        {/* Right — social links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black/80 hover:text-white text-sm font-medium transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/praneeth-vemunuri/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black/80 hover:text-white text-sm font-medium transition-colors duration-200"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer