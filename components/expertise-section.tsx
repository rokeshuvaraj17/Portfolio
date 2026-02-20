"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const expertise = [
  {
    title: "Guidance & Control",
    items: [
      "PID",
      "LQR",
      "MPC",
      "Aircraft Longitudinal & Lateral Dynamics",
      "Control Allocation",
    ],
  },
  {
    title: "Estimation & Navigation",
    items: [
      "Kalman Filter",
      "Extended Kalman Filter",
      "Sensor Fusion",
      "GPS Modeling",
      "Satellite Navigation",
    ],
  },
  {
    title: "AI & Machine Learning",
    items: [
      "Neural Networks",
      "Gradient Descent Optimization",
      "Backpropagation",
      "Classification Models",
      "Deep Learning Foundations",
      "Model Training & Evaluation",
      "Data Pipelines",
    ],
  },
  {
    title: "Systems & Simulation",
    items: [
      "MATLAB / Simulink",
      "6-DOF Modeling",
      "Python",
      "C/C++",
      "ROS",
      "Linux",
      "Git",
    ],
  },
]

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-2xl sm:text-3xl font-semibold text-foreground mb-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Expertise
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Card className="h-full border border-border bg-card shadow-sm card-glow rounded-xl overflow-hidden">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-semibold text-foreground">
                    {group.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {group.items.map((item) => (
                      <li key={item} className="leading-tight">
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
