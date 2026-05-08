import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { siteData } from '../data/siteData'

export default function About() {
  const { ref, isVisible } = useScrollAnimation()
  const { about } = siteData

  return (
    <section id="sobre" className="section-padding bg-bg-secondary relative overflow-hidden">
      <div className="divider-glow absolute top-0 left-0 right-0" />

      <div
        className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full opacity-5 blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #3B82F6, transparent)' }}
      />

      <div
        ref={ref}
        className={`max-w-7xl mx-auto transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="tag-badge">{about.label}</span>
            <h2 className="section-title mt-6 mb-6">
              {about.title}{' '}
              <span className="blue-glow-text">{about.titleHighlight}</span>
            </h2>
            <p className="section-subtitle mb-4">{about.description}</p>
            <p className="section-subtitle">{about.description2}</p>

            <div className="mt-10 flex gap-12">
              {about.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-syne font-bold text-3xl blue-glow-text mb-1">{stat.value}</div>
                  <div className="font-dm text-xs text-text-secondary uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual panel */}
          <div className="relative">
            <div className="glass-card p-8">
              <div className="flex items-center justify-between mb-6">
                <span className="font-syne font-semibold text-sm text-text-primary">Nossa Missão</span>
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-main/60" />
                  ))}
                </div>
              </div>
              <blockquote className="font-syne font-medium text-xl text-text-primary leading-relaxed mb-6">
                "Nós transformamos processos em software."
              </blockquote>
              <p className="font-dm text-sm text-text-secondary leading-relaxed">
                Cada linha de código que escrevemos tem um propósito claro: resolver problemas reais de negócio com tecnologia de qualidade.
              </p>

              <div className="divider-glow my-6" />

              <div className="grid grid-cols-2 gap-3">
                {[
                  'Sistemas personalizados',
                  'Plataformas SaaS',
                  'APIs e Integrações',
                  'Dashboards modernos',
                  'Automações inteligentes',
                  'Suporte técnico',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-main flex-shrink-0" />
                    <span className="font-dm text-xs text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative element */}
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl opacity-20 blur-xl"
              style={{ background: 'radial-gradient(circle, #3B82F6, transparent)' }}
            />
          </div>
        </div>
      </div>

      <div className="divider-glow absolute bottom-0 left-0 right-0" />
    </section>
  )
}
