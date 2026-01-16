import { useState } from 'react'
import type { Episode } from './types/podcast'
import { EpisodeCard } from './components/EpisodeCard'
import { EPISODES } from './data/episodes'


export default function App() {
  const [activeEpisode, setActiveEpisode] = useState<Episode | null>(null);

  return (
    <div className="min-h-screen bg-rose-50 p-8">
      <main className="max-w-6xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EPISODES.map((ep) => (
            <EpisodeCard key={ep.id} episode={ep} onPlay={(selected) => setActiveEpisode(selected)}
            />
          )
          )}
        </div>
      </main>
    
     

      {/* Persistent Audio Player */}
      {activeEpisode && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex justify-between items-center">
          <div>
            <p className="font-bold">{activeEpisode.title}</p>
          </div>
          <audio controls src={activeEpisode.audioUrl} autoPlay />
        </div>
      )}
    </div>
  )
}