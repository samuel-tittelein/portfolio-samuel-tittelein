import type { Project } from "./Project";
import Image from "next/image";

type Props = Readonly<{
	project: Project;
}>;

export default function ProjectCard({ project }: Props) {
	return (
		<a
			href={project.repo}
			target="_blank"
			rel="noreferrer"
			className="block bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all group no-underline"
		>
			<div className="relative h-48 bg-slate-100 dark:bg-slate-900">
				<Image
					src={project.image}
					alt={project.title}
					fill
					className="object-cover"
				/>
			</div>
			<div className="p-6">
				<h3 className="font-bold text-lg text-slate-900 dark:text-slate-50 mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:underline transition-colors">
					{project.title}
				</h3>
				<p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
					{project.description}
				</p>
				<div className="flex flex-wrap gap-2">
					{project.stack.map((item) => (
						<span
							className="inline-block px-2 py-1 text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded border border-slate-200 dark:border-slate-600"
							key={item}
						>
							{item}
						</span>
					))}
				</div>
			</div>
		</a>
	);
}
