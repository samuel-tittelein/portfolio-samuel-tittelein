import ProjectCard from "./ProjectCard";
import type { Project } from "./Project";

const projects: Project[] = [
	{
		title: "Super sweet click party bonaza 2000",
		description:
			"Jeu vidéo réalisé en 30 heures dans le cadre de la Code Game Jam 2026, sur le thème \"Fête des clics\".",
		stack: ["lua", "Löve2D"],
		image: "/jam.png",
		repo: "https://github.com/samuel-tittelein/Super-sweet-click-party-bonaza-2000",
	},
	{
		title: "Crème Center Fibois",
		description:
			"Contribution à un logiciel libre : un CRM pour Fibois. J'ai développé une fonctionalité pour synchroniser les données de l'application avec une base de données externe, en utilisant une API REST.",
		stack: ["Python", "Django"],
		image: "/creme_center_fibois.png",
		repo: "https://forge.cliss21.org/cliss21/creme_center_fibois",
	},
	{
		title: "Recettes Gourmandes",
		description:
			"Site web pour partager mes recettes maison testées et approuvées. Toutes les recettes sont délicieuses, économiques et faciles à réaliser.",
		stack: ["HTML", "CSS", "Js"],
		image: "/recettes.png",
		repo: "https://github.com/samuel-tittelein/recettes",
	},
	{
		title: "Portfolio",
		description:
			"Création de ce site pour présenter mes projets. Je cherche à avoir l'impact écologique le moins important possible avec ce site.",
		stack: ["Typescript", "NextJs"],
		image: "/favicon.svg",
		repo: "https://github.com/samuel-tittelein/portfolio-samuel-tittelein",
	},
	{
		title: "Détour",
		description:
			"Site de voyage réalisé dans le cadre du Marathon du Web 2024, en collaboration avec le département Multimédia.",
		stack: ["PHP", "Laravel"],
		image: "/detour.png",
		repo: "https://github.com/samuel-tittelein/detour",
	},
	{
		title: "Bomberman",
		description:
			"Recréation du jeu classique Bomberman en JavaFX réalisée dans le cadre de ma formation. Implémentation des mécaniques de jeu.",
		stack: ["Java", "JavaFX"],
		image: "/bomberman.png",
		repo: "https://github.com/samuel-tittelein/Bomberman",
	},
	{
		title: "Lens Judge",
		description:
			"Système de juge automatisé pour vérifier des programmes dans une compétition de programmation. Projet axé sur l'application des patrons de conception. (SAÉ)",
		stack: ["Java"],
		image: "/lens_judge.png",
		repo: "https://github.com/samuel-tittelein/Lens-Judge",
	},
	{
		title: "Bénévalibre",
		description:
			"Contribution à un logiciel libre qui facilite la gestion et la valorisation du bénévolat dans les associations. J'ai écrit les tests en lien avec les pages d'administration",
		stack: ["Python", "Django"],
		image: "/benevalibre.png",
		repo: "https://forge.cliss21.org/cliss21/benevalibre",
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
					Réalisations académiques et personnelles.
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
