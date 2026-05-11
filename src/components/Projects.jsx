import { ExternalLink, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { siteData } from "../data/siteData";

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="projetos"
      className="section-padding bg-bg-secondary relative overflow-hidden"
    >
      <div className="divider-glow absolute top-0 left-0 right-0" />

      <div
        ref={ref}
        className={`max-w-7xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="tag-badge">PROJETOS</span>
          <h2 className="section-title mt-6 mb-4">
            Cases que <span className="blue-glow-text">falam por si.</span>
          </h2>
          <p className="section-subtitle">
            Sistemas reais, entregues com qualidade, design e foco em
            desempenho.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {siteData.projects.map((project, i) => (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              key={project.name}
              className="glass-card p-8 group relative overflow-hidden"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Background accent */}
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-5 blur-3xl pointer-events-none transition-opacity duration-500 group-hover:opacity-10"
                style={{
                  background: `radial-gradient(circle, ${project.color}, transparent)`,
                }}
              />

              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span
                    className="font-dm text-xs font-medium px-3 py-1 rounded-full mb-3 inline-block"
                    style={{
                      background: `${project.color}15`,
                      border: `1px solid ${project.color}30`,
                      color: project.accent,
                    }}
                  >
                    {project.label}
                  </span>
                  <h3 className="font-syne font-bold text-3xl text-text-primary">
                    {project.name}
                  </h3>
                </div>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `${project.color}20`,
                    border: `1px solid ${project.color}30`,
                  }}
                >
                  <ArrowRight size={16} style={{ color: project.color }} />
                </div>
              </div>

              {/* Description */}
              <p className="font-dm text-sm text-text-secondary leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {project.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: project.color }}
                    />
                    <span className="font-dm text-xs text-text-secondary">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              <div className="divider-glow mb-6" />

              {/* Stack */}
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-dm text-xs px-3 py-1 rounded-full"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#94A3B8",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="font-dm text-text-secondary mb-4">
            Quer um sistema assim para o seu negócio?
          </p>
          <a
            href="#contato"
            className="btn-primary inline-flex items-center gap-2"
          >
            Começar um projeto <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <div className="divider-glow absolute bottom-0 left-0 right-0" />
    </section>
  );
}
