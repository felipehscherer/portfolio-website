import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface HeaderProps {
  name: string
  title: string
  skills: string[]
}

export default function Header({ name, title, skills }: HeaderProps) {
  return (
    <header className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
      <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
        <Image
          src="/placeholder.svg?height=400&width=400"
          alt="Profile Avatar"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="text-center md:text-left space-y-4 flex-1">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{name}</h1>
        <p className="text-xl text-muted-foreground">{title}</p>
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {skills.map((skill) => (
            <Badge key={skill} variant="outline" className="px-3 py-1 text-sm">
              {skill}
            </Badge>
          ))}
        </div>
        <div className="flex gap-3 justify-center md:justify-start pt-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="https://github.com/felipehscherer" target="_blank">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/felipe-scherer-623208221/" target="_blank">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href="mailto:felipe.scherepento@gmail.com">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
{/*           <Button variant="outline" size="icon" asChild>
            <Link href="/cv.pdf" target="_blank">
              <FileText className="h-5 w-5" />
              <span className="sr-only">CV</span>
            </Link>
          </Button> */}
        </div>
      </div>
    </header>
  )
}

