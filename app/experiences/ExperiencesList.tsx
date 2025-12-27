import type { Experience } from "./Experience";

const experiences: Experience[] = [
  {
    title: "Stage en développement informatique",
    place: "Cliss XXI - SCIC spécialisée dans le développement de logiciels libres",
    period: "Avril - Juin 2025",
    detail:
      "Stage de 8 semaines en développement Python Django. Participation au développement de logiciels libres et contribution aux projets open source de l'entreprise.",
  },
  {
    title: "6 Camps scouts - Encadrement et direction",
    place: "Mouvement scout",
    period: "Été 2023 - 2025",
    detail:
      "Encadrement bénévole de jeunes de 6 à 17 ans sur des périodes allant jusqu'à 3 semaines. Direction d'un camp de 2 semaines à l'été 2025. Gestion de groupe, organisation d'activités et responsabilités logistiques.",
  },
  {
    title: "Stage d'observation en réalité virtuelle",
    place: "Virtual Lab - Université Lyon 1",
    period: "Été 2021",
    detail:
      "Stage d'une semaine dans un laboratoire de réalité virtuelle. Découverte des technologies immersives et des applications de la VR dans la recherche universitaire.",
  },
];

export default function ExperiencesList() {
  return (
    <section id="experiences" className="py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-2">
          Expériences
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          Développement logiciel et encadrement de groupes.
        </p>
      </div>
      <div className="relative border-l-2 border-slate-200 dark:border-slate-700 pl-8 space-y-8" aria-label="Frise des expériences">
        {experiences.map((item) => (
          <article className="relative" key={item.title}>
            <div className="absolute -left-[41px] top-2 w-3 h-3 bg-emerald-500 rounded-full border-4 border-white dark:border-slate-900" />
            <h3 className="font-bold text-lg text-slate-900 dark:text-slate-50 mb-1">
              {item.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
              {item.place} · {item.period}
            </p>
            <p className="text-slate-700 dark:text-slate-300">{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
