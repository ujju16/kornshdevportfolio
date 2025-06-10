import React from 'react';
import Navbar from '../../components/Navbar';
import SkillCard from '../../components/SkillCard';
import Footer from '../../components/Footer';

const skills = [
  { name: 'Kotlin', level: 'acquise' as const },
  { name: 'Java', level: 'acquise' as const },
  { name: 'Flutter', level: 'acquise' as const },
  { name: 'Android Studio', level: 'acquise' as const },
  { name: 'Python', level: 'acquise' as const },
  { name: 'JavaScript', level: 'acquise' as const },
  { name: 'Elixir', level: 'en cours' as const },
  { name: 'React', level: 'acquise' as const },
  { name: 'CSS', level: 'acquise' as const },
  { name: 'HTML', level: 'acquise' as const },
  { name: 'TypeScript', level: 'en cours' as const },
  { name: 'Node.js', level: 'en cours' as const },
  { name: 'GraphQL', level: 'à acquérir' as const },
  { name: 'Docker', level: 'à acquérir' as const },
];

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-12">
      <Navbar />
      <section className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-blue-700 mb-8 text-center">Compétences</h1>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-green-700">Compétences acquises</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.filter(s => s.level === 'acquise').map(skill => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-yellow-700">En cours d’acquisition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.filter(s => s.level === 'en cours').map(skill => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-700">À acquérir</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.filter(s => s.level === 'à acquérir').map(skill => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
