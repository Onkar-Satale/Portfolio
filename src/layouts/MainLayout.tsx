import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../components/ui/ScrollToTop';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function MainLayout() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: -1000, y: -1000 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div className="relative bg-slate-50 dark:bg-black text-slate-800 dark:text-neutral-200 transition-colors duration-300 min-h-screen overflow-x-hidden">
      {/* Top Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Interactive Cursor Spotlight (Dark Mode) */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500 opacity-0 dark:opacity-100 hidden md:block"
        style={{
          background: `radial-gradient(650px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(37, 99, 235, 0.07), transparent 80%)`,
        }}
      />

      <ScrollToTop />
      <Header />
      {/* Page Content Starts Below Header */}
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}