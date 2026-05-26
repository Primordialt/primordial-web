"use client";

import { m } from "framer-motion";

export function AnimatedHeroBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="ds-gradient-hero absolute inset-0" />
      <div className="grid-overlay absolute inset-0 opacity-50" />

      {/* Animated gradient orbs */}
      <m.div
        className="absolute -left-24 top-1/4 size-[28rem] rounded-full bg-brand-pink/25 blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <m.div
        className="absolute -right-20 top-10 size-[24rem] rounded-full bg-brand-green/20 blur-3xl"
        animate={{
          x: [0, -35, 0],
          y: [0, 25, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <m.div
        className="absolute bottom-0 left-1/2 size-[20rem] -translate-x-1/2 rounded-full bg-brand-pink/10 blur-3xl"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Scan line — telecom/cyber aesthetic */}
      <m.div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-pink/50 to-transparent"
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* Corner accents */}
      <div className="absolute left-0 top-0 h-32 w-32 border-l border-t border-brand-pink/20" />
      <div className="absolute bottom-0 right-0 h-32 w-32 border-b border-r border-brand-green/20" />
    </div>
  );
}
