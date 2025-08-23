"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"
import { Award, Calendar, Building, ExternalLink } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Systems Engineering",
      skills: [
        { name: "Systems Integration", level: 95 },
        { name: "Safety & Risk Assessment", level: 90 },
        { name: "Validation & Verification", level: 88 },
        { name: "Reliability Engineering", level: 85 },
        { name: "Requirements Engineering", level: 82 },
      ],
    },
    {
      title: "Aerospace Engineering",
      skills: [
        { name: "Avionics Systems", level: 90 },
        { name: "Propulsion Systems", level: 85 },
        { name: "Control Systems", level: 88 },
        { name: "Aerospace Materials", level: 80 },
        { name: "Ground Systems", level: 85 },
      ],
    },
    {
      title: "Software & Tools",
      skills: [
        { name: "MATLAB/Simulink", level: 92 },
        { name: "CAD (CATIA, SolidWorks)", level: 88 },
        { name: "Python", level: 85 },
        { name: "C/C++", level: 80 },
        { name: "ANSYS", level: 75 },
      ],
    },
    {
      title: "Standards & Methodologies",
      skills: [
        { name: "Model-Based Systems Engineering (MBSE)", level: 85 },
        { name: "DO-178C", level: 78 },
        { name: "DOORS", level: 75 },
        { name: "Agile Development", level: 82 },
        { name: "Project Management", level: 80 },
      ],
    },
  ]

  const certifications = [
    {
      name: "Nanotechnology Course",
      organization: "Duke University, North Carolina State University, and University of North Carolina at Chapel Hill",
      platform: "Coursera",
      date: "November 2020",
      description: "Comprehensive study of nanotechnology principles and applications",
      category: "Advanced Technology",
    },
    {
      name: "Arduino Programming Course",
      organization: "University of California, Irvine",
      platform: "Coursera",
      date: "November 2020",
      description: "Embedded systems programming and hardware interfacing",
      category: "Programming",
    },
    {
      name: "IoT and Embedded Systems",
      organization: "University of California, Irvine",
      platform: "Coursera",
      date: "November 2020",
      description: "Internet of Things architecture and embedded system design",
      category: "Systems",
    },
    {
      name: "Raspberry Pi Programming Course",
      organization: "University of California, Irvine",
      platform: "Coursera",
      date: "October 2020",
      description: "Single-board computer programming and project development",
      category: "Programming",
    },
    {
      name: "Search Advertising and Digital Advertising Course",
      organization: "University of Colorado (CU)",
      platform: "Coursera",
      date: "October 2020",
      description: "Digital marketing strategies and advertising optimization",
      category: "Marketing",
    },
    {
      name: "Artificial Intelligence (AI) Course",
      organization: "IBM",
      platform: "Coursera",
      date: "October 2020",
      description: "Machine learning fundamentals and AI implementation",
      category: "AI/ML",
    },
    {
      name: "How to Create a Website Course",
      organization: "State University of New York (SUNY)",
      platform: "Coursera",
      date: "October 2020",
      description: "Web development and design principles",
      category: "Web Development",
    },
    {
      name: "VR & 360 Video Production Course",
      organization: "Google Daydream",
      platform: "Coursera",
      date: "October 2020",
      description: "Virtual reality content creation and 360-degree video production",
      category: "VR/AR",
    },
    {
      name: "Initiating and Planning Projects Course",
      organization: "University of California, Irvine",
      platform: "Coursera",
      date: "August 2020",
      description: "Project management methodologies and planning strategies",
      category: "Project Management",
    },
  ]

  const workshops = [
    {
      name: "Micro Aerial Vehicle Workshop",
      organization: "Jet Aerospace",
      venue: "Adhiyamaan College of Engineering, Hosur",
      date: "February 2018",
      description: "Hands-on workshop on UAV design and implementation",
      category: "Aerospace",
    },
    {
      name: "Basic STK Software Training",
      organization: "ACED",
      venue: "Bengaluru",
      date: "April 2018",
      description: "Satellite Tool Kit software for mission analysis",
      category: "Software",
    },
  ]

  const categoryColors = {
    "Advanced Technology": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    Programming: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    Systems: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    Marketing: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    "AI/ML": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    "Web Development": "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
    "VR/AR": "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
    "Project Management": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
    Aerospace: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
    Software: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  }

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute top-16 left-10 opacity-80 dark:opacity-85"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl">
            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
              <path d="M12 8L13.09 14.26L22 15L13.09 15.74L12 22L10.91 15.74L2 15L10.91 14.26L12 8Z" opacity="0.6" />
            </svg>
          </div>
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-8 opacity-75 dark:opacity-80"
          animate={{
            y: [0, -30, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <div className="w-28 h-28 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-2xl">
            <svg className="w-14 h-14 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C12 2 8 6 8 12C8 18 12 22 12 22C12 22 16 18 16 12C16 6 12 2 12 2Z" />
              <circle cx="12" cy="12" r="3" fill="white" opacity="0.8" />
              <path d="M6 12L2 14L6 16" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M18 12L22 14L18 16" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-20 left-1/4 opacity-70 dark:opacity-75"
          animate={{
            rotate: [0, -180, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <div className="w-22 h-22 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-2xl">
            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
              <rect x="8" y="8" width="8" height="8" rx="1" />
              <path d="M4 4L8 8M20 4L16 8M4 20L8 16M20 20L16 16" />
              <circle cx="12" cy="12" r="2" fill="white" opacity="0.8" />
            </svg>
          </div>
        </motion.div>

        <motion.div
          className="absolute top-2/3 right-1/4 opacity-65 dark:opacity-70"
          animate={{
            x: [0, 20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <div className="w-26 h-26 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl">
            <svg className="w-13 h-13 text-white" fill="currentColor" viewBox="0 0 24 24">
              <ellipse cx="12" cy="12" rx="8" ry="4" />
              <path d="M12 4V8M12 16V20M4 12H8M16 12H20" />
              <circle cx="12" cy="12" r="2" fill="white" opacity="0.8" />
            </svg>
          </div>
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
            Technical Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Comprehensive expertise across aerospace systems, engineering tools, and emerging technologies
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300 bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-serif font-semibold text-primary">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="hover:shadow-lg transition-shadow duration-300 bg-card/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-serif font-semibold text-primary text-center flex items-center justify-center gap-2">
                <Award className="h-6 w-6" />
                Certifications & Online Courses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary">
                      <CardContent className="p-4">
                        <div className="space-y-3">
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="font-semibold text-sm text-primary leading-tight">{cert.name}</h4>
                            <Badge
                              variant="secondary"
                              className={`text-xs ${categoryColors[cert.category as keyof typeof categoryColors] || "bg-gray-100 text-gray-800"}`}
                            >
                              {cert.category}
                            </Badge>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Building className="h-3 w-3 flex-shrink-0" />
                              <span className="leading-tight">{cert.organization}</span>
                            </div>

                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Calendar className="h-3 w-3 flex-shrink-0" />
                              <span>{cert.date}</span>
                            </div>
                          </div>

                          <p className="text-xs text-foreground leading-relaxed">{cert.description}</p>

                          <div className="flex items-center justify-between pt-2">
                            <Badge variant="outline" className="text-xs">
                              {cert.platform}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="hover:shadow-lg transition-shadow duration-300 bg-card/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-serif font-semibold text-primary text-center flex items-center justify-center gap-2">
                <ExternalLink className="h-6 w-6" />
                Workshops & Training
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {workshops.map((workshop, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-accent">
                      <CardContent className="p-4">
                        <div className="space-y-3">
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="font-semibold text-sm text-primary leading-tight">{workshop.name}</h4>
                            <Badge
                              variant="secondary"
                              className={`text-xs ${categoryColors[workshop.category as keyof typeof categoryColors] || "bg-gray-100 text-gray-800"}`}
                            >
                              {workshop.category}
                            </Badge>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Building className="h-3 w-3 flex-shrink-0" />
                              <span className="leading-tight">{workshop.organization}</span>
                            </div>

                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Calendar className="h-3 w-3 flex-shrink-0" />
                              <span>
                                {workshop.date} • {workshop.venue}
                              </span>
                            </div>
                          </div>

                          <p className="text-xs text-foreground leading-relaxed">{workshop.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
