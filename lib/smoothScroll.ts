// lib/smoothScroll.ts - SIMPLE VERSION (No Lenis - just animations)

// Empty implementation - animations will still work!
// This is for if Lenis causes issues

let lenis: any = null;

export const initSmoothScroll = () => {
  // Do nothing - use native scroll
  console.log('Using native scroll (Lenis disabled)');
  return null;
};

export const destroySmoothScroll = () => {
  // Do nothing
};

export const getLenis = () => null;