"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Publication {
  title: string
  journal: string
  year: string
  description: string
  url: string
}

export default function Publications() {
  const [showAll, setShowAll] = useState(false)

  const publications: Publication[] = [
    {
      title:
        "IWSHAP: Um Método de Seleção Incremental de Características para Redes CAN baseado em Inteligência Artificial Explicável (XAI)",
      journal: "Simpósio Brasileiro de Segurança da Informação e de Sistemas Computacionais",
      year: "2025",
      description:
        "Este trabalho apresenta um método Wrapper para seleção de características em redes CAN, utilizando técnicas de Inteligência Artificial Explicável (XAI).",
      url: "#",
    },
    {
      title:
        "Modelos Interpretáveis com Inteligência Artificial Explicável (XAI) na Detecção de Intrusões em Redes Intra-Veiculares Controller Area Network (CAN)",
      journal: "Simpósio Brasileiro de Segurança da Informação e de Sistemas Computacionais",
      year: "2025",
      description:
        "O estudo explora a aplicação de modelos interpretáveis baseados em XAI para aprimorar a detecção de intrusões em redes CAN.",
      url: "#",
    },
    {
      title: "IWSHAP: Uma Ferramenta para Seleção Incremental de Características utilizando IWSS e SHAP",
      journal: "Simpósio Brasileiro de Segurança da Informação e de Sistemas Computacionais",
      year: "2025",
      description:
        "Este artigo introduz a ferramenta IWSHAP, que combina IWSS e SHAP para uma seleção eficiente de características em sistemas de segurança.",
      url: "#",
    },
    {
      title:
        "Codefólio: Construção de Portfólios e Compartilhamento de Conhecimentos através da Extensão Universitária",
      journal: "Simpósio Brasileiro de Informática na Educação",
      year: "2025",
      description:
        "Este trabalho apresenta o Codefólio, um projeto de extensão desenvolvido para incentivar estudantes de graduação a demonstrarem suas habilidades e conhecimentos. ",
      url: "#",
    },
    {
      title: "CANEDA-IDS: Uma Arquitetura Orientada a Eventos para Detecção de Intrusão em Redes CAN",
      journal: "Escola Regional de Engenharia de Software",
      year: "2025",
      description:
        "Apresenta uma arquitetura orientada a eventos para melhorar a detecção de intrusão em redes CAN, aumentando a segurança veicular.",
      url: "#",
    },
    {
      title: "Especificação de Requisitos de Segurança em Firewalls de Próxima Geração: Abordagens e Desafios",
      journal: "Escola Regional de Engenharia de Software",
      year: "2025",
      description:
        "Este estudo analisa abordagens e desafios na especificação de requisitos de segurança para firewalls de próxima geração.",
      url: "#",
    },
    {
      title: "Evolução Pós-MVP: Avanços e Melhorias em uma Solução de Suporte à Gestão Ambiental",
      journal: "Escola Regional de Engenharia de Software",
      year: "2025",
      description:
        "Explora os avanços e melhorias implementados após a fase MVP em uma solução voltada para a gestão ambiental.",
      url: "#",
    },
  ]

  // Determina quais publicações mostrar com base no estado
  const displayedPublications = showAll ? publications : publications.slice(0, 3)

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-6">Publicações Científicas</h2>
      <div className="space-y-6">
        {displayedPublications.map((pub, index) => (
          <PublicationCard
            key={index}
            title={pub.title}
            journal={pub.journal}
            description={pub.description}
            url={pub.url}
          />
        ))}
      </div>

      {publications.length > 3 && (
        <div className="mt-8 flex justify-center">
          <Button variant="outline" onClick={() => setShowAll(!showAll)} className="flex items-center gap-2">
            {showAll ? (
              <>
                Ver menos <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                Ver mais <ChevronDown className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      )}
    </section>
  )
}

interface PublicationCardProps {
  title: string
  journal: string
  description: string
  url: string
}

function PublicationCard({ title, journal, description, url }: PublicationCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <div>
            <h3 className="font-medium text-lg mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground mb-3">{journal}</p>
            <p className="text-muted-foreground mb-4">{description}</p>
          </div>
          <Button variant="outline" size="sm" className="h-9 shrink-0" asChild>
            <Link href={url} className="flex items-center gap-1">
              <ExternalLink className="h-4 w-4" />
              <span>Ver publicação</span>
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

