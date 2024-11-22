import { api } from './api-client'

interface GetBillingRequest {
  org: string
}

interface GetBillingResponse {
  billing: {
    seats: {
      amount: number
      unit: number
      price: number
    }
    project: {
      amount: number
      unit: number
      price: number
    }
    total: number
  }
}

export async function getBilling({
  org,
}: GetBillingRequest): Promise<GetBillingResponse> {
  const result = api
    .get(`organizations/${org}/billing`)
    .json<GetBillingResponse>()

  return result
}
