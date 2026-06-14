import Link from "next/link"
import { ScrollProgress } from "@/components/scroll-progress"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Download } from "lucide-react"

const RESUME_PATH = "/resume/Rokeshuvaraj_Resume.pdf"
const RESUME_FILENAME = "Rokeshuvaraj_Resume.pdf"

export default function ResumePage() {
  return (
    <>
      <ScrollProgress />
      <div className="neo-page">
        <Navigation />
        <section className="px-6 sm:px-10 py-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <h1 className="neo-title">Resume</h1>
                <p className="mt-2 font-medium opacity-80">View online or download a copy.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/" className="neo-btn neo-btn-white text-sm">
                  ← Back to home
                </Link>
                <a
                  href={RESUME_PATH}
                  download={RESUME_FILENAME}
                  className="neo-btn neo-btn-yellow text-sm inline-flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download PDF
                </a>
              </div>
            </div>

            <div className="neo-card overflow-hidden bg-white">
              <iframe
                src={RESUME_PATH}
                title="Rokeshuvaraj Nagarajan Resume"
                className="w-full min-h-[80vh] border-0"
              />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}
