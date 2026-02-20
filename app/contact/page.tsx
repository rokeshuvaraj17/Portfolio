import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactPageContent } from "@/components/contact-page-content"

export default function ContactPage() {
  return (
    <main className="min-h-screen pb-24 sm:pb-0">
      <Navigation />
      <ContactPageContent />
      <Footer />
    </main>
  )
}
