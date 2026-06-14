"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#expertise", label: "Expertise" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#courses", label: "Courses" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-4 z-[1000] mx-4 mt-4 bg-[var(--neo-yellow)] border-[3px] border-black shadow-[6px_6px_0_#000]">
      <div className="flex items-center justify-between px-4 py-2">
        <Link
          href="/"
          className="text-xl font-bold px-3 py-1 bg-[var(--neo-cyan)] border-[3px] border-black shadow-[3px_3px_0_#000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
        >
          RN
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-semibold text-base hover:-translate-y-0.5 hover:scale-105 transition-transform"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/resume/Rokeshuvaraj_Resume.pdf"
            download="Rokeshuvaraj_Resume.pdf"
            className="neo-btn neo-btn-cyan text-sm py-2 px-4"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 border-[3px] border-black bg-[var(--neo-cyan)] shadow-[2px_2px_0_#000]"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t-[3px] border-black bg-white px-4 py-3 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-semibold py-2 border-b border-black/10"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/resume/Rokeshuvaraj_Resume.pdf"
            download="Rokeshuvaraj_Resume.pdf"
            className="neo-btn neo-btn-cyan text-sm mt-2"
            onClick={() => setOpen(false)}
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  )
}
