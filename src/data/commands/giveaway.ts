import { Command } from '../../types/commands';

export const giveawayCommands: Command[] = [
  {
    name: '/giveaway start',
    description: 'Start a new giveaway',
    usage: '/giveaway start <prize> [duration] [winners]',
    permissions: ['MANAGE_GUILD']
  },
  {
    name: '/giveaway end',
    description: 'End an active giveaway',
    usage: '/giveaway end <id>',
    permissions: ['MANAGE_GUILD']
  },
  {
    name: '/giveaway reroll',
    description: 'Reroll winners for a giveaway',
    usage: '/giveaway reroll <id>',
    permissions: ['MANAGE_GUILD']
  }
];
