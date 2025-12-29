// components/shared/AnimatedTitle.tsx - Beautiful title animations (RE-TRIGGERS EVERY TIME!)

"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedTitleProps {
  children: string;
  variant?: 'fadeSlide' | 'letterStagger' | 'shimmer' | 'glitch' | 'split' | 'wave' | 'particle';
  className?: string;
  delay?: number;
}

export const AnimatedTitle: React.FC<AnimatedTitleProps> = ({
  children,
  variant = 'fadeSlide',
  className = '',
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  // ⚡ CHANGED: once: false means it re-triggers every time!
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <div ref={ref} className={className}>
      {variant === 'fadeSlide' && <FadeSlideVariant text={children} isInView={isInView} delay={delay} />}
      {variant === 'letterStagger' && <LetterStaggerVariant text={children} isInView={isInView} delay={delay} />}
      {variant === 'shimmer' && <ShimmerVariant text={children} isInView={isInView} delay={delay} />}
      {variant === 'glitch' && <GlitchVariant text={children} isInView={isInView} delay={delay} />}
      {variant === 'split' && <SplitVariant text={children} isInView={isInView} delay={delay} />}
      {variant === 'wave' && <WaveVariant text={children} isInView={isInView} delay={delay} />}
      {variant === 'particle' && <ParticleVariant text={children} isInView={isInView} delay={delay} />}
    </div>
  );
};

// 1. FADE SLIDE UP - Smooth and elegant
const FadeSlideVariant: React.FC<{ text: string; isInView: boolean; delay: number }> = ({
  text,
  isInView,
  delay,
}) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className="text-4xl md:text-5xl font-bold"
      style={{
        fontFamily: 'Orbitron, sans-serif',
        color: '#F8E45F',
        textShadow: '0 0 20px rgba(248, 228, 95, 0.3)',
      }}
    >
      {text}
    </motion.h2>
  );
};

