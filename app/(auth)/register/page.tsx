'use client'

import React from 'react'
import Link from 'next/link'
import { Laptop, Monitor, Smartphone, Tablet } from 'lucide-react'

export default function AccountSetupPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Device Icons */}
          <div className="flex justify-center gap-4 mb-8">
            <Laptop className="w-8 h-8 text-[#E50914]" />
            <Monitor className="w-8 h-8 text-[#E50914]" />
            <div className="flex">
              <Smartphone className="w-8 h-8 text-[#E50914]" />
              <Tablet className="w-8 h-8 text-[#E50914] -ml-2" />
            </div>
          </div>

          {/* Step Indicator */}
          <p className="text-sm text-gray-600 text-center mb-4">
            STEP <span className="font-medium">1</span> OF <span className="font-medium">3</span>
          </p>

          {/* Title and Description */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Finish setting up your account
          </h1>
          <p className="text-lg text-gray-600 text-center mb-8">
            Netflix is personalized for you.
            <br />
            Create a password to watch on any device at any time.
          </p>

          {/* Next Button */}
          <div className="max-w-sm mx-auto">
            <Link
              href="/register/payment"
              className="block bg-[#E50914] text-white text-lg font-medium py-3 px-8 rounded-md hover:bg-[#F40612] transition-colors duration-200 text-center"
            >
              Next
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
} 