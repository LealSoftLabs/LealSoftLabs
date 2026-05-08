import {
  Sparkles, TrendingUp, Shield, Gauge,
  Palette, Users, CheckSquare, Puzzle,
} from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { siteData } from '../data/siteData'

const iconMap = { Sparkles, TrendingUp, Shield, Gauge, Palette, Users, CheckSquare, Puzzle }

export default function Differentials() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="diferenciais" className="section-padding bg-bg-primary relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5 blur-[150px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, #3B82F6, transparent 70%)' }}
      />

      <div ref={ref} className={`max-w-7xl mx-auto relative z-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="tag-badge">DIFERENCIAIS</span>
          <h2 className="section-title mt-6 mb-4">
            Por que escolher a{' '}
            <span className="blue-glow-text">LealSoft Labs?</span>
          </h2>
          <p className="section-subtitle">
            Não entregamos apenas código. Entregamos sistemas que funcionam, escalam e evoluem.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {siteData.differentials.map((diff, i) => {
            const Icon = iconMap[diff.icon]
            return (
              <div
                key={diff.title}
                className="glass-card p-6 group"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(37,99,235,0.08))',
                    border: '1px solid rgba(59,130,246,0.2)',
                  }}
                >
                  <Icon size={18} className="text-blue-glow" />
                </div>
                <h3 className="font-syne font-semibold text-sm text-text-primary mb-2">
                  {diff.title}
                </h3>
                <p className="font-dm text-xs text-text-secondary leading-relaxed">
                  {diff.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
