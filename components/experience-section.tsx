"use client"

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
      "Built reusable integration components, optimized data flows, and implemented effective error-handling mechanisms. Developed the front-end of a food delivery application.",
    skills: ["Integration", "Data Flows", "Error Handling", "Frontend Development"],
  },
]

const internship = {
  title: "Aeronautical Intern",
  company: "Kaashiv Infotech",
  location: "Chennai, India",
  period: "June – July 2019",
  points: [
    "Designed a rocket model and analyzed material suitability for rocket construction",
    "Organized and analyzed data to support investigations of ground damage incidents and employee injuries",
    "Developed improved safety awareness training programs, leading to a 30% increase in safety awareness among employees",
  ],
  skills: ["Rocket Design", "Material Analysis", "Safety Engineering", "Data Analysis"],
}

export function ExperienceSection() {
  return (
    <section id="experience" className="px-6 sm:px-10 py-16 border-t-[3px] border-black bg-[var(--neo-yellow)]/20">
      <div className="max-w-6xl mx-auto">
        <motion.h2 className="neo-title" initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          Experience
        </motion.h2>

        <div className="space-y-8">
          <div>
            <h3 className="font-bold uppercase text-sm mb-4 px-2 py-1 inline-block bg-[var(--neo-cyan)] border-2 border-black">Professional</h3>
            <div className="space-y-5">
              {professional.map((exp, i) => (
                <motion.div key={exp.title} className="neo-card p-5 bg-white" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-2 mb-3">
                    <div>
                      <h4 className="font-bold text-lg">{exp.title}</h4>
                      <p className="font-semibold text-[var(--neo-cyan)]">{exp.company}</p>
                    </div>
                    <div className="text-sm font-medium">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                  <p className="text-sm mb-3 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((s) => (
                      <span key={s} className="neo-badge">{s}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold uppercase text-sm mb-4 px-2 py-1 inline-block bg-[var(--neo-pink)] border-2 border-black">Internship</h3>
            <motion.div className="neo-card p-5 bg-[var(--neo-pink)]/20 border-[3px] border-black" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2 mb-3">
                <div>
                  <h4 className="font-bold text-lg">{internship.title}</h4>
                  <p className="font-semibold">{internship.company}</p>
                </div>
                <div className="text-sm font-medium">
                  <p>{internship.period}</p>
                  <p>{internship.location}</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm mb-3">
                {internship.points.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {internship.skills.map((s) => (
                  <span key={s} className="neo-badge">{s}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
