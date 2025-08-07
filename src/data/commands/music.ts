import { Command } from '../../types/commands';

export const musicCommands: Command[] = [
  { name: '/play', description: 'Play a track or URL', usage: '/play <song or URL>', permissions: [] },
  { name: '/nowplaying', description: 'Show currently playing track', usage: '/nowplaying', permissions: [] },
  { name: '/skip', description: 'Skip current track', usage: '/skip', permissions: [] },
  { name: '/queue', description: 'Show upcoming tracks', usage: '/queue', permissions: [] },
  { name: '/volume', description: 'Change playback volume', usage: '/volume <1-100>', permissions: [] }
];
