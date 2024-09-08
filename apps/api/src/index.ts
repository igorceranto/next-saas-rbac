import { defineAbilityFor, projectSchema } from '@saas/auth'

const ability = defineAbilityFor({ id: 'user-id', role: 'MEMBER' })

const project = projectSchema.parse({
  id: 'project-id',
  ownerId: 'user-2id',
})

console.log(ability.can('get', 'Billing')) // true
console.log(ability.can('create', 'Invite')) // true
console.log(ability.can('delete', project)) // true
