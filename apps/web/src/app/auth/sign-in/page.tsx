import { Label } from '@radix-ui/react-label'
import { Separator } from '@radix-ui/react-separator'
import Image from 'next/image'
import Link from 'next/link'

import githubIcon from '@/app/assets/github.svg'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function SignInPage() {
  return (
    <form action="" className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="email">E-mail</Label>
        <Input name="email" type="email" id="email" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <Input name="password" type="password" id="password" />
        <Link
          href="/auth/forgot-password"
          className="text-xs font-medium text-foreground hover:underline"
        >
          Forgot your password?
        </Link>
      </div>

      <Button type="submit" className="w-full">
        Sign in with e-mail
      </Button>

      <Button variant="link" className="w-full" size="sm" asChild>
        <Link href="/auth/sign-up">Create a new account</Link>
      </Button>

      <Separator />
      <Button type="submit" className="w-full" variant="outline">
        <Image src={githubIcon} className="mr-2 size-4 dark:invert" alt="" />
        Sign in with GitHub
      </Button>
    </form>
  )
}
