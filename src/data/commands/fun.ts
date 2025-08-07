import { Command } from '../../types/commands';

export const funCommands: Command[] = [
  { name: '/8ball', description: 'Magic 8-ball answers your question', usage: '/8ball <question>', permissions: [] },
  { name: '/wouldyourather', description: 'Play would you rather', usage: '/wouldyourather', permissions: [] },
  { name: '/trivia', description: 'Start a trivia game', usage: '/trivia', permissions: [] },
  { name: '/fasttype', description: 'Typing challenge', usage: '/fasttype', permissions: [] },
  { name: '/epicgamerrate', description: 'Rate someone as a gamer', usage: '/epicgamerrate <user>', permissions: [] },
  { name: '/fact', description: 'Get a random fact', usage: '/fact', permissions: [] },
  { name: '/dogfact', description: 'Get a random dog fact', usage: '/dogfact', permissions: [] }
];
