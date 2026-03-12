"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMove = (e: MouseEvent) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
    };

    const animate = () => {
      pos.current.rx += (pos.current.mx - pos.current.rx) * 0.12;
      pos.current.ry += (pos.current.my - pos.current.ry) * 0.12;
      ring.style.left = `${pos.current.rx}px`;
      ring.style.top = `${pos.current.ry}px`;
      requestAnimationFrame(animate);
    };
    animate();

    const onEnter = () => {
      dot.style.width = "6px";
      dot.style.height = "6px";
      ring.style.width = "52px";
      ring.style.height = "52px";
      ring.style.borderColor = "rgba(201,168,76,0.8)";
    };
    const onLeave = () => {
      dot.style.width = "10px";
      dot.style.height = "10px";
      ring.style.width = "36px";
      ring.style.height = "36px";
      ring.style.borderColor = "rgba(201,168,76,0.5)";
    };

    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button, input, textarea").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed z-[9999] pointer-events-none rounded-full bg-[#c9a84c] mix-blend-difference"
        style={{
          width: 10,
          height: 10,
          transform: "translate(-50%, -50%)",
          transition: "width 0.2s, height 0.2s",
        }}
      />
      <div
        ref={ringRef}
        className="fixed z-[9998] pointer-events-none rounded-full border"
        style={{
          width: 36,
          height: 36,
          borderColor: "rgba(201,168,76,0.5)",
          transform: "translate(-50%, -50%)",
          transition: "width 0.3s, height 0.3s, border-color 0.3s",
        }}
      />
    </>
  );
}
