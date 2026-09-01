export interface Personal {
  name: string;
  title: string;
  tagline: string;
  description: string;
  email: string;
  location: string;
  availability: string;
}

export interface Social {
  github: string;
  linkedin: string;
  whatsapp?: string;
}

export interface Technology {
  name: string;
  category: 'backend' | 'frontend' | 'database' | 'tools';
  description: string;
  icon?: string;
}

export interface Skill {
  name: string;
  category: 'backend' | 'frontend' | 'database' | 'development';
  level: 'primary' | 'strong' | 'working';
}

export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  overview: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  challenges: string;
  results: string;
  technologies: string[];
  github?: string;
  liveDemo?: string;
  caseStudy?: string;
  image: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  position: string;
  organization: string;
  period: string;
  current: boolean;
  responsibilities: string[];
  technologies: string[];
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Philosophy {
  number: string;
  title: string;
  description: string;
}

export const personal: Personal = {
  name: 'Christian Tesiswianto',
  title: 'Full-Stack Developer',
  tagline: 'Building Reliable Digital Solutions with Go & Modern Web Technologies.',
  description:
    'Software developer focused on building practical, reliable, and scalable digital solutions. I work primarily with Golang for backend development and Next.js for modern web applications, supported by strong database experience with PostgreSQL and MySQL.',
  email: 'christian.tesiswianto@email.com',
  location: 'Indonesia',
  availability: 'Open to opportunities',
};

export const socials: Social = {
  github: 'https://github.com/christiantesiswianto',
  linkedin: 'https://linkedin.com/in/christiantesiswianto',
  whatsapp: 'https://wa.me/6281234567890',
};

export const technologies: Technology[] = [
  {
    name: 'Golang',
    category: 'backend',
    description: 'Building fast, reliable, and maintainable backend services and REST APIs.',
  },
  {
    name: 'Next.js',
    category: 'frontend',
    description: 'Building modern, SEO-friendly, and performant web applications.',
  },
  {
    name: 'React',
    category: 'frontend',
    description: 'Creating interactive and dynamic user interfaces.',
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    description: 'Writing type-safe and maintainable code.',
  },
  {
    name: 'PostgreSQL',
    category: 'database',
    description: 'Designing robust relational database systems.',
  },
  {
    name: 'MySQL',
    category: 'database',
    description: 'Building scalable and reliable data storage solutions.',
  },
  {
    name: 'Git',
    category: 'tools',
    description: 'Version control and collaborative development.',
  },
  {
    name: 'GitHub',
    category: 'tools',
    description: 'Code hosting and open source collaboration.',
  },
];

export const skills: Skill[] = [
  { name: 'Golang', category: 'backend', level: 'primary' },
  { name: 'REST API', category: 'backend', level: 'primary' },
  { name: 'Authentication', category: 'backend', level: 'strong' },
  { name: 'Authorization', category: 'backend', level: 'strong' },
  { name: 'API Architecture', category: 'backend', level: 'strong' },
  { name: 'Backend Architecture', category: 'backend', level: 'strong' },
  { name: 'Next.js', category: 'frontend', level: 'primary' },
  { name: 'React', category: 'frontend', level: 'primary' },
  { name: 'TypeScript', category: 'frontend', level: 'strong' },
  { name: 'Responsive Web Design', category: 'frontend', level: 'strong' },
  { name: 'UI/UX Implementation', category: 'frontend', level: 'working' },
  { name: 'PostgreSQL', category: 'database', level: 'primary' },
  { name: 'MySQL', category: 'database', level: 'primary' },
  { name: 'Database Design', category: 'database', level: 'primary' },
  { name: 'Query Optimization', category: 'database', level: 'strong' },
  { name: 'Relational Database', category: 'database', level: 'primary' },
  { name: 'Git', category: 'development', level: 'primary' },
  { name: 'GitHub', category: 'development', level: 'primary' },
  { name: 'Docker', category: 'development', level: 'working' },
  { name: 'API Integration', category: 'development', level: 'strong' },
  { name: 'System Architecture', category: 'development', level: 'strong' },
];

