"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Linkedin, Github, GraduationCap } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Let's discuss opportunities in aerospace systems engineering, research collaboration, or innovative projects
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-serif font-semibold text-primary text-center">
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a href="mailto:rokeshuvarajn@vt.edu" className="text-accent hover:underline">
                    rokeshuvarajn@vt.edu
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <a href="tel:+15405578346" className="text-accent hover:underline">
                    +1 (540) 557-8346
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">Blacksburg, Virginia, USA</p>
                </div>
              </div>

              <div className="pt-6 border-t">
                <p className="font-medium text-foreground mb-4 text-center">Connect with me</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="mailto:rokeshuvarajn@vt.edu"
                    className="bg-accent/10 p-3 rounded-lg hover:bg-accent/20 transition-colors"
                  >
                    <Mail className="h-5 w-5 text-accent" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rokeshuvarajnagarajan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent/10 p-3 rounded-lg hover:bg-accent/20 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-accent" />
                  </a>
                  <a
                    href="https://github.com/rokeshuvaraj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent/10 p-3 rounded-lg hover:bg-accent/20 transition-colors"
                  >
                    <Github className="h-5 w-5 text-accent" />
                  </a>
                  <a
                    href="https://scholar.google.com/citations?user=sJGgY4EAAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent/10 p-3 rounded-lg hover:bg-accent/20 transition-colors"
                  >
                    <GraduationCap className="h-5 w-5 text-accent" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
