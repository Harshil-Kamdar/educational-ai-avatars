import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="font-cursive text-6xl md:text-8xl mb-16 text-foreground">CharacTutor</h1>

      <div className="flex flex-col gap-4 w-full max-w-md">
        <Link href="/elementary" className="w-full">
          <Button variant="outline" size="lg" className="w-full text-lg h-14 bg-card hover:bg-accent">
            Elementary School
          </Button>
        </Link>
        <Link href="/middle" className="w-full">
          <Button variant="outline" size="lg" className="w-full text-lg h-14 bg-card hover:bg-accent">
            Middle School
          </Button>
        </Link>
        <Link href="/high" className="w-full">
          <Button variant="outline" size="lg" className="w-full text-lg h-14 bg-card hover:bg-accent">
            High School
          </Button>
        </Link>
        <Link href="/college" className="w-full">
          <Button variant="outline" size="lg" className="w-full text-lg h-14 bg-card hover:bg-accent">
            College
          </Button>
        </Link>
      </div>
    </div>
  )
}
