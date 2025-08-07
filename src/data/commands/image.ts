import { Command } from '../../types/commands';

export const imageToolCommands: Command[] = [
  {
    name: '/image edit',
    description: 'Edit an image with filters or overlays',
    usage: '/image edit <options>',
    permissions: []
  },
  {
    name: '/image gen',
    description: 'Generate an image from a prompt',
    usage: '/image gen <prompt>',
    permissions: []
  },
  {
    name: '/avatarify',
    description: 'Apply effects to an avatar',
    usage: '/avatarify <user>',
    permissions: []
  }
];
