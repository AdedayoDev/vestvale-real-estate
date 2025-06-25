'use client';

import { useRef } from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import PropertiesSection from '@/components/Properties';
import HomeDecorSection from '@/components/Furnishing';
import OurStory from '@/components/OurStory';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from "@/components/Contact"
import FooterSection from '@/components/FooterSection';
import NewsletterSection from '@/components/NewsletterSection';
import HomeDecor from '@/components/HomeDecor';
import Services from '@/components/Services';


export default function HomePage() {
  const sections = {
    navbar: useRef<HTMLElement>(null),
    hero: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    products: useRef<HTMLElement>(null),
    homedecor: useRef<HTMLElement>(null),
    services: useRef<HTMLElement>(null),
    testimonials: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
    properties: useRef<HTMLElement>(null),
    service: useRef<HTMLElement>(null),
    // Add this if "interior-decor" is a valid SectionKey in Navbar.tsx
    "interior-decor": useRef<HTMLElement>(null)
  };

  const scrollToSection = (key: keyof typeof sections) => {
    sections[key].current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className='bg-[#17120F]'>
      <Navbar  onNavClick={scrollToSection} />
      <Hero ref={sections.hero} />
      <OurStory ref={sections.about} />
      <PropertiesSection ref={sections.properties} />
      <HomeDecor ref={sections.homedecor} />  
      <Services ref={sections.service}/>
      {/* <HomeDecorSection ref={sections.products} /> */}
      <TestimonialsSection ref={sections.testimonials} /> 
      <NewsletterSection ref={sections.services} />
      <ContactSection ref={sections.contact}   /> 
      <FooterSection />
      {/* Add FooterSection if you have one, or remove this line if not */}
      
    </main>
  );
}
