// components/ui/timeline.tsx - Aesthetic Timeline with Golden Theme

"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full font-sans md:px-10"
      ref={containerRef}
    >
      {/* Removed redundant header - handled by Experience.tsx */}
      
      <div ref={ref} className="relative max-w-7xl mx-auto pb-12">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-8 md:pt-20 md:gap-10"
          >
            {/* Left side - Sticky Company/College Name */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-32 self-start max-w-xs lg:max-w-sm md:w-full">
              {/* Timeline Dot */}
              <div 
                className="h-10 absolute left-3 md:left-3 w-10 rounded-full flex items-center justify-center"
                style={{
                  background: 'rgba(0, 0, 0, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(248, 228, 95, 0.5)',
                  boxShadow: '0 0 20px rgba(248, 228, 95, 0.3)',
                }}
              >
                <div 
                  className="h-3 w-3 rounded-full"
                  style={{
                    background: '#F8E45F',
                    boxShadow: '0 0 10px rgba(248, 228, 95, 0.6)',
                  }}
                />
              </div>
              
              {/* Company/College Name - Desktop */}
              <h3 
                className="hidden md:block text-3xl md:pl-20 md:text-4xl lg:text-5xl font-bold"
                style={{
                  color: '#F8E45F',
                  fontFamily: 'Orbitron, sans-serif',
                  textShadow: '0 0 20px rgba(248, 228, 95, 0.3)',
                }}
              >
                {item.title}
              </h3>
            </div>

            {/* Right side - Content */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              {/* Company/College Name - Mobile */}
              <h3 
                className="md:hidden block text-2xl mb-4 text-left font-bold"
                style={{
                  color: '#F8E45F',
                  fontFamily: 'Orbitron, sans-serif',
                  textShadow: '0 0 20px rgba(248, 228, 95, 0.3)',
                }}
              >
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        
        {/* Timeline Line with Golden Gradient */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          {/* Base line */}
          <div 
            className="absolute inset-0 w-[2px]"
            style={{
              background: 'linear-gradient(to bottom, transparent 0%, rgba(248, 228, 95, 0.2) 10%, rgba(248, 228, 95, 0.2) 90%, transparent 100%)',
            }}
          />
          
          {/* Animated golden progress line */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full"
          >
            <div
              className="w-full h-full"
              style={{
                background: 'linear-gradient(to bottom, #F8E45F 0%, rgba(248, 228, 95, 0.8) 50%, transparent 100%)',
                boxShadow: '0 0 10px rgba(248, 228, 95, 0.5)',
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};