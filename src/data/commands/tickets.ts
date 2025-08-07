import { Command } from '../../types/commands';

export const ticketCommands: Command[] = [
  {
    name: '/ticket open',
    description: 'Open a support ticket',
    usage: '/ticket open',
    permissions: []
  },
  {
    name: '/ticket close',
    description: 'Close an open ticket',
    usage: '/ticket close',
    permissions: ['MANAGE_CHANNELS']
  },
  {
    name: '/ticket setup',
    description: 'Configure ticket categories and behavior',
    usage: '/ticket setup',
    permissions: ['MANAGE_GUILD']
  }
];
