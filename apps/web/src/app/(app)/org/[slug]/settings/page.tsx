import { ability } from '@/auth/auth'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { OrganizationForm } from '../../organization-form'
import { ShutdownOrganizationButton } from './shutdown-organization-button'

export default async function Settings() {
  // const currentOrg = getCurrentOrg()

  const permissions = await ability()

  const canUpdateOrganization = permissions?.can('update', 'Organization')
  const canShutdownOrganization = permissions?.can('delete', 'Organization')
  const canGetBilling = permissions?.can('get', 'Billing')

  return (
    <div className="space-y-4 py-4">
      <h1 className="text-2xl font-bold">Settings</h1>

      <div className="space-y-4">
        {canUpdateOrganization && (
          <Card>
            <CardHeader>
              <CardTitle>Organization Settings</CardTitle>
              <CardDescription>
                Update your organization details
              </CardDescription>
              <CardContent>
                <OrganizationForm />
              </CardContent>
            </CardHeader>
          </Card>
        )}
      </div>

      {canGetBilling && <div>billing</div>}

      {canShutdownOrganization && (
        <Card>
          <CardHeader>
            <CardTitle>Shutdown Organization</CardTitle>
            <CardDescription>
              This will delete all organization data including all projects. You
              can not undo this Action.{' '}
            </CardDescription>
            <CardContent>
              <ShutdownOrganizationButton />
            </CardContent>
          </CardHeader>
        </Card>
      )}
    </div>
  )
}
