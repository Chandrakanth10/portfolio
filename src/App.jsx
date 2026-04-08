import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Section from './components/Section';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Research from './components/Research';
import PeerReviews from './components/PeerReviews';
import Media from './components/Media';
import Writing from './components/Writing';
import Skills from './components/Skills';
import Footer from './components/Footer';

const navLinks = [
  { id: 'hero', label: 'About' },
  { id: 'work', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'research', label: 'Research' },
  { id: 'reviews', label: 'Peer Reviews' },
  { id: 'media', label: 'Media' },
  { id: 'writing', label: 'Writing' },
  { id: 'skills', label: 'Skills' },
];

const Divider = () => <div className="w-full h-px bg-[var(--color-border-subtle)] mb-12" />;

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';

    const handleScroll = () => {
      const scrollPosition = window.scrollY + (window.innerWidth < 768 ? 130 : 100);

      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        setActiveSection(navLinks[navLinks.length - 1].id);
        return;
      }

      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top + window.scrollY;
          const sectionHeight = rect.height;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = window.innerWidth < 768 ? 110 : 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen text-[var(--color-text-primary)] font-sans selection:bg-[var(--color-brand-green)] selection:text-black">
      <Navbar navLinks={navLinks} activeSection={activeSection} onNavClick={handleNavClick} />

      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-28 md:pt-32 pb-12 md:flex md:gap-12 relative">
        <Sidebar navLinks={navLinks} activeSection={activeSection} onNavClick={handleNavClick} />

        <main className="flex-1 md:pl-64">
          <Hero />
          <Divider />
          <Section><Experience /></Section>
          <Divider />
          <Section><Education /></Section>
          <Divider />
          <Section><Research /></Section>
          <Divider />
          <Section><PeerReviews /></Section>
          <Divider />
          <Section><Media /></Section>
          <Divider />
          <Section><Writing /></Section>
          <Divider />
          <Section><Skills /></Section>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default App;
