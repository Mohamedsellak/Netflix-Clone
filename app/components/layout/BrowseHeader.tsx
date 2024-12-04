'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Bell, Search, ChevronDown } from 'lucide-react'

const categories = ['Home', 'TV Shows', 'Movies', 'New & Popular', 'My List']

export default function BrowseHeader() {
  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-gradient-to-b from-black/80 via-black/50 to-transparent">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">
          {/* Left side */}
          <div className="flex items-center gap-8">
            <Link href="/" className="block">
              <Image
                src="/netflix-logo.svg"
                alt="Netflix"
                width={92}
                height={28}
                priority
                className="h-[25px] w-auto"
              />
            </Link>
            <nav className="hidden lg:flex items-center gap-4">
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/browse/${category.toLowerCase().replace(/ & /g, '-')}`}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {category}
                </Link>
              ))}
            </nav>
            <button className="lg:hidden text-white flex items-center gap-1">
              Browse <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-6">
            <button className="text-white hover:text-gray-300 transition-colors">
              <Search className="w-6 h-6" />
            </button>
            <button className="text-white hover:text-gray-300 transition-colors">
              <Bell className="w-6 h-6" />
            </button>
            <button className="group flex items-center gap-2">
              <Image
                src="https://picsum.photos/32/32"
                alt="Profile"
                width={32}
                height={32}
                className="rounded"
              />
              <ChevronDown className="w-4 h-4 text-white group-hover:rotate-180 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
} 