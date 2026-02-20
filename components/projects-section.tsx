"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const featuredProjects = [
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

const academicProjects = [
  {
    title: "Design and Development of Wireless Power Transmission System for UAV",
    duration: "February – May 2020",
    teamSize: 4,
    summary:
      "Designed and developed a wireless power transmission system for UAVs to extend flight time without landing. Laser light was used to refuel the drone while airborne for continuous power supply. Researched and selected laser technology for drone charging to maximize energy transfer.",
    badges: ["Laser Technology", "UAV", "Power Transmission"],
  },
  {
    title: "Voice-Controlled Drone",
    duration: "September – November 2019",
    teamSize: 3,
    summary:
      "First stage design of a UAV; final stage used an Arduino board with pre-programmed voice commands and an Android application. Developed and programmed voice command integration between Arduino and the Android app for user-friendly UAV control.",
    badges: ["Arduino", "Android", "Voice Control", "UAV"],
  },
  {
    title: "Balloon Satellite",
    duration: "March – May 2019",
    teamSize: 5,
    summary:
      "Thorough preparation to address weather obstacles for orbital success. Designed and coded the satellite to meet mission requirements. Implemented thermal insulation and established communication systems; derived insights from collected data.",
    badges: ["Satellite", "Thermal", "Communication", "Data"],
  },
  {
    title: "Aircraft Wing Fabrication",
    duration: "February – April 2018",
    teamSize: 3,
    summary:
      "Fabricated miniature aircraft wings for model airplanes with focus on aerodynamics, structural integrity, and weight. Collaborated on design, material selection, wing core shaping, protective covering, and integration using CAD, cutting tools, adhesives, and measurement instruments.",
    badges: ["CAD", "Aerodynamics", "Manufacturing"],
  },
  {
    title: "Solid Propellant Development",
    duration: "January – April 2017",
    teamSize: 3,
    summary:
      "Developed and tested solid propellants using potassium nitrate and sugar for amateur rocketry. Researched propellant ratios, conducted experiments, designed the rocket motor, and analyzed data using lab equipment, measurement instruments, and simulation tools.",
    badges: ["Propulsion", "Rocket Motor", "Testing"],
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

        <div className="space-y-12">
          <div>
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">Featured</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, i) => (
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

          <div>
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">Academic Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {academicProjects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Card className="h-full border border-border bg-card shadow-sm card-glow rounded-xl flex flex-col">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base font-semibold text-foreground leading-snug">
                        {project.title}
                      </CardTitle>
                      <p className="text-xs text-muted-foreground mt-1">
                        {project.duration} · Team of {project.teamSize}
                      </p>
                    </CardHeader>
                    <CardContent className="pt-0 flex-1 flex flex-col">
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{project.summary}</p>
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
        </div>
      </div>
    </section>
  )
}
