'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function AuthHeader() {
  return (
    <header className="w-full border-b border-[#e6e6e6]">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[90px]">
          <Link href="/" className="block">
            <Image
              src="/netflix-logo.svg"
              alt="Netflix"
              width={167}
              height={45}
              priority
              className="w-[167px] h-[45px] text-[#E50914]"
            />
          </Link>
          <Link 
            href="/login" 
            className="text-[#333333] text-[19px] font-medium hover:underline"
          >
            Sign In
          </Link>
        </div>
      </div>
    </header>
  )
} 