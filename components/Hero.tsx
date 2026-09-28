"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import FloatingPrisms from "@/components/FloatingPrisms";

/* ─── Sparkle SVG (4-pointed star from SEOtalos ref) ──── */
function Sparkle({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M12 2C12 2 12.8 7.2 15 9.5C17.2 11.8 22 12 22 12C22 12 17.2 12.2 15 14.5C12.8 16.8 12 22 12 22C12 22 11.2 16.8 9 14.5C6.8 12.2 2 12 2 12C2 12 6.8 11.8 9 9.5C11.2 7.2 12 2 12 2Z"
        fill="white"
      />
    </svg>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  }, []);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative flex flex-col items-center justify-start overflow-hidden pt-32 md:pt-44 pb-16 md:pb-24 px-4 min-h-0"
    >
      {/* Ambient 3D Glass Prisms */}
      <FloatingPrisms />

      {/* Abstract Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_70%)] pointer-events-none" />
      
      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Glassmorphism Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] backdrop-blur-2xl rounded-[32px] p-8 md:p-14 text-center shadow-[0_30px_80px_rgba(0,0,0,0.8)] flex flex-col items-center"
        >
          {/* Subtle Top Highlight */}
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.25)] to-transparent" />
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[12px] text-[#aaa] font-medium tracking-wide">
              Landing Pages
            </span>
          </div>

          {/* Title */}
          <h1 className="hero-title font-display font-extrabold text-white text-[36px] md:text-[56px] leading-[1.1] tracking-tight relative max-w-3xl">
            <span className="absolute -top-6 -right-6 hidden lg:block opacity-70">
              <Sparkle size={32} className="animate-[sparkle_3s_ease-in-out_infinite]" />
            </span>
            Seu negócio merece mais do que uma página.
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-[16px] md:text-[18px] text-[#888] leading-relaxed max-w-2xl">
            A Nexvia cria landing pages personalizadas para transformar a presença do seu negócio na internet em uma experiência que apresenta, comunica e conduz o cliente ao próximo passo.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-5 relative z-20">
            <a
              href="https://wa.me/5538999125035"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 bg-white text-black font-semibold text-[15px] px-8 py-4 rounded-full hover:bg-[#e8e8e8] active:scale-[0.98] transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
              Quero minha landing page
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Product Mockup (Notebook Video) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-[1100px] mt-8 md:mt-12 z-10 flex justify-center pointer-events-none select-none"
        >
          {/* Ambient glow behind laptop */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[40%] bg-white/[0.03] blur-[80px] rounded-[100%]" />
          
          <div className="w-[140%] sm:w-[120%] md:w-full flex justify-center">
            <video
              ref={videoRef}
              src="/notebook.mp4"
              autoPlay
              muted
              playsInline
              preload="auto"
              onEnded={(e) => {
                e.currentTarget.pause();
              }}
              width={1280}
              height={720}
              className="w-full h-auto object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)] mix-blend-lighten pointer-events-none select-none"
              style={{ aspectRatio: "16 / 9" }}
            />
          </div>
        </motion.div>

      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-20" />
    </section>
  );
}

