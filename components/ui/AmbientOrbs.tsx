export default function AmbientOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Orb 1 — Gold top right */}
      <div
        className="absolute rounded-full"
        style={{
          width: 700,
          height: 700,
          top: -200,
          right: -150,
          background: "rgba(201,168,76,0.04)",
          filter: "blur(120px)",
          animation: "orbFloat 18s ease-in-out infinite",
        }}
      />
      {/* Orb 2 — Deep blue bottom left */}
      <div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          bottom: "10%",
          left: -100,
          background: "rgba(0,40,60,0.5)",
          filter: "blur(120px)",
          animation: "orbFloat 24s ease-in-out infinite reverse",
        }}
      />
    </div>
  );
}
