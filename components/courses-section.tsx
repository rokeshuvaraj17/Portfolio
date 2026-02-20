"use client"

import { Badge } from "@/components/ui/badge"
import { Calendar, BookOpen, Wrench } from "lucide-react"
import { motion } from "framer-motion"

const onlineCourses = [
  {
    name: "Nanotechnology",
    organization: "Duke University, NC State University, University of North Carolina at Chapel Hill",
    platform: "Coursera",
    date: "November 2020",
  },
  {
    name: "Arduino Programming",
    organization: "University of California, Irvine",
    platform: "Coursera",
    date: "November 2020",
  },
  {
    name: "IoT and Embedded Systems",
    organization: "University of California, Irvine",
    platform: "Coursera",
    date: "November 2020",
  },
  {
    name: "Raspberry Pi Programming",
    organization: "University of California, Irvine",
    platform: "Coursera",
    date: "October 2020",
  },
  {
    name: "Search Advertising and Digital Advertising",
    organization: "University of Colorado (CU)",
    platform: "Coursera",
    date: "October 2020",
  },
  {
    name: "Artificial Intelligence (AI)",
    organization: "IBM",
    platform: "Coursera",
    date: "October 2020",
  },
  {
    name: "How to Create a Website",
    organization: "State University of New York (SUNY)",
    platform: "Coursera",
    date: "October 2020",
  },
  {
    name: "VR & 360 Video Production",
    organization: "Google Daydream",
    platform: "Coursera",
    date: "October 2020",
  },
  {
    name: "Initiating and Planning Projects",
    organization: "University of California, Irvine",
    platform: "Coursera",
    date: "August 2020",
  },
]

const workshops = [
  {
    name: "Micro Aerial Vehicle",
    organization: "Jet Aerospace",
    venue: "Adhiyamaan College of Engineering, Hosur",
    date: "February 2018",
  },
  {
    name: "Basic STK Software Training",
    organization: "ACED",
    venue: "Bengaluru",
    date: "April 2018",
  },
]

export function CoursesSection() {
  return (
    <section id="courses" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-2xl sm:text-3xl font-semibold text-foreground mb-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Courses & Workshops
        </motion.h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Online Courses
            </h3>
            <ul className="space-y-3">
              {onlineCourses.map((course, i) => (
                <motion.li
                  key={`${course.name}-${course.date}`}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: Math.min(i * 0.02, 0.15) }}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 py-3 border-b border-border last:border-0"
                >
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{course.name}</h4>
                    <p className="text-xs text-muted-foreground">{course.organization}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    <Badge variant="secondary" className="text-xs font-normal">
                      {course.platform}
                    </Badge>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {course.date}
                    </span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
              <Wrench className="h-4 w-4" />
              Workshops
            </h3>
            <ul className="space-y-3">
              {workshops.map((workshop, i) => (
                <motion.li
                  key={workshop.name}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 py-3 border-b border-border last:border-0"
                >
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{workshop.name}</h4>
                    <p className="text-xs font-medium text-primary">{workshop.organization}</p>
                    <p className="text-xs text-muted-foreground">{workshop.venue}</p>
                  </div>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                    <Calendar className="h-3 w-3" />
                    {workshop.date}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
