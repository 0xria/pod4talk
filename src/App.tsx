import { useState } from 'react'
import type { Episode } from './types/podcast'
import { EpisodeCard } from './components/EpisodeCard'
import { EPISODES } from './data/episodes'

export default function App() {
  const [activeEpisode, setActiveEpisode] = useState<Episode | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const filteredEpisodes = activeCategory === 'All' 
    ? EPISODES 
    : EPISODES.filter(ep => ep.tags.includes(activeCategory));

  const categories = ['All', 'Advice', 'Stories', 'Relationships'];

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans">
      
      {/* 1. BRANDED HEADER */}
      <header className="max-w-7xl mx-auto py-8 px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-rose-600 rounded-xl flex items-center justify-center shadow-lg shadow-rose-500/20">
            <span className="text-white font-black text-xl">P4T</span>
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tighter text-white uppercase">Pod4Talk</h1>
            <p className="text-rose-500 text-[10px] font-bold tracking-[0.2em] uppercase">With Attybest</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button 
            onClick={() => setIsLoginOpen(true)}
            className="text-gray-400 hover:text-white font-bold transition text-sm hidden sm:block"
          >
            Sign Up
          </button>
          <button 
            onClick={() => setIsLoginOpen(true)}
            className="bg-white text-black px-8 py-2.5 rounded-full font-bold hover:scale-105 transition active:scale-95 shadow-lg"
          >
            Log In
          </button>
        </div>
      </header>

      {/* 2. MAIN CONTENT AREA */}
      <main className="p-6 max-w-7xl mx-auto">
        
        {/* Category Filter Bar */}
        <div className="flex gap-3 mb-10 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition whitespace-nowrap ${
                activeCategory === cat 
                  ? 'bg-white text-black' 
                  : 'bg-[#282828] text-white hover:bg-[#3e3e3e]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* EPISODE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-32">
          {filteredEpisodes.map((ep) => (
            <EpisodeCard 
              key={ep.id} 
              episode={ep} 
              onPlay={(selected) => setActiveEpisode(selected)} 
            />
          ))}
        </div>
      </main>

      {/* 3. PERSISTENT PLAYER */}
      {activeEpisode && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#181818] border-t border-[#282828] p-4 z-50 shadow-2xl">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 w-full md:w-1/3">
              <img 
                src={activeEpisode.thumbnail} 
                className="w-14 h-14 rounded-md object-cover shadow-md" 
                alt="" 
              />
              <div className="overflow-hidden">
                <p className="font-bold text-white truncate">{activeEpisode.title}</p>
                <p className="text-xs text-gray-400">Pod4Talk Original</p>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <audio 
                key={activeEpisode.id} 
                src={activeEpisode.audioUrl} 
                controls 
                autoPlay 
                className="w-full h-8" 
              />
            </div>
          </div>
        </div>
      )}

      {/* 4. LOGIN MODAL POPUP */}
      {isLoginOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-[#181818] w-full max-w-md rounded-2xl p-8 border border-[#333] shadow-2xl relative">
            <button 
              onClick={() => setIsLoginOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white text-xl"
            >
              ✕
            </button>
            <div className="text-center mb-8">
              <div className="bg-rose-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-black">P4T</span>
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Log in to Pod4Talk</h2>
            </div>
            <div className="space-y-4">
              <button className="w-full bg-white text-black font-bold py-3 rounded-full hover:scale-[1.02] transition">Continue with Google</button>
              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-[#333]"></div></div>
                <div className="relative flex justify-center text-xs uppercase"><span className="bg-[#181818] px-2 text-gray-500">or</span></div>
              </div>
              <input type="email" placeholder="Email or username" className="w-full bg-[#2a2a2a] border-0 rounded-md p-3 text-white focus:ring-2 focus:ring-rose-500 outline-none" />
              <button className="w-full bg-rose-600 text-white font-bold py-3 rounded-full mt-4 shadow-lg shadow-rose-600/20">Log In</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}