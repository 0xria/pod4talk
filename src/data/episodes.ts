import type { Episode } from '../types/podcast';

export const EPISODES: Episode[] = [
  {
    id: '1',
    title: 'The Art of Listening',
    description: 'Exploring the nuances of active listening in conversations.',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop', 
    tags: ['Listening', 'Love']
  },

  {
    id : '2',
    title: 'Navigating Modern Relationships',
    description: 'Tips and advice for maintaining healthy relationships in today’s world.',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    thumbnail: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop', 
    tags: ['Relationships', 'Advice']

  },

  {
    id: '3',
    title: 'Overcoming Challenges Together',
    description: 'Stories of couples who have faced and overcome significant challenges.',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    thumbnail: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&auto=format&fit=crop', 
    tags: ['Stories', 'Couples']
  }
];