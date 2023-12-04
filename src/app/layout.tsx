import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/assets/styles/consts.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'yachts',
  description: 'yachts yachts yachts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
