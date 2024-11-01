import { Slash } from 'lucide-react'
import Image from 'next/image'

import IAIcon from '@/app/assets/ia-icon.svg'
import { ability } from '@/auth/auth'

import { OrganizationSwitcher } from './organization-switcher'
import { ProfileButton } from './profile-button'

export async function Header() {
  const permissions = await ability()

  return (
    <div className="mx-auto flex max-w-[1200px] items-center justify-between">
      <div className="flex items-center gap-3">
        <Image src={IAIcon} className="size-6" alt="IA-icon" />
        <Slash className="size-3 -rotate-[24deg] text-border" />
        <OrganizationSwitcher />

        {permissions?.can('get', 'Project') && <p>Projetos</p>}
      </div>

      <div className="flex items-center gap-4">
        <ProfileButton />
      </div>
    </div>
  )
}
