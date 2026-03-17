import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiBox, FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import MobileMenu from '../components/ui/MobileMenu';
import { usePortfolioData } from '../hooks/usePortfolioData';
import ActionButton from '../components/ui/ActionButton';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const headerOffset = 90;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { links } = usePortfolioData();
  const lastYPos = useRef(0);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      // Default to light mode as requested by user
      return false;
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const handleScroll = useCallback(() => {
    const yPos = window.scrollY;
    const isScrollingUp = yPos < lastYPos.current;
    setIsScrolled(yPos > 10);
    if (window.innerWidth < 768) {
      setIsHidden(yPos > 100 && !isScrollingUp);
    } else {
      setIsHidden(false);
    }
    lastYPos.current = yPos;
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // --- THIS IS THE FIX ---
  // This effect adds/removes a style to the body to prevent background scrolling when the menu is open.
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function to restore scrolling when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]); // This effect runs every time 'isMenuOpen' changes


  const navLinks = [
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'journey', label: 'Journey' },
  ];

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: isHidden ? "-110%" : 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 40 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-shadow transition-colors duration-300  ${isScrolled ? 'bg-white/80 dark:bg-slate-950/80 shadow-md backdrop-blur-lg' : 'bg-slate-100/70 dark:bg-transparent'}`}
      >
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2" aria-label="Homepage">
            <FiBox className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-slate-800 dark:text-white">MyMind</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <button key={link.id} onClick={() => scrollToSection(link.id)} className="font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{link.label}</button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)} 
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            <div className="hidden md:block">
              <ActionButton href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                Contact Me
              </ActionButton>
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-slate-800 dark:text-slate-200 z-50" aria-label="Toggle menu">
              {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </nav>
      </motion.header>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} scrollToSection={scrollToSection} links={links} />
    </>
  );
}