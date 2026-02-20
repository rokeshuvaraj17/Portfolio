"use client"

import { usePathname } from "next/navigation"
import {
  Home,
  User,
  Layers,
  Briefcase,
  FolderKanban,
  BookOpen,
  Mail,
  FileText,
} from "lucide-react"
import { NavBar } from "@/components/ui/tubelight-navbar"

const navItems = [
  { name: "Home", url: "/#home", icon: Home },
  { name: "About", url: "/#about", icon: User },
  { name: "Expertise", url: "/#expertise", icon: Layers },
  { name: "Experience", url: "/#experience", icon: Briefcase },
  { name: "Projects", url: "/#projects", icon: FolderKanban },
  { name: "Courses", url: "/#courses", icon: BookOpen },
  { name: "Contact", url: "/contact", icon: Mail },
  { name: "Resume", url: "/resume/Rokeshuvaraj_Resume.pdf", icon: FileText, download: "Rokeshuvaraj_Resume.pdf" },
]

export function Navigation() {
  const pathname = usePathname()
  const activeName =
    pathname === "/contact"
      ? "Contact"
      : pathname === "/"
        ? "Home"
        : undefined

  return <NavBar items={navItems} activeName={activeName} />
}
