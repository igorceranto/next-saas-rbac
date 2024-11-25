'use server'

import { Role } from '@saas/auth'
import { revalidateTag } from 'next/cache'

import { getCurrentOrg } from '@/auth/auth'
import { removeMember } from '@/http/remove-member'
import { updateMember } from '@/http/update-member'

export async function removeMemberAction(memberId: string) {
  // remove member from org
  const correntOrg = await getCurrentOrg()

  await removeMember({
    org: correntOrg!,
    memberId,
  })

  revalidateTag(`${correntOrg}/members`)
}

export async function updateMemberAction(memberId: string, role: Role) {
  // remove member from org
  const correntOrg = await getCurrentOrg()

  await updateMember({
    org: correntOrg!,
    memberId,
    role,
  })

  revalidateTag(`${correntOrg}/members`)
}
