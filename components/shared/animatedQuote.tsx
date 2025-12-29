// components/shared/AnimatedQuote.tsx - Scroll-triggered animated quotes with avatar

"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedQuoteProps {
  quote: string;
  author?: string;
  avatar?: string; // Image/GIF URL
  variant?: 'planet' | 'constellation' | 'nebula' | 'shootingStar' | 'orbit';
  position?: 'left' | 'right' | 'center';
}

export const AnimatedQuote: React.FC<AnimatedQuoteProps> = ({
  quote,
  author = "Aryan Parab",
  avatar = "/avatar.png", // Default placeholder
  variant = 'planet',
  position = 'right',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  // Position classes
  const positionClasses = {
    left: 'left-4 md:left-8',
    right: 'right-4 md:right-8',
    center: 'left-1/2 -translate-x-1/2',
  };

  return (
    <div
      ref={containerRef}
      className={`fixed bottom-8 ${positionClasses[position]} z-50 pointer-events-none`}
      style={{ maxWidth: '400px' }}
    >
      {variant === 'planet' && (
        <PlanetVariant
          quote={quote}
          author={author}
          avatar={avatar}
          isVisible={isVisible}
        />
      )}
      {variant === 'constellation' && (
        <ConstellationVariant
          quote={quote}
          author={author}
          avatar={avatar}
          isVisible={isVisible}
        />
      )}
      {variant === 'nebula' && (
        <NebulaVariant
          quote={quote}
          author={author}
          avatar={avatar}
          isVisible={isVisible}
        />
      )}
      {variant === 'shootingStar' && (
        <ShootingStarVariant
          quote={quote}
          author={author}
          avatar={avatar}
          isVisible={isVisible}
        />
      )}
      {variant === 'orbit' && (
        <OrbitVariant
          quote={quote}
          author={author}
          avatar={avatar}
          isVisible={isVisible}
        />
      )}
    </div>
  );
};

// 🪐 PLANET VARIANT - Avatar orbits around quote
const PlanetVariant: React.FC<{
  quote: string;
  author: string;
  avatar: string;
  isVisible: boolean;
}> = ({ quote, author, avatar, isVisible }) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setRotation((prev) => (prev + 1) % 360);
      }, 30);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
      animate={
        isVisible
          ? { opacity: 1, scale: 1, rotate: 0 }
          : { opacity: 0, scale: 0.5, rotate: -180 }
      }
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* Quote Card */}
      <div
        className="backdrop-blur-xl rounded-2xl p-6 relative"
        style={{
          background: 'rgba(0, 0, 0, 0.8)',
          border: '2px solid rgba(248, 228, 95, 0.4)',
          boxShadow: '0 0 40px rgba(248, 228, 95, 0.3)',
        }}
      >
        <p
          className="text-base md:text-lg font-medium italic mb-2"
          style={{ color: 'rgba(255, 255, 255, 0.9)' }}
        >
          "{quote}"
        </p>
        <p
          className="text-sm font-semibold"
          style={{ color: '#F8E45F', fontFamily: 'Orbitron, sans-serif' }}
        >
          — {author}
        </p>
      </div>

      {/* Orbiting Avatar */}
      <motion.div
        className="absolute w-20 h-20 rounded-full overflow-hidden"
        style={{
          border: '3px solid #F8E45F',
          boxShadow: '0 0 25px rgba(248, 228, 95, 0.6)',
          top: '50%',
          left: '50%',
        }}
        animate={
          isVisible
            ? {
                x: Math.cos((rotation * Math.PI) / 180) * 100 - 40,
                y: Math.sin((rotation * Math.PI) / 180) * 60 - 40,
              }
            : { x: -40, y: -40 }
        }
        transition={{ duration: 0 }}
      >
        <img src={avatar} alt={author} className="w-full h-full object-cover" />
      </motion.div>

      {/* Orbit Trail */}
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        width="250"
        height="180"
        style={{ opacity: 0.3 }}
      >
        <ellipse
          cx="125"
          cy="90"
          rx="100"
          ry="60"
          fill="none"
          stroke="#F8E45F"
          strokeWidth="1"
          strokeDasharray="5,5"
        />
      </svg>
    </motion.div>
  );
};

