"use client";

// Composant SkillCard pour afficher une compétence
import React from 'react';

interface SkillCardProps {
  name: string;
  level: 'acquise' | 'en cours' | 'à acquérir';
  icon?: React.ReactNode;
  className?: string;
}

const levelColors = {
  'acquise': 'bg-green-100 text-green-700 border-green-400',
  'en cours': 'bg-blue-100 text-blue-700 border-blue-400',
  'à acquérir': 'bg-red-100 text-red-700 border-red-400',
};

const SkillCard: React.FC<SkillCardProps> = ({ name, level, icon, className }) => (
  <div
    className={`flex items-center gap-3 p-4 rounded-lg shadow-md transition-all duration-200 cursor-pointer border-2 ${levelColors[level]} ${className || ''}`}
    style={{ background: 'none' }}
    onMouseEnter={e => {
      (e.currentTarget as HTMLDivElement).style.background = 'var(--section-title)';
      (e.currentTarget as HTMLDivElement).style.color = '#fff';
    }}
    onMouseLeave={e => {
      (e.currentTarget as HTMLDivElement).style.background = 'none';
      (e.currentTarget as HTMLDivElement).style.color = 'var(--foreground)';
    }}
  >
    {icon && <span className="text-2xl">{icon}</span>}
    <span className="font-semibold">{name}</span>
    <span className="ml-auto text-xs px-2 py-1 rounded bg-white/60 border border-gray-200">{level}</span>
  </div>
);

export default SkillCard;
