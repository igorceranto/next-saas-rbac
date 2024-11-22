import { XCircle } from 'lucide-react'
import { redirect } from 'next/navigation'

import { getCurrentOrg } from '@/auth/auth'
import { Button } from '@/components/ui/button'
import { shutdownOrganzation } from '@/http/shutdown-organization'

export function ShutdownOrganizationButton() {
  async function shutdownOrganizationAction() {
    'use server'
    const currentOrg = getCurrentOrg()
    await shutdownOrganzation({ org: currentOrg! })

    redirect('/')
  }

  return (
    <form action={shutdownOrganizationAction}>
      <Button variant="destructive" className="w-56">
        <XCircle className="mr-2 size-4" />
        Shutdown organization
      </Button>
    </form>
  )
}
