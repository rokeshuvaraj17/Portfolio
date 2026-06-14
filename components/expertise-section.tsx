"use client"

import { motion } from "framer-motion"

const expertise = [
  {
    title: "Guidance & Control",
    color: "bg-[var(--neo-cyan)]",
    items: ["PID", "LQR", "MPC", "Aircraft Longitudinal & Lateral Dynamics", "Control Allocation"],
  },
  {
    title: "Estimation & Navigation",
    color: "bg-[var(--neo-yellow)]",
    items: ["Kalman Filter", "Extended Kalman Filter", "Sensor Fusion", "GPS Modeling", "Satellite Navigation"],
  },
  {
    title: "AI & Machine Learning",
    color: "bg-[var(--neo-pink)]",
    items: ["Neural Networks", "Gradient Descent", "Backpropagation", "Classification Models", "Deep Learning Foundations", "Model Training & Evaluation", "Data Pipelines"],
  },
  {
    title: "Systems & Simulation",
    color: "bg-[var(--neo-green)]",
    items: ["MATLAB / Simulink", "6-DOF Modeling", "Python", "C/C++", "ROS", "Linux", "Git"],
  },
]

export function ExpertiseSection() {
  return (
    <section id="expertise" className="px-6 sm:px-10 py-16">
      <div className="max-w-6xl mx-auto">
        <motion.h2 className="neo-title" initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          Expertise
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {expertise.map((group, i) => (
            <motion.div
              key={group.title}
              className={`neo-card p-5 ${group.color}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <h3 className="font-bold text-base mb-3 border-b-2 border-black pb-2">{group.title}</h3>
              <ul className="space-y-1.5 text-sm font-medium">
                {group.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
