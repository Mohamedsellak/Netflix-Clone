'use client'

import React, { useState } from 'react'
import { AlertCircle } from 'lucide-react'

export default function PasswordSetupPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (password.length < 6 || password.length > 60) {
      setError('Your password must contain between 6 and 60 characters.')
      return
    }

    // If validation passes, proceed to next step
    window.location.href = '/register/plan'
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Step Indicator */}
          <p className="text-sm text-gray-600 mb-4">
            STEP <span className="font-medium">2</span> OF <span className="font-medium">3</span>
          </p>

          {/* Title and Description */}
          <h1 className="text-3xl font-medium text-gray-900 mb-4">
            Create a password to start your membership
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Just a few more steps and you&apos;re done!
            <br />
            We hate paperwork, too.
          </p>

          {/* Password Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Add a password"
                  className={`w-full px-4 py-4 border rounded text-black ${
                    error ? 'border-[#E87C03]' : 'border-gray-300'
                  } focus:outline-none focus:border-blue-500`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
                >
                  {showPassword ? 'HIDE' : 'SHOW'}
                </button>
              </div>
              {error && (
                <div className="flex items-center gap-1 mt-1 text-[#E87C03] text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span>{error}</span>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <label className="flex items-start gap-2 text-gray-600">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-[#E50914] focus:ring-[#E50914]"
                />
                <span className="text-sm">
                  Please do not email me Netflix special offers.
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#E50914] text-white text-xl font-medium py-4 rounded hover:bg-[#F40612] transition-colors"
            >
              Next
            </button>
          </form>
        </div>
      </main>
    </div>
  )
} 