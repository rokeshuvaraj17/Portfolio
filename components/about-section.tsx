"use client"

import { motion } from "framer-motion"

function ControlBlockDiagram() {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-full max-h-72" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="20" y="60" width="50" height="32" rx="2" />
      <text x="45" y="80" className="fill-black text-[9px] font-bold" stroke="none">Plant</text>
      <rect x="110" y="60" width="50" height="32" rx="2" />
      <text x="130" y="80" className="fill-black text-[9px] font-bold" stroke="none">EKF</text>
      <rect x="170" y="60" width="50" height="32" rx="2" />
      <text x="188" y="80" className="fill-black text-[9px] font-bold" stroke="none">Ctrl</text>
      <path d="M 70 76 L 105 76" markerEnd="url(#arrow)" />
      <path d="M 160 76 L 165 76" />
      <defs>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 Z" fill="black" />
        </marker>
      </defs>
    </svg>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="px-6 sm:px-10 py-16 border-t-[3px] border-black bg-[var(--neo-green)]/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2 className="neo-title" initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          About
        </motion.h2>
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            className="space-y-4 text-base leading-relaxed"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p>
              I focus on guidance, navigation, and control (GNC) with a strong foundation in state estimation and flight dynamics. My work centers on Kalman filtering, sensor fusion, and nonlinear 6-DOF modeling for UAVs, combined with classical and modern control (PID, LQR, MPC) and control allocation.
            </p>
            <p>
              I am integrating learning-based components into control and estimation pipelines—exploring hybrid model-based and data-driven approaches for flight systems. This is supported by graduate coursework in deep learning and data structures and algorithms, along with software engineering practice in Python, C/C++, and MATLAB/Simulink.
            </p>
            <p>
              As a Teaching Assistant at Virginia Tech I teach system dynamics and control (AOE 3034) and computational methods (AOE 2074), covering state-space modeling, stability analysis, root-finding, numerical methods, and MATLAB-based dynamic systems.
            </p>
          </motion.div>
          <motion.div
            className="neo-card p-6 bg-[var(--neo-cyan)]/20"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <ControlBlockDiagram />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
