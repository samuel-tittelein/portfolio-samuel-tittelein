const interets: string[] = [
  "Scoutisme",
  "Cirque",
  "Cyclisme",
  "Dessin",
  "Fêtes médiévales",
  "Jeux vidéo",
  "Écologie",
  "Programmation compétitive",
];

export default function InteretsList() {
  return (
    <section id="interets" className="py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-2">
          Centres d'intérêts
        </h2>
      </div>
      <p>
        {interets.map((interest) => (
          <span key={interest}>
            {interest}
            {interets.indexOf(interest) < interets.length - 1 && " · "}
          </span>
        ))}
      </p>
    </section>
  );
}
