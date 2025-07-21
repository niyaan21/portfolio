import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { Certifications } from '../components/Certifications';
import { Contact } from '../components/Contact';

export function HomePage() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}