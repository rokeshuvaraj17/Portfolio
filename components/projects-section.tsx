"use client"

import { motion } from "framer-motion"

const featuredProjects = [
  {
    title: "Autonomous Multirotor Guidance & Control",
    points: ["Nonlinear 6-DOF UAV model", "PID / LQR / MPC controller design", "Extended Kalman Filter for attitude & position", "Control allocation for multi-actuator thrust", "ROS-based telemetry architecture"],
    badges: ["MATLAB", "Simulink", "ROS", "EKF", "Control"],
  },
  {
    title: "GPS-Based Navigation Modeling",
    points: ["Satellite positioning simulation", "Dilution of Precision analysis", "Error propagation modeling"],
    badges: ["MATLAB", "Navigation", "Simulation"],
  },
  {
    title: "Intelligent Estimation & Learning-Based Systems",
    points: ["Learning-based tuning of control parameters", "Neural-network-assisted estimation concepts", "Hybrid model-based + data-driven flight systems", "Simulation-based ML experimentation"],
    badges: ["Python", "Deep Learning", "Control", "Simulation"],
  },
]

const academicProjects = [
  { title: "Wireless Power Transmission System for UAV", duration: "Feb – May 2020", teamSize: 4, summary: "Designed wireless power transmission for UAVs using laser technology to extend flight time without landing.", badges: ["Laser", "UAV", "Power"] },
  { title: "Voice-Controlled Drone", duration: "Sep – Nov 2019", teamSize: 3, summary: "Arduino + Android voice command integration for user-friendly UAV control.", badges: ["Arduino", "Android", "UAV"] },
  { title: "Balloon Satellite", duration: "Mar – May 2019", teamSize: 5, summary: "Designed and coded a balloon satellite with thermal insulation and communication systems.", badges: ["Satellite", "Thermal", "Data"] },
  { title: "Aircraft Wing Fabrication", duration: "Feb – Apr 2018", teamSize: 3, summary: "Fabricated miniature aircraft wings focusing on aerodynamics, structural integrity, and weight.", badges: ["CAD", "Aerodynamics"] },
  { title: "Solid Propellant Development", duration: "Jan – Apr 2017", teamSize: 3, summary: "Developed and tested solid propellants using potassium nitrate and sugar for amateur rocketry.", badges: ["Propulsion", "Testing"] },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 sm:px-10 py-16 border-t-[3px] border-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2 className="neo-title" initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          Projects
        </motion.h2>

        <h3 className="font-bold uppercase text-sm mb-4 px-2 py-1 inline-block bg-[var(--neo-cyan)] border-2 border-black">Featured</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {featuredProjects.map((project, i) => (
            <motion.div key={project.title} className="neo-card p-5 bg-white flex flex-col" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <h4 className="font-bold text-base mb-3">{project.title}</h4>
              <ul className="text-sm space-y-1 mb-4 flex-1">
                {project.points.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {project.badges.map((b) => (
                  <span key={b} className="neo-badge text-xs">{b}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <h3 className="font-bold uppercase text-sm mb-4 px-2 py-1 inline-block bg-[var(--neo-yellow)] border-2 border-black">Academic</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {academicProjects.map((project, i) => (
            <motion.div key={project.title} className="neo-card p-5 bg-[var(--neo-green)]/30 flex flex-col" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}>
              <h4 className="font-bold text-sm mb-1">{project.title}</h4>
              <p className="text-xs font-medium mb-2">{project.duration} · Team of {project.teamSize}</p>
              <p className="text-sm mb-3 flex-1">{project.summary}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.badges.map((b) => (
                  <span key={b} className="neo-badge text-xs">{b}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
