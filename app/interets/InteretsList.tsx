import Image from "next/image";

const interets: string[] = [
  "Scoutisme",
  "Cirque",
  "Cyclisme",
  "Dessin",
  "Fêtes médiévales",
  "Jeux vidéo",
  "Écologie",
  "Programmation compétitive",
  "Jeux de société",
];

export default function InteretsList() {
  return (
    <section id="interets" className="py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-2">
          Centres d'intérêts
        </h2>
      </div>
      <div className="flex flex-row gap-8 items-start">
        <Image
          src="/centres_interets.webp"
          alt="centres d'intérêt"
          width={480}
          height={320}
          className="w-full max-w-sm h-auto rounded-lg"
        />
        <ul>
          {interets.map((interest) => (
            <li key={interest}>
              {interest}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