// ⭐ CONSTELLATION VARIANT - Stars connect to form quote
const ConstellationVariant: React.FC<{
  quote: string;
  author: string;
  avatar: string;
  isVisible: boolean;
}> = ({ quote, author, avatar, isVisible }) => {
  const stars = [
    { x: 20, y: 20 },
    { x: 80, y: 40 },
    { x: 150, y: 30 },
    { x: 200, y: 60 },
    { x: 250, y: 40 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* Constellation Background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.6 }}
      >
        {/* Connecting Lines */}
        {stars.map((star, idx) =>
          idx < stars.length - 1 ? (
            <motion.line
              key={`line-${idx}`}
              x1={star.x}
              y1={star.y}
              x2={stars[idx + 1].x}
              y2={stars[idx + 1].y}
              stroke="#F8E45F"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={
                isVisible ? { pathLength: 1, opacity: 0.6 } : { pathLength: 0, opacity: 0 }
              }
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            />
          ) : null
        )}
        {/* Stars */}
        {stars.map((star, idx) => (
          <motion.circle
            key={`star-${idx}`}
            cx={star.x}
            cy={star.y}
            r="3"
            fill="#F8E45F"
            initial={{ scale: 0, opacity: 0 }}
            animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.15 }}
            style={{ filter: 'drop-shadow(0 0 5px rgba(248, 228, 95, 0.8))' }}
          />
        ))}
      </svg>

      {/* Quote Card with Avatar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="relative mt-16"
      >
        <div
          className="backdrop-blur-xl rounded-2xl p-6 relative"
          style={{
            background: 'rgba(0, 0, 0, 0.85)',
            border: '2px solid rgba(248, 228, 95, 0.4)',
            boxShadow: '0 0 40px rgba(248, 228, 95, 0.3)',
          }}
        >
          {/* Avatar at top */}
          <div
            className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full overflow-hidden"
            style={{
              border: '3px solid #F8E45F',
              boxShadow: '0 0 25px rgba(248, 228, 95, 0.6)',
            }}
          >
            <img src={avatar} alt={author} className="w-full h-full object-cover" />
          </div>

          <p
            className="text-base md:text-lg font-medium italic mb-2 mt-8"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            "{quote}"
          </p>
          <p
            className="text-sm font-semibold"
            style={{ color: '#F8E45F', fontFamily: 'Orbitron, sans-serif' }}
          >
            — {author}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

