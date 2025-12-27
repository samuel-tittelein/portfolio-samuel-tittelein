import type { Metadata } from "next";
import "./globals.css";
import "./globals-print.css";

export const metadata: Metadata = {
	title: "Samuel Tittelein | Portfolio",
	description:
		"Portfolio statique et sobre de Samuel Tittelein, présentant compétences, expériences, formations et projets.",
	metadataBase: new URL("https://samuel-tittelein.github.io"),
	openGraph: {
		title: "Samuel Tittelein | Portfolio",
		description:
			"Portfolio éco-conçu avec Next.js - développeur informatique en 3ème année de BUT.",
		url: "https://samuel-tittelein.github.io",
		siteName: "Samuel Tittelein",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50">{children}</body>
    </html>
  );
}
