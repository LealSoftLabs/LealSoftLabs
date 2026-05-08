import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { siteData } from '../data/siteData'
import logo from "../assets/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-bg-primary/90 backdrop-blur-xl border-b border-white/5'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="LealSoft Labs"
              className="h-12 w-auto"
            />
          <div>
            <span className="font-syne font-bold text-base text-text-primary tracking-wider">LEALSOFT</span>
            <div className="flex items-center gap-1">
              <div className="h-px w-3 bg-blue-main/60" />
              <span className="font-dm text-xs text-text-secondary tracking-[0.2em] uppercase">Labs</span>
              <div className="h-px w-3 bg-blue-main/60" />
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {siteData.nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-dm text-sm text-text-secondary hover:text-text-primary transition-colors duration-200 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-main group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a href="#contato" className="btn-primary text-sm">
            Iniciar projeto
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-text-secondary hover:text-text-primary transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden mt-2 mx-4 glass-card p-6">
          <nav className="flex flex-col gap-4">
            {siteData.nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="font-dm text-sm text-text-secondary hover:text-text-primary transition-colors py-1"
              >
                {item.label}
              </a>
            ))}
            <div className="divider-glow my-2" />
            <a href="#contato" onClick={() => setMobileOpen(false)} className="btn-primary text-center text-sm">
              Iniciar projeto
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
