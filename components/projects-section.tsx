"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function ProjectsSection() {
  const projects = [
    {
      id: "wireless-power-transmission-uav",
      title: "Wireless Power Transmission System for UAV",
      period: "Feb 2020 - May 2020",
      description:
        "Designed and developed a wireless power transmission system for Unmanned Aerial Vehicles (UAVs) to extend their flight time without landing. Laser light was used to refuel the drone while it remained airborne, ensuring a continuous power supply.",
      image: "/images/wireless-power-uav.png",
      technologies: ["Laser Technology", "UAV Systems", "Power Electronics", "Energy Transfer"],
      category: "Aerospace Innovation",
    },
    {
      id: "voice-controlled-drone",
      title: "Voice-Controlled Drone",
      period: "Sep 2019 - Nov 2019",
      description:
        "Developed a voice-controlled UAV system using Arduino board with pre-programmed voice commands in combination with an Android application. Focused on user-friendly control interface and improved user experience.",
      image: "/voice-controlled-drone.png",
      technologies: ["Arduino", "Android Development", "Voice Recognition", "UAV Control"],
      category: "Control Systems",
    },
    {
      id: "balloon-satellite",
      title: "Balloon Satellite",
      period: "Mar 2019 - May 2019",
      description:
        "Designed and coded a balloon satellite with thorough preparation to address weather obstacles. Implemented effective thermal insulation and established communication systems for data collection and analysis.",
      image: "/balloon-satellite.png",
      technologies: ["Satellite Design", "Thermal Systems", "Communication", "Data Analysis"],
      category: "Space Systems",
    },
    {
      id: "aircraft-wing-fabrication",
      title: "Aircraft Wing Fabrication",
      period: "Feb 2018 - Apr 2018",
      description:
        "Fabricated miniature aircraft wings for model airplanes with focus on aerodynamics, structural integrity, and weight considerations. Utilized CAD software and various manufacturing tools.",
      image: "/images/aircraft-wing-fabrication.png",
      technologies: ["CAD Design", "Aerodynamics", "Manufacturing", "Structural Analysis"],
      category: "Aerodynamics",
    },
    {
      id: "solid-propellant-development",
      title: "Solid Propellant Development",
      period: "Jan 2017 - Apr 2017",
      description:
        "Developed and tested solid propellants using potassium nitrate and sugar for amateur rocketry. Conducted experiments, designed rocket motors, and analyzed experimental data.",
      image: "/images/solid-propellant.png",
      technologies: ["Propulsion Systems", "Chemical Engineering", "Testing", "Data Analysis"],
      category: "Propulsion",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute top-20 right-10 opacity-50 dark:opacity-60"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/images/space-debris.png"
            alt="Space Debris"
            width={80}
            height={80}
            className="filter drop-shadow-lg"
          />
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-16 opacity-45 dark:opacity-55"
          animate={{
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/images/ion-thruster.png"
            alt="Ion Thruster"
            width={100}
            height={100}
            className="filter drop-shadow-lg"
          />
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-20 opacity-40 dark:opacity-50"
          animate={{
            y: [0, -25, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/images/mars-rover.png"
            alt="Mars Rover"
            width={120}
            height={120}
            className="filter drop-shadow-lg"
          />
        </motion.div>

        <motion.div
          className="absolute top-1/4 left-10 opacity-35 dark:opacity-45"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <Image
            src="/images/satellite-system.png"
            alt="Satellite System"
            width={90}
            height={90}
            className="filter drop-shadow-lg"
          />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Innovative aerospace projects showcasing systems engineering and technical expertise
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-lg font-serif font-semibold text-primary group-hover:text-accent transition-colors">
                    {project.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{project.period}</p>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-foreground mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 bg-transparent"
                      onClick={() => (window.location.href = `/projects/${project.id}`)}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Details
                    </Button>
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
