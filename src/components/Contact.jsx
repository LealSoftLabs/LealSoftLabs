import { useState } from 'react'
import { Mail, MessageCircle, Instagram, Github, Send, ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { siteData } from '../data/siteData'
import emailjs from "@emailjs/browser";


export default function Contact() {
  const { ref, isVisible } = useScrollAnimation()
  const { company } = siteData
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e) => {
  e.preventDefault()

  try {
    await emailjs.send(
      "service_9deg5zj",
      "template_vaonx0f",
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
      "sOAiyIxPHy0gWBTDf"
    )

    setSent(true)

    setForm({
      name: '',
      email: '',
      message: '',
    })

    setTimeout(() => setSent(false), 3000)

  } catch (error) {
    console.error(error)
    alert("Erro ao enviar mensagem")
  }
}

  return (
    <section id="contato" className="section-padding bg-bg-secondary relative overflow-hidden">
      <div className="divider-glow absolute top-0 left-0 right-0" />

      <div ref={ref} className={`max-w-7xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="tag-badge">CONTATO</span>
          <h2 className="section-title mt-6 mb-4">
            Vamos construir algo{' '}
            <span className="blue-glow-text">incrível juntos?</span>
          </h2>
          <p className="section-subtitle">
            Conte sobre seu projeto. Respondemos em até 24 horas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="glass-card p-8">
            <h3 className="font-syne font-semibold text-lg text-text-primary mb-6">Iniciar projeto</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-dm text-xs text-text-secondary uppercase tracking-widest mb-2 block">
                  Seu nome
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Nome completo"
                  required
                  className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 font-dm text-sm text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-blue-main/50 focus:bg-white/8 transition-all"
                />
              </div>
              <div>
                <label className="font-dm text-xs text-text-secondary uppercase tracking-widest mb-2 block">
                  E-mail
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="seu@email.com"
                  required
                  className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 font-dm text-sm text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-blue-main/50 focus:bg-white/8 transition-all"
                />
              </div>
              <div>
                <label className="font-dm text-xs text-text-secondary uppercase tracking-widest mb-2 block">
                  Mensagem
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Descreva seu projeto, necessidade ou dúvida..."
                  required
                  rows={5}
                  className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 font-dm text-sm text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-blue-main/50 focus:bg-white/8 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                {sent ? '✓ Mensagem enviada!' : (
                  <>Enviar mensagem <Send size={15} /></>
                )}
              </button>
            </form>
          </div>

          {/* Contact links */}
          <div className="space-y-4">
            <h3 className="font-syne font-semibold text-lg text-text-primary mb-6">Outros canais</h3>

            {[
              {
                icon: MessageCircle,
                label: 'WhatsApp',
                value: company.whatsapp,
                href: `https://wa.me/${company.whatsapp.replace(/\D/g, '')}`,
                color: '#22C55E',
              },
              {
                icon: Mail,
                label: 'E-mail',
                value: company.email,
                href: `https://mail.google.com/mail/?view=cm&fs=1&to=${company.email}&su=Projeto%20com%20a%20LealSoft%20Labs`,
                color: '#3B82F6',
              },
              {
                icon: Instagram,
                label: 'Instagram',
                value: company.instagram,
                href: `https://www.instagram.com/lealsoftlabs`,
                color: '#EC4899',
              },
              {
                icon: Github,
                label: 'GitHub',
                value: company.github,
                href: `https://github.com/LealSoftLabs`,
                color: '#94A3B8',
              },
            ].map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-5 flex items-center gap-4 group block"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                    style={{
                      background: `${link.color}15`,
                      border: `1px solid ${link.color}30`,
                    }}
                  >
                    <Icon size={18} style={{ color: link.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="font-syne font-semibold text-xs text-text-secondary uppercase tracking-widest mb-0.5">
                      {link.label}
                    </div>
                    <div className="font-dm text-sm text-text-primary">{link.value}</div>
                  </div>
                  <ArrowRight size={14} className="text-text-secondary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              )
            })}

            {/* Response time */}
            <div className="glass-card p-5 mt-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-syne font-semibold text-xs text-text-primary uppercase tracking-widest">
                  Disponível
                </span>
              </div>
              <p className="font-dm text-xs text-text-secondary">
                Respondemos em até 24 horas. Para urgências, use o WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="divider-glow absolute bottom-0 left-0 right-0" />
    </section>
  )
}
