// components/shared/TechTag.tsx - Reusable technology tag

import React from 'react';

interface TechTagProps {
  children: React.ReactNode;
  className?: string;
}

export const TechTag: React.FC<TechTagProps> = ({ children, className = '' }) => {
  return (
    <span 
      className={`
        px-3 py-1.5 
        bg-purple-500/10 
        border border-purple-500/30 
        text-purple-200 
        rounded-md 
        text-sm 
        transition-all duration-300 
        hover:bg-purple-500/20 
        hover:border-purple-500/50 
        hover:-translate-y-0.5
        ${className}
      `}
    >
      {children}
    </span>
  );
};
