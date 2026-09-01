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
    id: 'digital-archive',
    name: 'Digital Archive Management System',
    shortDescription: 'A modern information system designed to manage, organize, and retrieve digital records efficiently.',
    overview:
      'A comprehensive digital archive management system built to handle large volumes of digital records with efficient indexing, search, and retrieval capabilities.',
    problem:
      'Organizations face challenges in managing growing volumes of digital records, making it difficult to organize, search, and retrieve documents efficiently.',
    solution:
      'Built a modern web-based system with robust backend architecture that enables efficient document management, advanced search functionality, and secure access control.',
    keyFeatures: [
      'Advanced document indexing and search',
      'Secure user authentication and access control',
      'Document upload, categorization, and tagging',
      'Full-text search capabilities',
      'Audit trail and activity logging',
      'Export and reporting features',
    ],
    challenges:
      'Designing a scalable system that can handle large file uploads while maintaining fast search performance and ensuring data security.',
    results:
      'Delivered a reliable system that significantly improved document retrieval time and reduced manual workload for archive management teams.',
    technologies: ['Golang', 'Next.js', 'PostgreSQL'],
    github: 'https://github.com/christiantesiswianto/digital-archive',
    liveDemo: 'https://archive-demo.example.com',
    featured: true,
    image: '/projects/archive.jpg',
  },
  {
    id: 'business-management',
    name: 'Business Management System',
    shortDescription:
      'Web-based business application focused on operational management, transactions, reporting, and data management.',
    overview:
      'A comprehensive business management system designed to streamline operational workflows, manage transactions, and provide real-time business insights.',
    problem:
      'Small to medium businesses struggle with disconnected systems for managing inventory, transactions, and reporting, leading to inefficiencies and data inconsistencies.',
    solution:
      'Developed an integrated web application that consolidates business operations into a single platform with real-time data synchronization and comprehensive reporting.',
    keyFeatures: [
      'Inventory management with real-time tracking',
      'Transaction processing and recording',
      'Comprehensive reporting and analytics',
      'Customer and supplier management',
      'Financial overview and tracking',
      'Role-based access control',
    ],
    challenges:
      'Creating a unified system that is both powerful enough for complex business logic while remaining intuitive and easy to use for non-technical staff.',
    results:
      'Implemented a system that improved operational efficiency and provided business owners with clear visibility into their operations.',
    technologies: ['Golang', 'Next.js', 'MySQL'],
    github: 'https://github.com/christiantesiswianto/business-management',
    featured: true,
    image: '/projects/business.jpg',
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
