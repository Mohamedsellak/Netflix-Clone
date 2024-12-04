'use client'

import React from 'react'
import { Globe } from 'lucide-react'
import { useState } from 'react'

const languages = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
]

export default function LanguageSelector() {
  const [selectedLang, setSelectedLang] = useState('en')

  return (
    <div className="relative inline-block">
      <div className="flex items-center border border-gray-600 rounded-md px-2 py-1 hover:bg-opacity-80 cursor-pointer">
        <Globe className="w-4 h-4 mr-1" />
        <select
          value={selectedLang}
          onChange={(e) => setSelectedLang(e.target.value)}
          className="bg-transparent outline-none appearance-none cursor-pointer"
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code} className="bg-black">
              {lang.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
} 