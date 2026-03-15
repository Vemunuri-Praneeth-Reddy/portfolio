import Navbar from "./components/Nabvar"
import About from "./sections/About"
import Education from "./sections/Education"
import Experience from "./sections/Experience"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
function App() {
  return (
    <main className="font-sans text-gray-800 bg-white">
      <Navbar/>
      <Hero/>
      <About/>
      <Education/>
      <Experience/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App