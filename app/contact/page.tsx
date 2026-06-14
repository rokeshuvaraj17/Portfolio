import { ScrollProgress } from "@/components/scroll-progress"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactPageContent } from "@/components/contact-page-content"

export default function ContactPage() {
  return (
    <>
      <ScrollProgress />
      <div className="neo-page">
        <Navigation />
        <ContactPageContent />
        <Footer />
      </div>
    </>
  )
}
