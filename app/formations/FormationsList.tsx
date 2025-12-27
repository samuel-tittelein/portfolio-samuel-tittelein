import type { Formation } from "./Formation";

const formations: Formation[] = [
  {
    title: "BUT Informatique (3ème année en cours)",
    school: "Institut Universitaire de Technologie",
    location: "LENS",
    period: "2022 - Aujourd'hui",
    detail: "Formation en développement d'applications web, bases de données, systèmes et réseaux.",
  },
  {
    title: "BAFA bienveillance bientraitance",
    school: "Formation d'animateur + module direction de camps scouts",
    location: "",
    period: "2025",
    detail: "Encadrement de jeunes, gestion de groupes, animation et direction de camps.",
  },
  {
    title: "Baccalauréat Mathématiques-Informatique",
    school: "Lycée Gambetta-Carnot",
    location: "ARRAS",
    period: "2023",
    detail: "Spécialité mathématiques et numérique & sciences informatiques.",
  },
];

export default function FormationsList() {
  return (
    <section id="formations" className="py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-2">
          Formations
        </h2>
      </div>
      <div className="relative border-r-2 border-slate-200 dark:border-slate-700 pr-8 space-y-8" aria-label="Frise des formations">
        {formations.map((item, index) => (
          <article className="relative text-right" key={item.title}>
            <div className="absolute -right-[41px] top-2 w-3 h-3 bg-emerald-500 rounded-full border-4 border-white dark:border-slate-900" />
            <h3 className="font-bold text-lg text-slate-900 dark:text-slate-50 mb-1">
              {item.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
              {item.school}
              {item.location && ` · ${item.location}`} · {item.period}
            </p>
            {item.detail && <p className="text-slate-700 dark:text-slate-300">{item.detail}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}
