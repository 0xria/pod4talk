import { useState } from 'react'
import type { Episode } from './types/podcast'
import { EpisodeCard } from './components/EpisodeCard'
import { EPISODES } from './data/episodes'

export default function App() {
  const [activeEpisode, setActiveEpisode] = useState<Episode | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredEpisodes = activeCategory === 'All' 
    ? EPISODES 
    : EPISODES.filter(ep => ep.tags.includes(activeCategory));

  const categories = ['All', 'Advice', 'Stories', 'Relationships'];

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* 1. Header Area */}
      <header className="p-6 max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-black">Pod4Talk</h1>
          <p className="text-rose-500 font-bold uppercase tracking-widest text-xs">With Attybest</p>
        </div>
        <button className="bg-white text-black px-6 py-2 rounded-full font-bold">Sign In</button>
      </header>

      {/* 2. Main Content */}
      <main className="p-6 max-w-7xl mx-auto">
        {/* Category Filter Bar */}
        <div className="flex gap-3 mb-8 overflow-x-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-md text-sm font-bold transition ${
                activeCategory === cat ? 'bg-white text-black' : 'bg-[#282828] text-white hover:bg-[#3e3e3e]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3. GRID SYSTEM - This fixes the stacking! */}
        <main className="max-w-7xl mx-auto p-6">
          {/* Filter buttons here... */}

          {/* THIS DIV IS THE KEY TO THE SPOTIFY LOOK */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredEpisodes.map((ep) => (
              <EpisodeCard 
                key={ep.id} 
                episode={ep} 
                onPlay={setActiveEpisode} 
              />
            ))}
          </div>
        </main>
      </main>

      {/* 4. Player (Stuck to bottom) */}
      {activeEpisode && (
        <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-[#282828] p-4 flex items-center justify-between">
           <div className="flex items-center gap-4">
             <img src={activeEpisode.thumbnail} className="w-12 h-12 rounded" />
             <p className="font-bold">{activeEpisode.title}</p>
           </div>
           <audio key={activeEpisode.id} src={activeEpisode.audioUrl} controls autoPlay className="w-1/2" />
        </div>
      )}
    </div>
  )
}