export default function ContactSection() {
  return (
    <section id="contact" className="py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-2">
          Contact
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          href="mailto:samuel.tittelein@gmail.com"
        >
          samuel.tittelein@gmail.com
        </a>
        <a
          className="inline-flex items-center justify-center px-6 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-50 font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
          href="tel:+33665454101"
        >
          06 65 45 41 01
        </a>
        <a
          className="inline-flex items-center justify-center px-6 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-50 font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
          href="https://github.com/samuel-tittelein"
          rel="noreferrer"
          target="_blank"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
