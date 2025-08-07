import { Command } from '../../types/commands';

export const aiCommands: Command[] = [
  {
    name: '/ai chat',
    description: 'Chat with the AI assistant',
    usage: '/ai chat <prompt>',
    permissions: []
  },
  {
    name: '/ai image',
    description: 'Generate an image from text',
    usage: '/ai image <description>',
    permissions: []
  },
  {
    name: '/ai summarize',
    description: 'Summarize provided text or link',
    usage: '/ai summarize <text or url>',
    permissions: []
  }
];
