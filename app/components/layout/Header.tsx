'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Globe } from 'lucide-react'

type HeaderVariant = 'marketing' | 'auth' | 'register'

interface HeaderProps {
  variant?: HeaderVariant
}

export default function Header({ variant = 'marketing' }: HeaderProps) {
  const renderContent = () => {
    switch (variant) {
      case 'marketing':
        return (
          <>
            <Link href="/" className="block">
              <Image
                src="/netflix-logo.svg"
                alt="Netflix"
                width={167}
                height={45}
                priority
                className="h-8 w-auto"
              />
            </Link>

            <div className="flex items-center gap-4">
              <div className="relative">
                <select
                  className="appearance-none bg-transparent text-white px-8 py-1 border rounded-[2px] border-white/30 hover:border-white/70 transition-colors text-[14px]"
                  defaultValue="en"
                >
                  <option value="en">English</option>
                  <option value="es">Español</option>
                </select>
                <Globe className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-white" />
              </div>
              <Link
                href="/login"
                className="bg-[#E50914] text-white px-4 py-1.5 rounded-[4px] hover:bg-[#F40612] transition-colors text-sm font-medium"
              >
                Sign In
              </Link>
            </div>
          </>
        )

      case 'auth':
        return (
          <>
            <Link href="/" className="block">
              <Image
                src="/netflix-logo.svg"
                alt="Netflix"
                width={167}
                height={45}
                priority
                className="h-8 w-auto"
              />
            </Link>

            <div className="flex items-center gap-4">
              <div className="relative">
                <select
                  className="appearance-none bg-transparent text-[#333] px-8 py-1 border rounded-[2px] border-[#333]/30 hover:border-[#333]/70 transition-colors text-[14px]"
                  defaultValue="en"
                >
                  <option value="en">English</option>
                  <option value="es">Español</option>
                </select>
                <Globe className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-[#333]" />
              </div>
              <Link
                href="/signup"
                className="text-[#333] text-sm font-medium hover:underline"
              >
                Sign Up
              </Link>
            </div>
          </>
        )

      case 'register':
        return (
          <>
            <Link href="/" className="block">
              <Image
                src="/netflix-logo.svg"
                alt="Netflix"
                width={167}
                height={45}
                priority
                className="h-8 w-auto"
              />
            </Link>

            <Link
              href="/login"
              className="text-[#333] text-lg font-medium hover:underline"
            >
              Sign In
            </Link>
          </>
        )
    }
  }

  const bgClasses = {
    marketing: 'bg-gradient-to-b from-black/80 via-black/50 to-transparent',
    auth: 'bg-white border-b border-[#e6e6e6]',
    register: 'bg-white border-b border-[#e6e6e6]'
  }

  return (
    <header className={`fixed top-0 w-full z-50 ${bgClasses[variant]}`}>
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[64px]">
          {renderContent()}
        </div>
      </div>
    </header>
  )
} 