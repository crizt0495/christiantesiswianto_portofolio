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
  tagline: 'Building Reliable Digital Solutions with Next.js & Modern Web Technologies.',
  description:
    'Software developer focused on building practical, reliable, and scalable digital solutions. I build modern full-stack web applications with Next.js and TypeScript, supported by strong database experience with PostgreSQL and MySQL.',
  email: 'christwnto@gmail.com',
  location: 'Indonesia',
  availability: 'Open to opportunities',
};

export const socials: Social = {
  linkedin: 'https://www.linkedin.com/in/christian-tesiswianto-453444171',
  whatsapp: 'https://wa.me/6281335884670',
};

export const technologies: Technology[] = [
  {
    name: 'Node.js',
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
];

export const skills: Skill[] = [
  { name: 'Node.js', category: 'backend', level: 'primary' },
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
    liveDemo: 'https://pos-app-alpha.vercel.app/',
    featured: true,
    image: '/projects/kasir.png',
  },
  {
    id: 'klinik-sehat',
    name: 'SIM Klinik',
    shortDescription: 'Sistem Informasi Manajemen Klinik — one unified system for the entire clinic: patients, schedules, medical records, pharmacy, and finance.',
    overview:
      'A web-based clinic information management system that unifies patient registration, queue management, medical records, pharmacy, and financial billing into a single, calm, and fast interface with role-based access.',
    problem:
      'Clinics often rely on separate, disconnected tools for patient data, appointments, pharmacy, and finance, causing fragmented records, slower service, and weak accountability.',
    solution:
      'Built an integrated clinic management platform with a unified clinical workflow, role-based access control, and audit trails for every action across admin, doctor, nurse, pharmacist, cashier, and laboratory roles.',
    keyFeatures: [
      'Integrated clinical workflow: registration, queue, medical records, pharmacy, to billing',
      'Role-based access control (admin, doctor, nurse, pharmacist, cashier, laboratory)',
      'Patient registration and appointment scheduling',
      'Electronic medical records (Rekam Medis) management',
      'Pharmacy and medication management',
      'Billing and financial transactions',
      'Audit trail for every action',
      'Clean, calm, and responsive interface',
    ],
    challenges:
      'Designing a unified system that serves multiple clinical roles without friction, while keeping patient data secure and ensuring every action remains auditable and traceable.',
    results:
      'Delivered a production-ready clinic management system that replaces disconnected manual processes with a fast, integrated workflow for the entire clinic.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'REST API'],
    liveDemo: 'https://klinik-rho.vercel.app/',
    featured: true,
    image: '/projects/klinik.png',
  },
  {
    id: 'rms-resto',
    name: 'RMS RestoManager',
    shortDescription: 'Restaurant management system (Sistem Manajemen Restoran) for managing menus, orders, and daily operations — with live demo access.',
    overview:
      'A web-based restaurant management system (RMS v2) that centralizes menu management, order handling, and table-based operations into a single dashboard for restaurant staff.',
    problem:
      'Restaurants struggle to coordinate menus, orders, and table service, often relying on paper notes or fragmented tools that slow down staff and lead to errors.',
    solution:
      'Developed a restaurant management platform that centralizes menu, order, and table operations, giving staff a single, fast dashboard to run daily operations.',
    keyFeatures: [
      'Menu and menu category management',
      'Order management with table tracking',
      'Restaurant operations dashboard',
      'Secure staff login with role-based access',
      'Live demo access with admin credentials',
    ],
    challenges:
      'Building a system that keeps menus, orders, and table operations synchronized so staff can serve customers quickly without confusion or duplicated effort.',
    results:
      'Delivered a restaurant management system with an interactive live demo, letting owners explore the full workflow with a simple admin login.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'REST API'],
    liveDemo: 'https://restaurant-ten-lemon.vercel.app/',
    featured: true,
    image: '/projects/rms.png',
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
      'Building scalable full-stack applications with Next.js',
      'Developing modern web applications with Next.js',
      'Designing and implementing database architectures',
      'Creating RESTful APIs and integration services',
      'Focusing on code quality and system reliability',
    ],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'MySQL', 'TypeScript'],
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
    description: 'Fast and maintainable backend systems using Node.js.',
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
