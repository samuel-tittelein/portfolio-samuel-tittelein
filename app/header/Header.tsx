export default function Header() {
	return (
		<header className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 border-b border-slate-200 dark:border-slate-800">
			<div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
				<div className="flex flex-col gap-6">
					<div>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-50 mb-4 tracking-tight">
							Samuel Tittelein
						</h1>
						<p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
							Informaticien étudiant en 3ème année de BUT Informatique. Créatif et
							volontaire, je cherche à développer mes compétences en informatique,
							plus particulièrement en développement d'applications.
						</p>
					</div>
				</div>
			</div>
		</header>
	);
}
