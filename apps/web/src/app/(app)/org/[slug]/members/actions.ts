'use server'

import { Role, roleSchema } from '@saas/auth'
import { HTTPError } from 'ky'
import { revalidateTag } from 'next/cache'
import { z } from 'zod'

import { getCurrentOrg } from '@/auth/auth'
import { createInvite } from '@/http/create-invite'
import { removeMember } from '@/http/remove-member'
import { revokeInvite } from '@/http/revoke-invite'
import { updateMember } from '@/http/update-member'

const inviteSchema = z.object({
  email: z.string().email({ message: 'Invalid e-mail address.' }),
  role: roleSchema,
})

export async function createInviteAction(data: FormData) {
  const result = inviteSchema.safeParse(Object.fromEntries(data))

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors

    return { success: false, message: null, errors }
  }

  const { email, role } = result.data

  try {
    await createInvite({
      email,
      role,
      org: getCurrentOrg()!,
    })

    revalidateTag(`${getCurrentOrg()}/invites`)
  } catch (err) {
    if (err instanceof HTTPError) {
      const { message } = await err.response.json()

      return { success: false, message, errors: null }
    }

    console.error(err)

    return {
      success: false,
      message: 'Unexpected error, try again in a few minutes.',
      errors: null,
    }
  }

  return {
    success: true,
    message: 'Successfully created the invite.',
    errors: null,
  }
}

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
