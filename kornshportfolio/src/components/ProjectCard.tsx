// Composant ProjectCard pour afficher un projet
import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  stack: string[];
  github?: string;
  demo?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, stack, github, demo }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col gap-3 hover:scale-105 transition-transform">
    <h3 className="text-lg font-bold text-blue-700">{title}</h3>
    <p className="text-gray-700">{description}</p>
    <div className="flex flex-wrap gap-2 mt-2">
      {stack.map((tech) => (
        <span key={tech} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold">{tech}</span>
      ))}
    </div>
    <div className="flex gap-4 mt-3">
      {github && <a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">GitHub</a>}
      {demo && <a href={demo} target="_blank" rel="noopener noreferrer" className="text-green-600 underline">Démo</a>}
    </div>
  </div>
);

export default ProjectCard;
