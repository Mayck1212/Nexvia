"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionTransitionProps {
  text: string;
  className?: string;
}

export default function SectionTransition({ text, className = "" }: SectionTransitionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      className={`relative z-20 flex flex-col items-center justify-center -my-6 md:-my-8 px-4 pointer-events-none ${className}`}
    >
      {/* Pill Capsule */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="group pointer-events-auto cursor-default inline-flex items-center gap-3 px-5 md:px-6 py-2.5 rounded-full bg-[#0a0a0a]/90 border border-[rgba(255,255,255,0.08)] backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.7)] transition-all duration-500 hover:border-[rgba(255,255,255,0.2)] hover:bg-[#121212]/95 hover:shadow-[0_4px_30px_rgba(255,255,255,0.04)] max-w-full"
      >
        {/* Glowing Indicator Dot */}
        <span className="w-2 h-2 rounded-full bg-white/70 shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-500 group-hover:bg-white group-hover:shadow-[0_0_12px_rgba(255,255,255,0.9)] shrink-0" />
        
        {/* Narrative Text */}
        <span className="text-[13px] md:text-[14px] font-display font-medium text-[#d4d4d4] tracking-wide select-none truncate sm:whitespace-normal">
          {text}
        </span>
      </motion.div>

      {/* Connecting Vertical Line */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={inView ? { opacity: 1, scaleY: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "top" }}
        className="w-px h-12 md:h-16 bg-gradient-to-b from-[rgba(255,255,255,0.25)] via-[rgba(255,255,255,0.08)] to-transparent mt-2 pointer-events-none"
      />
    </div>
  );
}

