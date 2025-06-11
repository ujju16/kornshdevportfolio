import { useState } from 'react';
import Navbar from '../components/Navbar';
import AnimatedBackground from '../components/AnimatedBackground';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import SocialShare from '../components/SocialShare';

const recentProjects = [
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
];

export default function HomePage() {
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<main
			className="relative min-h-screen flex flex-col items-center justify-center"
			style={{ background: 'none' }}
		>
			<AnimatedBackground />
			<Navbar onMenuToggle={setIsNavOpen} />
			<section className="pt-32 pb-32 w-full max-w-4xl mx-auto text-center" style={{ background: 'none' }}>
				<h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">
					Kornshdev
				</h1>
				<h2 className="text-xl md:text-2xl text-gray-700 mb-6">
					Développeur Web Fullstack - Spécialisation Android
				</h2>
				<p className={`mt-4 text-lg text-center max-w-2xl mx-auto mb-8 transition-colors duration-300 ${isNavOpen ? 'text-black' : 'text-black dark:text-gray-300'}` }>
					Développeur web fullstack & Android passionné, je conçois des applications modernes, performantes et élégantes.
				</p>
				<div className="flex flex-wrap gap-6 justify-center mb-10 mt-8">
					{recentProjects.map((proj) => (
						<ProjectCard key={proj.title} {...proj} />
					))}
				</div>
				<div className="flex gap-4 justify-center mt-10 mb-10">
					<a
						href="/projects"
						className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition"
					>
						Voir tous les projets
					</a>
					<a
						href="/contact"
						className="bg-gray-200 text-blue-700 px-6 py-2 rounded shadow hover:bg-gray-300 transition"
					>
						Contact
					</a>
				</div>
			</section>
			<Footer />
			<SocialShare className="justify-center mb-8" />
		</main>
	);
}
