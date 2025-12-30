import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/context/AuthContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "InsureInnovate - AI-Powered Innovation Hub",
  description:
    "Transform your insurance business with AI-generated ideas for claims processing, customer engagement, fraud detection, and more.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}><AuthProvider>
          {children}
        </AuthProvider></body>
    </html>
  )
}
