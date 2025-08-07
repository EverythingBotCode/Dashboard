import { Command } from '../../types/commands';

export const utilityCommands: Command[] = [
  { name: '/userinfo', description: 'Display information about a user', usage: '/userinfo [user]', permissions: [] },
  { name: '/serverinfo', description: 'Show server stats', usage: '/serverinfo', permissions: [] },
  { name: '/avatar', description: 'Get user avatar', usage: '/avatar [user]', permissions: [] },
  { name: '/poll', description: 'Create a poll', usage: '/poll "<question>" [choices]', permissions: [] },
  { name: '/remindme', description: 'Set a reminder', usage: '/remindme <time> <message>', permissions: [] }
];
