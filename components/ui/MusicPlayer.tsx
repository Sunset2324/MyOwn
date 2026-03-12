"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/data";

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(siteConfig.musicUrl || undefined);
    audioRef.current.loop = true;
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().catch(() => setPlaying(false));
      setPlaying(true);
    }
  };

  const barClasses = [
    playing ? "animate-[bar1_0.9s_ease-in-out_infinite]" : "",
    playing ? "animate-[bar2_0.9s_ease-in-out_infinite_0.15s]" : "",
    playing ? "animate-[bar3_0.9s_ease-in-out_infinite_0.05s]" : "",
    playing ? "animate-[bar4_0.9s_ease-in-out_infinite_0.2s]" : "",
    playing ? "animate-[bar5_0.9s_ease-in-out_infinite_0.1s]" : "",
  ];

  return (
    <button
      onClick={toggle}
      aria-label="Toggle music"
      className={`flex items-center gap-2.5 px-4 py-2 border rounded-sm transition-all duration-300 ${
        playing
          ? "border-[#c9a84c] bg-[rgba(201,168,76,0.12)] shadow-[0_0_20px_rgba(201,168,76,0.25)]"
          : "border-white/10 bg-transparent hover:border-[#c9a84c] hover:bg-[rgba(201,168,76,0.08)]"
      }`}
    >
      {/* Equalizer bars */}
      <div className="flex items-end gap-[2px] h-[14px]">
        {barClasses.map((cls, i) => (
          <span
            key={i}
            className={`w-[2px] bg-[#c9a84c] rounded-sm inline-block ${cls}`}
            style={{ height: playing ? undefined : 4 }}
          />
        ))}
      </div>

      <span
        className={`font-mono text-[10px] tracking-[0.12em] transition-colors ${
          playing ? "text-[#c9a84c]" : "text-[#555]"
        }`}
      >
        {playing ? "PAUSE" : "PLAY"}
      </span>

      <span
        className={`font-mono text-[9px] tracking-[0.08em] max-w-[120px] overflow-hidden text-ellipsis whitespace-nowrap transition-colors ${
          playing ? "text-[rgba(201,168,76,0.7)]" : "text-[#555]"
        }`}
      >
        {siteConfig.musicTrackName}
      </span>
    </button>
  );
}
