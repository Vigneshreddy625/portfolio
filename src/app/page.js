"use client";
import { setupScrollObservers } from "@/utils/scrollObserver";
import { useEffect } from 'react';
import Home from '@/components/Home';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const sections = ['home', 'about', 'services', 'portfolio', 'contact'];

export default function Page() {
  useEffect(() => {
    const updateURL = (section) => {
      history.pushState(null, '', `#${section}`);
    };

    const cleanup = setupScrollObservers(sections, updateURL);

    return cleanup;
  }, []);

  return (
    <main>
      <Home id="home" />
      <About id="about" />
      <Projects id="portfolio" />
      <Contact id="contact" />
    </main>
  );
}
