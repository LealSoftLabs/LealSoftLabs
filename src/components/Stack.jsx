import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { siteData } from '../data/siteData'

export default function Stack() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="stack" className="section-padding bg-bg-secondary relative overflow-hidden">
      <div className="divider-glow absolute top-0 left-0 right-0" />

      <div ref={ref} className={`max-w-7xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="tag-badge">TECNOLOGIAS</span>
          <h2 className="section-title mt-6 mb-4">
            Stack{' '}
            <span className="blue-glow-text">tecnológica.</span>
          </h2>
          <p className="section-subtitle">
            Ferramentas modernas, robustas e escolhidas com cuidado para cada camada do sistema.
          </p>
        </div>

        {/* Stack grid */}
        <div className="flex flex-wrap justify-center gap-3">
          {siteData.stack.map((tech, i) => (
            <div
              key={tech.name}
              className="glass-card px-5 py-4 flex items-center gap-3 group cursor-default"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div
                className="w-2.5 h-2.5 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform"
                style={{ background: tech.color, boxShadow: `0 0 8px ${tech.color}60` }}
              />
              <div>
                <div className="font-syne font-semibold text-sm text-text-primary">{tech.name}</div>
                <div className="font-dm text-xs text-text-secondary">{tech.category}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="text-center mt-12">
          <p className="font-dm text-sm text-text-secondary">
            Sempre evoluindo com as{' '}
            <span className="text-blue-glow">melhores práticas do mercado.</span>
          </p>
        </div>
      </div>

      <div className="divider-glow absolute bottom-0 left-0 right-0" />
    </section>
  )
}
