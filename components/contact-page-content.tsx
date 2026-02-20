"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, Linkedin, MapPin } from "lucide-react"

export function ContactPageContent() {
  return (
    <section className="pt-24 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="flex flex-col items-center lg:items-start">
            <div className="w-full max-w-sm aspect-[3/4] relative rounded-2xl border border-border overflow-hidden bg-muted/50">
              <Image
                src="/images/Professional_Photo.jpg"
                alt="Rokeshuvaraj Nagarajan"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 384px"
                priority
              />
            </div>
            <Link href="/" className="mt-6 text-sm text-primary hover:underline">
              ← Back to home
            </Link>
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold text-foreground mb-6">Contact</h1>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary shrink-0" />
                  <a href="mailto:rokeshuvarajn@vt.edu" className="hover:text-foreground transition-colors">
                    rokeshuvarajn@vt.edu
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-primary shrink-0" />
                  <a href="tel:+15405578346" className="hover:text-foreground transition-colors">
                    +1 (540) 557-8346
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Linkedin className="h-4 w-4 text-primary shrink-0" />
                  <a
                    href="https://www.linkedin.com/in/rokeshuvarajnagarajan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-primary shrink-0" />
                  <span>Blacksburg, Virginia, USA</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
