
import { EmailRegistry } from '@/lib/email/email-registry';
import TeamInviteEmail from './emails/team-invite';

export async function init() {
    // Registering as 'user:invite' to override/supply the template expected by InviteTeamMemberAction
    // Note: If user-email also registers 'user:invite', there might be a conflict.
    // However, usually 'user:invite' (generic) vs 'team:invite'.
    // The legacy team module registered it as 'user:invite'.
    // The user-api module (and now user-email) also registers 'user:invite'.
    // We should probably check if we need distinct keys.
    // Implementation Plan said: "Register user:invite (or team:invite alias)".
    // Let's stick to 'user:invite' for now but be aware of collision if both modules are loaded.
    // If both are loaded, last one wins? Or conflicts.
    // In a real app, user-email handles user invites, team-email handles team invites?
    // But 'InviteTeamMemberAction' in 'team-api' calls 'user:invite'.
    // Let's register it as 'user:invite' to match the legacy behavior for now.

    EmailRegistry.register('user:invite', TeamInviteEmail);
}
