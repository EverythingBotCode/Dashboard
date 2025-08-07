import { Command } from '../../types/commands';

export const customCommands: Command[] = [
  { name: '/custom-commands add', description: 'Add a custom response command', usage: '/custom-commands add <name> <response>', permissions: ['MANAGE_GUILD'] },
  { name: '/custom-commands delete', description: 'Remove a custom response', usage: '/custom-commands delete <name>', permissions: ['MANAGE_GUILD'] }
];
