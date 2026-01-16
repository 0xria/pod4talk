import type { Episode } from '../types/podcast';

interface EpisodeCardProps {
    episode: Episode;
    onPlay: (episode: Episode) => void;
}

export const EpisodeCard = ({episode, onPlay}: EpisodeCardProps) => {
    return (
        <div className="bg-white p-6 rounded-3xl shadow-md border border-rose-100 hover:shadow-lg transition-shadow">
            <div className="relative group">
                <img
                src={episode.thumbnail}
                alt={episode.title}
                className="w-full h-48 object-cover rounded-2xl mb-4"
                />
                {/* Play Button Overlay */}
                <button onClick={() => onPlay(episode)}
                className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"
                >
                    <span className="bg-rose-500 text-white p-4 rounded-full shadow-xl"> Play </span>
                </button>
            </div>
            <h2 className="text-2xl font-bold text-rose-900 mb-2">{episode.title}</h2>
            <p className="text-rose-700 mb-4">{episode.description}</p>
            <div className="flex flex-wrap gap-2">
                {episode.tags.map(tag => (
                    <span key={tag} className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm">
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    );
};