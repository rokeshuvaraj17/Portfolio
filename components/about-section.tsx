"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Briefcase, Award, Target } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden"
    >
      <motion.div
        className="absolute top-16 right-8 opacity-10 dark:opacity-20"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Image src="/images/rocket-engine-fire.png" alt="Rocket Engine" width={150} height={150} />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-8 opacity-8 dark:opacity-15"
        animate={{
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 3,
        }}
      >
        <Image src="/images/satellite-system.png" alt="Satellite" width={120} height={120} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Bridging aerospace engineering and software development through innovation and precision
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.img
                src="/images/aerospace-engineer.png"
                alt="Aerospace Systems Engineer - Technical Illustration"
                className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-lg"></div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.p
              className="text-lg leading-relaxed"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              I am a driven Aerospace Systems Engineer with a strong foundation in both engineering design and software
              development. My journey spans from building rockets, drones, and satellite prototypes to developing modern
              web applications and data-driven solutions.
            </motion.p>
            <motion.p
              className="text-lg leading-relaxed"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Currently pursuing my Master's in Aerospace Engineering at Virginia Tech with a focus on systems
              integration, computational methods, and safety engineering. I thrive at the intersection of engineering,
              software, and innovation, aiming to contribute to the next generation of aerospace systems that are safer,
              more reliable, and more sustainable.
            </motion.p>
            <motion.p
              className="text-lg leading-relaxed"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              As a Graduate Teaching Assistant, I support undergraduate students in mastering computational methods for
              aerospace applications, demonstrating strong communication, teaching, and mentorship skills.
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              icon: GraduationCap,
              title: "Education",
              description: "MS Aerospace Engineering\nVirginia Tech (3.9 GPA)",
            },
            {
              icon: Briefcase,
              title: "Experience",
              description: "Software Engineer\nAerospace Projects",
            },
            {
              icon: Award,
              title: "Achievements",
              description: "Published Research\nConference Presentations",
            },
            {
              icon: Target,
              title: "Goals",
              description: "Aerospace R&D\nSystems Integration",
            },
          ].map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 group">
                <CardContent className="pt-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <item.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:text-accent transition-colors duration-300" />
                  </motion.div>
                  <h3 className="font-serif font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
