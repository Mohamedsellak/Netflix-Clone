'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Globe } from 'lucide-react'

export default function MainHeader() {
  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-gradient-to-b from-black/80 via-black/50 to-transparent">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">
          <Link href="/" className="block pt-5">
            <Image
              src="/netflix-logo.svg"
              alt="Netflix"
              width={120}
              height={36}
              priority
              className="h-11 w-auto"
            />
          </Link>

          <div className="flex items-center gap-4">
            <div className="relative">
              <select
                className="appearance-none bg-transparent text-white px-8 py-1 border rounded-full border-white/30 hover:border-white/70 transition-colors"
                defaultValue="en"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
              <Globe className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-white" />
            </div>
            <Link
              href="/login"
              className="bg-white text-black px-4 py-1.5 rounded-full hover:bg-stone-300 transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
} 