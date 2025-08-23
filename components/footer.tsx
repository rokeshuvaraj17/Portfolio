export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Rokeshuvaraj N</h3>
            <p className="text-sm opacity-90 leading-relaxed">
              Aerospace Systems Engineer passionate about innovation, safety, and the future of aerospace technology.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="opacity-90 hover:opacity-100 transition-opacity">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="opacity-90 hover:opacity-100 transition-opacity">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="opacity-90 hover:opacity-100 transition-opacity">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="opacity-90 hover:opacity-100 transition-opacity">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="opacity-90 hover:opacity-100 transition-opacity">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Interests</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Systems Integration</li>
              <li>Safety Engineering</li>
              <li>Aerospace R&D</li>
              <li>Computational Methods</li>
              <li>Innovation & Technology</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-90">© {new Date().getFullYear()} Rokeshuvaraj N. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
