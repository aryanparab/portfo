// components/sections/Experience.tsx - Fixed Colors (Less Golden)

"use client";

import React from 'react';
import { experienceData } from '@/data/experience';
import { TechTag } from '@/components/shared/TechTag';
import { Timeline } from '@/components/ui/timeline';
import { AnimatedTitle } from '../shared/AnimatedTitle';
import { Tab } from 'three/examples/jsm/inspector/ui/Tab.js';

export const Experience: React.FC = () => {
  // Transform experience data for Timeline
  // Company/College becomes the BIG title!
  const timelineData = experienceData.timeline.map((exp) => ({
    title: exp.company, // ← Company/College as MAIN TITLE (now white in Timeline)
    content: (
      <div
        className="backdrop-blur-xl rounded-xl p-5 md:p-6 mb-6 transition-all duration-300 hover:shadow-2xl group"
        style={{
          background: 'rgba(0, 0, 0, 0.4)',
          border: '1px solid rgba(248, 228, 95, 0.2)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(248, 228, 95, 0.5)';
          e.currentTarget.style.boxShadow = '0 8px 30px rgba(248, 228, 95, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(248, 228, 95, 0.2)';
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        }}
      >
        {/* Date Badge - Compact */}
        <div
          className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold mb-3"
          style={{
            background: 'rgba(248, 228, 95, 0.15)',
            color: '#F8E45F',
            border: '1px solid rgba(248, 228, 95, 0.3)',
            fontFamily: 'Orbitron, sans-serif',
          }}
        >
          {exp.duration}
        </div>

        {/* Job Title (subtitle) - GOLDEN (this stays golden as it's key info) */}
        <h4
          className="text-xl md:text-2xl font-bold mb-3"
          style={{
            color: '#F8E45F',
            fontFamily: 'Orbitron, sans-serif',
            textShadow: '0 0 10px rgba(248, 228, 95, 0.2)',
          }}
        >
          {exp.title} | {exp.type}
        </h4>

        {/* Description - Compact */}
        <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
  {exp.description.map((point, idx) => (
    <li key={idx}>{point}</li>
  ))}
</ul>
<br></br>
        {/* Technologies - Compact & Smart Display */}
        <div className="flex flex-wrap gap-1.5">
          {exp.skills.slice(0, 6).map((tech, techIdx) => (
            <span
              key={techIdx}
              className="px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-200"
              style={{
                background: 'rgba(248, 228, 95, 0.1)',
                border: '1px solid rgba(248, 228, 95, 0.25)',
                color: '#F8E45F',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(248, 228, 95, 0.2)';
                e.currentTarget.style.borderColor = 'rgba(248, 228, 95, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(248, 228, 95, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(248, 228, 95, 0.25)';
              }}
            >
              {tech}
            </span>
          ))}
          {exp.skills.length > 6 && (
            <span
              className="px-2.5 py-1 rounded-md text-xs font-medium"
              style={{
                background: 'rgba(248, 228, 95, 0.05)',
                border: '1px solid rgba(248, 228, 95, 0.15)',
                color: 'rgba(248, 228, 95, 0.6)',
              }}
            >
              +{exp.skills.length - 6}
            </span>
          )}
        </div>
      </div>
    ),
  }));

  return (
    <div className="min-h-screen w-full py-16 px-4">
      {/* Section Header - Compact */}
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <AnimatedTitle variant='glitch' className="mb-3">
          EXPERIENCE
        </AnimatedTitle>
        
        <div
          className="h-0.5 w-16 mx-auto mb-4"
          style={{
            background: 'linear-gradient(90deg, transparent, #F8E45F, transparent)',
            boxShadow: '0 0 10px rgba(248, 228, 95, 0.5)',
          }}
        />
        
        <p
          className="text-sm md:text-base"
          style={{ 
            color: 'rgba(255, 255, 255, 0.6)',
            fontFamily: 'Orbitron, sans-serif',
          }}
        >
          My journey through companies and institutions
        </p>
      </div>

      {/* Timeline Component */}
      <Timeline data={timelineData} />
    </div>
  );
};