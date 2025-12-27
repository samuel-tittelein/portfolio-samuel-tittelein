import type { CompetenceGroup } from "./CompetenceGroup";

const groups: CompetenceGroup[] = [
	{
		title: "Développement d'applications web",
		items: [
			"Python",
			"Java",
			"PHP",
			"HTML / CSS",
			"JavaScript / TypeScript",
			"C++",
		],
	},
	{
		title: "Frameworks",
		items: [
			"Django",
			"React",
			"Laravel",
			"Flask",
			"Angular",
			"Spring",
		],
	},
	{
		title: "Base de données",
		items: [
			"SQL / SGBD",
			"SQLite",
			"PostgreSQL",
			"MongoDB",
		],
	},
	{
		title: "Système et Réseau",
		items: [
			"Windows",
			"Linux",
			"Bash",
			"Routage",
			"Docker / Podman",
		],
	},
	{
		title: "Outils et méthodologies",
		items: [
			"Git / GitHub / GitLab",
			"Scrum",
			"API REST",
			"JUnit / Selenium",
			"Visual Studio Code / JetBrains IDE",
			"Semantic versioning",
		],
	},
	{
		title: "IA et Machine Learning",
		items: [
			"NumPy / Pandas / Matplotlib",
			"PyTorch",
			"Réseaux de neurones",
			"Apprentissage supervisé",
			"Apprentissage renforcé",
			"Modèles de prédiction/décision",
		],
	},
	{
		title: "Langues",
		items: [
			"Français (langue maternelle)",
			"Anglais (courant, informatique)",
			"Allemand (notions)",
		],
	},
];

export default function Competences() {
	return (
		<section id="competences" className="py-8">
			<div className="mb-8">
				<h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-2">
					Compétences
				</h2>
				<p className="text-slate-600 dark:text-slate-400">
					Technologies et méthodologies maîtrisées.
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
				{groups.map((group) => (
					<div key={group.title} className="space-y-2">
						<h3 className="font-semibold text-lg text-slate-900 dark:text-slate-50">
							{group.title}
						</h3>
						<div className="flex flex-wrap gap-2">
							{group.items.map((item) => (
								<span
									key={item}
									className="inline-block px-3 py-1 text-sm bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md border border-slate-200 dark:border-slate-700"
								>
									{item}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
