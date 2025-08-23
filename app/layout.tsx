import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Open_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Rokeshuvaraj N - Aerospace Systems Engineer",
  description:
    "Portfolio of Rokeshuvaraj N, Aerospace Systems Engineer specializing in systems integration, safety & reliability, and aerospace innovation.",
  keywords:
    "Aerospace Systems Engineer, Systems Integration, Safety Engineering, Reliability Engineering, Avionics, MATLAB, Simulink, CAD, Virginia Tech",
  authors: [{ name: "Rokeshuvaraj N" }],
  creator: "Rokeshuvaraj N",
  openGraph: {
    title: "Rokeshuvaraj N - Aerospace Systems Engineer",
    description: "Portfolio showcasing aerospace engineering expertise, systems integration, and innovative projects.",
    type: "website",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} antialiased`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
