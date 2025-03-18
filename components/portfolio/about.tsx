import Link from "next/link"

export default function About() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-4">Sobre</h2>
      <p className="text-muted-foreground leading-relaxed">
        Graduando em Engenharia de Software pela {" "}
        <Link href="https://unipampa.edu.br" target="_blank" className="text-primary hover:underline">
          Universidade Federal do Pampa
        </Link>, com experiência prática abrangente em
        todas as etapas do ciclo de vida do desenvolvimento de software, incluindo engenharia de requisitos, arquitetura
        de sistemas, testes em geral e planejamento de projetos. Atuei em projetos voltados para o desenvolvimento de
        software, garantia de qualidade (QA) e segurança da informação. Atualmente atuo como Analista de QA na{" "}
        <Link href="https://animaeducacao.com.br" target="_blank" className="text-primary hover:underline">
          Ânima Educação
        </Link>
        .
      </p>
    </section>
  )
}

