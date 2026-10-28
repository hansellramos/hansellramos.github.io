// All public page content lives here, so updating the site means editing data, not markup.
// Later this can be replaced by the public rows from Supabase.

export const profile = {
  handle: 'hansellramos',
  name: 'Hansel Ramos',
  role: 'Senior Software Engineer',
  headline: 'I build software that gives people back their time.',
  intro:
    'Senior Software Engineer with 18+ years turning slow, manual processes into tools people actually enjoy using. PHP/Laravel and Vue at the core, and AI woven into how I design, build and ship.',
  location: 'Barranquilla, Colombia · UTC-5 · Remote',
  email: 'hansell.ramos@gmail.com',
  links: {
    linkedin: 'https://linkedin.com/in/hansellramos',
    github: 'https://github.com/hansellramos',
  },
  cvUrl: '', // set to '/cv/Hansel-Ramos-CV.pdf' once a public CV (no phone number) is added
  photo: '/images/hansel.webp',
  status: [
    { key: 'building', value: 'AI features that go beyond chat' },
    { key: 'studying', value: 'MSc in Artificial Intelligence · UNIR' },
    { key: 'offline', value: 'trails, the gym, drones, PlayStation' },
    { key: 'open to', value: 'senior remote roles · US hours', highlight: true },
  ],
}

export const impact = [
  { value: '12h → 3h', label: "Nightly product sync for Disney's POS, so stores opened up to date" },
  { value: '+50%', label: 'Team delivery speed with the AI-assisted workflow I designed' },
  { value: '124', label: 'US small businesses moved to a secure CRM with zero downtime' },
  { value: '18+ yrs', label: 'Shipping for Disney, Johnson & Johnson, Universal Studios and more' },
]

export const work = [
  {
    context: 'Disney · Appetize POS',
    title: "Parks were opening with yesterday's prices",
    body: 'A 1.5M-record nightly sync ran into the morning. I split it into parallel, paginated jobs orchestrated with Airflow, cutting runtime from 12 hours to 3.',
    tags: ['PHP', 'Airflow', 'ETL at scale'],
  },
  {
    context: 'Health Recovery Solutions',
    title: 'Every engineer used AI differently',
    body: 'I designed an 18-step AI-assisted workflow and coached a team of 6 through it. Delivery speed rose 50%, and the whole company adopted it.',
    tags: ['Claude Code', 'MCP', 'Team enablement'],
  },
  {
    context: 'Compliance CRM · 124 businesses',
    title: "A compliance tool that wasn't secure",
    body: 'I rewrote a legacy PHP 5 system into a Laravel API and Vue app, migrating module by module with the Strangler Fig pattern. Clients never saw downtime.',
    tags: ['Laravel', 'Vue', 'Legacy migration'],
  },
  {
    context: 'Travelia · In progress',
    badge: 'proof of concept',
    title: 'AI that adds value, not just a chat box',
    body: 'I designed and prototyped AI features woven into the core product, to make the current subscription worth more and win new customers.',
    tags: ['Product thinking', 'LLMs', 'Laravel + Vue'],
  },
]

export const workflow = [
  { title: 'Understand', body: 'Read the ticket and its context straight from Jira' },
  { title: 'Plan', body: 'Agree on an approach before any code exists' },
  { title: 'Tests first', body: 'I define the behavior; the code has to earn it' },
  { title: 'Build', body: 'Claude Code drafts, I steer the design choices' },
  { title: 'Verify', body: 'Full suite, Playwright, static analysis, line-by-line review' },
  { title: 'Ship', body: 'Docs and a clear PR, ready for the team' },
]

export const interests = [
  { title: 'Drones', caption: 'Seeing the whole system from above', placeholder: 'Drone shot', tint: '#cfe3df', photo: '/images/drone.webp' },
  { title: 'The beach', caption: 'Where I reset and think clearly', placeholder: 'Beach photo', tint: '#f1dcc3', photo: '/images/beach.webp' },
  { title: 'Trekking', caption: 'Long trails, one step at a time', placeholder: 'Trekking photo', tint: '#d6decb', photo: '/images/trekking.webp' },
  { title: 'The gym', caption: 'Consistency beats intensity', placeholder: 'Gym photo', tint: '#d9d4e4', photo: '/images/gym.webp' },
  {
    title: 'Gaming',
    caption: 'PlayStation fan. Horizon, Spider-Man: Miles Morales and Assassin\'s Creed on top; Pokémon and Mario at heart',
    placeholder: 'Gaming setup photo',
    tint: '#d3dcef',
    photo: '',
  },
  { title: 'Music', caption: 'DJ behind the decks, reading the room', placeholder: 'DJ photo', tint: '#ecd5dc', photo: '' },
  { title: 'Travel', caption: 'New places, new people, new perspectives', placeholder: 'Travel photo', tint: '#d5e6f1', photo: '/images/travel.webp' },
  {
    title: 'Entrepreneurship',
    caption: 'Turning ideas into businesses that serve real people',
    placeholder: 'Venture photo',
    tint: '#e6dfcc',
    photo: '',
  },
]
