import './globals.css'
import { ReactNode } from 'react'
import { cookies } from 'next/headers'

import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google'

import { Hero } from '@/components/Hero'
import { Profile } from '@/components/Profile'
import { SignIn } from '@/components/SignIn'
import { Copyright } from '@/components/Copyright'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'NLW Spacetime',
  description:
    'Uma cápsula do tempo contruída com React, Next.js, TailwindCSS e TypeScript',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const isAuthenticated = cookies().has('token')

  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        <main className="grid min-h-screen grid-cols-1 laptop:grid-cols-2">
          {/* Left */}
          <div className="relative flex h-[480px] w-full flex-col items-center justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-10 py-7 laptop:h-screen laptop:items-start laptop:py-16">
            {/* Blur */}
            <div className="laptop:absolute laptop:right-0 laptop:top-1/2 laptop:h-[288px] laptop:w-[526px] laptop:-translate-y-1/2 laptop:translate-x-1/2 laptop:rounded-full laptop:bg-purple-700 laptop:opacity-50 laptop:blur-full" />

            {/* Stripes */}
            <div className="laptop:absolute laptop:bottom-0 laptop:right-2 laptop:top-0 laptop:w-2 laptop:bg-stripes" />

            {isAuthenticated ? <Profile /> : <SignIn />}

            <Hero />

            <Copyright />
          </div>

          {/* Right */}
          <div className="flex max-h-screen flex-col overflow-y-scroll bg-[url(../assets/bg-stars.svg)] bg-cover">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
