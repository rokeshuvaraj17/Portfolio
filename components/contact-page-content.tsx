"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, Linkedin, MapPin } from "lucide-react"

export function ContactPageContent() {
  return (
    <section className="px-6 sm:px-10 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="neo-title mb-10">Contact</h1>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative w-full max-w-sm aspect-[3/4] neo-photo overflow-hidden">
              <Image
                src="/images/Professional_Photo.jpg"
                alt="Rokeshuvaraj Nagarajan"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 384px"
                priority
              />
            </div>
            <Link href="/" className="neo-btn neo-btn-yellow mt-6 text-sm">
              ← Back to home
            </Link>
          </div>

          <div className="neo-card p-6 bg-white">
            <ul className="space-y-5 text-base font-medium">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0" />
                <a href="mailto:rokeshuvarajn@vt.edu" className="hover:underline">
                  rokeshuvarajn@vt.edu
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0" />
                <a href="tel:+15405578346" className="hover:underline">
                  +1 (540) 557-8346
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 shrink-0" />
                <a
                  href="https://www.linkedin.com/in/rokeshuvarajnagarajan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 shrink-0" />
                <span>Blacksburg, Virginia, USA</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
