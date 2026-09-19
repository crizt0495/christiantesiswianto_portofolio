'use client';

import dynamic from 'next/dynamic';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { LazySection } from '@/components/LazySection';

const TechnologyCard = dynamic(() =>
  import('@/components/TechnologyCard').then((m) => ({ default: m.TechnologyCard }))
);
const SkillCard = dynamic(() =>
  import('@/components/SkillCard').then((m) => ({ default: m.SkillCard }))
);
const ExperienceTimeline = dynamic(() =>
  import('@/components/ExperienceTimeline').then((m) => ({ default: m.ExperienceTimeline }))
);
const Philosophy = dynamic(() =>
  import('@/components/Philosophy').then((m) => ({ default: m.Philosophy }))
);
const ServiceCard = dynamic(() =>
  import('@/components/ServiceCard').then((m) => ({ default: m.ServiceCard }))
);

export function BelowFold() {
  return (
    <>
      <LazySection>
        <TechnologyCard />
      </LazySection>
      <LazySection>
        <SkillCard />
      </LazySection>
      <Projects />
      <LazySection>
        <ExperienceTimeline />
      </LazySection>
      <LazySection>
        <Philosophy />
      </LazySection>
      <LazySection>
        <ServiceCard />
      </LazySection>
      <Contact />
    </>
  );
}