import { ScrollProgress } from "@/components/scroll-progress"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExpertiseSection } from "@/components/expertise-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { TeachingSection } from "@/components/teaching-section"
import { CoursesSection } from "@/components/courses-section"
import { PublicationsSection } from "@/components/publications-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <div className="neo-page">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ExpertiseSection />
          <ExperienceSection />
          <ProjectsSection />
          <TeachingSection />
          <CoursesSection />
          <PublicationsSection />
          <Footer />
        </main>
      </div>
    </>
  )
}
