import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const popularCharacters = [
  {
    name: "Batman",
    image: "/batman-superhero.jpg",
  },
  {
    name: "Tony Stark",
    image: "/tony-stark-iron-man.jpg",
  },
  {
    name: "Sherlock Holmes",
    image: "/sherlock-holmes-detective.jpg",
  },
  {
    name: "Professor X",
    image: "/professor-x-x-men.jpg",
  },
  {
    name: "Wonder Woman",
    image: "/wonder-woman-superhero.jpg",
  },
]

const popularShows = [
  { name: "Breaking Bad", image: "/breaking-bad-show.jpg" },
  { name: "The Dark Knight", image: "/dark-knight-movie.jpg" },
  { name: "Inception", image: "/inception-movie.jpg" },
  { name: "Interstellar", image: "/interstellar-movie.jpg" },
  { name: "The Matrix", image: "/matrix-movie.jpg" },
  { name: "Sherlock", image: "/sherlock-show.jpg" },
  { name: "Black Mirror", image: "/black-mirror-show.jpg" },
  { name: "Westworld", image: "/westworld-show.jpg" },
  { name: "The Avengers", image: "/avengers-movie.jpg" },
  { name: "Dune", image: "/dune-movie.jpg" },
]

export default function HighPage() {
  return (
    <div className="min-h-screen p-8">
      <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-12">
        <ArrowLeft className="w-4 h-4" />
        Back
      </Link>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-foreground">Characters</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {popularCharacters.map((character) => (
            <Link
              key={character.name}
              href={`/chat/high/${encodeURIComponent(character.name)}`}
              className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-accent transition-colors"
            >
              <div className="w-32 h-32 rounded-lg overflow-hidden bg-card">
                <img
                  src={character.image || "/placeholder.svg"}
                  alt={character.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm text-foreground">{character.name}</span>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-8 text-foreground">Popular Shows</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {popularShows.map((show) => (
            <button
              key={show.name}
              className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-accent transition-colors"
            >
              <div className="w-32 h-32 rounded-lg overflow-hidden bg-card">
                <img src={show.image || "/placeholder.svg"} alt={show.name} className="w-full h-full object-cover" />
              </div>
              <span className="text-sm text-center text-foreground">{show.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
