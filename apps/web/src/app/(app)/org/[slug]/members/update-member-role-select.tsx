'use client'
import { Role } from '@saas/auth'
import { ComponentProps } from 'react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { updateMemberAction } from './actions'

interface UpdateMemberRoleSelectProps extends ComponentProps<typeof Select> {
  memberId: string
}

export async function UpdateMemberRoleSelect({
  memberId,
  ...props
}: UpdateMemberRoleSelectProps) {
  async function updateMemeberRole(role: Role) {
    await updateMemberAction(memberId, role)
  }

  return (
    <Select onValueChange={updateMemeberRole} {...props}>
      <SelectTrigger className="h-8 w-32">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="ADMIN">Admin</SelectItem>
        <SelectItem value="MEMBER">Member</SelectItem>
        <SelectItem value="BILLING">Billing</SelectItem>
      </SelectContent>
    </Select>
  )
}
