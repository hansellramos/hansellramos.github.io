// All public page content lives here, so updating the site means editing data, not markup.
// `shared` holds what is the same in every language; `content.en` / `content.es` hold the copy.
// Later this can be replaced by the public rows from Supabase.

export const shared = {
  handle: 'hansellramos',
  name: 'Hansel Ramos',
  email: 'hansell.ramos@gmail.com',
  links: {
    linkedin: 'https://linkedin.com/in/hansellramos',
    github: 'https://github.com/hansellramos',
  },
  cvUrl: '', // set to '/cv/Hansel-Ramos-CV.pdf' once a public CV (no phone number) is added
  photo: '/images/hansel.webp',
  workTags: [
    ['PHP', 'Airflow'],
    ['Claude Code', 'MCP'],
    ['Laravel', 'Vue'],
    ['LLMs', 'Laravel + Vue'],
  ],
  projects: [
    {
      id: 'sphinx',
      name: 'Sphinx',
      url: 'https://github.com/hansellramos/open-sphinx',
      repo: 'hansellramos/open-sphinx',
      license: 'AGPL-3.0',
      tags: ['Vue 3', 'Pinia', 'Node', 'Express', 'Prisma', 'WebAuthn PRF', 'Web Crypto', 'HLS'],
    },
  ],
  interests: [
    { tint: '#cfe3df', photo: '/images/drone.webp' },
    { tint: '#f1dcc3', photo: '/images/beach.webp' },
    { tint: '#d6decb', photo: '/images/trekking.webp' },
    { tint: '#d9d4e4', photo: '/images/gym.webp' },
    { tint: '#d3dcef', photo: '/images/gaming.webp' },
    { tint: '#ecd5dc', photo: '/images/dj.webp' },
    { tint: '#d5e6f1', photo: '/images/travel.webp' },
    { tint: '#e6dfcc', photo: '/images/entrepreneurship.webp' },
  ],
}

