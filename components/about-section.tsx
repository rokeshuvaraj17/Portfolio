"use client"

import { motion } from "framer-motion"

function ControlBlockDiagram() {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-full max-h-80 text-primary/50" fill="none" stroke="currentColor" strokeWidth="1">
      <rect x="20" y="60" width="50" height="32" rx="4" strokeOpacity="0.6" />
      <text x="45" y="78" className="fill-current text-[8px] font-mono" stroke="none" opacity="0.8">Plant</text>
      <rect x="110" y="60" width="50" height="32" rx="4" strokeOpacity="0.6" />
      <text x="125" y="78" className="fill-current text-[8px] font-mono" stroke="none" opacity="0.8">EKF</text>
      <rect x="170" y="60" width="50" height="32" rx="4" strokeOpacity="0.6" />
      <text x="185" y="78" className="fill-current text-[8px] font-mono" stroke="none" opacity="0.8">Ctrl</text>
      <path d="M 70 76 L 105 76" strokeOpacity="0.5" markerEnd="url(#arrow)" />
      <path d="M 160 76 L 165 76" strokeOpacity="0.5" />
      <path d="M 220 76 L 195 76" strokeOpacity="0.5" />
      <path d="M 20 92 L 0 92 L 0 40 L 20 40" strokeOpacity="0.4" strokeDasharray="2 2" />
      <defs>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 Z" fill="currentColor" opacity="0.6" />
        </marker>
      </defs>
    </svg>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30 border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-2xl sm:text-3xl font-semibold text-foreground mb-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          About
        </motion.h2>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            className="space-y-4 text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p>
              I focus on guidance, navigation, and control (GNC) with a strong foundation in state estimation and flight dynamics. My work centers on Kalman filtering, sensor fusion, and nonlinear 6-DOF modeling for UAVs, combined with classical and modern control (PID, LQR, MPC) and control allocation.
            </p>
            <p>
              I am integrating learning-based components into control and estimation pipelines—exploring hybrid model-based and data-driven approaches for flight systems. This is supported by graduate coursework in deep learning (neural networks, optimization, backpropagation) and data structures and algorithms, along with software engineering practice in Python, C/C++, and MATLAB/Simulink.
            </p>
            <p>
              As a Teaching Assistant at Virginia Tech I teach system dynamics and control (AOE 3034) and computational methods (AOE 2074), covering state-space modeling, stability analysis, root-finding, numerical methods, and MATLAB-based dynamic systems. My approach is analytical and precise, with an emphasis on validation and clarity.
            </p>
          </motion.div>
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full max-w-sm rounded-xl border border-border bg-card shadow-sm p-6">
              <ControlBlockDiagram />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
