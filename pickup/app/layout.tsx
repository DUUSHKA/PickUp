import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Navbar from './component/navbar/Navbar'
import RegisterModal from './component/modal/RegisterModal'
import LoginModal from './component/modal/LoginModal'

import ClientOnly from './component/ClientOnly'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Options from './component/Layout/Options'


const inter = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PickUp',
  description: 'Connecting basketball enthusiasts to easily find, join, or organize pickup basketball games!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ClientOnly >
        <RegisterModal />
        <LoginModal />
        <Navbar />
        <Options/>
      </ClientOnly>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
