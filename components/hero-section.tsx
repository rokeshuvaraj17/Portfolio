"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Mail, Linkedin, Github, GraduationCap } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Aerospace-inspired geometric pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80 dark:from-primary dark:via-primary/95 dark:to-primary/90 z-0">
          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-20 dark:opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
          {/* Aerospace circuit pattern */}
          <div
            className="absolute inset-0 opacity-10 dark:opacity-20"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 2px, transparent 2px),
                radial-gradient(circle at 75% 75%, rgba(255,255,255,0.2) 2px, transparent 2px)
              `,
              backgroundSize: "100px 100px",
            }}
          />
        </div>
      </div>

      <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-black mb-6 animate-fade-in-up">
          Rokeshuvaraj N
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl font-sans font-medium mb-8 animate-fade-in-up animation-delay-200">
          Aerospace Systems Engineer | Systems Integration | Safety & Reliability
        </p>
        <p className="text-lg sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
          Innovating the future of aerospace through cutting-edge systems engineering, safety-critical design, and
          advanced computational methods.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up animation-delay-600">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white px-8 py-3 text-lg"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg bg-transparent"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </Button>
        </div>

        <div className="flex justify-center space-x-6 animate-fade-in-up animation-delay-800">
          <a
            href="mailto:rokeshuvarajn@vt.edu"
            className="text-white hover:text-accent transition-colors duration-200"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/rokeshuvarajnagarajan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-accent transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/rokeshuvaraj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-accent transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://scholar.google.com/citations?user=sJGgY4EAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-accent transition-colors duration-200"
            aria-label="Google Scholar"
          >
            <GraduationCap className="h-6 w-6" />
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-white" />
        </div>
      </div>
    </section>
  )
}
