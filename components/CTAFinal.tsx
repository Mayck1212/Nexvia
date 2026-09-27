"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CTAFinal() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 md:py-32 px-4 bg-black overflow-hidden flex items-center justify-center">
      
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)] opacity-70" />
        
        {/* Grid pattern very faint */}
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
        />

        {/* Luminous line horizontal */}
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.15)] to-transparent origin-center -translate-y-[150px]"
        />

        {/* Luminous line vertical */}
        <motion.div 
          initial={{ opacity: 0, scaleY: 0 }}
          animate={inView ? { opacity: 1, scaleY: 1 } : {}}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.1)] to-transparent origin-center"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-gradient-to-b from-[rgba(255,255,255,0.03)] to-transparent border border-[rgba(255,255,255,0.05)] rounded-[40px] p-10 md:p-20 text-center backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.8)] overflow-hidden"
        >
          {/* Glass Top Highlight */}
          <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.25)] to-transparent" />
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
            <span className="text-[11px] text-[#888] uppercase tracking-[0.2em] font-semibold">Próximo Passo</span>
          </div>

          <h2 className="text-[32px] md:text-[48px] font-display font-extrabold text-white leading-[1.1] tracking-tight mb-6 max-w-2xl mx-auto">
            Pronto para dar uma nova presença ao seu negócio?
          </h2>
          
          <p className="text-[16px] md:text-[18px] text-[#777] leading-relaxed mb-12 max-w-xl mx-auto">
            Conte para a Nexvia o que você precisa e vamos conversar sobre a landing page ideal para sua empresa.
          </p>

          <div className="flex flex-col items-center gap-6">
            <a
              href="https://wa.me/5538999125035"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 bg-white text-black font-semibold text-[16px] px-10 py-5 rounded-full transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Falar com a Nexvia
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              {/* Outer Button Glow on hover */}
              <div className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(255,255,255,0.2)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </a>

            <p className="text-[13px] text-[#555] font-medium tracking-wide">
              Sem complicação. Você explica sua ideia e a gente conversa sobre o projeto.
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

