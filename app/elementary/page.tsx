import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const popularCharacters = [
  {
    name: "Mickey Mouse",
    image: "/mickey-mouse-cartoon-character.jpg",
  },
  {
    name: "Elsa",
    image: "/elsa-frozen-character.jpg",
  },
  {
    name: "SpongeBob",
    image: "/spongebob-squarepants-character.jpg",
  },
  {
    name: "Dora",
    image: "/dora-the-explorer-character.jpg",
  },
  {
    name: "Bluey",
    image: "/bluey-cartoon-dog-character.jpg",
  },
]

const popularShows = [
  { name: "Sesame Street", image: "/sesame-street-show.jpg" },
  { name: "Paw Patrol", image: "/paw-patrol-show.jpg" },
  { name: "Peppa Pig", image: "/peppa-pig-show.jpg" },
  { name: "Daniel Tiger", image: "/daniel-tiger-show.jpg" },
  { name: "Wild Kratts", image: "/wild-kratts-show.jpg" },
  { name: "Octonauts", image: "/octonauts-show.jpg" },
  { name: "Magic School Bus", image: "/magic-school-bus-show.jpg" },
  { name: "Arthur", image: "/arthur-show.jpg" },
  { name: "Curious George", image: "/curious-george-show.jpg" },
  { name: "Bluey", image: "/bluey-show.jpg" },
]

export default function ElementaryPage() {
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
              href={`/chat/elementary/${encodeURIComponent(character.name)}`}
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
