import './globals.css'

import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import { Providers } from './providers'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SaaS Starter',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={roboto.className}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
