export const siteData = {
  company: {
    name: 'LealSoft Labs',
    slogan: 'Modern software solutions.',
    tagline: 'Transformamos ideias em sistemas digitais modernos.',
    description:
      'Software house moderna focada em criar soluções digitais personalizadas. Unimos design, performance, organização e tecnologia para entregar sistemas que realmente funcionam.',
    email: 'lealsoftlabs@gmail.com',
    whatsapp: '+5567992149284',
    instagram: '@lealsoftlabs',
    github: 'github.com/lealsoftlabs',
  },

  nav: [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Stack', href: '#stack' },
    { label: 'Contato', href: '#contato' },
  ],

  hero: {
    title: 'Transformamos ideias em',
    titleHighlight: 'sistemas digitais modernos.',
    subtitle:
      'Criamos sistemas, plataformas SaaS, dashboards, APIs e automações para empresas que querem crescer com tecnologia.',
    cta1: 'Conhecer projetos',
    cta2: 'Entrar em contato',
  },

  about: {
    label: 'QUEM SOMOS',
    title: 'Uma software house construída para',
    titleHighlight: 'resultados reais.',
    description:
      'A LealSoft Labs nasceu para transformar processos em software. Desenvolvemos soluções digitais modernas com foco em qualidade, escalabilidade e uma experiência de usuário impecável.',
    description2:
      'Cada projeto é tratado como único. Do diagnóstico à entrega, trabalhamos de perto com nossos clientes para garantir que cada sistema entregue valor real para o negócio.',
    stats: [
      { value: '100%', label: 'Código limpo' },
      { value: 'Ágil', label: 'Processo de entrega' },
      { value: '24/7', label: 'Suporte próximo' },
    ],
  },

  services: [
    {
      icon: 'Code2',
      title: 'Desenvolvimento Full Stack',
      description: 'Sistemas completos do backend ao frontend. APIs robustas, interfaces modernas e arquitetura pensada para crescer.',
    },
    {
      icon: 'Zap',
      title: 'APIs e Integrações',
      description: 'Conectamos sistemas, automatizamos fluxos e criamos APIs REST escaláveis prontas para produção.',
    },
    {
      icon: 'LayoutDashboard',
      title: 'Dashboards Administrativos',
      description: 'Painéis intuitivos com dados em tempo real, gráficos, relatórios e gestão centralizada.',
    },
    {
      icon: 'Cloud',
      title: 'Plataformas SaaS',
      description: 'Criamos produtos SaaS do zero: multi-tenant, planos, cobranças, onboarding e escalabilidade.',
    },
    {
      icon: 'GitMerge',
      title: 'Automações',
      description: 'Automatizamos processos repetitivos e integramos sistemas via WhatsApp, APIs externas e webhooks.',
    },
    {
      icon: 'RefreshCw',
      title: 'Refatoração de Sistemas',
      description: 'Modernizamos sistemas legados: código limpo, performance otimizada e arquitetura atualizada.',
    },
    {
      icon: 'Headphones',
      title: 'Suporte Técnico',
      description: 'Acompanhamento próximo após a entrega. Monitoramento, correção de bugs e evolução contínua.',
    },
    {
      icon: 'Layers',
      title: 'Sistemas Sob Medida',
      description: 'Sistemas financeiros, de agendamento, ERP, CRM e muito mais — construídos para o seu negócio.',
    },
  ],

  projects: [
    {
      name: 'MONETO',
      label: 'Fintech · SaaS',
      url: 'https://moneto-frontend-psi.vercel.app/',
      description:
        'Sistema financeiro inteligente para organização de finanças pessoais. Controle de gastos, metas financeiras, relatórios detalhados, dashboard analítico e gestão completa das finanças.',
      features: [
        'Dashboard analítico',
        'Controle de gastos',
        'Metas financeiras',
        'Relatórios detalhados',
        'Multi-tier pricing',
        'JWT Auth',
      ],
      stack: ['React', 'Vite', 'Java', 'Spring Boot', 'PostgreSQL', 'JWT', 'REST APIs'],
      color: '#3B82F6',
      accent: '#60A5FA',
    },
    {
      name: 'GerencIA',
      label: 'SaaS · Agendamento',
      url: 'https://gerenc-ia-phi.vercel.app/',
      description:
        'Sistema de agendamento online para barbearias, salões, clínicas e profissionais autônomos. Gestão completa de serviços, profissionais, clientes e agenda com confirmação via WhatsApp.',
      features: [
        'Agendamento online',
        'Gestão de profissionais',
        'Confirmação WhatsApp',
        'Dashboard financeiro',
        'Cadastro de clientes',
        'Multi-empresa',
      ],
      stack: ['React', 'Java', 'Spring Boot', 'PostgreSQL', 'REST APIs', 'WhatsApp API'],
      color: '#22D3EE',
      accent: '#4AF0C4',
    },
  ],

  process: [
    { step: '01', title: 'Diagnóstico', description: 'Entendemos seu negócio, dores e objetivos antes de escrever uma linha de código.' },
    { step: '02', title: 'Planejamento', description: 'Definimos arquitetura, tecnologias, prazos e escopo com clareza e documentação.' },
    { step: '03', title: 'Design', description: 'Prototipamos interfaces modernas e validamos a experiência do usuário.' },
    { step: '04', title: 'Desenvolvimento', description: 'Código limpo, organizado e revisado em ciclos ágeis com entregas incrementais.' },
    { step: '05', title: 'Testes', description: 'Testes unitários, de integração e QA completo antes de qualquer deploy.' },
    { step: '06', title: 'Entrega', description: 'Deploy organizado, ambiente configurado e handoff completo com documentação.' },
    { step: '07', title: 'Suporte', description: 'Acompanhamento pós-entrega, monitoramento e evoluções contínuas.' },
  ],

  stack: [
    { name: 'Java', category: 'Backend', color: '#F89820' },
    { name: 'Spring Boot', category: 'Backend', color: '#6DB33F' },
    { name: 'React', category: 'Frontend', color: '#61DAFB' },
    { name: 'Vite', category: 'Frontend', color: '#646CFF' },
    { name: 'PostgreSQL', category: 'Database', color: '#336791' },
    { name: 'JWT', category: 'Security', color: '#D63AFF' },
    { name: 'Tailwind CSS', category: 'Frontend', color: '#38BDF8' },
    { name: 'REST APIs', category: 'Backend', color: '#3B82F6' },
    { name: 'Git / GitHub', category: 'DevOps', color: '#F05032' },
  ],

  differentials: [
    { icon: 'Sparkles', title: 'Código limpo', description: 'Escrevemos código legível, organizado e fácil de manter. Sem gambiarras.' },
    { icon: 'TrendingUp', title: 'Escalabilidade', description: 'Arquitetura pensada para crescer junto com o seu negócio.' },
    { icon: 'Shield', title: 'Segurança', description: 'JWT, rate limiting, proteção contra injeções e boas práticas desde o início.' },
    { icon: 'Gauge', title: 'Performance', description: 'Sistemas rápidos, otimizados e prontos para alto volume de requisições.' },
    { icon: 'Palette', title: 'Design moderno', description: 'Interfaces bonitas, responsivas e com excelente experiência do usuário.' },
    { icon: 'Users', title: 'Suporte próximo', description: 'Comunicação direta, transparente e acompanhamento real durante todo o projeto.' },
    { icon: 'CheckSquare', title: 'Organização', description: 'Processos claros, documentação completa e entregas dentro do prazo.' },
    { icon: 'Puzzle', title: 'Soluções personalizadas', description: 'Nada genérico. Cada sistema é construído para o seu problema específico.' },
  ],
}
