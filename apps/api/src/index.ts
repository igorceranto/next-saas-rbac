import { defineAbilityFor } from '@saas/auth'


const ability = defineAbilityFor({ role: 'MEMBER' })

const userCanInviteSomeoneElse = ability.can('invite', 'User')
const userCanDeleteOtherUsers = ability.can('delete', 'User')
const userCannotDeleteOtherUsers = ability.cannot('delete', 'User')

console.log(userCanInviteSomeoneElse) // true
console.log(userCanDeleteOtherUsers) // false
console.log(userCannotDeleteOtherUsers) // true