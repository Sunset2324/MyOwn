import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import { projects } from "@/lib/data";
import type { Project } from "@/types";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative overflow-hidden bg-[#111111] border border-white/[0.05] hover:border-[rgba(201,168,76,0.3)] transition-all duration-300">
      {/* Image */}
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover brightness-[0.6] saturate-[0.7] group-hover:brightness-[0.75] group-hover:scale-105 transition-all duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,8,8,0.9)] to-transparent" />
      </div>

      {/* Info */}
      <div className="p-5 md:p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-[9px] tracking-[0.15em] text-[#c9a84c] bg-[rgba(201,168,76,0.12)] px-2 py-1 rounded-sm">
            {project.tag}
          </span>
          <span className="font-mono text-[10px] text-[#555]">{project.year}</span>
        </div>
        <h3 className="font-display text-[22px] md:text-[26px] tracking-[0.05em] text-white mb-2">
          {project.title}
        </h3>
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
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="py-20 md:py-32 px-6 md:px-12 bg-[#080808]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-12 md:mb-16 gap-4">
        <div>
          <SectionLabel>Selected Work</SectionLabel>
          <h2
            className="font-display text-white leading-none tracking-[0.03em]"
            style={{ fontSize: "clamp(36px, 6vw, 80px)" }}
          >
            Projects &amp;
            <br />
            Creations
          </h2>
        </div>
        <Link
          href="#"
          className="font-mono text-[11px] tracking-[0.1em] text-[#555] hover:text-[#c9a84c] transition-colors flex items-center gap-1 self-start sm:self-auto"
        >
          View All →
        </Link>
      </div>

      {/* Featured project — full width on mobile */}
      {featured && (
        <div className="mb-px">
          <ProjectCard project={featured} />
        </div>
      )}

      {/* Rest — 1 col mobile, 2 col tablet, rest fill */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px">
        {rest.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
