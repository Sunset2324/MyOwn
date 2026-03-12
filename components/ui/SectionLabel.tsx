interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="font-mono text-[10px] tracking-[0.2em] text-[#c9a84c] uppercase mb-5 flex items-center gap-3">
      <span className="block w-8 h-px bg-[#c9a84c]" />
      {children}
    </p>
  );
}
