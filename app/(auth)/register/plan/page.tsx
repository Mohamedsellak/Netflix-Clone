'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Check } from 'lucide-react'

const plans = [
  {
    id: 'basic',
    name: 'Basic',
    price: '6.99',
    features: [
      'Watch on your laptop, TV, phone and tablet',
      'Movies and TV shows',
      'No ads',
      'Download to watch offline',
    ],
    quality: 'Good',
    resolution: '720p',
  },
  {
    id: 'standard',
    name: 'Standard',
    price: '15.49',
    features: [
      'Watch on your laptop, TV, phone and tablet',
      'Movies and TV shows',
      'No ads',
      'Download to watch offline',
      'HD available',
    ],
    quality: 'Better',
    resolution: '1080p',
    recommended: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '22.99',
    features: [
      'Watch on your laptop, TV, phone and tablet',
      'Movies and TV shows',
      'No ads',
      'Download to watch offline',
      'Ultra HD available',
      'Watch on 4 screens at once',
    ],
    quality: 'Best',
    resolution: '4K+HDR',
  },
]

export default function PlanPage() {
  const [selectedPlan, setSelectedPlan] = useState('standard')

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center px-4 py-12">
        <div className="w-full max-w-3xl">
          {/* Step Indicator */}
          <p className="text-sm text-gray-600 mb-4">
            STEP <span className="font-medium">3</span> OF <span className="font-medium">3</span>
          </p>

          <h1 className="text-3xl font-medium text-gray-900 mb-2">
            Choose your plan
          </h1>
          
          {/* Plan Features */}
          <ul className="mb-8 space-y-2">
            <li className="flex items-center gap-2">
              <Check className="w-5 h-5 text-[#E50914]" />
              <span>No commitments, cancel anytime</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-5 h-5 text-[#E50914]" />
              <span>Everything on Netflix for one low price</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-5 h-5 text-[#E50914]" />
              <span>No ads and no extra fees. Ever.</span>
            </li>
          </ul>

          {/* Plan Selection */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative p-6 rounded-lg cursor-pointer transition-all ${
                  selectedPlan === plan.id
                    ? 'bg-[#E50914]/10 border-2 border-[#E50914]'
                    : 'bg-gray-50 border-2 border-transparent hover:border-gray-300'
                }`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E50914] text-white text-sm px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-medium">{plan.name}</h3>
                  <p className="text-2xl font-bold">${plan.price}/mo</p>
                </div>
                <div className="space-y-2 text-sm">
                  <p>Video quality: {plan.quality}</p>
                  <p>Resolution: {plan.resolution}</p>
                  <ul className="mt-4 space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#E50914]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/register/payment"
            className="block w-full bg-[#E50914] text-white text-xl font-medium py-4 rounded hover:bg-[#F40612] transition-colors text-center mt-8"
          >
            Next
          </Link>

          <p className="text-sm text-gray-500 text-center mt-4">
            HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our Terms of Use for more details.
          </p>
        </div>
      </main>
    </div>
  )
} 