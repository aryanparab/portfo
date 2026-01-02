// components/sections/About.tsx - 3-way split with Image Scroller and proper containers

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedTitle } from '@/components/shared/AnimatedTitle';
import { ImageScroller } from '@/components/shared/ImageScroller';
import { aboutData } from '@/data/about';

export const About: React.FC = () => {
  // Portfolio images - add your image paths here
  const images = [
    "/images/pokedeximg1.png",
  ];

  return (
    <section className="min-h-screen w-full py-20 px-4">
      {/* Container wrapper for entire section */}
      <div className="max-w-[1400px] mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <AnimatedTitle variant="letterStagger">
            ABOUT ME
          </AnimatedTitle>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 w-24 mx-auto mt-6"
            style={{
              background: 'linear-gradient(90deg, transparent, #F8E45F, transparent)',
              boxShadow: '0 0 10px rgba(248, 228, 95, 0.5)',
            }}
          />
        </div>

        {/* TOP HALF - Split Left/Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* LEFT - Story Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="backdrop-blur-md rounded-2xl p-8 flex flex-col justify-center"
            style={{
              background: 'rgba(0, 0, 0, 0.5)',
              border: '1px solid rgba(248, 228, 95, 0.3)',
              boxShadow: '0 0 40px rgba(248, 228, 95, 0.1)',
            }}
          >
            {/* Greeting */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl md:text-3xl font-bold mb-6"
              style={{
                color: '#F8E45F',
                fontFamily: 'Orbitron, sans-serif',
                textShadow: '0 0 10px rgba(248, 228, 95, 0.3)',
              }}
            >
              {aboutData.greeting}
            </motion.h3>

            {/* Story Paragraphs */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4 text-base md:text-lg leading-relaxed"
              style={{ color: 'rgba(255, 255, 255, 0.85)' }}
            >
              {aboutData.story.map((paragraph, idx) => (
                <p key={idx}>
                  {/* Highlight key terms in golden */}
                  {paragraph.split(/(full-stack developer|AI\/ML integration|LLMs|RAG systems|deep learning)/gi).map((part, partIdx) => {
                    const isHighlight = /full-stack developer|AI\/ML integration|LLMs|RAG systems|deep learning/i.test(part);
                    return isHighlight ? (
                      <span key={partIdx} style={{ color: '#F8E45F', fontWeight: 600 }}>
                        {part}
                      </span>
                    ) : (
                      part
                    );
                  })}
                </p>
              ))}
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-4 mt-8 pt-6"
              style={{ borderTop: '1px solid rgba(248, 228, 95, 0.2)' }}
            >
              {aboutData.stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div
                    className="text-3xl font-bold mb-1"
                    style={{ color: '#F8E45F', fontFamily: 'Orbitron, sans-serif' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT - Image Scroller */}
 <motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: false, amount: 0.3 }}
  transition={{ duration: 0.8, delay: 0.2 }}
   className="w-full h-full object-cover rounded-2xl"
    
  style={{
    minHeight: '500px',
  }}
>
  <ImageScroller images={images} autoPlayInterval={4000} />
</motion.div>
        </div>

        {/* BOTTOM HALF - Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="backdrop-blur-md rounded-2xl p-8"
          style={{
            background: 'rgba(0, 0, 0, 0.5)',
            border: '1px solid rgba(248, 228, 95, 0.3)',
            boxShadow: '0 0 40px rgba(248, 228, 95, 0.1)',
          }}
        >
          <h3
            className="text-2xl md:text-3xl font-bold mb-8 text-center"
            style={{
              color: '#F8E45F',
              fontFamily: 'Orbitron, sans-serif',
              textShadow: '0 0 10px rgba(248, 228, 95, 0.3)',
            }}
          >
            TECHNICAL SKILLS
          </h3>

          {/* Constrained skills grid */}
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(aboutData.technicalSkills).map(([category, skills], categoryIdx) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.6 + categoryIdx * 0.1 }}
                  className="space-y-3"
                >
                  {/* Category Title */}
                  <h4
                    className="text-lg font-semibold pb-2 mb-3"
                    style={{
                      color: '#F8E45F',
                      fontFamily: 'Orbitron, sans-serif',
                      borderBottom: '2px solid rgba(248, 228, 95, 0.3)',
                    }}
                  >
                    {category}
                  </h4>

                  {/* Skills List */}
                  <div className="space-y-2">
                    {skills.map((skill, skillIdx) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{
                          duration: 0.4,
                          delay: 0.8 + categoryIdx * 0.1 + skillIdx * 0.05,
                        }}
                        className="group flex items-center space-x-2"
                      >
                        {/* Bullet point */}
                        <motion.div
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ background: '#F8E45F', boxShadow: '0 0 5px rgba(248, 228, 95, 0.5)' }}
                          whileHover={{ scale: 1.5 }}
                        />
                        
                        {/* Skill name */}
                        <span
                          className="text-sm group-hover:translate-x-1 transition-transform duration-200"
                          style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                        >
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};