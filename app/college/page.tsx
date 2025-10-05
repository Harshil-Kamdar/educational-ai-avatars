import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const popularCharacters = [
  {
    name: "Alan Turing",
    image: "/alan-turing-scientist.jpg",
  },
  {
    name: "Marie Curie",
    image: "/marie-curie-scientist.jpg",
  },
  {
    name: "Elon Musk",
    image: "/elon-musk-entrepreneur.jpg",
  },
  {
    name: "Stephen Hawking",
    image: "/stephen-hawking-physicist.jpg",
  },
  {
    name: "Coding Mentor AI",
    image: "/coding-mentor-ai.jpg",
  },
]

const popularShows = [
  { name: "Silicon Valley", image: "/silicon-valley-show.jpg" },
  { name: "The Social Network", image: "/social-network-movie.jpg" },
  { name: "Mr. Robot", image: "/mr-robot-show.jpg" },
  { name: "The Imitation Game", image: "/imitation-game-movie.jpg" },
  { name: "A Beautiful Mind", image: "/beautiful-mind-movie.jpg" },
  { name: "The Theory of Everything", image: "/theory-of-everything-movie.jpg" },
  { name: "Oppenheimer", image: "/oppenheimer-movie.jpg" },
  { name: "Steve Jobs", image: "/steve-jobs-movie.jpg" },
  { name: "The Big Short", image: "/big-short-movie.jpg" },
  { name: "Moneyball", image: "/moneyball-movie.jpg" },
]

export default function CollegePage() {
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
              href={`/chat/college/${encodeURIComponent(character.name)}`}
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
