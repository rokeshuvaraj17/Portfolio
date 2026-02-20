import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExpertiseSection } from "@/components/expertise-section"
import { ProjectsSection } from "@/components/projects-section"
import { TeachingSection } from "@/components/teaching-section"
import { PublicationsSection } from "@/components/publications-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <ProjectsSection />
      <TeachingSection />
      <PublicationsSection />
      <Footer />
    </main>
  )
}
