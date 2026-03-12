import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import { projects } from "@/lib/data";
import type { Project } from "@/types";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={`group relative overflow-hidden bg-[#111111] border border-white/[0.05] hover:border-[rgba(201,168,76,0.3)] transition-all duration-300 ${
        project.featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Image */}
      <div className={`relative w-full overflow-hidden ${project.featured ? "aspect-video" : "aspect-[16/10]"}`}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover brightness-[0.6] saturate-[0.7] group-hover:brightness-[0.75] group-hover:scale-105 transition-all duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,8,8,0.9)] to-transparent" />
      </div>

      {/* Info */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-[9px] tracking-[0.15em] text-[#c9a84c] bg-[rgba(201,168,76,0.12)] px-2 py-1 rounded-sm">
            {project.tag}
          </span>
          <span className="font-mono text-[10px] text-[#555]">{project.year}</span>
        </div>
        <h3 className="font-display text-[26px] tracking-[0.05em] text-white mb-2">{project.title}</h3>
        <p className="text-[13px] text-[#555] leading-[1.6] mb-4">{project.description}</p>
        <Link
          href={project.link}
          className="text-[11px] tracking-[0.08em] text-[#c9a84c] uppercase inline-flex items-center gap-1.5 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
        >
          View Project →
        </Link>
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <section id="work" className="py-32 px-12 bg-[#080808]">
      {/* Header */}
      <div className="flex justify-between items-end mb-16 flex-wrap gap-6">
        <div>
          <SectionLabel>Selected Work</SectionLabel>
          <h2
            className="font-display text-white leading-none tracking-[0.03em]"
            style={{ fontSize: "clamp(42px,6vw,80px)" }}
          >
            Projects &amp;
            <br />
            Creations
          </h2>
        </div>
        <Link
          href="#"
          className="font-mono text-[11px] tracking-[0.1em] text-[#555] hover:text-[#c9a84c] transition-colors flex items-center gap-2"
        >
          View All Projects →
        </Link>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-px">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
