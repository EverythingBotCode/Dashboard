import { Command } from '../../types/commands';

export const adminCommands: Command[] = [
  { name: '/announce', description: 'Send an announcement', usage: '/announce <message>', permissions: ['MANAGE_GUILD'] },
  { name: '/ticket setup', description: 'Configure ticket system', usage: '/ticket setup', permissions: ['MANAGE_CHANNELS'] },
  { name: '/prefix', description: 'Set or reset bot prefix', usage: '/prefix [set|reset] <prefix>', permissions: ['MANAGE_GUILD'] },
  { name: '/embed create', description: 'Build a rich embed', usage: '/embed create', permissions: ['MANAGE_MESSAGES'] }
];
