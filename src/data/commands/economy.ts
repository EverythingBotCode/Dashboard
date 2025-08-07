import { Command } from '../../types/commands';

export const economyCommands: Command[] = [
  { name: '/daily', description: 'Claim daily reward', usage: '/daily', permissions: [] },
  { name: '/balance', description: 'Check your balance', usage: '/balance', permissions: [] },
  { name: '/slots', description: 'Play the slot machine', usage: '/slots <amount>', permissions: [] },
  { name: '/blackjack', description: 'Play blackjack', usage: '/blackjack <bet>', permissions: [] },
  { name: '/roulette', description: 'Play roulette', usage: '/roulette <bet>', permissions: [] },
  { name: '/crash', description: 'Play crash game', usage: '/crash <amount>', permissions: [] },
  { name: '/pay', description: 'Send currency to another user', usage: '/pay <user> <amount>', permissions: [] }
];
