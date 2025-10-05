import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const popularCharacters = [
  {
    name: "Spider-Man",
    image: "/spider-man-superhero.jpg",
  },
  {
    name: "Hermione Granger",
    image: "/hermione-granger-harry-potter.jpg",
  },
  {
    name: "Iron Man",
    image: "/iron-man-superhero.jpg",
  },
  {
    name: "Katniss Everdeen",
    image: "/katniss-everdeen-hunger-games.jpg",
  },
  {
    name: "Percy Jackson",
    image: "/percy-jackson-character.jpg",
  },
]

const popularShows = [
  { name: "Stranger Things", image: "/stranger-things-show.jpg" },
  { name: "Avatar: The Last Airbender", image: "/avatar-show.jpg" },
  { name: "The Mandalorian", image: "/mandalorian-show.jpg" },
  { name: "Percy Jackson", image: "/percy-jackson-show.jpg" },
  { name: "Wednesday", image: "/wednesday-show.jpg" },
  { name: "Marvel Movies", image: "/marvel-movies.jpg" },
  { name: "Harry Potter", image: "/harry-potter-movies.jpg" },
  { name: "The Hunger Games", image: "/hunger-games-movies.jpg" },
  { name: "Jurassic World", image: "/jurassic-world-movies.jpg" },
  { name: "Star Wars", image: "/star-wars-movies.jpg" },
]

export default function MiddlePage() {
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
              href={`/chat/middle/${encodeURIComponent(character.name)}`}
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
