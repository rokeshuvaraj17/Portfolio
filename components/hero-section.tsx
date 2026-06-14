"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section id="home" className="px-6 sm:px-10 py-16 sm:py-20">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="space-y-5">
          <motion.p
            className="text-xl font-semibold text-[var(--neo-cyan)]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Hello, I&apos;m
          </motion.p>
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Rokeshuvaraj Nagarajan
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Aerospace Engineer specializing in Guidance, Control, State Estimation, and AI-Driven Flight Systems.
          </motion.p>
          <motion.p
            className="text-sm font-medium px-3 py-2 inline-block bg-[var(--neo-green)] border-2 border-black shadow-[3px_3px_0_#000]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            M.S. Aerospace Engineering — Virginia Tech · GNC · Deep Learning
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-3 pt-2"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/#projects" className="neo-btn neo-btn-cyan">
              View Projects
            </Link>
            <a href="/resume/Rokeshuvaraj_Resume.pdf" download="Rokeshuvaraj_Resume.pdf" className="neo-btn neo-btn-yellow">
              Download Resume
            </a>
            <Link href="/contact" className="neo-btn neo-btn-white">
              Contact
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35 }}
        >
          <div className="relative w-full max-w-md aspect-[3/4] neo-photo overflow-hidden">
            <Image
              src="/images/Professional_Photo.jpg"
              alt="Rokeshuvaraj Nagarajan"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 448px"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
