import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GTM Engine - Your Launch Partner for Smart Growth",
  description:
    "GTM Engine combines AI-powered audience insights, outbound targeting, and inbound magnetism to drive qualified leads, faster.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>

    <head>
      <link rel="icon" type="image/svg" href="abacusdesk-logo.svg" />
    </head>

      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
