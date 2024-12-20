import { Header } from '@/components/Header'

import { OrganizationForm } from '../org/organization-form'

export default function CreateOrganzation() {
  return (
    <div className="space-y-4 py-4">
      <Header />
      <main className="mx-auto w-full max-w-[1200px]">
        <h1 className="text-2xl font-bold">Create Organization</h1>

        <OrganizationForm />
      </main>
    </div>
  )
}
