'use client'

import '../app/globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Navbar from '../app/component/navbar/Navbar'
import ClientOnly from '@/app/component/ClientOnly'
import GameList from '@/app/component/game/GameList'

const inter = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PickUp',
  description: 'Connecting basketball enthusiasts to easily find, join, or organize pickup basketball games!',
}

export default function Create() {
  return (
    <div>
      <ClientOnly >
        <Navbar /> 
        <GameList />
      </ClientOnly>
      </div>
  )
};
