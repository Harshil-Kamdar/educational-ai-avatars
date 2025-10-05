"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Mic, MicOff, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Character video mappings
const characterVideos: Record<string, { type: "youtube" | "github"; url: string }> = {
  "Mickey Mouse": { type: "youtube", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
  // Add more character video mappings here
}

// Default export component
const ChatPage = ({ params }) => {
  const { level, character } = params
  const [isMicrophoneOn, setIsMicrophoneOn] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    // Load video based on character
    if (characterVideos[character]) {
      const videoElement = videoRef.current
      if (videoElement) {
        videoElement.src = characterVideos[character].url
        videoElement.load()
      }
    }
  }, [character])

  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center justify-between p-4 bg-white">
        <Link href={`/chat/${level}`}>
          <Button variant="ghost">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </Link>
        <Button onClick={() => setIsMicrophoneOn(!isMicrophoneOn)}>
          {isMicrophoneOn ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
        </Button>
      </div>
      <div className="flex-1 flex items-center justify-center bg-gray-100">
        <video ref={videoRef} controls className="max-w-full max-h-full" />
      </div>
      <div className="p-4 bg-white">
        <Input placeholder="Type a message..." />
        <Button className="ml-2">
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

export default ChatPage
