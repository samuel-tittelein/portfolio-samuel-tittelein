import Competences from "./competences/Competences";
import FormationsList from "./formations/FormationsList";
import ExperiencesList from "./experiences/ExperiencesList";
import ProjectsList from "./projets/ProjectsList";
import InteretsList from "./interets/InteretsList";
import ContactSection from "./contact/ContactSection";
import Header from "./header/Header";
import Navigation from "./navigation/Navigation";

export default function Home() {
	return (
		<>
			<a
				className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-emerald-600 focus:text-white focus:rounded-lg"
				href="#contenu"
			>
				Passer au contenu principal
			</a>

			<Navigation />
			<Header />

			<main id="contenu" className="max-w-5xl mx-auto px-6 py-12 space-y-16">
				<ProjectsList />
				<Competences />
				<FormationsList />
				<ExperiencesList />
				<InteretsList />
				<ContactSection />
			</main>

      <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-6 py-6 text-center text-sm text-slate-600 dark:text-slate-400">
          &copy; {new Date().getFullYear()} Samuel Tittelein. Tous droits réservés.
        </div>
      </footer>
		</>
	);
}
