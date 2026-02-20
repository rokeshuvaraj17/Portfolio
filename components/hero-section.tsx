"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

function WireframeUAV() {
  return (
    <motion.div
      className="w-full max-w-md h-64 flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <motion.svg
        viewBox="0 0 200 120"
        className="w-full h-full text-primary/60"
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        {/* Body fuselage */}
        <line x1="100" y1="20" x2="100" y2="100" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.8" />
        {/* Wings */}
        <line x1="40" y1="60" x2="160" y2="60" stroke="currentColor" strokeWidth="1" strokeOpacity="0.7" />
        <line x1="70" y1="45" x2="130" y2="75" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
        <line x1="70" y1="75" x2="130" y2="45" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
        {/* Nose */}
        <circle cx="100" cy="20" r="6" fill="none" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.9" />
        {/* Tail */}
        <line x1="100" y1="100" x2="85" y2="115" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" />
        <line x1="100" y1="100" x2="115" y2="115" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" />
        {/* Coordinate axes hint */}
        <motion.g
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        >
          <line x1="100" y1="60" x2="140" y2="60" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 2" />
          <line x1="100" y1="60" x2="100" y2="20" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 2" />
        </motion.g>
      </motion.svg>
    </motion.div>
  )
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 px-4 sm:px-6 lg:px-8 pt-24 pb-16 bg-grid-pattern"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/40 pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Engineering Autonomous Intelligence.
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Aerospace Engineer specializing in Guidance, Control, State Estimation, and AI-Driven Flight Systems.
          </motion.p>
          <motion.p
            className="text-sm text-muted-foreground/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            M.S. Aerospace Engineering — Virginia Tech
            <br />
            Autonomous Systems · GNC · Deep Learning
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-3 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/#projects">View Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary/50 text-primary hover:bg-primary/10">
              <a href="/resume/Rokeshuvaraj_Resume.pdf" download="Rokeshuvaraj_Resume.pdf">Download Resume</a>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-muted-foreground hover:text-foreground">
              <Link href="/contact">Contact</Link>
            </Button>
          </motion.div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <WireframeUAV />
        </div>
      </div>
    </section>
  )
}
