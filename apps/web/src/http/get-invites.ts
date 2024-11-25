import { Role } from '@saas/auth'

import { api } from './api-client'

interface GetInvitesResponse {
  invites: {
    id: string
    email: string
    role: Role
    createAt: Date
    organization: {
      name: string
    }
    author: {
      id: string
      name: string | null
      avatarUrl: string | null
    } | null
  }[]
}

export async function getInvites(org: string): Promise<GetInvitesResponse> {
  const result = await api
    .get(`organizations/${org}/invites`, {
      next: {
        tags: [`${org}/invites`],
      },
    })
    .json<GetInvitesResponse>()

  return result
}
