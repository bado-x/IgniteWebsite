import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Syne } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"
import { Preloader } from "@/components/preloader"

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
  weight: ["400", "500", "600", "700"],
  fallback: ["system-ui", "arial"],
})

export const metadata: Metadata = {
  title: "Ignite - Youth Leadership & Events | Damietta, Egypt",
  description: "Empowering young leaders through transformative events, leadership training, and mentorship programs in Damietta, Egypt. Join our community of future leaders.",
  keywords: ["youth leadership", "leadership training", "mentorship", "events", "Damietta", "Egypt", "personal development"],
  authors: [{ name: "Ignite Team" }],
  creator: "Ignite",
  publisher: "Ignite",
  openGraph: {
    title: "Ignite - Youth Leadership & Events",
    description: "Empowering young leaders through transformative experiences",
    url: "https://ignite.ex",
    siteName: "Ignite",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ignite - Youth Leadership & Events",
    description: "Empowering young leaders through transformative experiences",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${syne.variable} antialiased`}>
      <body className={`${syne.className} ${GeistSans.variable} ${GeistMono.variable}`}>
        <Preloader />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
