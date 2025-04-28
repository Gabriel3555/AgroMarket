import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AgroMarket',
  description: 'Compra los mejores productos agricolas acá',
  generator: 'barrantes35',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
