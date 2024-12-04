import React from 'react'
import Header from '../../components/layout/Header'

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div className="min-h-screen bg-white text-black">
      <Header variant="register" />
      {children}
    </div>
  )
} 