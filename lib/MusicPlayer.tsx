"use client";

import { useRef, useState } from "react";
import { siteConfig } from "@/lib/data";

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Create audio lazily on first click — avoids autoplay policy issues entirely
  const getAudio = (): HTMLAudioElement => {
    if (!audioRef.current) {
      const audio = new Audio();
      audio.crossOrigin = "anonymous";
      audio.loop = true;
      audio.volume = 1;
      audioRef.current = audio;
    }
    return audioRef.current;
  };

  const toggle = async () => {
    setError(null);

    if (!siteConfig.musicUrl || siteConfig.musicUrl === "") {
      setError("Add your musicUrl in lib/data.ts");
      return;
    }

    const audio = getAudio();

    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    // Set src only if not already set to this URL
    if (audio.src !== siteConfig.musicUrl) {
      audio.src = siteConfig.musicUrl;
      audio.load();
    }

    try {
      await audio.play();
      setPlaying(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      console.error("Audio play error:", message);
      setError(message.includes("policy") || message.includes("interact")
        ? "Click again to allow audio"
        : "Cannot play — check your URL");
      setPlaying(false);
    }
  };

  const barHeights = [14, 6, 11, 5, 13];
  const barAnimations = [
    "bar1_0.9s_ease-in-out_infinite",
    "bar2_0.9s_ease-in-out_infinite_0.15s",
    "bar3_0.9s_ease-in-out_infinite_0.05s",
    "bar4_0.9s_ease-in-out_infinite_0.2s",
    "bar5_0.9s_ease-in-out_infinite_0.1s",
  ];

  return (
    <div className="flex flex-col items-end gap-1">
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
          {barHeights.map((h, i) => (
            <span
              key={i}
              className="w-[2px] bg-[#c9a84c] rounded-sm inline-block"
              style={{
                height: playing ? undefined : 4,
                animation: playing
                  ? `${barAnimations[i]} ease-in-out infinite`
                  : "none",
              }}
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

      {error && (
        <span className="font-mono text-[9px] text-red-400 tracking-wide">
          ⚠ {error}
        </span>
      )}
    </div>
  );
}
