"use client";

import { m } from "framer-motion";
import { Cpu, Lock, Radio, Server, Shield, Wifi } from "lucide-react";

const elements = [
  { Icon: Shield, className: "left-[8%] top-[18%]", delay: 0 },
  { Icon: Radio, className: "right-[10%] top-[22%]", delay: 0.5 },
  { Icon: Server, className: "left-[12%] bottom-[28%]", delay: 1 },
  { Icon: Lock, className: "right-[14%] bottom-[32%]", delay: 1.5 },
  { Icon: Wifi, className: "left-[42%] top-[12%] hidden lg:flex", delay: 0.8 },
  { Icon: Cpu, className: "right-[38%] bottom-[18%] hidden lg:flex", delay: 1.2 },
];

export function FloatingTechElements() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-[5] hidden sm:block">
      {elements.map(({ Icon, className, delay }) => (
        <m.div
          key={className}
          className={`absolute ${className}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.35, 0.65, 0.35],
            y: [0, -12, 0],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 5 + delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }}
        >
          <div className="flex size-12 items-center justify-center rounded-xl border border-border/50 bg-card/40 shadow-md backdrop-blur-md transition-colors lg:size-14">
            <Icon className="size-5 text-brand-pink lg:size-6" strokeWidth={1.5} />
          </div>
        </m.div>
      ))}
    </div>
  );
}
