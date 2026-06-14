"use client"

import { motion } from "framer-motion"

const onlineCourses = [
  { name: "Nanotechnology", organization: "Duke University, NC State, UNC Chapel Hill", platform: "Coursera", date: "November 2020" },
  { name: "Arduino Programming", organization: "University of California, Irvine", platform: "Coursera", date: "November 2020" },
  { name: "IoT and Embedded Systems", organization: "University of California, Irvine", platform: "Coursera", date: "November 2020" },
  { name: "Raspberry Pi Programming", organization: "University of California, Irvine", platform: "Coursera", date: "October 2020" },
  { name: "Search Advertising and Digital Advertising", organization: "University of Colorado (CU)", platform: "Coursera", date: "October 2020" },
  { name: "Artificial Intelligence (AI)", organization: "IBM", platform: "Coursera", date: "October 2020" },
  { name: "How to Create a Website", organization: "SUNY", platform: "Coursera", date: "October 2020" },
  { name: "VR & 360 Video Production", organization: "Google Daydream", platform: "Coursera", date: "October 2020" },
  { name: "Initiating and Planning Projects", organization: "University of California, Irvine", platform: "Coursera", date: "August 2020" },
]

const workshops = [
  { name: "Micro Aerial Vehicle", organization: "Jet Aerospace", venue: "Adhiyamaan College of Engineering, Hosur", date: "February 2018" },
  { name: "Basic STK Software Training", organization: "ACED", venue: "Bengaluru", date: "April 2018" },
]

export function CoursesSection() {
  return (
    <section id="courses" className="px-6 sm:px-10 py-16 border-t-[3px] border-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2 className="neo-title" initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          Courses & Workshops
        </motion.h2>

        <h3 className="font-bold uppercase text-sm mb-4 px-2 py-1 inline-block bg-[var(--neo-yellow)] border-2 border-black">Online Courses</h3>
        <ul className="neo-card bg-white divide-y-[2px] divide-black mb-10">
          {onlineCourses.map((course) => (
            <li key={course.name} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-4">
              <div>
                <p className="font-bold text-sm">{course.name}</p>
                <p className="text-xs">{course.organization}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="neo-badge text-xs">{course.platform}</span>
                <span className="text-xs font-medium">{course.date}</span>
              </div>
            </li>
          ))}
        </ul>

        <h3 className="font-bold uppercase text-sm mb-4 px-2 py-1 inline-block bg-[var(--neo-pink)] border-2 border-black">Workshops</h3>
        <ul className="neo-card bg-[var(--neo-pink)]/15 divide-y-[2px] divide-black">
          {workshops.map((w) => (
            <li key={w.name} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-4">
              <div>
                <p className="font-bold text-sm">{w.name}</p>
                <p className="text-xs font-medium">{w.organization} · {w.venue}</p>
              </div>
              <span className="text-xs font-medium shrink-0">{w.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
