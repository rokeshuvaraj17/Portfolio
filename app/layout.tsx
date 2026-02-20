import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Rokeshuvaraj Nagarajan — Autonomous Systems & Intelligent Flight Control",
  description:
    "Aerospace Engineer specializing in Guidance, Navigation & Control, state estimation, and AI-driven flight systems. M.S. Virginia Tech. GNC · Kalman filtering · Deep Learning.",
  keywords:
    "GNC, Guidance Navigation Control, Kalman Filter, EKF, UAV, autonomous systems, state estimation, flight dynamics, MATLAB, Simulink, deep learning, Virginia Tech",
  authors: [{ name: "Rokeshuvaraj Nagarajan" }],
  creator: "Rokeshuvaraj Nagarajan",
  openGraph: {
    title: "Rokeshuvaraj Nagarajan — Autonomous Systems & Intelligent Flight Control",
    description: "GNC, state estimation, and AI/ML for aerospace. M.S. Aerospace Engineering, Virginia Tech.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
