import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <div className="mb-12 flex items-center gap-4">
        <span className="rounded-lg border border-indigo-500/30 px-3 py-1 text-indigo-400">
          #05
        </span>

        <div className="h-px flex-1 bg-white/10" />

        <span className="font-mono text-white/70">
          {"<PROJECTS />"}
        </span>
      </div>

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">

        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            index={index}
            {...project}
          />
        ))}

      </div>
    </section>
  );
}