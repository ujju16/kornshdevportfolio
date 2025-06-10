// Composant SkillCard pour afficher une compétence
import React from 'react';

interface SkillCardProps {
  name: string;
  level: 'acquise' | 'en cours' | 'à acquérir';
  icon?: React.ReactNode;
}

const levelColors = {
  'acquise': 'bg-green-100 text-green-700',
  'en cours': 'bg-yellow-100 text-yellow-700',
  'à acquérir': 'bg-gray-100 text-gray-700',
};

const SkillCard: React.FC<SkillCardProps> = ({ name, level, icon }) => (
  <div className={`flex items-center gap-3 p-4 rounded-lg shadow-md ${levelColors[level]}`}>
    {icon && <span className="text-2xl">{icon}</span>}
    <span className="font-semibold">{name}</span>
    <span className="ml-auto text-xs px-2 py-1 rounded bg-white/60 border border-gray-200">{level}</span>
  </div>
);

export default SkillCard;
