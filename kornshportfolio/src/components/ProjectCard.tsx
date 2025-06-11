"use client";

// Composant ProjectCard pour afficher un projet
import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  stack: string[];
  github?: string;
  demo?: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, stack, github, demo, className }) => (
  <div
    className={`rounded-lg p-4 shadow-sm transition-all duration-200 cursor-pointer ${className || ''}`.trim()}
    style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', color: 'var(--foreground)' }}
    onMouseEnter={e => {
      (e.currentTarget as HTMLDivElement).style.background = 'var(--section-title)';
      (e.currentTarget as HTMLDivElement).style.color = '#fff';
    }}
    onMouseLeave={e => {
      (e.currentTarget as HTMLDivElement).style.background = 'var(--card-bg)';
      (e.currentTarget as HTMLDivElement).style.color = 'var(--foreground)';
    }}
  >
    <div className="font-semibold text-lg mb-2">{title}</div>
    <div className="text-sm opacity-80 mb-2">{description}</div>
    <div className="flex flex-wrap gap-2 mb-2">
      {stack.map((tech) => (
        <span key={tech} className="px-2 py-0.5 rounded bg-blue-100 dark:bg-cyan-900 text-xs text-blue-800 dark:text-cyan-200">
          {tech}
        </span>
      ))}
    </div>
    <div className="flex gap-4 mt-2">
      {github && <a href={github} target="_blank" rel="noopener noreferrer" className="underline text-blue-600 dark:text-cyan-400">Code</a>}
      {demo && <a href={demo} target="_blank" rel="noopener noreferrer" className="underline text-blue-600 dark:text-cyan-400">Démo</a>}
    </div>
  </div>
);

export default ProjectCard;
