'use client'

import React from 'react'
import Link from 'next/link'
import { CheckCircle, Play } from 'lucide-react'

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-md text-center">
          <div className="flex justify-center mb-8">
            <CheckCircle className="w-20 h-20 text-[#E50914]" />
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Welcome to Netflix!
          </h1>

          <div className="space-y-8">
            <p className="text-xl text-gray-600">
              Your Account has been activated successfully.
            </p>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h2 className="font-medium text-xl mb-4 text-gray-900">Your Membership Details</h2>
              <div className="space-y-3 text-gray-600">
                <p className="flex justify-between">
                  <span>Plan</span>
                  <span className="font-medium text-gray-900">Standard HD</span>
                </p>
                <p className="flex justify-between">
                  <span>Billing Date</span>
                  <span className="font-medium text-gray-900">{new Date().toLocaleDateString()}</span>
                </p>
                <p className="flex justify-between">
                  <span>Next Billing</span>
                  <span className="font-medium text-gray-900">
                    {new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                  </span>
                </p>
              </div>
            </div>

            <div className="space-y-4 max-w-sm mx-auto">
              <Link
                href="https://www.netflix.com/login"
                className="block bg-[#E50914] text-white text-lg font-medium py-3 px-8 rounded-md hover:bg-[#F40612] transition-colors duration-200"
              >
                <span className="flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" fill="currentColor" />
                  Start Watching
                </span>
              </Link>

              <Link
                href="https://www.netflix.com/login"
                className="block bg-white text-gray-900 text-lg font-medium py-3 px-8 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
              >
                Manage Account
              </Link>
            </div>

            <div className="text-sm text-gray-600">
              <p>
                A confirmation email has been sent to your email address.
              </p>
              <p className="mt-3">
                Need help?{' '}
                <Link href="/help" className="text-[#E50914] hover:underline">
                  Contact Support
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 