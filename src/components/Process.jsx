import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { siteData } from '../data/siteData'

export default function Process() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="processo" className="section-padding bg-bg-primary relative overflow-hidden">
      <div ref={ref} className={`max-w-7xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="tag-badge">COMO TRABALHAMOS</span>
          <h2 className="section-title mt-6 mb-4">
            Processo claro,{' '}
            <span className="blue-glow-text">entrega garantida.</span>
          </h2>
          <p className="section-subtitle">
            Cada projeto segue etapas bem definidas para garantir qualidade, prazo e alinhamento.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-main/20 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-7 gap-4">
            {siteData.process.map((step, i) => (
              <div key={step.step} className="relative group">
                <div className="glass-card p-5 h-full text-center">
                  {/* Step number */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 font-syne font-bold text-sm group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(37,99,235,0.1))',
                      border: '1px solid rgba(59,130,246,0.25)',
                      color: '#60A5FA',
                    }}
                  >
                    {step.step}
                  </div>
                  <h3 className="font-syne font-semibold text-sm text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="font-dm text-xs text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
