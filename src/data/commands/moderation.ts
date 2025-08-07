import { Command } from '../../types/commands';

export const moderationCommands: Command[] = [
  { name: '/ban', description: 'Ban a user', usage: '/ban <user> [reason]', permissions: ['BAN_MEMBERS'] },
  { name: '/kick', description: 'Kick a user', usage: '/kick <user> [reason]', permissions: ['KICK_MEMBERS'] },
  { name: '/warn', description: 'Issue a warning', usage: '/warn <user> [reason]', permissions: ['MODERATE_MEMBERS'] },
  { name: '/unwarn', description: 'Remove a warning', usage: '/unwarn <user> [warning id]', permissions: ['MODERATE_MEMBERS'] },
  { name: '/warnings', description: 'List warnings for a user', usage: '/warnings <user>', permissions: ['MODERATE_MEMBERS'] },
  { name: '/timeout', description: 'Apply timeout to a user', usage: '/timeout <user> <duration>', permissions: ['MODERATE_MEMBERS'] },
  { name: '/auditlog setup', description: 'Configure audit log system', usage: '/auditlog setup', permissions: ['VIEW_AUDIT_LOG'] }
];
