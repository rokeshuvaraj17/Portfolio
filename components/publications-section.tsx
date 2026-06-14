"use client"

import { motion } from "framer-motion"

export function PublicationsSection() {
  return (
    <section id="publications" className="px-6 sm:px-10 py-16 border-t-[3px] border-black bg-[var(--neo-green)]/20">
      <div className="max-w-6xl mx-auto">
        <motion.h2 className="neo-title" initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          Publication
        </motion.h2>
        <motion.blockquote
          className="neo-card p-6 bg-white border-l-[6px] border-l-[var(--neo-yellow)]"
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <cite className="not-italic font-bold block mb-1">Design and Fabrication of Balloon Satellite</cite>
          <span className="text-sm">International Journal of Engineering Applied Sciences and Technology, 2020</span>
        </motion.blockquote>
      </div>
    </section>
  )
}
