import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="mb-16">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CuoFss4QwAa6tmNEE6GySSdF5UMjlJ.png"
          alt="CharacTutor"
          width={400}
          height={100}
          className="w-auto h-20 md:h-24"
          priority
        />
      </div>

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
