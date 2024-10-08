import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const redirectURL = req.nextUrl.clone()

  redirectURL.pathname = '/auth/sign-in'

  cookies().delete('token')

  return NextResponse.redirect(redirectURL)
}
