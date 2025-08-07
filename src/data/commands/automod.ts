import { Command } from '../../types/commands';

export const automodCommands: Command[] = [
  {
    name: '/automod add',
    description: 'Add a rule to automod (e.g., keyword, invite block)',
    usage: '/automod add <type> <value>',
    permissions: ['MODERATE_MEMBERS']
  },
  {
    name: '/automod remove',
    description: 'Remove an existing automod rule',
    usage: '/automod remove <type> <value>',
    permissions: ['MODERATE_MEMBERS']
  },
  {
    name: '/automod antispam',
    description: 'Configure anti-spam protections',
    usage: '/automod antispam [settings]',
    permissions: ['MODERATE_MEMBERS']
  },
  {
    name: '/automod antiinvite',
    description: 'Block Discord invite links automatically',
    usage: '/automod antiinvite [enable|disable]',
    permissions: ['MODERATE_MEMBERS']
  },
  {
    name: '/automod display',
    description: 'Show current automod configuration',
    usage: '/automod display',
    permissions: ['MODERATE_MEMBERS']
  },
  {
    name: '/automod linkschannel',
    description: 'Set channel for automod link handling',
    usage: '/automod linkschannel <#channel>',
    permissions: ['MODERATE_MEMBERS']
  }
];
