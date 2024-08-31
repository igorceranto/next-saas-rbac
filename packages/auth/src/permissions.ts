import { AbilityBuilder } from '@casl/ability'

import { AppAbility } from '.'
import { User } from './models/user'

type Roles = 'ADMIN' | 'MEMBER'

type PermissionByRole = (
  user: User,
  builder: AbilityBuilder<AppAbility>,
) => void

export const permissions: Record<Roles, PermissionByRole> = {
  ADMIN: (user, { can }) => {
    can('manage', 'all')
  },
  MEMBER: (user, { can }) => {
    can('invite', 'User')
    can('manage', 'Project')
  },
}
