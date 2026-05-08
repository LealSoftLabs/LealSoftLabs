import { ArrowRight, ChevronDown } from 'lucide-react'
import { siteData } from '../data/siteData'

export default function Hero() {
  const { hero } = siteData

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
      {/* Background blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-10 blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #3B82F6, #2563EB, transparent)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-8 blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #60A5FA, transparent)' }}
      />

      {/* Animated grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px opacity-10"
            style={{
              background: 'linear-gradient(90deg, transparent, #3B82F6, transparent)',
              top: `${20 + i * 15}%`,
              left: 0,
              right: 0,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center pt-24 pb-16">
        {/* Label */}
        <div className="inline-flex items-center gap-2 mb-8">
          <div className="h-px w-8 bg-blue-main/60" />
          <span className="tag-badge text-xs tracking-widest uppercase">
            Modern Software Solutions
          </span>
          <div className="h-px w-8 bg-blue-main/60" />
        </div>

        {/* Title */}
        <h1 className="font-syne font-extrabold text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-text-primary mb-6">
          {hero.title}{' '}
          <br className="hidden md:block" />
          <span className="blue-glow-text">{hero.titleHighlight}</span>
        </h1>

        {/* Subtitle */}
        <p className="font-dm text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
          {hero.subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projetos" className="btn-primary flex items-center gap-2">
            {hero.cta1}
            <ArrowRight size={16} />
          </a>
          <a href="#contato" className="btn-outline">
            {hero.cta2}
          </a>
        </div>

        {/* Floating cards visual */}
        <div className="mt-20 relative max-w-3xl mx-auto">
          <div className="glass-card p-6 text-left">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-400/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <div className="w-3 h-3 rounded-full bg-green-400/70" />
              <div className="ml-4 h-px flex-1 bg-white/5" />
              <span className="font-dm text-xs text-text-secondary">LealSoft Labs — System</span>
            </div>
            <div className="font-mono text-sm space-y-1">
              <div><span className="text-blue-glow">@LealSoft</span><span className="text-text-secondary"> / </span><span className="text-green-400">project</span></div>
              <div className="text-text-secondary">┌─ <span className="text-blue-main">backend</span> &nbsp;→ <span className="text-white/80">Spring Boot · REST APIs · PostgreSQL</span></div>
              <div className="text-text-secondary">├─ <span className="text-blue-main">frontend</span> → <span className="text-white/80">React · Vite · Tailwind CSS</span></div>
              <div className="text-text-secondary">├─ <span className="text-blue-main">security</span> &nbsp;→ <span className="text-white/80">JWT · Rate Limiting · XSS protection</span></div>
              <div className="text-text-secondary">└─ <span className="text-green-400">status</span> &nbsp;&nbsp;→ <span className="text-green-400">✓ Deployed &amp; Running</span></div>
            </div>
          </div>

          {/* Floating stat cards */}
          <div className="absolute -top-4 -right-4 md:-right-12 glass-card px-4 py-3 hidden md:block animate-float"
            style={{ animationDuration: '4s' }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-dm text-xs text-text-secondary">Sistema online</span>
            </div>
          </div>

          <div className="absolute -bottom-4 -left-4 md:-left-12 glass-card px-4 py-3 hidden md:block animate-float"
            style={{ animationDuration: '5s', animationDelay: '1s' }}>
            <div className="font-dm text-xs text-text-secondary">
              <span className="text-blue-glow font-semibold">100%</span> código limpo
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-secondary hover:text-blue-main transition-colors animate-bounce"
      >
        <span className="font-dm text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} />
      </a>
    </section>
  )
}
