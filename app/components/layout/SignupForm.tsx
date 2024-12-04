'use client'

import React, { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function SignupForm() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email) {
      setError('Email is required.')
      return
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email address.')
      return
    }

    // Store email in session/local storage if needed
    router.push('/register')
  }

  return (
    <div className="text-center">
      <h3 className="text-xl lg:text-lg text-white mb-5">
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-2 lg:gap-2 items-center justify-center">
        <div className="w-full lg:w-96">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className={`w-full px-4 pt-5 pb-2 rounded-full bg-black/40 border border-gray-600 focus:border-white focus:outline-none text-white placeholder-transparent peer ${
                error ? 'border-[#e87c03]' : ''
              }`}
            />
            <label
              className="absolute left-4 top-4 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:text-sm peer-focus:top-1.5"
            >
              Email address
            </label>
          </div>
          {error && (
            <div className="text-left mt-1">
              <span className="text-[#e87c03] text-sm">{error}</span>
            </div>
          )}
        </div>
        <button
          type="submit"
          className="rounded-full bg-[#e50914] text-white px-8 h-[56px] flex items-center justify-center font-medium hover:bg-[#f6121d] transition whitespace-nowrap"
        >
          Get Started
          <ChevronRight className="w-5 h-5 ml-2" />
        </button>
      </form>
    </div>
  )
} 