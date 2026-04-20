import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

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
      <body>{children}</body>
    </html>
  )
}
