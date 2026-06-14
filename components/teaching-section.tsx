"use client"

import { motion } from "framer-motion"

const teaching = [
  { role: "Teaching Assistant", course: "AOE 3034 — System Dynamics & Control", topics: ["State-space modeling", "Stability analysis", "MATLAB-based dynamic systems instruction"] },
  { role: "Teaching Assistant", course: "AOE 2074 — Computational Methods", topics: ["Root-finding & numerical methods", "Aerospace simulation validation", "MATLAB-based instruction"] },
]

export function TeachingSection() {
  return (
    <section id="teaching" className="px-6 sm:px-10 py-16 border-t-[3px] border-black bg-[var(--neo-cyan)]/15">
      <div className="max-w-6xl mx-auto">
        <motion.h2 className="neo-title" initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          Teaching & Academics
        </motion.h2>
        <div className="relative pl-8 border-l-[3px] border-black space-y-8">
          {teaching.map((item, i) => (
            <motion.div key={item.course} className="relative" initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <span className="absolute -left-[2.4rem] top-1 w-4 h-4 bg-[var(--neo-yellow)] border-[3px] border-black" />
              <div className="neo-card p-4 bg-white">
                <h3 className="font-bold">{item.role}</h3>
                <p className="font-semibold text-sm text-[var(--neo-cyan)] mb-2">{item.course}</p>
                <ul className="text-sm space-y-1">
                  {item.topics.map((t) => (
                    <li key={t}>• {t}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
