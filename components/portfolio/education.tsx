import { Badge } from "@/components/ui/badge"

interface EducationItem {
  degree: string
  institution: string
  period: string
  description: string
  courses: string[]
}

export default function Education() {
  const educationItems: EducationItem[] = [
    {
      degree: "Bacharelado em Engenharia de Software",
      institution: "Universidade Federal do Pampa",
      period: "2023 - 2026",
      description:
        "Em processo de formação técnica, com vivência prática em todas as etapas do ciclo de vida do desenvolvimento de software, incluindo engenharia de requisitos, arquitetura de sistemas, testes automatizados e planejamento de projetos.",
      courses: ["Progamação", "Banco de dados", "Engenharia de requisitos", "Arquitetura de Software", "Testes de Software", "Desenvolvimento Web"],
    }
  ]

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-6">Educação</h2>
      <div className="space-y-8">
        {educationItems.map((edu, index) => (
          <EducationCard
            key={index}
            degree={edu.degree}
            institution={edu.institution}
            period={edu.period}
            description={edu.description}
            courses={edu.courses}
            isLast={index === educationItems.length - 1}
          />
        ))}
      </div>
    </section>
  )
}

interface EducationCardProps extends EducationItem {
  isLast: boolean
}

function EducationCard({ degree, institution, period, description, courses, isLast }: EducationCardProps) {
  return (
    <div className={`relative pl-8 border-l border-muted ${!isLast ? "pb-8" : ""}`}>
      <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-1"></div>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
        <h3 className="text-lg font-medium">{degree}</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">{institution}</span>
          <span className="text-sm font-medium">{period}</span>
        </div>
      </div>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {courses.map((course) => (
          <Badge key={course} variant="secondary">
            {course}
          </Badge>
        ))}
      </div>
    </div>
  )
}

