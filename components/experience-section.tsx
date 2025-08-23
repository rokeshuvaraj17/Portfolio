import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Graduate Teaching Assistant",
      company: "Virginia Tech",
      location: "Blacksburg, VA",
      period: "Present",
      description:
        "Supporting undergraduate students in mastering computational methods for aerospace applications. Responsible for guiding lab sessions, grading assignments, and assisting students in applying numerical techniques to real-world aerospace problems.",
      skills: ["Teaching", "Computational Methods", "Mentorship", "Aerospace Applications"],
    },
    {
      title: "Software Engineer",
      company: "Avohi InfoTech",
      location: "Bengaluru, India",
      period: "Feb 2021 - Nov 2024",
      description:
        "Collaborated in a dynamic development environment to build reusable integration components, optimizing data flows and implementing robust error-handling mechanisms. Developed the front-end of a food delivery application, enhancing system usability and performance.",
      skills: ["React.js", "Frontend Development", "System Integration", "Error Handling", "UI/UX Design"],
    },
    {
      title: "Aeronautical Intern",
      company: "Kaashiv Infotech",
      location: "Chennai, India",
      period: "Jun 2019 - Jul 2019",
      description:
        "Designed a model rocket and evaluated material suitability. Organized and analyzed data relevant to ground damage incidents and employee injuries. Developed enhanced safety awareness training, increasing employee safety awareness by 30%.",
      skills: ["Rocket Design", "Material Analysis", "Safety Engineering", "Data Analysis", "Training Development"],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A journey through aerospace engineering, software development, and systems integration
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl font-serif font-semibold text-primary">{exp.title}</CardTitle>
                    <p className="text-lg font-medium text-accent">{exp.company}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-4 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
