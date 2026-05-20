import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DreamShip AI – Unified AI Gateway & Developer Platform",
  description:
    "DreamShip AI is a unified AI gateway and developer platform offering multi-model access, API tools, playground, billing, and a premium partner program."
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#050816] text-text-primary min-h-screen`}>
        <div className="fixed inset-0 -z-10 bg-hero-gradient opacity-80 pointer-events-none" />
        <div className="fixed inset-0 -z-20 bg-radial-grid bg-[length:28px_28px] opacity-[0.25]" />
        {children}
      </body>
    </html>
  )
}
