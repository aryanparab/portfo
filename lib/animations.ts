// lib/animations.ts - GSAP animation utilities

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Check if mobile
export const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
};

// Check if user prefers reduced motion
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Animation settings based on device
export const getAnimationSettings = () => {
  const mobile = isMobile();
  const reducedMotion = prefersReducedMotion();

  if (reducedMotion) {
    return {
      duration: 0,
      stagger: 0,
      enabled: false,
    };
  }

  return {
    duration: mobile ? 0.4 : 0.3,        // Slightly softer on desktop
    stagger: mobile ? 0.1 : 0.15,
    ease: 'power2.out',                  // Smooth easing
    enabled: true,
  };
};

// Fade + Slide Up animation
export const fadeSlideUp = (element: HTMLElement | string, delay = 0) => {
  const settings = getAnimationSettings();
  if (!settings.enabled) return;

  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 40,
      willChange: 'transform, opacity',
    },
    {
      opacity: 1,
      y: 0,
      duration: settings.duration,
      ease: settings.ease,
      delay,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    }
  );
};

// Staggered fade + slide up for multiple elements
export const staggerFadeSlideUp = (
  elements: HTMLElement[] | NodeListOf<Element> | string,
  containerTrigger?: HTMLElement | string
) => {
  const settings = getAnimationSettings();
  if (!settings.enabled) return;

  gsap.fromTo(
    elements,
    {
      opacity: 0,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: settings.duration,
      ease: settings.ease,
      stagger: settings.stagger,
      scrollTrigger: {
        trigger: containerTrigger || elements,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    }
  );
};

// Fade + Scale animation
export const fadeScale = (element: HTMLElement | string, delay = 0) => {
  const settings = getAnimationSettings();
  if (!settings.enabled) return;

  gsap.fromTo(
    element,
    {
      opacity: 0,
      scale: 0.9,
    },
    {
      opacity: 1,
      scale: 1,
      duration: settings.duration,
      ease: settings.ease,
      delay,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    }
  );
};

// Slide from right
export const slideFromRight = (element: HTMLElement | string, delay = 0) => {
  const settings = getAnimationSettings();
  if (!settings.enabled) return;

  gsap.fromTo(
    element,
    {
      opacity: 0,
      x: 60,
    },
    {
      opacity: 1,
      x: 0,
      duration: settings.duration,
      ease: settings.ease,
      delay,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    }
  );
};

// Slide from left
export const slideFromLeft = (element: HTMLElement | string, delay = 0) => {
  const settings = getAnimationSettings();
  if (!settings.enabled) return;

  gsap.fromTo(
    element,
    {
      opacity: 0,
      x: -60,
    },
    {
      opacity: 1,
      x: 0,
      duration: settings.duration,
      ease: settings.ease,
      delay,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    }
  );
};

// Parallax effect (for text/elements)
export const parallaxEffect = (element: HTMLElement | string, speed = 0.5) => {
  const settings = getAnimationSettings();
  if (!settings.enabled || isMobile()) return; // Disable parallax on mobile

  gsap.to(element, {
    yPercent: -50 * speed,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
};

// Draw line animation (for timelines)
export const drawLine = (element: HTMLElement | string) => {
  const settings = getAnimationSettings();
  if (!settings.enabled) return;

  gsap.fromTo(
    element,
    {
      scaleY: 0,
      transformOrigin: 'top',
    },
    {
      scaleY: 1,
      duration: settings.duration * 2, // Slightly longer
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1,
      },
    }
  );
};

// Batch animation utility
export const batchAnimate = (
  selector: string,
  animation: 'fadeSlideUp' | 'fadeScale' | 'slideFromRight'
) => {
  const elements = document.querySelectorAll(selector);
  const settings = getAnimationSettings();
  
  if (!settings.enabled || elements.length === 0) return;

  let animationProps = {};

  switch (animation) {
    case 'fadeSlideUp':
      animationProps = { opacity: 0, y: 40 };
      break;
    case 'fadeScale':
      animationProps = { opacity: 0, scale: 0.9 };
      break;
    case 'slideFromRight':
      animationProps = { opacity: 0, x: 60 };
      break;
  }

  ScrollTrigger.batch(elements, {
    onEnter: (batch) => {
      gsap.fromTo(
        batch,
        animationProps,
        {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration: settings.duration,
          ease: settings.ease,
          stagger: settings.stagger,
        }
      );
    },
    start: 'top 80%',
  });
};

// Refresh ScrollTrigger (call after DOM changes)
export const refreshScrollTrigger = () => {
  ScrollTrigger.refresh();
};

// Kill all ScrollTriggers (cleanup)
export const killAllScrollTriggers = () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
};