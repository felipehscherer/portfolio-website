import Link from "next/link"
import { Github } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Project {
  title: string
  description: string
  technologies: string[]
  githubUrl: string
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "IWSHAP - Tool",
      description:
        "Ferramenta Wrapper para seleção de features baseado em Inteligencia Articial Explicavel (XAI) em contexto de detecção de intrusões.",
      technologies: ["Python", "SHAP", "XGBoost", "Docker"],
      githubUrl: "#",
    },
    {
      title: "Unirides - Sistema de caronas universitárias",
      description:
        "Aplicação WEB de caronas universitárias, voltada para facilitar o transporte entre universitários para a faculdade e eventos academicos.",
      technologies: ["React", "TypeScript", "Java", "Spring Boot", "MySQL"],
      githubUrl: "#",
    },
  ]

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-6">Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </section>
  )
}

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  githubUrl: string
}

function ProjectCard({ title, description, technologies, githubUrl }: ProjectCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="font-medium text-lg mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
        <Button variant="outline" size="sm" asChild>
          <Link href={githubUrl} className="flex items-center gap-1">
            <Github className="h-4 w-4" />
            <span>Ver no GitHub</span>
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