// 🌌 NEBULA VARIANT - Cloud emergence with avatar
const NebulaVariant: React.FC<{
  quote: string;
  author: string;
  avatar: string;
  isVisible: boolean;
}> = ({ quote, author, avatar, isVisible }) => {
  return (
    <div className="relative">
      {/* Glowing Nebula Background */}
      <motion.div
        className="absolute inset-0 rounded-3xl blur-3xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isVisible ? { opacity: 0.4, scale: 1.2 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        style={{
          background:
            'radial-gradient(circle, rgba(248, 228, 95, 0.3) 0%, rgba(255, 215, 0, 0.2) 50%, transparent 70%)',
        }}
      />

      {/* Quote Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotateX: -45 }}
        animate={
          isVisible
            ? { opacity: 1, scale: 1, rotateX: 0 }
            : { opacity: 0, scale: 0.8, rotateX: -45 }
        }
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div
          className="backdrop-blur-xl rounded-2xl p-6 relative overflow-hidden"
          style={{
            background: 'rgba(0, 0, 0, 0.8)',
            border: '2px solid rgba(248, 228, 95, 0.4)',
            boxShadow: '0 0 40px rgba(248, 228, 95, 0.3)',
          }}
        >
          {/* Floating Particles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: '#F8E45F',
                top: `${20 + i * 15}%`,
                left: `${10 + i * 20}%`,
              }}
              animate={{
                y: [-10, 10, -10],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}

          {/* Avatar - Floating */}
          <motion.div
            className="float-right ml-4 mb-4 w-20 h-20 rounded-full overflow-hidden"
            style={{
              border: '3px solid #F8E45F',
              boxShadow: '0 0 25px rgba(248, 228, 95, 0.6)',
            }}
            animate={{
              y: [-5, 5, -5],
              rotate: [-3, 3, -3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <img src={avatar} alt={author} className="w-full h-full object-cover" />
          </motion.div>

          <p
            className="text-base md:text-lg font-medium italic mb-2 relative z-10"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            "{quote}"
          </p>
          <p
            className="text-sm font-semibold relative z-10"
            style={{ color: '#F8E45F', fontFamily: 'Orbitron, sans-serif' }}
          >
            — {author}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

// 🚀 SHOOTING STAR VARIANT - Avatar shoots across with quote
const ShootingStarVariant: React.FC<{
  quote: string;
  author: string;
  avatar: string;
  isVisible: boolean;
}> = ({ quote, author, avatar, isVisible }) => {
  return (
    <div className="relative">
      {/* Shooting Star Trail */}
      <motion.div
        className="absolute right-0 top-0 w-96 h-1"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isVisible ? { scaleX: 1, opacity: 0.6 } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          background:
            'linear-gradient(to right, transparent, rgba(248, 228, 95, 0.8), #F8E45F)',
          transformOrigin: 'right',
          boxShadow: '0 0 20px rgba(248, 228, 95, 0.6)',
        }}
      />

      {/* Avatar - Shooting */}
      <motion.div
        className="absolute -top-10 w-20 h-20 rounded-full overflow-hidden"
        style={{
          border: '3px solid #F8E45F',
          boxShadow: '0 0 30px rgba(248, 228, 95, 0.8)',
        }}
        initial={{ x: -200, y: -100, opacity: 0 }}
        animate={
          isVisible
            ? { x: 0, y: 0, opacity: 1 }
            : { x: -200, y: -100, opacity: 0 }
        }
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <img src={avatar} alt={author} className="w-full h-full object-cover" />
      </motion.div>

      {/* Quote Card */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div
          className="backdrop-blur-xl rounded-2xl p-6 mt-16"
          style={{
            background: 'rgba(0, 0, 0, 0.8)',
            border: '2px solid rgba(248, 228, 95, 0.4)',
            boxShadow: '0 0 40px rgba(248, 228, 95, 0.3)',
          }}
        >
          <p
            className="text-base md:text-lg font-medium italic mb-2"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            "{quote}"
          </p>
          <p
            className="text-sm font-semibold"
            style={{ color: '#F8E45F', fontFamily: 'Orbitron, sans-serif' }}
          >
            — {author}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

// 🌍 ORBIT VARIANT - Multiple avatars orbit around quote
const OrbitVariant: React.FC<{
  quote: string;
  author: string;
  avatar: string;
  isVisible: boolean;
}> = ({ quote, author, avatar, isVisible }) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setRotation((prev) => (prev + 0.5) % 360);
      }, 20);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const satellites = [0, 120, 240]; // 3 positions

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      {/* Central Quote */}
      <div
        className="backdrop-blur-xl rounded-2xl p-6 relative z-10"
        style={{
          background: 'rgba(0, 0, 0, 0.85)',
          border: '2px solid rgba(248, 228, 95, 0.4)',
          boxShadow: '0 0 40px rgba(248, 228, 95, 0.3)',
        }}
      >
        <p
          className="text-base md:text-lg font-medium italic mb-2"
          style={{ color: 'rgba(255, 255, 255, 0.9)' }}
        >
          "{quote}"
        </p>
        <p
          className="text-sm font-semibold"
          style={{ color: '#F8E45F', fontFamily: 'Orbitron, sans-serif' }}
        >
          — {author}
        </p>
      </div>

      {/* Orbiting Mini Avatars */}
      {satellites.map((offset, idx) => {
        const angle = ((rotation + offset) * Math.PI) / 180;
        return (
          <motion.div
            key={idx}
            className="absolute w-12 h-12 rounded-full overflow-hidden"
            style={{
              border: '2px solid #F8E45F',
              boxShadow: '0 0 15px rgba(248, 228, 95, 0.6)',
              top: '50%',
              left: '50%',
            }}
            animate={{
              x: Math.cos(angle) * 120 - 24,
              y: Math.sin(angle) * 80 - 24,
            }}
            transition={{ duration: 0 }}
          >
            <img src={avatar} alt={author} className="w-full h-full object-cover" />
          </motion.div>
        );
      })}

      {/* Orbit Rings */}
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        width="300"
        height="220"
        style={{ opacity: 0.3 }}
      >
        <ellipse
          cx="150"
          cy="110"
          rx="120"
          ry="80"
          fill="none"
          stroke="#F8E45F"
          strokeWidth="1"
          strokeDasharray="3,3"
        />
      </svg>
    </motion.div>
  );
};