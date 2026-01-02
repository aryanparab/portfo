// app/page.tsx - Portfolio with scroll expansion hero transition

"use client";

import React, { useState, useEffect } from 'react';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';
import { SpaceBackground } from '@/components/shared/SpaceBackground';
import { SmoothScrollWrapper } from '@/components/shared/SmoothScrollWrapper';
import { navigationItems } from '@/data/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for nav styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => 
        document.getElementById(`section-${item.section}`)
      );
      
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionIndex: number) => {
    setActiveSection(sectionIndex);
    setIsMenuOpen(false);
    const element = document.getElementById(`section-${sectionIndex}`);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <SmoothScrollWrapper>
      <main className="relative min-h-screen bg-black">
        {/* THREE.js Space Background - Fixed behind everything */}
        <SpaceBackground />

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="fixed top-8 right-8 z-50 hidden md:block"
        >
          <motion.div
            className="backdrop-blur-xl rounded-xl p-1 transition-all duration-300"
            style={{
              background: scrolled 
                ? 'rgba(0, 0, 0, 0.8)' 
                : 'rgba(0, 0, 0, 0.6)',
              border: '1px solid rgba(248, 228, 95, 0.3)',
              boxShadow: scrolled
                ? '0 8px 32px rgba(248, 228, 95, 0.2)'
                : '0 4px 20px rgba(0, 0, 0, 0.5)',
            }}
          >
            <ul className="space-y-1">
              {navigationItems.map((item) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + item.id * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(item.section)}
                    className="relative w-full text-left px-6 py-3 rounded-lg transition-all duration-300 group overflow-hidden"
                    style={{
                      background: activeSection === item.section
                        ? '#F8E45F'
                        : 'transparent',
                      color: activeSection === item.section
                        ? '#000'
                        : 'rgba(255, 255, 255, 0.7)',
                      fontFamily: 'Orbitron, sans-serif',
                      fontWeight: activeSection === item.section ? 600 : 400,
                    }}
                    onMouseEnter={(e) => {
                      if (activeSection !== item.section) {
                        e.currentTarget.style.background = 'rgba(248, 228, 95, 0.1)';
                        e.currentTarget.style.color = '#F8E45F';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeSection !== item.section) {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                      }
                    }}
                  >
                    {activeSection === item.section && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute left-0 top-0 bottom-0 w-1 rounded-r"
                        style={{ background: '#000' }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle at center, rgba(248, 228, 95, 0.1) 0%, transparent 70%)',
                      }}
                    />
                    
                    <span className="relative z-10">{item.label}</span>
                  </button>
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="mt-2 pt-2"
              style={{ borderTop: '1px solid rgba(248, 228, 95, 0.2)' }}
            >
              <div className="flex justify-center space-x-1">
                {navigationItems.map((item) => (
                  <motion.button
                    key={item.id}
                    className="w-2 h-2 rounded-full transition-all duration-300 cursor-pointer"
                    style={{
                      background: activeSection === item.section
                        ? '#F8E45F'
                        : 'rgba(248, 228, 95, 0.3)',
                      boxShadow: activeSection === item.section
                        ? '0 0 10px rgba(248, 228, 95, 0.6)'
                        : 'none',
                    }}
                    whileHover={{ scale: 1.5 }}
                    onClick={() => scrollToSection(item.section)}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.nav>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="fixed top-6 right-6 z-50 md:hidden w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-xl transition-all duration-300"
          style={{
            background: isMenuOpen 
              ? '#F8E45F' 
              : 'rgba(0, 0, 0, 0.8)',
            border: '1px solid rgba(248, 228, 95, 0.5)',
            color: isMenuOpen ? '#000' : '#F8E45F',
            boxShadow: '0 4px 20px rgba(248, 228, 95, 0.3)',
          }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
                onClick={() => setIsMenuOpen(false)}
              />

              <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed top-0 right-0 bottom-0 w-64 z-50 md:hidden"
                style={{
                  background: 'rgba(0, 0, 0, 0.95)',
                  borderLeft: '1px solid rgba(248, 228, 95, 0.3)',
                }}
              >
                <div className="flex flex-col h-full p-6 pt-20">
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8 pb-4"
                    style={{ borderBottom: '1px solid rgba(248, 228, 95, 0.2)' }}
                  >
                    <h2
                      className="text-2xl font-bold"
                      style={{
                        color: '#F8E45F',
                        fontFamily: 'Orbitron, sans-serif',
                        textShadow: '0 0 10px rgba(248, 228, 95, 0.5)',
                      }}
                    >
                      Menu
                    </h2>
                  </motion.div>

                  <ul className="space-y-2 flex-1">
                    {navigationItems.map((item, idx) => (
                      <motion.li
                        key={item.id}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                      >
                        <button
                          onClick={() => scrollToSection(item.section)}
                          className="w-full text-left px-4 py-3 rounded-lg transition-all duration-300"
                          style={{
                            background: activeSection === item.section
                              ? 'rgba(248, 228, 95, 0.2)'
                              : 'transparent',
                            color: activeSection === item.section
                              ? '#F8E45F'
                              : 'rgba(255, 255, 255, 0.7)',
                            fontFamily: 'Orbitron, sans-serif',
                            borderLeft: activeSection === item.section
                              ? '3px solid #F8E45F'
                              : '3px solid transparent',
                          }}
                        >
                          {item.label}
                        </button>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="pt-4"
                    style={{ borderTop: '1px solid rgba(248, 228, 95, 0.2)' }}
                  >
                    <p
                      className="text-xs text-center"
                      style={{
                        color: 'rgba(248, 228, 95, 0.5)',
                        fontFamily: 'Orbitron, sans-serif',
                      }}
                    >
                      Aryan Parab © 2025
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Scroll Expansion Hero (Hero → About transition) */}
        <div id="section-0">
          <ScrollExpandMedia
            mediaType="image"
            mediaSrc="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop"
            bgImageSrc="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=1920&auto=format&fit=crop"
            title="Aryan Parab"
            subtitle="Full-Stack Developer"
            scrollHint="Scroll to explore"
          >
            {/* About section appears after scroll expansion */}
            <div id="section-1" className="w-full">
              <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <About />
              </div>
            </div>
          </ScrollExpandMedia>
        </div>

        {/* Other Sections - Content over background with proper containers */}
        <div className="relative z-10">
          {/* Experience - Constrained container */}
          <div id="section-2" className="w-full">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
              <Experience />
            </div>
          </div>
          
          {/* Projects - Constrained container */}
          <div id="section-3" className="w-full">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
              <Projects />
            </div>
          </div>
          
          {/* Contact - Constrained container */}
          <div id="section-4" className="w-full">
            <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
              <Contact />
            </div>
          </div>
        </div>

        {/* Footer - Full width with constrained content */}
        <footer className="relative z-10 w-full" style={{ borderTop: '1px solid rgba(248, 228, 95, 0.2)' }}>
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <p className="text-center" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
              © 2025 Aryan Parab. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </SmoothScrollWrapper>
  );
}