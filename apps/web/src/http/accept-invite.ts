import { api } from './api-client'

export async function acceptInvite(inviteId: string) {
  await api.patch(`invites/${inviteId}/accept`)
}
