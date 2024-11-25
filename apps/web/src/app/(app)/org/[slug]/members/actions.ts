'use server'

import { revalidateTag } from 'next/cache'

import { getCurrentOrg } from '@/auth/auth'
import { removeMember } from '@/http/remove-member'

export async function removeMemberAction(memberId: string) {
  // remove member from org
  const correntOrg = await getCurrentOrg()

  await removeMember({
    org: correntOrg!,
    memberId,
  })

  revalidateTag(`${correntOrg}/members`)
}
