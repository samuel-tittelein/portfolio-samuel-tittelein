import ProjectCard from "./ProjectCard";
import type { Project } from "./Project";

const projects: Project[] = [
	{
		title: "Recettes Gourmandes",
		description:
			"Site web pour partager mes recettes maison testées et approuvées. Toutes les recettes sont délicieuses, économiques et faciles à réaliser.",
		stack: ["HTML", "CSS"],
		image: "/recettes.png",
		repo: "https://github.com/samuel-tittelein/recettes",
	},
	{
		title: "Bomberman",
		description:
			"Recréation du jeu classique Bomberman en JavaFX réalisée dans le cadre de ma formation. Implémentation complète des mécaniques de jeu et de l'interface graphique.",
		stack: ["Java", "JavaFX"],
		image: "/bomberman.png",
		repo: "https://github.com/samuel-tittelein/Bomberman",
	},
	{
		title: "Lens Judge",
		description:
			"Système de juge automatisé pour vérifier des programmes dans une compétition de programmation. Projet axé sur l'application des patrons de conception.",
		stack: ["Java"],
		image: "/lens_judge.png",
		repo: "https://github.com/samuel-tittelein/Lens-Judge",
	},
];

export default function ProjectsList() {
	return (
		<section id="projets" className="py-8">
			<div className="mb-8">
				<h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-2">
					Projets
				</h2>
				<p className="text-slate-600 dark:text-slate-400">
					Réalisations académiques et professionnelles.
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{projects.map((project) => (
					<ProjectCard key={project.title} project={project} />
				))}
			</div>
		</section>
	);
}