export const content = {
  en: {
    nav: { work: 'Work', how: 'How I work', projects: 'Projects', beyond: 'Beyond code', contact: 'Contact', cv: 'Download CV', lang: 'Language' },
    hero: {
      headline: 'I build software that gives people back their time.',
      intro:
        'Senior Software Engineer with 18+ years turning slow, manual processes into tools people actually enjoy using. PHP/Laravel and Vue at the core, and AI woven into how I design, build and ship.',
      ctaWork: 'See selected work',
      ctaTalk: "Let's talk",
      location: 'Barranquilla, Colombia · UTC-5 · Remote',
      photoAlt: 'Portrait of Hansel Ramos',
      photoPlaceholder: 'Your photo here',
    },
    status: [
      { key: 'building', value: 'AI features that go beyond chat' },
      { key: 'studying', value: 'MSc in Artificial Intelligence · UNIR' },
      { key: 'offline', value: 'trails, the gym, drones, PlayStation' },
      { key: 'open to', value: 'senior remote roles · US hours', highlight: true },
    ],
    impactLabel: 'Impact',
    impact: [
      { value: '12h → 3h', label: "Nightly product sync for Disney's POS, so stores opened up to date" },
      { value: '+50%', label: 'Team delivery speed with the AI-assisted workflow I designed' },
      { value: '124', label: 'US small businesses moved to a secure CRM with zero downtime' },
      { value: '18+ yrs', label: 'Shipping for Disney, Johnson & Johnson, Universal Studios and more' },
    ],
    workSection: { prompt: 'show selected work', title: "Problems I've helped solve", tagsLabel: 'Technologies' },
    work: [
      {
        context: 'Disney · Appetize POS',
        title: "Parks were opening with yesterday's prices",
        body: 'A 1.5M-record nightly sync ran into the morning. I split it into parallel, paginated jobs orchestrated with Airflow, cutting runtime from 12 hours to 3.',
        extraTags: ['ETL at scale'],
      },
      {
        context: 'Health Recovery Solutions',
        title: 'Every engineer used AI differently',
        body: 'I designed an 18-step AI-assisted workflow and coached a team of 6 through it. Delivery speed rose 50%, and the whole company adopted it.',
        extraTags: ['Team enablement'],
      },
      {
        context: 'Compliance CRM · 124 businesses',
        title: "A compliance tool that wasn't secure",
        body: 'I rewrote a legacy PHP 5 system into a Laravel API and Vue app, migrating module by module with the Strangler Fig pattern. Clients never saw downtime.',
        extraTags: ['Legacy migration'],
      },
      {
        context: 'Travelia · In progress',
        badge: 'proof of concept',
        title: 'AI that adds value, not just a chat box',
        body: 'I designed and prototyped AI features woven into the core product, to make the current subscription worth more and win new customers.',
        extraTags: ['Product thinking'],
      },
    ],
    how: {
      prompt: 'how do you work with AI?',
      title: 'AI does the heavy lifting. I own every decision.',
      lead: "The same workflow that sped up my team by 50%, condensed. I review and approve every step, and nothing ships that I don't understand.",
    },
    workflow: [
      { title: 'Understand', body: 'Read the ticket and its context straight from Jira' },
      { title: 'Plan', body: 'Agree on an approach before any code exists' },
      { title: 'Tests first', body: 'I define the behavior; the code has to earn it' },
      { title: 'Build', body: 'Claude Code drafts, I steer the design choices' },
      { title: 'Verify', body: 'Full suite, Playwright, static analysis, line-by-line review' },
      { title: 'Ship', body: 'Docs and a clear PR, ready for the team' },
    ],
    projectsSection: {
      prompt: 'ls ~/side-projects',
      title: 'Things I build for myself',
      lead: 'Personal projects where I try ideas end to end, from the first commit to daily use.',
      openRepo: 'View on GitHub',
      privateLabel: 'private repo',
    },
    projects: [
      {
        tagline: 'End-to-end encrypted photo, video and file vault you host yourself',
        body: 'A self-hosted vault where the server only stores ciphertext: it never sees files, names, tags, dates or locations. You unlock it with a passkey (WebAuthn PRF). It streams encrypted HLS video decrypted in the browser, and I run it every day on a small home NAS.',
      },
    ],
    beyond: {
      prompt: 'what drives you?',
      title: 'Technology is worth it when it helps someone.',
      lead: "That's why AI excites me: it can give people hours of their lives back. I'm also an entrepreneur and a DJ. When I'm not building, I'm traveling, on Colombia's Caribbean coast, up a trail or behind a drone controller, and at home there's usually a PlayStation controller in my hands.",
    },
    interests: [
      { title: 'Drones', caption: 'Seeing the whole system from above' },
      { title: 'The beach', caption: 'Where I reset and think clearly' },
      { title: 'Trekking', caption: 'Long trails, one step at a time' },
      { title: 'The gym', caption: 'Consistency beats intensity' },
      {
        title: 'Gaming',
        caption: "PlayStation fan. Horizon, Spider-Man: Miles Morales and Assassin's Creed on top; Pokémon and Mario at heart",
      },
      { title: 'Music', caption: 'DJ behind the decks, reading the room' },
      { title: 'Travel', caption: 'New places, new people, new perspectives' },
      { title: 'Entrepreneurship', caption: 'Turning ideas into businesses that serve real people' },
    ],
    contact: {
      prompt: 'how can we work together?',
      title: "Got a problem worth solving? Let's talk.",
      body: 'Open to senior remote roles in PHP/Laravel, Vue and AI-assisted development, working US Eastern hours.',
    },
    footer: 'Built with Vue, with an AI pair',
  },

  es: {
    nav: { work: 'Trabajo', how: 'Cómo trabajo', projects: 'Proyectos', beyond: 'Más allá del código', contact: 'Contacto', cv: 'Descargar CV', lang: 'Idioma' },
    hero: {
      headline: 'Construyo software que le devuelve tiempo a la gente.',
      intro:
        'Senior Software Engineer con más de 18 años convirtiendo procesos lentos y manuales en herramientas que la gente disfruta usar. PHP/Laravel y Vue como base, y la IA integrada en cómo diseño, construyo y entrego.',
      ctaWork: 'Ver proyectos',
      ctaTalk: 'Hablemos',
      location: 'Barranquilla, Colombia · UTC-5 · Remoto',
      photoAlt: 'Retrato de Hansel Ramos',
      photoPlaceholder: 'Tu foto aquí',
    },
    status: [
      { key: 'creando', value: 'funciones de IA que van más allá del chat' },
      { key: 'estudiando', value: 'Maestría en Inteligencia Artificial · UNIR' },
      { key: 'offline', value: 'senderos, el gym, drones, PlayStation' },
      { key: 'disponible', value: 'roles senior remotos · horario EE. UU.', highlight: true },
    ],
    impactLabel: 'Impacto',
    impact: [
      { value: '12h → 3h', label: 'Sincronización nocturna de productos del POS de Disney, para abrir tiendas al día' },
      { value: '+50%', label: 'Velocidad de entrega del equipo con el flujo de trabajo con IA que diseñé' },
      { value: '124', label: 'Pequeñas empresas de EE. UU. migradas a un CRM seguro sin caídas' },
      { value: '18+ años', label: 'Entregando para Disney, Johnson & Johnson, Universal Studios y más' },
    ],
    workSection: { prompt: 'mostrar proyectos', title: 'Problemas que he ayudado a resolver', tagsLabel: 'Tecnologías' },
    work: [
      {
        context: 'Disney · Appetize POS',
        title: 'Los parques abrían con los precios de ayer',
        body: 'Una sincronización nocturna de 1,5 millones de registros terminaba en la mañana. La dividí en procesos paralelos y paginados orquestados con Airflow, y bajé el tiempo de 12 horas a 3.',
        extraTags: ['ETL a escala'],
      },
      {
        context: 'Health Recovery Solutions',
        title: 'Cada ingeniero usaba la IA a su manera',
        body: 'Diseñé un flujo de trabajo con IA de 18 pasos y acompañé a un equipo de 6 en su adopción. La velocidad de entrega subió 50% y toda la empresa lo adoptó.',
        extraTags: ['Habilitación de equipos'],
      },
      {
        context: 'CRM de cumplimiento · 124 empresas',
        title: 'Una herramienta de cumplimiento que no era segura',
        body: 'Reescribí un sistema legacy en PHP 5 como una API en Laravel y una app en Vue, migrando módulo por módulo con el patrón Strangler Fig. Los clientes nunca tuvieron caídas.',
        extraTags: ['Migración de legacy'],
      },
      {
        context: 'Travelia · En curso',
        badge: 'prueba de concepto',
        title: 'IA que suma valor, no solo una caja de chat',
        body: 'Diseñé y prototipé funciones de IA integradas al núcleo del producto, para que la suscripción actual valga más y atraiga nuevos clientes.',
        extraTags: ['Visión de producto'],
      },
    ],
    how: {
      prompt: '¿cómo trabajas con IA?',
      title: 'La IA hace el trabajo pesado. Yo tomo cada decisión.',
      lead: 'El mismo flujo que aceleró a mi equipo un 50%, resumido. Reviso y apruebo cada paso, y nada sale a producción sin que yo lo entienda.',
    },
    workflow: [
      { title: 'Entender', body: 'Leer el ticket y su contexto directo desde Jira' },
      { title: 'Planear', body: 'Acordar el enfoque antes de escribir código' },
      { title: 'Tests primero', body: 'Yo defino el comportamiento; el código tiene que cumplirlo' },
      { title: 'Construir', body: 'Claude Code hace el borrador, yo guío las decisiones de diseño' },
      { title: 'Verificar', body: 'Suite completa, Playwright, análisis estático y revisión línea por línea' },
      { title: 'Entregar', body: 'Documentación y un PR claro, listo para el equipo' },
    ],
    projectsSection: {
      prompt: 'ls ~/proyectos-personales',
      title: 'Lo que construyo para mí',
      lead: 'Proyectos personales donde llevo ideas de principio a fin, desde el primer commit hasta el uso diario.',
      openRepo: 'Ver en GitHub',
      privateLabel: 'repo privado',
    },
    projects: [
      {
        tagline: 'Bóveda de fotos, videos y archivos con cifrado de extremo a extremo, alojada por ti',
        body: 'Una bóveda autoalojada donde el servidor solo guarda datos cifrados: nunca ve archivos, nombres, etiquetas, fechas ni ubicaciones. Se desbloquea con una passkey (WebAuthn PRF), reproduce video HLS cifrado que se descifra en el navegador, y la uso a diario en un pequeño NAS en casa.',
      },
    ],
    beyond: {
      prompt: '¿qué te mueve?',
      title: 'La tecnología vale la pena cuando ayuda a alguien.',
      lead: 'Por eso me apasiona la IA: puede devolverle a la gente horas de su vida. También soy emprendedor y DJ. Cuando no estoy construyendo, estoy viajando, en la costa Caribe colombiana, en un sendero o volando un dron, y en casa casi siempre tengo un control de PlayStation en las manos.',
    },
    interests: [
      { title: 'Drones', caption: 'Ver el sistema completo desde arriba' },
      { title: 'La playa', caption: 'Donde descanso y pienso con claridad' },
      { title: 'Trekking', caption: 'Senderos largos, un paso a la vez' },
      { title: 'El gym', caption: 'La constancia le gana a la intensidad' },
      {
        title: 'Videojuegos',
        caption: 'Fan de PlayStation. Horizon, Spider-Man: Miles Morales y Assassin\'s Creed a la cabeza; Pokémon y Mario de corazón',
      },
      { title: 'Música', caption: 'DJ detrás de los controles, leyendo al público' },
      { title: 'Viajes', caption: 'Nuevos lugares, nuevas personas, nuevas perspectivas' },
      { title: 'Emprendimiento', caption: 'Convertir ideas en negocios que sirven a personas reales' },
    ],
    contact: {
      prompt: '¿cómo podemos trabajar juntos?',
      title: '¿Tienes un problema que valga la pena resolver? Hablemos.',
      body: 'Disponible para roles senior remotos en PHP/Laravel, Vue y desarrollo asistido con IA, en horario del este de EE. UU.',
    },
    footer: 'Hecho con Vue, con una IA de compañera',
  },
}
