import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'NextJs Portfolio Website',
  description: 'This is a modern portfolio website.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-slate-950  ' >{children}</body>
    </html>
  )
}
