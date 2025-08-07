import { Command } from '../../types/commands';

export const suggestionCommands: Command[] = [
  { name: '/suggest', description: 'Submit a suggestion', usage: '/suggest <idea>', permissions: [] },
  { name: '/suggestions review', description: 'Review suggestions', usage: '/suggestions review', permissions: ['MANAGE_GUILD'] }
];
