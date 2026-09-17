export const en = {
  nav: {
    work: 'Work',
    about: 'About',
    experience: 'Experience',
    contact: 'Contact',
    getInTouch: 'Get in touch',
  },
  hero: {
    eyebrow: 'Software engineer',
    desc: 'I like building things all the way through, from the app someone clicks on to the systems doing the work behind it. Right now I lead a small team at Alievs Space.',
    viewWork: 'View work',
  },
  about: {
    label: 'About',
    h1: 'I build websites, internal systems,',
    h2: 'ERP and CRM systems,',
    h3: 'plus mobile and desktop apps.',
    paragraph:
      "For the last few years I've been building all kinds of software: websites, internal tools, ERP and CRM systems, and mobile and desktop apps. Mostly in Python, TypeScript, Java and Go, and I drop down to Rust or C when the work needs to get closer to the metal. On the side I run Ufazien, my own hosting and student platform, and I built my own programming language, Raven. I'm also studying Computer Science at UFAZ.",
  },
  work: {
    h1: 'Some things I built.',
    h2: "Projects and tools I've shipped.",
  },
  raven: {
    eyebrow: 'A project of my own',
    heading: 'My own programming language',
    desc: 'A programming language I built from scratch in Rust, because nothing out there had the mix I was after: the speed of C++, the safety of Rust, but code you can still read. Then I kept going and built the whole ecosystem around it: a coding agent (rook), a GUI toolkit (quill), a terminal UI framework (plumage), a package manager (rvpm), and database clients written in Raven itself.',
    visit: 'Visit Raven',
    source: 'GitHub',
  },
  projects: {
    ufazien:
      'My biggest project. It started as a student platform and kept growing: GPA tools, free hosting, blogs, AI study help, communities. Most of my other work lives under this brand.',
    redcell:
      'A red team platform where LLM agents run the whole pentest inside a Kali container and write the report at the end. You watch it live, steer it from chat, and take the terminal or the browser back whenever you want.',
    lumnicode:
      'An AI coding assistant that writes and suggests code while you build, so you move faster. It holds up with a full team in the same project, not just one person.',
    orgmem:
      'A team wiki that people and AI agents both write to. It sits in your meetings, puts a name on every line, and answers questions about what the team already decided.',
    devlane:
      'An open-source take on Jira and Linear for tasks, sprints, docs, and triage. I built it because the tools we were using always felt heavier than the work itself.',
    alievsLms:
      'A learning platform for teaching businesses: groups, schedule, attendance, homework, exams, live classes in the browser, and billing. Owners, teachers and students all work off the same data.',
    rook:
      'A coding agent that lives in your terminal, written in Raven. It reads and edits your files, runs commands once you approve them, and talks to whichever model you point it at.',
    epointSandbox:
      'A local copy of the epoint.az payment gateway, so you can build and test an integration without a merchant account. One container gives you the API, the checkout page, callbacks, and a dashboard.',
    cleat:
      'Security, maintenance, and auditing for your GitHub accounts and organizations. It catches the risky settings and stale access you would otherwise miss.',
    chatops:
      'One dashboard for all your servers: live metrics, Docker controls, alerts, and a terminal, so you stop hopping between five different tools.',
    sempublishing:
      'The site for SEM Publishing House: a catalogue of books and authors, open access titles anyone can download free, and a shop on top. I built the API, the public site, and the staff dashboard.',
    quantadb:
      'A database management system I built to stay fast and steady once you actually put it under real load.',
    rustfuzz:
      'A web fuzzer I wrote in Rust to hammer on sites and shake out the strange edge-case bugs.',
    epointPython:
      'A Python client for epoint.az covering all 30 endpoints, sync and async, typed throughout. It handles the signing and the callback checks, which is where most integrations go wrong.',
    payriff:
      'A Python client for the Payriff payment gateway. Sync and async, typed all the way through, and httpx is the only thing it pulls in.',
    onesms:
      'A Python client for the 1sms.az SMS API. It sends OTP and notifications, retries failed requests on its own, and verifies webhook signatures, with an async version of everything.',
  },
  experience: {
    h1: 'The road so far.',
    h2: "Jobs, some freelancing, and the university I'm studying at.",
    education: 'Education',
    items: [
      {
        period: '2026 – Now',
        role: 'AI Engineer',
        company: 'Apercura',
        desc: 'I work with LLMs, building the agents, harnesses and pipelines around them and optimizing them with tools like DSPy and GEPA. The rest of the time I research RL data and RL environments, and build OrgMem end to end.',
      },
      {
        period: '2025 – Now',
        role: 'Head of Development',
        company: 'Alievs Space',
        desc: 'Running the dev teams across a few projects at once.',
      },
      {
        period: '2025',
        role: 'Python Developer',
        company: 'SEM Publishing House',
        desc: 'Built their online bookstore from scratch with Django, PostgreSQL, Docker, and Nginx.',
      },
      {
        period: '2024 – 2025',
        role: 'Software Developer',
        company: 'Neuron Technologies',
        desc: 'Worked on enterprise software, mostly keeping things reliable and quick.',
      },
      {
        period: '2023 – 2025',
        role: 'Bug Bounty Hunter',
        company: 'HackerOne',
        desc: 'Found security holes and reported them the right way, using OWASP practices and a lot of network digging.',
      },
      {
        period: '2022 – 2023',
        role: 'Full-stack Developer',
        company: 'Freelancer.com',
        desc: 'Built full-stack apps for clients with React, Django or Flask, and PostgreSQL, plus a fair bit of third-party API work.',
      },
    ],
    edu: [
      {
        period: '2023 – 2027',
        role: 'BSc, Computer Science',
        company: 'French-Azerbaijani University (UFAZ)',
        desc: 'Software engineering fundamentals, C programming, and a lot of group work.',
      },
    ],
  },
  skills: {
    h1: 'Technologies I use.',
    groups: {
      languages: 'Languages',
      frontend: 'Frontend',
      backend: 'Backend',
      databases: 'Databases',
      cloud: 'Cloud',
      devops: 'DevOps',
      security: 'Security',
      systems: 'Systems & Compilers',
    },
  },
  contact: {
    label: 'Contact',
    h1: 'Got something in mind?',
    h2: "Let's build it.",
    whatsapp: 'Hi Fuad! I came across your portfolio and wanted to get in touch.',
    socials: { github: 'GitHub', website: 'Website', email: 'Email' },
    footer: '© {{year}} Fuad Alizada',
  },
}

export type Resources = typeof en
