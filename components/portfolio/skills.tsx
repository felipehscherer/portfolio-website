import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Skills() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-6">Habilidades</h2>
      <Tabs defaultValue="hard" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="hard">Hard Skills</TabsTrigger>
          <TabsTrigger value="soft">Soft Skills</TabsTrigger>
        </TabsList>
        <TabsContent value="hard" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkillCard
              title="Linguagens de Programação"
              skills={["Java", "Python", "TypeScript", "JavaScript"]}
            />
            <SkillCard title="Frontend" skills={["React", "Next.js", "Tailwind CSS"]} />
            <SkillCard title="Backend" skills={["Spring Boot", "Django", "PostgreSQL", "Firebase", "RESTful APIs"]} />
            <SkillCard title="DevOps & Versioning" skills={["Docker", "GitHub/GitLab", "GitActions", "Azure DevOps"]} />
          </div>
        </TabsContent>
        <TabsContent value="soft">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <SoftSkillCard
              title="Resolução de Problemas"
              description="Capacidade de analisar problemas complexos e encontrar soluções eficientes"
            />
            <SoftSkillCard
              title="Comunicação"
              description="Habilidade de comunicar ideias técnicas de forma clara e concisa"
            />
            <SoftSkillCard
              title="Trabalho em Equipe"
              description="Experiência em colaborar efetivamente em equipes multidisciplinares"
            />
            <SoftSkillCard title="Liderança" description="Capacidade de orientar e motivar equipes técnicas" />
            <SoftSkillCard
              title="Adaptabilidade"
              description="Flexibilidade para se adaptar a novas tecnologias e ambientes"
            />
            <SoftSkillCard
              title="Pensamento Crítico"
              description="Análise objetiva e avaliação de situações para tomar decisões informadas"
            />
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}

interface SkillCardProps {
  title: string
  skills: string[]
}

function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="font-medium mb-3">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

interface SoftSkillCardProps {
  title: string
  description: string
}

function SoftSkillCard({ title, description }: SoftSkillCardProps) {
  return (
    <Card>
      <CardContent className="p-6 flex flex-col items-center text-center">
        <h3 className="font-medium mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

