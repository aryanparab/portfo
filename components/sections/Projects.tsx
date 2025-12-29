// components/sections/Projects.tsx - Aesthetic Refined Carousel

"use client";

import React, { useState, useEffect } from 'react';
import { projectsData } from '@/data/projects';
import { TechTag } from '@/components/shared/TechTag';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatedTitle } from '../shared/AnimatedTitle';

export const Projects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-play
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projectsData.projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevProject();
      } else if (e.key === 'ArrowRight') {
        nextProject();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projectsData.projects.length);
    setIsAutoPlay(true);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projectsData.projects.length) % projectsData.projects.length);
    setIsAutoPlay(true);
  };

  const goToProject = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlay(true);
  };

  // Calculate position for each card
  const getCardPosition = (index: number) => {
    const diff = index - activeIndex;
    const normalizedDiff = ((diff % projectsData.projects.length) + projectsData.projects.length) % projectsData.projects.length;

    // Left card
    if (normalizedDiff === projectsData.projects.length - 1) {
      return {
        transform: 'translateX(-110%) scale(0.8) rotateY(15deg)',
        opacity: 0.6,
        zIndex: 1,
        pointerEvents: 'auto' as const,
      };
    }
    // Center card (active)
    else if (normalizedDiff === 0) {
      return {
        transform: 'translateX(0%) scale(1) rotateY(0deg)',
        opacity: 1,
        zIndex: 3,
        pointerEvents: 'auto' as const,
      };
    }
    // Right card
    else if (normalizedDiff === 1) {
      return {
        transform: 'translateX(110%) scale(0.8) rotateY(-15deg)',
        opacity: 0.6,
        zIndex: 1,
        pointerEvents: 'auto' as const,
      };
    }
    // Hidden cards
    else {
      return {
        transform: 'translateX(0%) scale(0.5)',
        opacity: 0,
        zIndex: 0,
        pointerEvents: 'none' as const,
      };
    }
  };

  return (
    <div className="min-h-screen w-full py-16 px-4">
      {/* Section Header - Compact */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <AnimatedTitle 
          variant="wave"
          className="mb-3"
        >
          PROJECTS
        </AnimatedTitle>
        
        <div
          className="h-0.5 w-16 mx-auto mb-4"
          style={{
            background: 'linear-gradient(90deg, transparent, #F8E45F, transparent)',
            boxShadow: '0 0 10px rgba(248, 228, 95, 0.5)',
          }}
        />
        
        <p 
          className="text-sm font-medium"
          style={{ 
            color: 'rgba(248, 228, 95, 0.8)',
            fontFamily: 'Orbitron, sans-serif' 
          }}
        >
          {activeIndex + 1} / {projectsData.projects.length}
        </p>
      </div>

      {/* Carousel Container - Smaller & Sleeker */}
      <div className="relative max-w-3xl mx-auto" style={{ perspective: '1500px' }}>
        
        {/* Cards Container - Reduced Height */}
        <div className="relative h-[480px] md:h-[520px]">
          {projectsData.projects.map((project, idx) => {
            const position = getCardPosition(idx);
            const isActive = idx === activeIndex;
            const isClickable =
              idx === ((activeIndex - 1 + projectsData.projects.length) % projectsData.projects.length) ||
              idx === ((activeIndex + 1) % projectsData.projects.length);

            return (
              <div
                key={idx}
                className="absolute inset-0 transition-all duration-700 ease-out"
                style={{
                  ...position,
                  cursor: isClickable ? 'pointer' : 'default',
                }}
                onClick={() => {
                  if (isClickable) {
                    goToProject(idx);
                  }
                }}
              >
                {/* Card with Glassmorphism */}
                <div
                  className="relative rounded-xl overflow-hidden h-full"
                  style={{
                    background: isActive 
                      ? 'rgba(0, 0, 0, 0.5)' 
                      : 'rgba(0, 0, 0, 0.4)',
                    backdropFilter: 'blur(20px)',
                    border: isActive
                      ? '2px solid rgba(248, 228, 95, 0.8)'
                      : '1px solid rgba(248, 228, 95, 0.2)',
                    boxShadow: isActive
                      ? '0 8px 32px rgba(248, 228, 95, 0.3), 0 0 60px rgba(248, 228, 95, 0.2)'
                      : '0 8px 24px rgba(0, 0, 0, 0.4)',
                    transition: 'all 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                >
                  {/* Image Section - Compact */}
                  <div className="relative h-[48%] overflow-hidden">
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-700"
                        style={{
                          opacity: isActive ? 1 : 0.5,
                          filter: isActive ? 'none' : 'grayscale(0.3)',
                        }}
                      />
                    )}
                    
                    {/* Sleeker Gradient Overlay */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: isActive
                          ? 'linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.3) 50%, transparent 80%)'
                          : 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.5) 50%, transparent)',
                      }}
                    />

                    {/* Number Badge - Refined */}
                    <div
                      className="absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300"
                      style={{
                        background: 'rgba(0, 0, 0, 0.7)',
                        backdropFilter: 'blur(10px)',
                        border: isActive ? '2px solid #F8E45F' : '1px solid rgba(248, 228, 95, 0.4)',
                        color: '#F8E45F',
                        fontFamily: 'Orbitron, sans-serif',
                        boxShadow: isActive
                          ? '0 0 20px rgba(248, 228, 95, 0.4)'
                          : 'none',
                      }}
                    >
                      {idx + 1}
                    </div>

                    {/* Click Hint - Minimalist */}
                    {isClickable && !isActive && (
                      <div
                        className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm transition-all duration-300"
                      >
                        <div
                          className="px-5 py-2 rounded-full text-sm font-semibold"
                          style={{
                            background: 'rgba(248, 228, 95, 0.95)',
                            color: '#000',
                            fontFamily: 'Orbitron, sans-serif',
                            boxShadow: '0 4px 20px rgba(248, 228, 95, 0.3)',
                          }}
                        >
                          CLICK TO VIEW
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content Section - Compact & Clean */}
                  <div className="p-5 md:p-6 h-[52%] overflow-y-auto">
                    <h3
                      className="text-xl md:text-2xl font-bold mb-2 leading-tight"
                      style={{
                        color: '#F8E45F',
                        fontFamily: 'Orbitron, sans-serif',
                        textShadow: isActive
                          ? '0 0 15px rgba(248, 228, 95, 0.3)'
                          : 'none',
                      }}
                    >
                      {project.title}
                    </h3>

                    <p
                      className="text-sm md:text-base mb-4 leading-relaxed line-clamp-3"
                      style={{
                        color: 'rgba(255, 255, 255, 0.85)',
                        opacity: isActive ? 1 : 0.7,
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Tech Tags - Compact */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.slice(0, 5).map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-2.5 py-1 rounded-md text-xs font-medium"
                          style={{
                            background: 'rgba(248, 228, 95, 0.1)',
                            border: '1px solid rgba(248, 228, 95, 0.3)',
                            color: '#F8E45F',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span
                          className="px-2.5 py-1 rounded-md text-xs font-medium"
                          style={{
                            background: 'rgba(248, 228, 95, 0.05)',
                            border: '1px solid rgba(248, 228, 95, 0.2)',
                            color: 'rgba(248, 228, 95, 0.6)',
                          }}
                        >
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>

                    {/* Links - Refined Buttons */}
                    {isActive && (
                      <div className="flex gap-3">
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300"
                            style={{
                              color: '#000',
                              background: '#F8E45F',
                              border: '2px solid #F8E45F',
                              fontFamily: 'Orbitron, sans-serif',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = 'transparent';
                              e.currentTarget.style.color = '#F8E45F';
                              e.currentTarget.style.boxShadow =
                                '0 0 20px rgba(248, 228, 95, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = '#F8E45F';
                              e.currentTarget.style.color = '#000';
                              e.currentTarget.style.boxShadow = 'none';
                            }}
                          >
                            <Github size={16} />
                            <span>Code</span>
                          </a>
                        )}
                        {project.links.live && (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300"
                            style={{
                              color: '#F8E45F',
                              background: 'transparent',
                              border: '2px solid #F8E45F',
                              fontFamily: 'Orbitron, sans-serif',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = '#F8E45F';
                              e.currentTarget.style.color = '#000';
                              e.currentTarget.style.boxShadow =
                                '0 0 20px rgba(248, 228, 95, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = 'transparent';
                              e.currentTarget.style.color = '#F8E45F';
                              e.currentTarget.style.boxShadow = 'none';
                            }}
                          >
                            <ExternalLink size={16} />
                            <span>Demo</span>
                          </a>
                        )}
                        {project.links.watch && (
                          <a
                            href={project.links.watch}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300"
                            style={{
                              color: '#F8E45F',
                              background: 'transparent',
                              border: '2px solid #F8E45F',
                              fontFamily: 'Orbitron, sans-serif',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = '#F8E45F';
                              e.currentTarget.style.color = '#000';
                              e.currentTarget.style.boxShadow =
                                '0 0 20px rgba(248, 228, 95, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = 'transparent';
                              e.currentTarget.style.color = '#F8E45F';
                              e.currentTarget.style.boxShadow = 'none';
                            }}
                          >
                            <ExternalLink size={16} />
                            <span>Watch Demo</span>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows - Sleeker */}
        <button
          onClick={prevProject}
          className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 z-10"
          style={{
            background: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(248, 228, 95, 0.3)',
            color: '#F8E45F',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#F8E45F';
            e.currentTarget.style.color = '#000';
            e.currentTarget.style.borderColor = '#F8E45F';
            e.currentTarget.style.boxShadow = '0 0 25px rgba(248, 228, 95, 0.5)';
            e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(0, 0, 0, 0.6)';
            e.currentTarget.style.color = '#F8E45F';
            e.currentTarget.style.borderColor = 'rgba(248, 228, 95, 0.3)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
          }}
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextProject}
          className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 z-10"
          style={{
            background: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(248, 228, 95, 0.3)',
            color: '#F8E45F',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#F8E45F';
            e.currentTarget.style.color = '#000';
            e.currentTarget.style.borderColor = '#F8E45F';
            e.currentTarget.style.boxShadow = '0 0 25px rgba(248, 228, 95, 0.5)';
            e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(0, 0, 0, 0.6)';
            e.currentTarget.style.color = '#F8E45F';
            e.currentTarget.style.borderColor = 'rgba(248, 228, 95, 0.3)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
          }}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dot Indicators - Minimal */}
      <div className="flex justify-center gap-2 mt-8">
        {projectsData.projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToProject(idx)}
            className="transition-all duration-300"
            style={{
              width: activeIndex === idx ? '32px' : '8px',
              height: '8px',
              borderRadius: '4px',
              background:
                activeIndex === idx ? '#F8E45F' : 'rgba(248, 228, 95, 0.25)',
              boxShadow:
                activeIndex === idx ? '0 0 12px rgba(248, 228, 95, 0.5)' : 'none',
            }}
          />
        ))}
      </div>

      {/* Controls Info - Subtle */}
      <div
        className="text-center mt-6 text-xs"
        style={{ 
          color: 'rgba(255, 255, 255, 0.4)',
          fontFamily: 'Orbitron, sans-serif' 
        }}
      >
        <p>← → Arrow keys • Click sides • Auto-play {isAutoPlay ? 'ON' : 'OFF'}</p>
      </div>
    </div>
  );
};