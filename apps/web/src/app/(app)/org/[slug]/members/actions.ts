'use server'

import { Role } from '@saas/auth'
import { revalidateTag } from 'next/cache'

import { getCurrentOrg } from '@/auth/auth'
import { removeMember } from '@/http/remove-member'
import { revokeInvite } from '@/http/revoke-invite'
import { updateMember } from '@/http/update-member'

export async function removeMemberAction(memberId: string) {
  const correntOrg = getCurrentOrg()

  await removeMember({
    org: correntOrg!,
    memberId,
  })

  revalidateTag(`${correntOrg}/members`)
}

export async function updateMemberAction(memberId: string, role: Role) {
  const correntOrg = getCurrentOrg()

  await updateMember({
    org: correntOrg!,
    memberId,
    role,
  })

  revalidateTag(`${correntOrg}/members`)
}

export async function revokeInviteAction(inviteId: string) {
  const correntOrg = getCurrentOrg()

  await revokeInvite({
    org: correntOrg!,
    inviteId,
  })

  revalidateTag(`${correntOrg}/invites`)
}
