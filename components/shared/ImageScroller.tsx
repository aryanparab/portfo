// components/shared/ImageScroller.tsx - Image carousel for About section

"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageScrollerProps {
  images: string[];
  autoPlayInterval?: number;
}

export const ImageScroller: React.FC<ImageScrollerProps> = ({ 
  images,
  autoPlayInterval = 4000 
}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isShiny, setIsShiny] = useState(false);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [currentImage]);

  // Shiny effect on image change
  useEffect(() => {
    setIsShiny(true);
    const timer = setTimeout(() => setIsShiny(false), 300);
    return () => clearTimeout(timer);
  }, [currentImage]);

  const nextImage = () => {
    setDirection(1);
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setDirection(index > currentImage ? 1 : -1);
    setCurrentImage(index);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <motion.div
      className="relative w-full h-full flex flex-col items-center justify-center p-4"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 blur-3xl opacity-20"
        style={{
          background:
            'radial-gradient(circle, rgba(248, 228, 95, 0.3) 0%, transparent 70%)',
        }}
      />

      {/* Main Image Container */}
      <div 
        className="relative w-full aspect-square rounded-xl overflow-hidden backdrop-blur-md"
        style={{
          background: 'rgba(0, 0, 0, 0.3)',
          border: '1px solid rgba(248, 228, 95, 0.3)',
          boxShadow: '0 8px 32px rgba(248, 228, 95, 0.2)',
        }}
      >
        {/* Image with AnimatePresence for smooth transitions */}
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentImage}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
              scale: { duration: 0.4 },
            }}
            className="absolute inset-0 flex items-center justify-center p-4"
          >
            <img
              src={images[currentImage]}
              alt={`Portfolio image ${currentImage + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg transition-all duration-300"
              style={{
                filter: isShiny 
                  ? 'brightness(1.2) contrast(1.1) saturate(1.3) drop-shadow(0 0 20px rgba(248, 228, 95, 0.4))' 
                  : 'brightness(1) contrast(1) saturate(1) drop-shadow(0 0 10px rgba(0, 0, 0, 0.3))',
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 z-10 group"
          style={{
            background: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(248, 228, 95, 0.3)',
            color: '#F8E45F',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(248, 228, 95, 0.9)';
            e.currentTarget.style.color = '#000';
            e.currentTarget.style.borderColor = '#F8E45F';
            e.currentTarget.style.boxShadow = '0 0 20px rgba(248, 228, 95, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(0, 0, 0, 0.6)';
            e.currentTarget.style.color = '#F8E45F';
            e.currentTarget.style.borderColor = 'rgba(248, 228, 95, 0.3)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 z-10 group"
          style={{
            background: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(248, 228, 95, 0.3)',
            color: '#F8E45F',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(248, 228, 95, 0.9)';
            e.currentTarget.style.color = '#000';
            e.currentTarget.style.borderColor = '#F8E45F';
            e.currentTarget.style.boxShadow = '0 0 20px rgba(248, 228, 95, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(0, 0, 0, 0.6)';
            e.currentTarget.style.color = '#F8E45F';
            e.currentTarget.style.borderColor = 'rgba(248, 228, 95, 0.3)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <ChevronRight size={20} />
        </button> */}

        {/* Corner accents */}
        <div
          className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 opacity-40 pointer-events-none"
          style={{ borderColor: '#F8E45F' }}
        />
        <div
          className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 opacity-40 pointer-events-none"
          style={{ borderColor: '#F8E45F' }}
        />
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToImage(idx)}
            className="transition-all duration-300"
            style={{
              width: currentImage === idx ? '32px' : '8px',
              height: '8px',
              borderRadius: '4px',
              background:
                currentImage === idx ? '#F8E45F' : 'rgba(248, 228, 95, 0.25)',
              boxShadow:
                currentImage === idx ? '0 0 12px rgba(248, 228, 95, 0.5)' : 'none',
            }}
          />
        ))}
      </div>

      {/* Image Counter */}
      {/* <motion.div
        className="mt-2 text-xs"
        style={{ 
          color: 'rgba(248, 228, 95, 0.7)',
          fontFamily: 'Orbitron, sans-serif' 
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {currentImage + 1} / {images.length}
      </motion.div> */}
    </motion.div>
  );
};