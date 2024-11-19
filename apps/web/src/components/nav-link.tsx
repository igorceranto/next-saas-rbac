'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ComponentProps } from 'react'

interface NavlinkProps extends ComponentProps<typeof Link> {}

export function NavLink(props: NavlinkProps) {
  const pathname = usePathname()

  const isCurrent = props.href === pathname

  return <Link data-current={isCurrent} {...props} />
}
