export default function Navigation() {
	return (
		<nav
			className="fixed top-6 right-6 z-50 flex flex-wrap gap-2 max-w-sm justify-end"
			aria-label="Navigation rapide"
		>
			{[
				{ href: "#competences", label: "Compétences" },
				{ href: "#formations", label: "Formations" },
				{ href: "#experiences", label: "Expériences" },
				{ href: "#projets", label: "Projets" },
				{ href: "#interets", label: "Centres d'intérêts" },
				{ href: "#contact", label: "Contact" },
			].map((link) => (
				<a
					key={link.href}
					href={link.href}
					className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 text-slate-700 dark:text-slate-200 font-medium text-xs hover:bg-white dark:hover:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-600 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 shadow-sm"
				>
					{link.label}
				</a>
			))}
		</nav>
	);
}
