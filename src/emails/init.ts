import { EmailRegistry } from '@/lib/email/email-registry';
import TeamInviteEmail from './team-invite';

/**
 * Registers team-related email templates.
 */
export async function initEmails() {
  EmailRegistry.register('team:invite', TeamInviteEmail);
}
