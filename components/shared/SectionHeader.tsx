// components/shared/SectionHeader.tsx - Reusable section header with star

import React from 'react';

interface SectionHeaderProps {
  title: string;
  showDivider?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  showDivider = true 
}) => {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span className="text-2xl text-yellow-400 animate-pulse">✦</span>
      <h3 className="text-xl md:text-2xl uppercase font-bold text-yellow-400 tracking-wider font-['Orbitron']">
        {title}
      </h3>
      {showDivider && (
        <div className="flex-1 h-px bg-gradient-to-r from-yellow-400/50 via-yellow-400/10 to-transparent" />
      )}
    </div>
  );
};
