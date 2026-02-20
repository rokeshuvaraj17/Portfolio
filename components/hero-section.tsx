"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 px-4 sm:px-6 lg:px-8 pt-28 md:pt-24 pb-16 bg-grid-pattern"
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
          <motion.div
            className="relative w-full max-w-md aspect-[3/4] overflow-hidden"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Image
              src="/images/Professional_Photo.jpg"
              alt="Rokeshuvaraj Nagarajan"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 448px"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