// 2. LETTER STAGGER - Letters appear one by one
const LetterStaggerVariant: React.FC<{ text: string; isInView: boolean; delay: number }> = ({
  text,
  isInView,
  delay,
}) => {
  const letters = text.split('');

  return (
    <h2
      className="text-4xl md:text-5xl font-bold"
      style={{
        fontFamily: 'Orbitron, sans-serif',
        textShadow: '0 0 20px rgba(248, 228, 95, 0.3)',
      }}
    >
      {letters.map((letter, idx) => (
        <motion.span
          key={idx}
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, rotateX: 0, color: '#F8E45F' }
              : { opacity: 0, y: 50, rotateX: -90 }
          }
          transition={{
            duration: 0.5,
            delay: delay + idx * 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ display: 'inline-block', transformStyle: 'preserve-3d' }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </h2>
  );
};

// 3. SHIMMER - Gradient flows across text
const ShimmerVariant: React.FC<{ text: string; isInView: boolean; delay: number }> = ({
  text,
  isInView,
  delay,
}) => {
  const [shimmerPosition, setShimmerPosition] = useState(-100);

  useEffect(() => {
    if (isInView) {
      // Reset shimmer position when coming into view
      setShimmerPosition(-100);
      
      const interval = setInterval(() => {
        setShimmerPosition((prev) => {
          if (prev >= 200) {
            return -100; // Reset for continuous loop
          }
          return prev + 2;
        });
      }, 30);
      return () => clearInterval(interval);
    } else {
      // Reset when out of view
      setShimmerPosition(-100);
    }
  }, [isInView]);

  return (
    <motion.h2
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, delay }}
      className="text-4xl md:text-5xl font-bold relative overflow-hidden"
      style={{
        fontFamily: 'Orbitron, sans-serif',
        color: '#F8E45F',
        textShadow: '0 0 20px rgba(248, 228, 95, 0.3)',
      }}
    >
      {text}
      {isInView && (
        <span
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.8) 50%, transparent 100%)`,
            transform: `translateX(${shimmerPosition}%)`,
            transition: 'transform 0.03s linear',
            mixBlendMode: 'overlay',
          }}
        />
      )}
    </motion.h2>
  );
};

// 4. GLITCH - Improved glitch effect
const GlitchVariant: React.FC<{ text: string; isInView: boolean; delay: number }> = ({
  text,
  isInView,
  delay,
}) => {
  const [glitchText, setGlitchText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    if (isInView) {
      setIsGlitching(true);
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';
      let iterations = 0;
      const maxIterations = text.length * 2;

      const interval = setInterval(() => {
        setGlitchText(
          text
            .split('')
            .map((char, idx) => {
              if (idx < iterations / 2) {
                return text[idx];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('')
        );

        iterations++;

        if (iterations >= maxIterations) {
          clearInterval(interval);
          setGlitchText(text);
          setIsGlitching(false);
        }
      }, 50);

      return () => clearInterval(interval);
    } else {
      // Reset when out of view
      setGlitchText(text);
      setIsGlitching(false);
    }
  }, [isInView, text]);

  return (
    <motion.h2
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3, delay }}
      className="text-4xl md:text-5xl font-bold"
      style={{
        fontFamily: 'Orbitron, sans-serif',
        color: '#F8E45F',
        textShadow: isGlitching
          ? '0 0 30px rgba(248, 228, 95, 0.8), 2px 2px 0 #F8E45F, -2px -2px 0 #FFD700'
          : '0 0 20px rgba(248, 228, 95, 0.3)',
      }}
    >
      {glitchText}
    </motion.h2>
  );
};

// 5. SPLIT REVEAL - Text reveals from center
const SplitVariant: React.FC<{ text: string; isInView: boolean; delay: number }> = ({
  text,
  isInView,
  delay,
}) => {
  return (
    <div className="relative overflow-hidden">
      {/* Top half */}
      <motion.div
        initial={{ y: 0 }}
        animate={isInView ? { y: '-100%' } : { y: 0 }}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 bg-black z-10"
        style={{ transformOrigin: 'top' }}
      />
      
      {/* Bottom half */}
      <motion.div
        initial={{ y: 0 }}
        animate={isInView ? { y: '100%' } : { y: 0 }}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 bg-black z-10"
        style={{ transformOrigin: 'bottom' }}
      />

      {/* Text */}
      <motion.h2
        initial={{ opacity: 0, scale: 1.2 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.2 }}
        transition={{ duration: 0.8, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="text-4xl md:text-5xl font-bold relative z-0"
        style={{
          fontFamily: 'Orbitron, sans-serif',
          color: '#F8E45F',
          textShadow: '0 0 20px rgba(248, 228, 95, 0.3)',
        }}
      >
        {text}
      </motion.h2>
    </div>
  );
};

// 6. WAVE - Bouncy wave effect
const WaveVariant: React.FC<{ text: string; isInView: boolean; delay: number }> = ({
  text,
  isInView,
  delay,
}) => {
  const letters = text.split('');

  return (
    <h2
      className="text-4xl md:text-5xl font-bold"
      style={{
        fontFamily: 'Orbitron, sans-serif',
        textShadow: '0 0 20px rgba(248, 228, 95, 0.3)',
      }}
    >
      {letters.map((letter, idx) => (
        <motion.span
          key={idx}
          initial={{ y: 0, opacity: 0 }}
          animate={
            isInView
              ? {
                  y: [0, -20, 0],
                  opacity: 1,
                  color: '#F8E45F',
                }
              : { y: 0, opacity: 0 }
          }
          transition={{
            duration: 0.6,
            delay: delay + idx * 0.08,
            ease: [0.34, 1.56, 0.64, 1],
          }}
          style={{ display: 'inline-block' }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </h2>
  );
};

// 7. PARTICLE FORMATION - Letters form from particles
const ParticleVariant: React.FC<{ text: string; isInView: boolean; delay: number }> = ({
  text,
  isInView,
  delay,
}) => {
  const letters = text.split('');

  return (
    <h2
      className="text-4xl md:text-5xl font-bold relative"
      style={{
        fontFamily: 'Orbitron, sans-serif',
        textShadow: '0 0 20px rgba(248, 228, 95, 0.3)',
      }}
    >
      {letters.map((letter, idx) => (
        <span key={idx} className="relative inline-block">
          {/* Particles */}
          {[...Array(8)].map((_, particleIdx) => {
            const randomX = (Math.random() - 0.5) * 100;
            const randomY = (Math.random() - 0.5) * 100;
            
            return (
              <motion.span
                key={particleIdx}
                initial={{
                  x: randomX,
                  y: randomY,
                  opacity: 1,
                  scale: 0,
                }}
                animate={
                  isInView
                    ? { x: 0, y: 0, opacity: 0, scale: 1 }
                    : {
                        x: randomX,
                        y: randomY,
                        opacity: 1,
                        scale: 0,
                      }
                }
                transition={{
                  duration: 0.8,
                  delay: delay + idx * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 w-1 h-1 rounded-full"
                style={{
                  background: '#F8E45F',
                  boxShadow: '0 0 10px rgba(248, 228, 95, 0.8)',
                  left: '50%',
                  top: '50%',
                }}
              />
            );
          })}

          {/* Letter */}
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={
              isInView
                ? { opacity: 1, scale: 1, color: '#F8E45F' }
                : { opacity: 0, scale: 0 }
            }
            transition={{
              duration: 0.5,
              delay: delay + idx * 0.05 + 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ display: 'inline-block' }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        </span>
      ))}
    </h2>
  );
};