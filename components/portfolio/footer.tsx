import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  return (
    <footer className="mt-20 pt-8 border-t">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-muted-foreground">© 2025 Felipe Scherer. Todos os direitos reservados.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
    {/*       <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Política de Privacidade
          </Link>
          <Separator orientation="vertical" className="h-4" />
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Termos de Uso
          </Link> */}
        </div> 
      </div>
    </footer>
  )
}

