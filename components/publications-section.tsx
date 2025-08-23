"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, FileText } from "lucide-react"

export function PublicationsSection() {
  const publications = [
    {
      id: "balloon-satellite-paper",
      title: "Design and Fabrication of Balloon Satellite",
      authors: "Rokeshuvaraj N, Vivek D, Cholasamudram Sai Pavan Reddy, Vijayalakshmi Bharathi K",
      journal: "International Journal of Engineering Applied Sciences and Technology (IJEAST)",
      details: "Vol 4, Issue 9, ISSN No. 2455-2143, Page no 223-240",
      date: "March 2020",
      type: "Journal Article",
      abstract:
        "This paper presents the design and fabrication of a balloon satellite system with focus on weather obstacle mitigation, thermal insulation, and communication systems for data collection and analysis.",
    },
  ]

  const presentations = [
    {
      title: "Balloon Satellite Design",
      event: "International Conference on Emerging Trends in Engineering and Technology (ICETET)",
      venue: "Paavai Engineering College, Namakkal",
      date: "September 2019",
      type: "Conference Presentation",
      description:
        "Presented innovative balloon satellite design concepts and implementation strategies to an international audience of engineering professionals and researchers.",
    },
  ]

  return (
    <section id="publications" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-4">Publications & Research</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Contributing to aerospace knowledge through research publications and conference presentations
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-serif font-semibold text-primary mb-6">Journal Publications</h3>
            {publications.map((pub, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-lg font-serif font-semibold text-primary mb-2">{pub.title}</CardTitle>
                      <p className="text-sm text-foreground mb-2">{pub.authors}</p>
                      <p className="text-sm font-medium text-accent">{pub.journal}</p>
                      <p className="text-xs text-muted-foreground">{pub.details}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge variant="secondary">{pub.type}</Badge>
                      <span className="text-sm text-muted-foreground">{pub.date}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground mb-4 leading-relaxed">{pub.abstract}</p>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => (window.location.href = "/projects/balloon-satellite")}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Publication Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-serif font-semibold text-primary mb-6">Conference Presentations</h3>
            {presentations.map((pres, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-lg font-serif font-semibold text-primary mb-2">{pres.title}</CardTitle>
                      <p className="text-sm font-medium text-accent">{pres.event}</p>
                      <p className="text-xs text-muted-foreground">{pres.venue}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge variant="secondary">{pres.type}</Badge>
                      <span className="text-sm text-muted-foreground">{pres.date}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground mb-4 leading-relaxed">{pres.description}</p>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => (window.location.href = "/projects/balloon-satellite")}
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    View Project Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
