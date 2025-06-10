import Navbar from '../components/Navbar';
import AnimatedBackground from '../components/AnimatedBackground';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

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
	return (
		<main className="relative min-h-screen flex flex-col items-center justify-center">
			<AnimatedBackground />
			<Navbar />
			<section className="pt-32 pb-12 w-full max-w-4xl mx-auto text-center">
				<h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">
					Kornshdev
				</h1>
				<h2 className="text-xl md:text-2xl text-gray-700 mb-6">
					Développeur Web Fullstack - Spécialisation Android
				</h2>
				<p className="mb-8 text-gray-600 max-w-2xl mx-auto">
					Passionné par le développement mobile (Kotlin, Java, Flutter) et web
					(React, Next.js, Python, Elixir), je conçois des solutions performantes
					et modernes.
				</p>
				<div className="flex flex-wrap gap-6 justify-center mb-10">
					{recentProjects.map((proj) => (
						<ProjectCard key={proj.title} {...proj} />
					))}
				</div>
				<div className="flex gap-4 justify-center">
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
		</main>
	);
}
