import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { TechnologyCard } from '@/components/TechnologyCard';
import { SkillCard } from '@/components/SkillCard';
import { Projects } from '@/components/Projects';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import { Philosophy } from '@/components/Philosophy';
import { ServiceCard } from '@/components/ServiceCard';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <TechnologyCard />
      <SkillCard />
      <Projects />
      <ExperienceTimeline />
      <Philosophy />
      <ServiceCard />
      <Contact />
      <Footer />
    </main>
  );
}
