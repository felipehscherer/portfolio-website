import Link from "next/link"
import { Mail, Linkedin, Github } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
/* import { Button } from "@/components/ui/button" */

export default function Contact() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Contato</h2>
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-4">Informações de Contato</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <span>felipe.schererpento@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="h-5 w-5 text-muted-foreground" />
                  <Link href="https://www.linkedin.com/in/felipehscherer/" className="hover:underline">
                    linkedin.com/in/felipehscherer
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="h-5 w-5 text-muted-foreground" />
                  <Link href="https://github.com/felipehscherer" className="hover:underline">
                    github.com/felipehscherer
                  </Link>
                </div>
              </div>
            </div>
{/*             <div>
              <h3 className="font-medium mb-4">Disponibilidade</h3>
              <p className="text-muted-foreground mb-4">
              Atualmente disponível para projetos freelance. Entre em contato para discutirmos como
              posso ajudar no seu projeto.
              </p>
              {/* <Button>Enviar mensagem</Button> 
            </div> */}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

