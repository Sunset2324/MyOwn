import SectionLabel from "@/components/ui/SectionLabel";
import { stats, skills } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-32 px-6 md:px-12 border-t border-b border-white/[0.07] bg-[#111111]"
    >
      <SectionLabel>About</SectionLabel>
      <h2
        className="font-display text-white leading-none tracking-[0.03em] mb-2"
        style={{ fontSize: "clamp(36px, 6vw, 80px)" }}
      >
        Where Code
        <br />
        Meets Frame
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start mt-12 md:mt-16">
        {/* Left — text + stats */}
        <div>
          <div className="space-y-4 mb-8 md:mb-10">
            <p className="text-[15px] text-[#555] leading-[1.8]">
              I operate at the intersection of{" "}
              <strong className="text-[#c8c8c8] font-medium">software engineering</strong> and{" "}
              <strong className="text-[#c8c8c8] font-medium">visual storytelling</strong>. With
              years of experience in both disciplines, I bring a rare dual perspective to every project.
            </p>
            <p className="text-[15px] text-[#555] leading-[1.8]">
              From architecting full-stack applications to editing cinematic short films, I believe
              the best digital experiences are both technically sound and visually unforgettable.
            </p>
            <p className="text-[15px] text-[#555] leading-[1.8]">
              My work is shaped by a simple principle:{" "}
              <strong className="text-[#c8c8c8] font-medium">
                every pixel and every line of code has intent.
              </strong>
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-px">
            {stats.map((stat) => (
              <div key={stat.label} className="p-5 md:p-6 bg-[#181818] border border-white/[0.07]">
                <div className="font-display text-[36px] md:text-[42px] text-[#c9a84c] tracking-[0.05em] leading-none mb-1">
                  {stat.number}
                </div>
                <div className="text-[11px] md:text-[12px] text-[#555] tracking-[0.05em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — skill card */}
        <div className="relative">
          <div className="relative p-6 md:p-9 bg-[#181818] border border-white/[0.07] rounded-sm overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />
            <p className="font-mono text-[10px] tracking-[0.12em] text-[#c9a84c] mb-6 md:mb-8">
              // SKILL_MATRIX.ts
            </p>
            <div className="space-y-5 md:space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-[12px] md:text-[13px] text-[#c8c8c8]">{skill.name}</span>
                    <span className="font-mono text-[11px] text-[#555]">{skill.percentage}%</span>
                  </div>
                  <div className="h-[2px] bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full skill-bar-fill rounded-full"
                      style={{
                        width: `${skill.percentage}%`,
                        background: "linear-gradient(90deg, #c9a84c, rgba(201,168,76,0.5))",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}