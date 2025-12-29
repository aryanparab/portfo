// components/sections/Hero.tsx - Hero/Home section

"use client";

import React from 'react';
import { heroData } from '@/data/hero';

export const Hero: React.FC = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center min-h-screen py-20">
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-yellow-400 mb-4 tracking-wider font-['Orbitron']">
          {heroData.name}
        </h1>
        <h2 className="text-2xl md:text-3xl text-white mb-6">
          {heroData.title}
        </h2>
        <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          {heroData.subtitle}
        </p>
      </div>
    </div>
  );
};
