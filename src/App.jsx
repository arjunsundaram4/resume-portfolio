import { useState } from "react"
import Header from "./components/Header"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import About from "./components/sections/About"
import Education from "./components/sections/Education"
import Skills from "./components/sections/Skills"
import Experience from "./components/sections/Experience"
import Projects from "./components/sections/Projects"
import Certifications from "./components/sections/Certifications"
import Courses from "./components/sections/Courses"
import Recommendations from "./components/sections/Recommendations"

export default function App() {
  const [active, setActive] = useState("about")

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />
      <Navigation active={active} setActive={setActive} />


      {/* Main content expands to push footer down */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        {active === "about" && <About />}
        {active === "education" && <Education />}
        {active === "skills" && <Skills />}
        {active === "experience" && <Experience />}
        {active === "projects" && <Projects />}
        {active === "courses" && <Courses />}
        {active === "certifications" && <Certifications />}
        {active === "recommendations" && <Recommendations />}
      </main>

      <Footer />
    </div>
  )
}
