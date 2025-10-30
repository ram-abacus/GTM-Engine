import type React from "react"
import type { Metadata } from "next"
import Script from "next/script";
import { Inter } from "next/font/google"
import "./globals.css"
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import CookieConsent from "@/components/CookiesConsent";

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
      
        {/* Google Tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17651218884"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17651218884');
          `}
        </Script>
    </head>

      <body className={inter.className} suppressHydrationWarning>
        {children}
        <CookieConsent />
        <GoogleTagManager gtmId="GTM-MM5PWB94" />
        <GoogleAnalytics gaId="G-M6HMK9JLLG" />
      </body>
    </html>
  )
}
