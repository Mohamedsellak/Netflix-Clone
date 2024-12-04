import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Netflix Clone',
  description: 'Watch TV Shows Online, Watch Movies Online',
  icons: {
    icon: '/netflix-icon.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
