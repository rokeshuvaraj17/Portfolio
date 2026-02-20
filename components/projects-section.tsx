"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Autonomous Multirotor Guidance & Control",
    points: [
      "Nonlinear 6-DOF UAV model",
      "PID / LQR / MPC controller design",
      "Extended Kalman Filter for attitude & position",
      "Control allocation for multi-actuator thrust",
      "ROS-based telemetry architecture",
    ],
    badges: ["MATLAB", "Simulink", "ROS", "EKF", "Control"],
  },
  {
    title: "GPS-Based Navigation Modeling",
    points: [
      "Satellite positioning simulation",
      "Dilution of Precision analysis",
      "Error propagation modeling",
    ],
    badges: ["MATLAB", "Navigation", "Simulation"],
  },
  {
    title: "Intelligent Estimation & Learning-Based Systems",
    points: [
      "Learning-based tuning of control parameters",
      "Neural-network-assisted estimation concepts",
      "Hybrid model-based + data-driven flight systems",
      "Simulation-based ML experimentation",
    ],
    badges: ["Python", "Deep Learning", "Control", "Simulation"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-muted/30 border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-2xl sm:text-3xl font-semibold text-foreground mb-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Card className="h-full border border-border bg-card shadow-sm card-glow rounded-xl flex flex-col">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-semibold text-foreground leading-snug">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 flex-1 flex flex-col">
                  <ul className="space-y-1.5 text-sm text-muted-foreground mb-4 flex-1">
                    {project.points.map((point) => (
                      <li key={point} className="leading-tight">
                        • {point}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {project.badges.map((badge) => (
                      <Badge key={badge} variant="secondary" className="text-xs font-normal">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
