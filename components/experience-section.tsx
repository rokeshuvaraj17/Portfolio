"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react"
import { motion } from "framer-motion"

const professional = [
  {
    title: "Teaching Assistant",
    company: "Virginia Tech",
    location: "Blacksburg, VA",
    period: "Present",
    description:
      "Supporting undergraduate students in mastering computational methods and system dynamics for aerospace applications. Guiding lab sessions, grading assignments, and assisting with state-space modeling, stability analysis, and MATLAB-based dynamic systems.",
    skills: ["Teaching", "Computational Methods", "System Dynamics", "Mentorship"],
  },
  {
    title: "Software Engineer",
    company: "Avohi Info Tech",
    location: "Bengaluru, India",
    period: "February 2021 – November 2024",
    description:
      "Avohi Info Tech offers web development, software services, and digital marketing solutions. Built reusable integration components, optimized data flows, and implemented effective error-handling mechanisms including automated exception tracking and logging. Developed the front-end of a food delivery application.",
    skills: ["Integration", "Data Flows", "Error Handling", "Frontend Development"],
  },
]

const internship = {
  title: "Aeronautical Intern",
  company: "Kaashiv Infotech",
  location: "Chennai, India",
  period: "June – July 2019",
  tagline: "Internships and project solutions to equip students and professionals with technology knowledge.",
  points: [
    "Designed a rocket model and analyzed material suitability for rocket construction",
    "Organized and analyzed data to support investigations of ground damage incidents of operational aircraft and employee injuries",
    "Supported ground safety programs and accident/incident and injury reduction efforts; developed improved safety awareness training programs, leading to a 30% increase in safety awareness among employees",
  ],
  skills: ["Rocket Design", "Material Analysis", "Safety Engineering", "Data Analysis", "Training Development"],
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-muted/30 border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-2xl sm:text-3xl font-semibold text-foreground mb-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              Professional Experience
            </h3>
            <div className="space-y-6">
              {professional.map((exp, i) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Card className="border border-border bg-card shadow-sm rounded-xl overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div>
                          <CardTitle className="text-lg font-semibold text-foreground">{exp.title}</CardTitle>
                          <p className="text-base font-medium text-primary mt-0.5">{exp.company}</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.skills.map((s) => (
                          <Badge key={s} variant="secondary" className="text-xs font-normal">
                            {s}
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
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              Internship
            </h3>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Card className="border-2 border-primary/20 bg-card shadow-sm rounded-xl overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <Badge variant="outline" className="text-primary border-primary/50 font-medium">
                      Internship
                    </Badge>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-lg font-semibold text-foreground">{internship.title}</CardTitle>
                      <p className="text-base font-medium text-primary mt-0.5">{internship.company}</p>
                      <p className="text-xs text-muted-foreground mt-1">{internship.tagline}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {internship.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {internship.location}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed mb-4">
                    {internship.points.map((point, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {internship.skills.map((s) => (
                      <Badge key={s} variant="secondary" className="text-xs font-normal">
                        {s}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
