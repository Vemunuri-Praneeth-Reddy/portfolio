function Hero(){
 return(
     <section className="min-h-screen flex items-center bg-white pt-16">
      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Left side — text */}
        <div className="flex-1">
          <p className="text-accent font-medium mb-3">Hi, I'm</p>
          <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-4">
            Vemunuri Praneeth Reddy
          </h1>
          <h2 className="text-2xl font-medium text-gray-500 mb-6">
            Software Engineer
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
            Passionate about building scalable applications with clean code and great user experiences. Always learning, always shipping.
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="bg-accent text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border-2 border-accent text-accent px-6 py-3 rounded-lg font-medium hover:bg-accent hover:text-white transition-all duration-200"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right side — photo */}
        <div className="flex-shrink-0">
          <div className="w-72 h-72 rounded-full bg-accent/10 border-4 border-accent overflow-hidden flex items-center justify-center">
            <img
                  src="/src/assets/profile.jpg"
                  alt="Vemunuri Praneeth Reddy"
                  className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
 )
}
export default Hero