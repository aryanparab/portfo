// components/shared/SpaceBackground.tsx - THREE.js based deep space with 15,000+ stars

"use client";

import React, { useEffect, useRef } from 'react';

export const SpaceBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Dynamically import THREE.js (client-side only)
    import('three').then((THREE) => {
      if (!containerRef.current) return;

      // Scene setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        2000
      );
      camera.position.z = 0;

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      containerRef.current.appendChild(renderer.domElement);

      // Create circle texture for stars
      const createCircleTexture = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext('2d')!;
        const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        gradient.addColorStop(0, 'rgba(255,255,255,1)');
        gradient.addColorStop(0.2, 'rgba(255,255,255,0.8)');
        gradient.addColorStop(0.4, 'rgba(255,255,255,0.3)');
        gradient.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 32, 32);
        return new THREE.CanvasTexture(canvas);
      };

      // Main star field - 15,000 stars in 3D space
      const starGeometry = new THREE.BufferGeometry();
      const starCount = 15000;
      const positions = new Float32Array(starCount * 3);
      const colors = new Float32Array(starCount * 3);
      const sizes = new Float32Array(starCount);

      for (let i = 0; i < starCount; i++) {
        const i3 = i * 3;
        // Spherical distribution
        const radius = Math.random() * 600 + 50;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos((Math.random() * 2) - 1);

        positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i3 + 2] = radius * Math.cos(phi) - 200;

        // Brightness variation
        const brightness = Math.random() * 0.3 + 0.7;
        colors[i3] = brightness;
        colors[i3 + 1] = brightness;
        colors[i3 + 2] = brightness + 0.15; // Slight blue tint

        // Size variation
        const sizeRandom = Math.random();
        if (sizeRandom > 0.96) {
          sizes[i] = Math.random() * 2.5 + 2; // Large bright stars
        } else if (sizeRandom > 0.80) {
          sizes[i] = Math.random() * 1.2 + 0.8; // Medium stars
        } else {
          sizes[i] = Math.random() * 0.8 + 0.3; // Small distant stars
        }
      }

      starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      starGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      starGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

      const starMaterial = new THREE.PointsMaterial({
        size: 2,
        vertexColors: true,
        transparent: true,
        opacity: 1.0,
        sizeAttenuation: true, // Closer stars appear larger
        blending: THREE.AdditiveBlending, // Glow effect
        map: createCircleTexture(),
        depthWrite: false
      });

      const stars = new THREE.Points(starGeometry, starMaterial);
      scene.add(stars);

      // Foreground stars - 500 stars closer to camera
      const fgStarGeometry = new THREE.BufferGeometry();
      const fgStarCount = 500;
      const fgPositions = new Float32Array(fgStarCount * 3);
      const fgColors = new Float32Array(fgStarCount * 3);
      const fgSizes = new Float32Array(fgStarCount);

      for (let i = 0; i < fgStarCount; i++) {
        const i3 = i * 3;
        fgPositions[i3] = (Math.random() - 0.5) * 300;
        fgPositions[i3 + 1] = (Math.random() - 0.5) * 300;
        fgPositions[i3 + 2] = (Math.random() * 80) - 20; // Closer to camera

        fgColors[i3] = 1.0;
        fgColors[i3 + 1] = 1.0;
        fgColors[i3 + 2] = 1.0;

        fgSizes[i] = Math.random() * 1.5 + 0.6;
      }

      fgStarGeometry.setAttribute('position', new THREE.BufferAttribute(fgPositions, 3));
      fgStarGeometry.setAttribute('color', new THREE.BufferAttribute(fgColors, 3));
      fgStarGeometry.setAttribute('size', new THREE.BufferAttribute(fgSizes, 1));

      const fgStarMaterial = new THREE.PointsMaterial({
        size: 2.5,
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
        sizeAttenuation: true,
        blending: THREE.AdditiveBlending,
        map: createCircleTexture(),
        depthWrite: false
      });

      const foregroundStars = new THREE.Points(fgStarGeometry, fgStarMaterial);
      scene.add(foregroundStars);

      // Mouse parallax
      const handleMouseMove = (e: MouseEvent) => {
        mouseRef.current = {
          x: (e.clientX / window.innerWidth) * 2 - 1,
          y: -(e.clientY / window.innerHeight) * 2 + 1
        };
      };
      window.addEventListener('mousemove', handleMouseMove);

      // Handle resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener('resize', handleResize);

      // Animation loop
      let time = 0;
      const animate = () => {
        time += 0.001;

        // Mouse parallax - smooth camera movement
        camera.rotation.y += (mouseRef.current.x * 0.05 - camera.rotation.y) * 0.05;
        camera.rotation.x += (mouseRef.current.y * 0.05 - camera.rotation.x) * 0.05;

        // Subtle star rotation for depth
        stars.rotation.y += 0.0001;
        foregroundStars.rotation.y -= 0.0002;
        foregroundStars.rotation.x += 0.0001;

        // Twinkling effect - modify star opacities
        const starSizes = starGeometry.attributes.size.array as Float32Array;
        for (let i = 0; i < starCount; i++) {
          const originalSize = sizes[i];
          const twinkle = Math.sin(time * 3 + i * 0.1) * 0.3 + 0.7;
          starSizes[i] = originalSize * twinkle;
        }
        starGeometry.attributes.size.needsUpdate = true;

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      };

      animate();

      // Cleanup
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
        if (containerRef.current && renderer.domElement) {
          containerRef.current.removeChild(renderer.domElement);
        }
        renderer.dispose();
        starGeometry.dispose();
        starMaterial.dispose();
        fgStarGeometry.dispose();
        fgStarMaterial.dispose();
      };
    });
  }, []);

  return (
    <>
      {/* THREE.js container */}
      <div
        ref={containerRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />
      {/* Dark overlay for text readability */}
      <div
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
        style={{
          zIndex: 2,
          background: 'rgba(0, 0, 0, 0.35)'
        }}
      />
    </>
  );
};