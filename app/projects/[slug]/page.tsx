"use client"

import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ScrollProgress } from "@/components/scroll-progress"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowLeft, Calendar, Users, Target, Lightbulb, Cog, BarChart3 } from "lucide-react"

const projectsData = {
  "wireless-power-transmission-uav": {
    title: "Wireless Power Transmission System for UAV",
    period: "Feb 2020 - May 2020",
    category: "Aerospace Innovation",
    image: "/images/wireless-power-uav.png",
    overview:
      "Designed and developed a wireless power transmission system for Unmanned Aerial Vehicles (UAVs) to extend their flight time without landing. Laser light was used to refuel the drone while it remained airborne, ensuring a continuous power supply.",
    objectives: [
      "Extend UAV flight time without physical landing",
      "Implement laser-based power transmission technology",
      "Ensure continuous power supply during flight operations",
      "Maximize energy transfer efficiency",
    ],
    methodology: [
      "Researched and selected appropriate laser technology for drone charging",
      "Designed power reception and conversion systems for UAV integration",
      "Developed safety protocols for laser power transmission",
      "Conducted efficiency testing and optimization",
    ],
    technologies: [
      "Laser Technology",
      "UAV Systems",
      "Power Electronics",
      "Energy Transfer",
      "Photovoltaic Conversion",
    ],
    results: [
      "Successfully demonstrated wireless power transmission to UAV",
      "Achieved continuous flight operation without landing",
      "Optimized energy transfer efficiency for practical applications",
      "Established foundation for future autonomous UAV systems",
    ],
  },
  "balloon-satellite": {
    title: "Design and Fabrication of Balloon Satellite",
    period: "Mar 2019 - May 2019",
    category: "Space Systems",
    image: "/placeholder.svg",
    overview:
      "Comprehensive research project to study atmospheric parameters, temperature, density, and pressure at various altitudes from sea level to thirty-five kilometers. The project involved designing a complete satellite system using Raspberry Pi as the main computer.",
    objectives: [
      "Study atmospheric parameters at various altitudes (0-35km)",
      "Analyze ozone layer presence and concentration",
      "Investigate water molecule shapes in clouds",
      "Measure greenhouse gas concentrations",
      "Calibrate theoretical data with practical measurements",
    ],
    methodology: [
      "Designed satellite system with Raspberry Pi as main computer",
      "Integrated multiple sensors for temperature, pressure, humidity, and gas detection",
      "Implemented thermal insulation chamber for component protection",
      "Utilized helium-filled latex balloon for altitude achievement",
      "Incorporated GPS tracking and parachute recovery system",
    ],
    technologies: [
      "Raspberry Pi",
      "Sensor Integration",
      "Thermal Insulation",
      "GPS Tracking",
      "Data Analysis",
      "Atmospheric Science",
    ],
    results: [
      "Successfully reached 35,000m altitude before balloon burst",
      "Collected comprehensive atmospheric data across altitude ranges",
      "Identified troposphere (0-11km), tropopause (11-20km), and stratosphere (20km+)",
      "Confirmed ozone layer presence starting at 14km altitude",
      "Published findings in International Journal of Engineering Applied Sciences and Technology",
    ],
    publication: {
      title: "Design and Fabrication of Balloon Satellite",
      authors: "Rokeshuvaraj N, Vivek D, Cholasamudram Sai Pavan Reddy, Vijayalakshmi Bharathi K",
      journal: "International Journal of Engineering Applied Sciences and Technology (IJEAST)",
      details: "Vol. 4, Issue 9, ISSN No. 2455-2143, Pages 223-240",
      date: "January 2020",
      abstract:
        "The objective of this research is to know, study and visualize atmospheric parameters, temperature, density, pressure at various altitudes of the earth atmosphere within the region from sea level to thirty-five kilometers altitude above. A satellite system is made with the help of raspberry pi as the main computer to find the physical properties and chemical properties, then the system is placed in a heat insulation chamber and fixed to a latex balloon filled with helium gas.",
    },
  },
  "aircraft-wing-fabrication": {
    title: "Aircraft Wing Fabrication",
    period: "Feb 2018 - Apr 2018",
    category: "Aerodynamics",
    image: "/images/aircraft-wing-fabrication.png",
    overview:
      "Fabricated miniature aircraft wings for model airplanes with comprehensive focus on aerodynamics, structural integrity, and weight optimization. The project involved collaborative design, material selection, and precision manufacturing.",
    objectives: [
      "Design aerodynamically efficient miniature aircraft wings",
      "Optimize structural integrity while minimizing weight",
      "Implement proper material selection for model aircraft",
      "Achieve precise manufacturing tolerances",
    ],
    methodology: [
      "Collaborated on wing design using CAD software",
      "Conducted material selection analysis for optimal performance",
      "Shaped wing core with precision cutting tools",
      "Applied protective covering and integrated wing systems",
      "Utilized measurement instruments for quality assurance",
    ],
    technologies: [
      "CAD Design",
      "Aerodynamics",
      "Manufacturing",
      "Structural Analysis",
      "Material Science",
      "Quality Control",
    ],
    results: [
      "Successfully fabricated lightweight, structurally sound wings",
      "Achieved optimal aerodynamic performance for model aircraft",
      "Demonstrated precision manufacturing techniques",
      "Established foundation for advanced aircraft design projects",
    ],
  },
  "solid-propellant-development": {
    title: "Solid Propellant Development",
    period: "Jan 2017 - Apr 2017",
    category: "Propulsion",
    image: "/images/solid-propellant.png",
    overview:
      "Developed and tested solid propellants using a combination of potassium nitrate and sugar for amateur rocketry applications. The project involved comprehensive research, experimentation, and data analysis.",
    objectives: [
      "Develop effective solid propellant formulations",
      "Test propellant performance characteristics",
      "Design appropriate rocket motor systems",
      "Analyze experimental data for optimization",
    ],
    methodology: [
      "Researched optimal propellant ratios using potassium nitrate and sugar",
      "Conducted controlled experiments with various formulations",
      "Designed and fabricated rocket motor components",
      "Utilized lab equipment for precise measurements",
      "Analyzed performance data using computer software",
    ],
    technologies: [
      "Propulsion Systems",
      "Chemical Engineering",
      "Testing",
      "Data Analysis",
      "Rocket Design",
      "Safety Protocols",
    ],
    results: [
      "Successfully developed functional solid propellant formulations",
      "Achieved consistent and reliable propellant performance",
      "Demonstrated safe handling and testing procedures",
      "Established foundation for advanced propulsion system development",
    ],
  },
  "voice-controlled-drone": {
    title: "Voice-Controlled Drone",
    period: "Sep 2019 - Nov 2019",
    category: "Control Systems",
    image: "/placeholder.svg",
    overview:
      "Developed an innovative voice-controlled UAV system using Arduino board with pre-programmed voice commands in combination with an Android application. The project focused on creating a user-friendly control interface.",
    objectives: [
      "Design intuitive voice control interface for UAV",
      "Integrate Arduino with Android application",
      "Implement reliable voice recognition system",
      "Improve overall user experience for drone operation",
    ],
    methodology: [
      "Programmed Arduino board with voice command recognition",
      "Developed Android application for drone control interface",
      "Integrated voice command processing with UAV control systems",
      "Tested and optimized voice recognition accuracy",
    ],
    technologies: [
      "Arduino",
      "Android Development",
      "Voice Recognition",
      "UAV Control",
      "Mobile Integration",
      "User Interface Design",
    ],
    results: [
      "Successfully implemented voice-controlled drone operation",
      "Achieved reliable voice command recognition and execution",
      "Demonstrated improved user experience over traditional controls",
      "Established foundation for advanced human-machine interfaces",
    ],
  },
}

