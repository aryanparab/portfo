// components/sections/Contact.tsx - Contact section with View Resume button

"use client";

import React from 'react';
import { Mail, Download, Linkedin, Github, Twitter, Eye, FileText } from 'lucide-react';
import { contactData } from '@/data/contact';
import { AnimatedTitle } from '@/components/shared/AnimatedTitle';
import { motion } from 'framer-motion';

// Icon mapping
const iconMap: Record<string, React.ComponentType<any>> = {
  Linkedin,
  Github,
  Twitter,
  Mail,
};

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-3xl">
        {/* Title */}
        <AnimatedTitle variant="wave" className="mb-6">
          {contactData.title}
        </AnimatedTitle>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-0.5 w-20 mx-auto mb-8"
          style={{
            background: 'linear-gradient(90deg, transparent, #F8E45F, transparent)',
            boxShadow: '0 0 10px rgba(248, 228, 95, 0.5)',
          }}
        />

        {/* Subtitle */}
        {contactData.subtitle.map((line, idx) => (
          <motion.p
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.5 + idx * 0.2 }}
            className="text-base md:text-lg mb-3"
            style={{ color: 'rgba(255, 255, 255, 0.7)' }}
          >
            {line}
          </motion.p>
        ))}

        {/* Contact & Resume Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10 mb-10"
        >
          {/* Contact Me Button */}
          <a
            href={`mailto:${contactData.email}`}
            className="group px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
            style={{
              color: '#000',
              background: '#F8E45F',
              border: '2px solid #F8E45F',
              fontFamily: 'Orbitron, sans-serif',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#F8E45F';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(248, 228, 95, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#F8E45F';
              e.currentTarget.style.color = '#000';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <Mail size={20} />
            <span>Contact Me</span>
          </a>

          {/* View Resume Button */}
          {contactData.resumeUrl && (
            <a
              href={contactData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              style={{
                color: '#F8E45F',
                background: 'transparent',
                border: '2px solid #F8E45F',
                fontFamily: 'Orbitron, sans-serif',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#F8E45F';
                e.currentTarget.style.color = '#000';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(248, 228, 95, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#F8E45F';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Eye size={20} />
              <span>View Resume</span>
            </a>
          )}

          {/* Download Resume Button */}
          {contactData.resumeUrl && (
            <a
              href={contactData.resumeUrl}
              download
              className="group px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              style={{
                color: '#F8E45F',
                background: 'transparent',
                border: '2px solid rgba(248, 228, 95, 0.5)',
                fontFamily: 'Orbitron, sans-serif',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(248, 228, 95, 0.1)';
                e.currentTarget.style.borderColor = '#F8E45F';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(248, 228, 95, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(248, 228, 95, 0.5)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Download size={20} />
              <span>Download</span>
            </a>
          )}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex gap-6 justify-center"
        >
          {contactData.social.map((social, idx) => {
            const Icon = iconMap[social.icon];
            return (
              <motion.a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: 1.3 + idx * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="transition-all duration-300"
                style={{
                  color: 'rgba(248, 228, 95, 0.6)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#F8E45F';
                  e.currentTarget.style.filter = 'drop-shadow(0 0 10px rgba(248, 228, 95, 0.5))';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(248, 228, 95, 0.6)';
                  e.currentTarget.style.filter = 'none';
                }}
              >
                {Icon && <Icon size={28} />}
              </motion.a>
            );
          })}
        </motion.div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-12 text-xs"
          style={{
            color: 'rgba(248, 228, 95, 0.4)',
            fontFamily: 'Orbitron, sans-serif',
          }}
        >
          <p>Let's build something amazing together ✨</p>
        </motion.div>
      </div>
    </div>
  );
};