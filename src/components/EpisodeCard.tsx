import type { Episode } from '../types/podcast';

interface EpisodeCardProps {
    episode: Episode;
    onPlay: (episode: Episode) => void;
}

export const EpisodeCard = ({episode, onPlay}: EpisodeCardProps) => {
    return (
        <div 
            onClick={() => onPlay(episode)}
            className="group bg-[#181818] hover:bg-[#282828] p-4 rounded-xl transition-all duration-300 cursor-pointer shadow-xl"
        >
            <div className="relative mb-4">
                <img 
                    src={episode.thumbnail} 
                    className="w-full aspect-square object-cover rounded-lg shadow-2xl" 
                    alt={episode.title} 
                />
                {/* Spotify-style Play Button */}
                <div className="absolute bottom-2 right-2 bg-rose-500 text-white p-4 rounded-full shadow-2xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </div>
            </div>
            
            {/* Light text for dark background */}
            <h3 className="text-xl font-bold text-white truncate mb-1">{episode.title}</h3>
            <p className="text-gray-400 text-sm line-clamp-2 mb-4">{episode.description}</p>
            
            <div className="flex flex-wrap gap-2">
                {episode.tags.map(tag => (
                    <span key={tag} className="bg-[#2a2a2a] text-rose-400 px-2 py-1 rounded text-xs font-medium">
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    );
};