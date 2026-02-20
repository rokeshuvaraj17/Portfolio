"use client"

import { motion } from "framer-motion"

export function PublicationsSection() {
  return (
    <section id="publications" className="py-24 bg-muted/30 border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-2xl sm:text-3xl font-semibold text-foreground mb-8"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Publication
        </motion.h2>
        <motion.blockquote
          className="border-l-2 border-primary pl-6 py-2 text-muted-foreground text-sm sm:text-base max-w-2xl"
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <cite className="not-italic text-foreground font-medium">Design and Fabrication of Balloon Satellite</cite>
          <br />
          International Journal of Engineering Applied Sciences and Technology, 2020
        </motion.blockquote>
      </div>
    </section>
  )
}
