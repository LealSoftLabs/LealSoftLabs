import { Github, Instagram, Mail, MessageCircle } from 'lucide-react'
import { siteData } from '../data/siteData'
import logo from "../assets/logo.png";

export default function Footer() {
  const { company, nav } = siteData

  return (
    <footer className="bg-bg-primary border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="LealSoft Labs"
                className="h-9 w-auto"
              />
              <div>
                <div className="font-syne font-bold text-sm text-text-primary tracking-wider">LEALSOFT</div>
                <div className="flex items-center gap-1">
                  <div className="h-px w-2 bg-blue-main/60" />
                  <span className="font-dm text-xs text-text-secondary tracking-[0.2em]">LABS</span>
                  <div className="h-px w-2 bg-blue-main/60" />
                </div>
              </div>
            </div>
            <p className="font-dm text-sm text-text-secondary leading-relaxed mb-4 max-w-xs">
              {company.slogan}
            </p>
            <p className="font-dm text-xs text-text-secondary/60 leading-relaxed max-w-xs">
              Transformamos ideias em sistemas digitais modernos.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-syne font-semibold text-xs text-text-secondary uppercase tracking-widest mb-5">
              Navegação
            </h4>
            <nav className="space-y-3">
              {nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block font-dm text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-syne font-semibold text-xs text-text-secondary uppercase tracking-widest mb-5">
              Contato
            </h4>
            <div className="space-y-3">
              {[
                { icon: Mail, value: company.email, href: `mailto:${company.email}` },
                { icon: MessageCircle, value: 'WhatsApp', href: `https://wa.me/${company.whatsapp.replace(/\D/g, '')}` },
                { icon: Instagram, value: company.instagram, href: 'https://instagram.com/lealsoftlabs' },
                { icon: Github, value: company.github, href: 'https://github.com/lealsoftlabs' },
              ].map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.value}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-dm text-sm text-text-secondary hover:text-blue-glow transition-colors"
                  >
                    <Icon size={14} />
                    {link.value}
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="divider-glow mb-6" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-dm text-xs text-text-secondary/60">
            © {new Date().getFullYear()} LealSoft Labs. Todos os direitos reservados.
          </p>
          <p className="font-dm text-xs text-text-secondary/60">
            Built with modern technologies
          </p>
        </div>
      </div>
    </footer>
  )
}
