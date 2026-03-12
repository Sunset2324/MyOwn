import SectionLabel from "@/components/ui/SectionLabel";
import { services } from "@/lib/data";
import type { Service } from "@/types";

const icons: Record<Service["icon"], React.ReactNode> = {
  code: (
    <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  video: (
    <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9A2.25 2.25 0 0013.5 5.25h-9A2.25 2.25 0 002.25 7.5v9A2.25 2.25 0 004.5 18.75z" />
    </svg>
  ),
  photo: (
    <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 21h18M6.75 6.75h.008v.008H6.75V6.75z" />
    </svg>
  ),
};

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group relative p-8 md:p-10 bg-[#181818] border border-white/[0.07] overflow-hidden hover:border-[rgba(201,168,76,0.2)] hover:bg-[rgba(201,168,76,0.02)] transition-all duration-300">
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#c9a84c] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
      <div className="w-12 h-12 mb-6 border border-white/[0.07] rounded-sm flex items-center justify-center text-[#c9a84c] group-hover:border-[rgba(201,168,76,0.3)] transition-colors">
        {icons[service.icon]}
      </div>
      <h3 className="font-display text-[20px] md:text-[22px] tracking-[0.06em] text-white mb-3">{service.name}</h3>
      <p className="text-[13px] text-[#555] leading-[1.7]">{service.description}</p>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 px-6 md:px-12 bg-[#111111] border-t border-b border-white/[0.07]">
      <SectionLabel>What I Do</SectionLabel>
      <h2
        className="font-display text-white leading-none tracking-[0.03em] mb-4"
        style={{ fontSize: "clamp(36px, 6vw, 80px)" }}
      >
        Services
      </h2>
      <p className="text-[15px] text-[#555] max-w-md leading-[1.7] mb-12 md:mb-16">
        End-to-end solutions from architecture to deployment, and from raw footage to final cut.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
