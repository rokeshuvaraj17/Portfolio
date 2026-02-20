"use client"

import { motion } from "framer-motion"

const teaching = [
  {
    role: "Teaching Assistant",
    course: "AOE 3034 — System Dynamics & Control",
    topics: ["State-space modeling", "Stability analysis", "MATLAB-based dynamic systems instruction"],
  },
  {
    role: "Teaching Assistant",
    course: "AOE 2074 — Computational Methods",
    topics: ["Root-finding & numerical methods", "Aerospace simulation validation", "MATLAB-based instruction"],
  },
]

export function TeachingSection() {
  return (
    <section id="teaching" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-2xl sm:text-3xl font-semibold text-foreground mb-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Teaching & Academics
        </motion.h2>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border" aria-hidden />
          <ul className="space-y-10">
            {teaching.map((item, i) => (
              <motion.li
                key={item.course}
                className="relative pl-12"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <span className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background" />
                <h3 className="text-base font-semibold text-foreground mb-1">{item.role}</h3>
                <p className="text-sm font-medium text-primary mb-2">{item.course}</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {item.topics.map((topic) => (
                    <li key={topic}>• {topic}</li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
