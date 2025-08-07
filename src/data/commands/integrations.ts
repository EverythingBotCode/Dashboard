import { Command } from '../../types/commands';

export const integrationCommands: Command[] = [
  {
    name: '/spotify track',
    description: 'Track Spotify activity',
    usage: '/spotify track <user>',
    permissions: []
  },
  {
    name: '/valorant stats',
    description: 'Fetch Valorant game data',
    usage: '/valorant stats <player>',
    permissions: []
  },
  {
    name: '/instagram notify',
    description: 'Set up Instagram post notifications',
    usage: '/instagram notify <username>',
    permissions: []
  },
  {
    name: '/weather',
    description: 'Get weather forecast for a location',
    usage: '/weather <location>',
    permissions: []
  }
];