export const projects: Project[] = [
  {
    id: 'kasir-pos',
    name: 'POS Kasir',
    shortDescription: 'A complete, production-ready Point of Sale application with cashier workflow, inventory management, and real-time reporting.',
    overview:
      'A full-stack POS application designed for real business operations, featuring cashier workflow, barcode scanning, dynamic RBAC, profit tracking, customer profit sharing, and PWA support with push notifications.',
    problem:
      'Small to medium businesses need a reliable, secure, and efficient point-of-sale system that handles inventory, transactions, and reporting without relying on disconnected or expensive proprietary solutions.',
    solution:
      'Built a complete POS application with atomic database transactions, dynamic role-based access control, real-time profit tracking, and push notifications — all deployable as a PWA on mobile devices.',
    keyFeatures: [
      'Full POS cashier workflow with barcode scanning (USB & manual)',
      'Hold/resume transactions and multi-method checkout',
      'Dynamic RBAC permission system stored in the database',
      'Price snapshots at transaction time for accurate profit history',
      'Customer profit sharing (bagi hasil) calculations',
      'PWA with web push notifications and Telegram bot fallback',
      'Automatic inventory tracking and stock movements',
      'Cash management with session reconciliation',
      'Comprehensive reporting with CSV export',
      'Full audit trail for all actions',
      'Keyboard shortcuts for fast operation',
    ],
    challenges:
      'Ensuring atomic database transactions under concurrent sales, designing a flexible RBAC system that works on both frontend and backend, and handling edge cases like refunds, discounts, and cash discrepancies.',
    results:
      'Delivered a production-ready POS system that handles concurrent transactions safely, provides real-time business insights, and can be installed as a native-like app on mobile devices.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'Supabase PostgreSQL', 'Zustand', 'Zod', 'Recharts'],
    github: 'https://github.com/crizt0495/kasir_pos',
    featured: true,
    image: '/projects/kasir.jpg',
  },
  {
    id: 'simarc',
    name: 'SIMARC',
    shortDescription: 'Sistem Informasi Manajemen Arsip Record Center — a comprehensive archive management system with blockchain-based audit trail.',
    overview:
      'A web-based archive management information system for institutional record centers, supporting file transfers, destruction scheduling, lending tracking, and tamper-proof audit logs via blockchain integration.',
    problem:
      'Government and institutional record centers manage large volumes of physical and digital archives with manual, error-prone processes that lack transparency, accountability, and long-term retention control.',
    solution:
      'Developed a full-featured archive management system with automated destruction schedules, lending workflows, PDF report generation, and a blockchain-based audit trail to ensure tamper-proof accountability.',
    keyFeatures: [
      'Full archive lifecycle management (CRUD, filing, transfer, destruction)',
      'Archive lending with tracking and return workflows',
      'Blockchain-based audit trail for tamper-proof change records',
      'Automated destruction scheduling based on retention periods',
      'QR code generation for physical archive identification',
      'PDF report generation (Berita Acara) for official documentation',
      'Excel export for reporting',
      'Database backup with optional Google Drive OAuth integration',
      'Dynamic database switching from the web UI',
      'Recovery mode with graceful degradation',
      'PWA support for mobile access',
    ],
    challenges:
      'Building a Go application that handles file uploads, OCR, PDF generation, and blockchain integration while remaining deployable on serverless platforms like Vercel with embedded templates and static assets.',
    results:
      'Delivered a production system used by Bakesbangpol Kota Probolinggo, replacing manual archive processes with a reliable, auditable, and scalable digital solution.',
    technologies: ['Go', 'Gin', 'GORM', 'MySQL', 'HTML Templates', 'Tailwind CSS', 'PWA'],
    github: 'https://github.com/crizt0495/simarc-go',
    featured: true,
    image: '/projects/simarc.jpg',
  },
];

export const experiences: Experience[] = [
  {
    id: 'exp-001',
    position: 'Full-Stack Developer',
    organization: 'Available for opportunities',
    period: 'Present',
    current: true,
    responsibilities: [
      'Building scalable backend systems with Golang',
      'Developing modern web applications with Next.js',
      'Designing and implementing database architectures',
      'Creating RESTful APIs and integration services',
      'Focusing on code quality and system reliability',
    ],
    technologies: ['Golang', 'Next.js', 'PostgreSQL', 'MySQL', 'TypeScript'],
  },
];

export const services: Service[] = [
  {
    title: 'Web Application',
    description: 'Modern responsive web applications using Next.js and React.',
    icon: 'Globe',
  },
  {
    title: 'Backend API',
    description: 'Fast and maintainable backend systems using Golang.',
    icon: 'Server',
  },
  {
    title: 'Business Systems',
    description: 'Custom applications for operational and business processes.',
    icon: 'Briefcase',
  },
  {
    title: 'Database Systems',
    description: 'Database design and implementation using PostgreSQL and MySQL.',
    icon: 'Database',
  },
  {
    title: 'Full-Stack Application',
    description: 'End-to-end applications from frontend to backend and database.',
    icon: 'Layers',
  },
];

export const philosophies: Philosophy[] = [
  {
    number: '01',
    title: 'Simplicity',
    description: 'Build solutions that are easy to understand and maintain.',
  },
  {
    number: '02',
    title: 'Reliability',
    description: 'Focus on predictable, stable, and dependable systems.',
  },
  {
    number: '03',
    title: 'Scalability',
    description: 'Design systems that can grow with business requirements.',
  },
  {
    number: '04',
    title: 'User Focus',
    description: 'Technology should solve real problems, not create unnecessary complexity.',
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];
