import { api } from './api-client'

export async function rejectInvite(inviteId: string) {
  await api.patch(`invites/${inviteId}/reject`)
}
