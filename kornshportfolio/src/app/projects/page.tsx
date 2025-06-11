import React from 'react';
import Navbar from '../../components/Navbar';
import ProjectCard from '../../components/ProjectCard';
import Footer from '../../components/Footer';

const projects = [
	{
		title: 'App Android Kotlin',
		description: 'Application mobile Android native développée en Kotlin.',
		stack: ['Kotlin', 'Android Studio'],
		github: '#',
		demo: '#',
	},
	{
		title: 'API Backend Elixir',
		description: 'API REST performante réalisée avec Elixir et Phoenix.',
		stack: ['Elixir', 'Phoenix'],
		github: '#',
		demo: '#',
	},
	{
		title: 'Portfolio Next.js',
		description: 'Ce portfolio moderne avec Next.js, React et Tailwind CSS.',
		stack: ['Next.js', 'React', 'Tailwind CSS'],
		github: '#',
		demo: '#',
	},
	{
		title: 'App Flutter',
		description: 'Application multiplateforme réalisée avec Flutter.',
		stack: ['Flutter', 'Dart'],
		github: '#',
		demo: '#',
	},
	{
		title: 'Backend Python',
		description: 'API backend robuste en Python (FastAPI).',
		stack: ['Python', 'FastAPI'],
		github: '#',
		demo: '#',
	},
];

export default function ProjectsPage() {
	return (
		<main className="min-h-screen pt-24 pb-12">
			<Navbar />
			<section className="max-w-4xl mx-auto px-4 rounded-lg shadow-md my-8" style={{ background: 'var(--section-bg)' }}>
				<h1 className="text-3xl font-bold mb-8 text-center section-title">Projets</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{projects.map((project) => (
						<ProjectCard key={project.title} {...project} className="project-card" />
					))}
				</div>
			</section>
			<Footer />
		</main>
	);
}
