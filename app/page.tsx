import Header from "@/components/portfolio/header"
import About from "@/components/portfolio/about"
import Skills from "@/components/portfolio/skills"
import Experience from "@/components/portfolio/experience"
import Education from "@/components/portfolio/education"
import Publications from "@/components/portfolio/publications"
import Projects from "@/components/portfolio/projects"
import Contact from "@/components/portfolio/contact"
import Footer from "@/components/portfolio/footer"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <Header
          name="Felipe Scherer"
          title="Analista de Quality Assurance (QA) | Graduando de Engenharia de Software"
          skills={["Java", "Python", "Spring Boot", "React", "Machine Learning", "Testes de Software"]}
        />

        <About />
        <Skills />
        <Experience />
        <Education />
        <Publications />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

