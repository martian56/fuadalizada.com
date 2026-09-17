const IK = 'https://ik.imagekit.io/ufazien/portfolio'

export const raven = {
  title: 'Raven',
  stars: 35,
  tags: ['Rust', 'Compiler', 'Lexer / Parser', 'Type Checking', 'Language Design'],
  live: 'https://raven.ufazien.com',
  github: 'https://github.com/martian56/raven',
  img: `${IK}/raven-repo-image.png?updatedAt=1783859120087`,
}

export interface Project {
  id: string
  title: string
  tags: string[]
  live?: string
  github?: string
  img: string
}

export const projects: Project[] = [
  {
    id: 'ufazien',
    title: 'Ufazien',
    tags: ['React 19', 'Django', 'AWS', 'PostgreSQL'],
    live: 'https://ufazien.com',
    github: 'https://github.com/martian56/ufazien',
    img: `${IK}/Screenshot%202025-09-07%20162309.png?updatedAt=1762684351209`,
  },
  {
    id: 'redcell',
    title: 'REDCELL',
    tags: ['AI Agents', 'Security', 'LangGraph', 'FastAPI'],
    github: 'https://github.com/martian56/redcell',
    img: '/projects/redcell.webp',
  },
  {
    id: 'lumnicode',
    title: 'LumniCode',
    tags: ['AI', 'React', 'FastAPI'],
    live: 'https://lumnicode.ufazien.com',
    github: 'https://github.com/martian56/lumnicode',
    img: `${IK}/lumnicode-portfolio.png?updatedAt=1759013527172`,
  },
  {
    id: 'orgmem',
    title: 'OrgMem',
    tags: ['AI', 'FastAPI', 'React', 'LiveKit'],
    live: 'https://orgmem.ai',
    img: '/projects/orgmem.webp',
  },
  {
    id: 'devlane',
    title: 'Devlane',
    tags: ['TypeScript', 'SaaS', 'Project Mgmt'],
    live: 'https://devlane.dev',
    github: 'https://github.com/Devlaner/devlane',
    img: `${IK}/Screenshot%202026-04-04%20132120.png?updatedAt=1775294999547`,
  },
  {
    id: 'alievsLms',
    title: 'Alievs Space LMS',
    tags: ['Go', 'React', 'LiveKit', 'PostgreSQL'],
    live: 'https://lms.alievsspace.com',
    img: '/projects/alievs-lms.webp',
  },
  {
    id: 'rook',
    title: 'rook',
    tags: ['Raven', 'AI', 'Terminal', 'LLM'],
    github: 'https://github.com/martian56/rook',
    img: '/projects/rook.webp',
  },
  {
    id: 'epointSandbox',
    title: 'Epoint Sandbox',
    tags: ['Python', 'FastAPI', 'Payments', 'Docker'],
    github: 'https://github.com/martian56/epoint-sandbox',
    img: '/projects/epoint-sandbox.webp',
  },
  {
    id: 'cleat',
    title: 'Cleat',
    tags: ['Security', 'GitHub', 'Audit'],
    live: 'https://cleat.ufazien.com',
    github: 'https://github.com/Devlaner/cleat',
    img: `${IK}/cleat-image.png`,
  },
  {
    id: 'chatops',
    title: 'ChatOps',
    tags: ['Web', 'Docker', 'DevOps'],
    live: 'https://chatops.ufazien.com',
    github: 'https://github.com/martian56/chatops',
    img: `${IK}/chatops-home.png`,
  },
  {
    id: 'sempublishing',
    title: 'SEM Publishing',
    tags: ['React', 'FastAPI', 'PostgreSQL', 'Publishing'],
    live: 'https://sempublishing.az',
    img: '/projects/sempublishing.webp',
  },
  {
    id: 'quantadb',
    title: 'Quantadb',
    tags: ['Databases', 'Systems'],
    live: 'https://quantadb.ufazien.com',
    github: 'https://github.com/martian56/quantadb',
    img: `${IK}/quantadb-portfolio-image.png?updatedAt=1759252467389`,
  },
  {
    id: 'rustfuzz',
    title: 'RustFuzz',
    tags: ['Rust', 'Security', 'Fuzzing'],
    live: 'https://rustfuzz.ufazien.com',
    github: 'https://github.com/martian56/rustfuzz',
    img: `${IK}/rustfuzz-demo.png?updatedAt=1759005852062`,
  },
  {
    id: 'epointPython',
    title: 'epoint',
    tags: ['Python', 'SDK', 'Payments'],
    live: 'https://pypi.org/project/epoint/',
    github: 'https://github.com/martian56/epoint-python',
    img: '/projects/epoint-python.webp',
  },
  {
    id: 'payriff',
    title: 'payriff',
    tags: ['Python', 'SDK', 'Payments'],
    live: 'https://pypi.org/project/payriff/',
    github: 'https://github.com/martian56/payriff',
    img: '/projects/payriff.webp',
  },
  {
    id: 'onesms',
    title: 'onesms',
    tags: ['Python', 'SDK', 'SMS'],
    live: 'https://martian56.github.io/onesms-sdk/',
    github: 'https://github.com/martian56/onesms-sdk',
    img: '/projects/onesms.webp',
  },
]

export interface Role {
  period: string
  role: string
  company: string
  desc: string
}

export interface SkillGroup {
  id: string
  items: string[]
}

export const skills: SkillGroup[] = [
  { id: 'languages', items: ['Python', 'Rust', 'C', 'C++', 'Java', 'JavaScript', 'TypeScript', 'Go', 'PHP', 'Bash', 'Assembly'] },
  { id: 'frontend', items: ['React', 'Next.js', 'Vue.js', 'Svelte', 'Tailwind CSS', 'Bootstrap', 'Vite', 'GSAP', 'HTML5'] },
  { id: 'backend', items: ['Django', 'Django REST', 'Flask', 'FastAPI', 'Node.js', 'Express', 'Next.js', 'Gin', 'Echo', 'Spring Boot'] },
  { id: 'databases', items: ['PostgreSQL', 'MySQL', 'MariaDB', 'SQL Server', 'SQLite', 'MongoDB', 'Cassandra', 'Redis', 'Elasticsearch', 'DynamoDB', 'Firebase', 'Kafka', 'RabbitMQ'] },
  { id: 'cloud', items: ['AWS', 'Azure', 'Google Cloud', 'Vercel', 'EC2', 'Lambda', 'RDS', 'IAM'] },
  { id: 'devops', items: ['Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Nginx', 'Traefik', 'GitHub Actions', 'Jenkins', 'Prometheus', 'Grafana'] },
  { id: 'security', items: ['OWASP', 'Penetration Testing', 'Reverse Engineering', 'Bug Bounty', 'Exploit Dev', 'Network Security', 'Wireshark'] },
  { id: 'systems', items: ['Compilers', 'Lexer', 'Parser', 'AST', 'Type Checking', 'Algorithm Design'] },
]

export const EMAIL = 'fuadelizade6@gmail.com'
export const PHONE = '+994 50 875 27 44'
export const PHONE_TEL = '+994508752744'
export const WHATSAPP = 'https://wa.me/994508752744'
export const GITHUB = 'https://github.com/martian56'
