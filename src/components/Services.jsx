import {
  Code2, Zap, LayoutDashboard, Cloud,
  GitMerge, RefreshCw, Headphones, Layers,
} from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { siteData } from '../data/siteData'

const iconMap = { Code2, Zap, LayoutDashboard, Cloud, GitMerge, RefreshCw, Headphones, Layers }

export default function Services() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="servicos" className="section-padding bg-bg-primary relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-5 blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #3B82F6, transparent)' }}
      />

      <div ref={ref} className={`max-w-7xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="tag-badge">O QUE FAZEMOS</span>
          <h2 className="section-title mt-6 mb-4">
            Soluções completas para o seu{' '}
            <span className="blue-glow-text">negócio digital.</span>
          </h2>
          <p className="section-subtitle">
            Do conceito à produção, entregamos software com qualidade, organização e foco em resultado.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {siteData.services.map((service, i) => {
            const Icon = iconMap[service.icon]
            return (
              <div
                key={service.title}
                className="glass-card p-6 group"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: 'rgba(59, 130, 246, 0.1)',
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                  }}
                >
                  <Icon size={20} className="text-blue-main" />
                </div>
                <h3 className="font-syne font-semibold text-sm text-text-primary mb-2">
                  {service.title}
                </h3>
                <p className="font-dm text-xs text-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
