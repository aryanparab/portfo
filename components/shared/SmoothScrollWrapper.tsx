// components/shared/SmoothScrollWrapper.tsx - Lenis smooth scroll wrapper

"use client";

import React, { useEffect } from 'react';
import { initSmoothScroll, destroySmoothScroll } from '@/lib/smoothScroll';

interface SmoothScrollWrapperProps {
  children: React.ReactNode;
}

export const SmoothScrollWrapper: React.FC<SmoothScrollWrapperProps> = ({ children }) => {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = initSmoothScroll();

    // Cleanup on unmount
    return () => {
      destroySmoothScroll();
    };
  }, []);

  return <>{children}</>;
};