function NeoSection({
  icon: Icon,
  title,
  children,
  delay = 0,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  children: React.ReactNode
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="neo-card p-6 bg-white"
    >
      <h2 className="flex items-center gap-2 text-xl font-bold mb-4">
        <Icon className="h-5 w-5" />
        {title}
      </h2>
      {children}
    </motion.div>
  )
}

function BulletList({ items, color }: { items: string[]; color: string }) {
  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-2">
          <div className={`w-2 h-2 mt-2 flex-shrink-0 border-2 border-black ${color}`} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function ProjectDetailPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string
  const project = projectsData[slug as keyof typeof projectsData]

  if (!project) {
    return (
      <>
        <ScrollProgress />
        <div className="neo-page min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="neo-title mb-4">Project Not Found</h1>
            <button type="button" onClick={() => router.push("/#projects")} className="neo-btn neo-btn-yellow">
              <ArrowLeft className="h-4 w-4 inline mr-2" />
              Back to Projects
            </button>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <ScrollProgress />
      <div className="neo-page">
        <Navigation />
        <div className="px-6 sm:px-10 py-12">
          <div className="max-w-6xl mx-auto">
            <button
              type="button"
              onClick={() => router.push("/#projects")}
              className="neo-btn neo-btn-white mb-8 text-sm"
            >
              <ArrowLeft className="h-4 w-4 inline mr-2" />
              Back to Projects
            </button>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="neo-badge neo-badge-cyan mb-4 inline-block">{project.category}</span>
              <h1 className="neo-title mb-4">{project.title}</h1>
              <div className="flex items-center gap-2 font-medium mb-10">
                <Calendar className="h-4 w-4" />
                <span>{project.period}</span>
              </div>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="neo-card overflow-hidden bg-white"
                >
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                </motion.div>

                <NeoSection icon={Target} title="Project Overview" delay={0.3}>
                  <p className="leading-relaxed">{project.overview}</p>
                </NeoSection>

                <NeoSection icon={Lightbulb} title="Objectives" delay={0.4}>
                  <BulletList items={project.objectives} color="bg-[var(--neo-yellow)]" />
                </NeoSection>

                <NeoSection icon={Cog} title="Methodology" delay={0.5}>
                  <BulletList items={project.methodology} color="bg-[var(--neo-cyan)]" />
                </NeoSection>

                <NeoSection icon={BarChart3} title="Results & Achievements" delay={0.6}>
                  <BulletList items={project.results} color="bg-[var(--neo-green)]" />
                </NeoSection>

                {"publication" in project && project.publication && (
                  <NeoSection icon={Users} title="Published Research" delay={0.7}>
                    <h4 className="font-bold text-lg mb-2">{project.publication.title}</h4>
                    <p className="text-sm mb-2 opacity-80">{project.publication.authors}</p>
                    <p className="text-sm font-semibold mb-1">{project.publication.journal}</p>
                    <p className="text-xs opacity-70 mb-3">{project.publication.details}</p>
                    <p className="text-sm leading-relaxed mb-4">{project.publication.abstract}</p>
                    <span className="neo-badge neo-badge-pink">{project.publication.date}</span>
                  </NeoSection>
                )}
              </div>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="neo-card p-6 bg-white"
                >
                  <h3 className="text-lg font-bold mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="neo-badge neo-badge-green text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="neo-card p-6 bg-[var(--neo-yellow)]"
                >
                  <h3 className="text-lg font-bold mb-4">Project Information</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium opacity-70">Duration</span>
                      <p className="font-semibold">{project.period}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium opacity-70">Category</span>
                      <p className="font-semibold">{project.category}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
