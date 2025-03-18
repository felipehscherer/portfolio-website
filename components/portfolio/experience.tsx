import { Badge } from "@/components/ui/badge"

interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string
  skills: string[]
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      title: "Analista de Quality Assurance (QA)",
      company: "Ânima Educação",
      period: "Mar/2025 - Presente",
      description:
        " ",
      skills: ["Cypress", "Azure DevOps", "Postman", "Test Plans (Azure)"],
    },
    {
      title: "Bolsista de PD&I",
      company: "RNP - Rede Nacional de Ensino e Pesquisa",
      period: "Jan/2025 - Presente",
      description:
        "Como bolsista de PD&I no GT-LFI (Learn from Incidents), atuo como desenvolvedor Full-Stack, contribuindo para o desenvolvimento de uma plataforma gamificada voltada para o aprendizado de respostas a incidentes. Além disso, sou responsável por desenvolver e manter a página de exposição da plataforma, garantindo sua funcionalidade e apresentação.",
      skills: ["React", "Nest.js", "TypeScript", "Firebase", "Tailwind CSS", "Gemini", "LLMs"],
    },
    {
      title: "Bolsista de Desenvolvimento Tecnológico e Pesquisa",
      company: "Universidade Federal do Pampa",
      period: "Mai/2024 - Dez/2024",
      description:
        "Como bolsista no projeto XAIID - Estratégias Inteligentes para Detecção de Intrusões em Sistemas Ciber-Físicos desenvolvi ferramentas e conduzi pesquisas científicas em aprendizado de máquina e inteligência artificial explicável (XAI). Implementei e otimizei modelos preditivos, garantindo alta performance e fornecendo explicabilidade aos resultados para aprimorar a segurança em sistemas ciber-físicos.",
      skills: ["Python", "SHAP", "Pandas", "Scikit-Learn", "XGBoost", "Docker"],
    },
    {
      title: "QA em PD&I",
      company: "Suassu SGA",
      period: "Mar/2024 - Dez/2024",
      description:
        "Atuei como QA no projeto Suassu SGA, garantindo a qualidade da ferramenta desenvolvida por meio da identificação e reporte de bugs, validação de funcionalidades e execução de testes automatizados e exploratórios.",
      skills: ["Cypress", "Selenium", "Cucumber", "Junit", "Postman"],
    },
  ]

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-6">Experiência</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            title={exp.title}
            company={exp.company}
            period={exp.period}
            description={exp.description}
            skills={exp.skills}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </section>
  )
}

interface ExperienceCardProps extends ExperienceItem {
  isLast: boolean
}

function ExperienceCard({ title, company, period, description, skills, isLast }: ExperienceCardProps) {
  return (
    <div className={`relative pl-8 border-l border-muted ${!isLast ? "pb-8" : ""}`}>
      <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-1"></div>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
        <h3 className="text-lg font-medium">{title}</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">{company}</span>
          <span className="text-sm font-medium">{period}</span>
        </div>
      </div>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  )
}

