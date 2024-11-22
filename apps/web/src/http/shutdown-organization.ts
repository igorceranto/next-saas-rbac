import { api } from './api-client'

interface ShutdownOrganzationRequest {
  org: string
}

export async function shutdownOrganzation({ org }: ShutdownOrganzationRequest) {
  await api.delete(`organizations/${org}`)
}
