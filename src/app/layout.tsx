import type { Metadata } from 'next';
import { personal } from '@/data/portfolioData';
import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';

const siteUrl = 'https://christiantesiswianto.dev';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${personal.name} | ${personal.title}`,
    template: `%s | ${personal.name}`,
  },
  description: `${personal.name} — ${personal.title} specializing in Golang, Next.js, PostgreSQL, and MySQL. Building reliable and modern digital solutions.`,
  keywords: [
    personal.name,
    'Full-Stack Developer',
    'Golang Developer',
    'Next.js Developer',
    'React Developer',
    'TypeScript',
    'PostgreSQL',
    'MySQL',
    'Backend Developer',
    'Web Developer',
  ],
  authors: [{ name: personal.name }],
  creator: personal.name,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: `${personal.name} | ${personal.title}`,
    description: `${personal.name} — ${personal.title} specializing in Golang, Next.js, PostgreSQL, and MySQL. Building reliable and modern digital solutions.`,
    siteName: personal.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personal.name} | ${personal.title}`,
    description: `${personal.name} — ${personal.title} specializing in Golang, Next.js, PostgreSQL, and MySQL.`,
    creator: '@christiantesiswianto',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personal.name,
    jobTitle: personal.title,
    description: personal.description,
    url: siteUrl,
    email: personal.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: personal.location,
    },
    knowsAbout: [
      'Golang',
      'Next.js',
      'React',
      'TypeScript',
      'PostgreSQL',
      'MySQL',
      'Backend Development',
      'Web Development',
      'API Development',
      'Database Design',
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="bg-zinc-950 text-zinc-100 antialiased">
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-zinc-100 focus:text-zinc-900 focus:rounded-lg"
        >
          Skip to main content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
