"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";

/* ─── 1. Grande Diamante / Octaedro de Cristal Clássico ────── */
function GrandDiamondSvg() {
  return (
    <svg viewBox="0 0 160 190" fill="none" className="w-full h-full drop-shadow-[0_25px_45px_rgba(0,0,0,0.9)] select-none pointer-events-none">
      <defs>
        {/* Facet gradients with dark studio glass reflections */}
        <linearGradient id="diamKey" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.48" />
          <stop offset="60%" stopColor="#888888" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#111111" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="diamShadow" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.22" />
          <stop offset="40%" stopColor="#222222" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#050505" stopOpacity="0.75" />
        </linearGradient>
        <linearGradient id="diamReflect" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.06" />
          <stop offset="70%" stopColor="#ffffff" stopOpacity="0.26" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.08" />
        </linearGradient>
      </defs>

      {/* Top Left Main Facet (Key Light) */}
      <polygon points="80,15 25,90 80,102" fill="url(#diamKey)" stroke="rgba(255,255,255,0.45)" strokeWidth="1.2" />
      {/* Top Right Main Facet (Midtone) */}
      <polygon points="80,15 135,90 80,102" fill="url(#diamShadow)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" />
      {/* Bottom Left Triangular Facet */}
      <polygon points="25,90 80,175 80,102" fill="url(#diamReflect)" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" />
      {/* Bottom Right Triangular Facet (Dark Body) */}
      <polygon points="135,90 80,175 80,102" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.18)" strokeWidth="1.2" />

      {/* Internal Geometry & Refraction Lines */}
      <line x1="80" y1="15" x2="80" y2="175" stroke="rgba(255,255,255,0.35)" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="25" y1="90" x2="135" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />

      {/* Specular Vertex Gleams */}
      <circle cx="80" cy="15" r="3" fill="#ffffff" opacity="0.95" />
      <line x1="72" y1="15" x2="88" y2="15" stroke="#ffffff" strokeWidth="1" opacity="0.85" />
      <line x1="80" y1="7" x2="80" y2="23" stroke="#ffffff" strokeWidth="1" opacity="0.85" />

      <circle cx="25" cy="90" r="1.8" fill="#ffffff" opacity="0.75" />
      <circle cx="135" cy="90" r="1.8" fill="#ffffff" opacity="0.65" />
      <circle cx="80" cy="175" r="2" fill="#ffffff" opacity="0.8" />
    </svg>
  );
}

/* ─── 2. Prisma Cristalino Triangular Alongado ─────────────── */
function ElongatedPrismSvg() {
  return (
    <svg viewBox="0 0 160 190" fill="none" className="w-full h-full drop-shadow-[0_25px_45px_rgba(0,0,0,0.9)] select-none pointer-events-none">
      <defs>
        <linearGradient id="prismFace1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.52" />
          <stop offset="50%" stopColor="#aaaaaa" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="prismFace2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.28" />
          <stop offset="60%" stopColor="#333333" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.65" />
        </linearGradient>
      </defs>

      {/* Front Dominant Beveled Glass Plane */}
      <polygon points="75,20 135,65 110,165 50,115" fill="url(#prismFace1)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.3" />
      {/* Top Cap Face */}
      <polygon points="75,20 25,50 50,115" fill="url(#prismFace2)" stroke="rgba(255,255,255,0.28)" strokeWidth="1.2" />
      {/* Bottom Facet Slice */}
      <polygon points="50,115 110,165 80,180 20,130" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

      {/* Internal Reflection Ray */}
      <line x1="75" y1="20" x2="80" y2="180" stroke="rgba(255,255,255,0.3)" strokeDasharray="3 3" strokeWidth="0.9" />

      {/* Crisp Corner Highlights */}
      <circle cx="75" cy="20" r="3.2" fill="#ffffff" opacity="0.98" />
      <line x1="67" y1="20" x2="83" y2="20" stroke="#ffffff" strokeWidth="1.2" opacity="0.9" />
      <circle cx="135" cy="65" r="2" fill="#ffffff" opacity="0.8" />
      <circle cx="50" cy="115" r="2" fill="#ffffff" opacity="0.85" />
    </svg>
  );
}

/* ─── 3. Cubo de Vidro Isométrico Lapidado ─────────────────── */
function IsometricCubeSvg() {
  return (
    <svg viewBox="0 0 160 170" fill="none" className="w-full h-full drop-shadow-[0_25px_45px_rgba(0,0,0,0.9)] select-none pointer-events-none">
      <defs>
        <linearGradient id="isoTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.48" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id="isoLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#050505" stopOpacity="0.55" />
        </linearGradient>
        <linearGradient id="isoRight" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#1a1a1a" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Top Diamond Face */}
      <polygon points="80,25 130,55 80,85 30,55" fill="url(#isoTop)" stroke="rgba(255,255,255,0.48)" strokeWidth="1.3" />
      {/* Left Face */}
      <polygon points="30,55 80,85 80,145 30,115" fill="url(#isoLeft)" stroke="rgba(255,255,255,0.28)" strokeWidth="1.2" />
      {/* Right Face */}
      <polygon points="80,85 130,55 130,115 80,145" fill="url(#isoRight)" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" />

      {/* Precision Apex Cross-Highlight at (80, 85) */}
      <circle cx="80" cy="85" r="3" fill="#ffffff" opacity="0.95" />
      <line x1="72" y1="85" x2="88" y2="85" stroke="#ffffff" strokeWidth="1" opacity="0.85" />
      <line x1="80" y1="77" x2="80" y2="93" stroke="#ffffff" strokeWidth="1" opacity="0.85" />

      <circle cx="80" cy="25" r="2" fill="#ffffff" opacity="0.8" />
    </svg>
  );
}

/* ─── 4. Cristal Facetado Piramidal (Prisma Lateral) ───────── */
function FacetedShardSvg() {
  return (
    <svg viewBox="0 0 140 160" fill="none" className="w-full h-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)] select-none pointer-events-none">
      <defs>
        <linearGradient id="shardFace" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.42" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <polygon points="70,15 115,75 85,145 25,100" fill="url(#shardFace)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
      <polygon points="70,15 85,145 50,85" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
      <line x1="70" y1="15" x2="85" y2="145" stroke="rgba(255,255,255,0.45)" strokeWidth="1" />
      <circle cx="70" cy="15" r="2.5" fill="#ffffff" opacity="0.9" />
    </svg>
  );
}

/* ─── Item de Flutuação Contínua (Loop Infinito) ───────────── */
interface PrismProps {
  children: React.ReactNode;
  className: string;
  floatDuration: number;
  floatDelay: number;
  yAmplitude: number;
  xAmplitude?: number;
  rotZAmplitude?: number;
  springX: any;
  springY: any;
  reduceMotion: boolean | null;
}

function FloatingPrism({
  children,
  className,
  floatDuration,
  floatDelay,
  yAmplitude,
  xAmplitude = 5,
  rotZAmplitude = 3,
  springX,
  springY,
  reduceMotion,
}: PrismProps) {
  // Micro-parallax sutilíssimo (3-4px max) para não interferir na flutuação
  const pX = useTransform(springX, (val: number) => (reduceMotion ? 0 : val * 4));
  const pY = useTransform(springY, (val: number) => (reduceMotion ? 0 : val * 3));

  return (
    <motion.div
      style={{ x: pX, y: pY }}
      className={`absolute pointer-events-none select-none z-0 ${className}`}
    >
      <motion.div
        animate={
          reduceMotion
            ? {}
            : {
                y: [-yAmplitude, yAmplitude, -yAmplitude],
                x: [-xAmplitude, xAmplitude, -xAmplitude],
                rotateZ: [-rotZAmplitude, rotZAmplitude, -rotZAmplitude],
              }
        }
        transition={
          reduceMotion
            ? {}
            : {
                duration: floatDuration,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: floatDelay,
              }
        }
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/* ─── Composição Final: 3-4 Grandes Prismas Flutuantes ─────── */
export default function FloatingPrisms() {
  const shouldReduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 25, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 25, damping: 30 });

  useEffect(() => {
    if (typeof window === "undefined" || shouldReduceMotion) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const handleMouse = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth - 0.5) * 2);
      mouseY.set((e.clientY / innerHeight - 0.5) * 2);
    };

    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY, shouldReduceMotion]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* 
        PRISMA 1 (Grande, Canto Superior Esquerdo)
        - Diamante Octaédrico de Vidro
        - Desktop: ~170-190px | Mobile: ~110px
        - Flutuação vertical expressiva (24px) em 12s
      */}
      <FloatingPrism
        className="top-[8%] sm:top-[10%] left-[2%] sm:left-[3%] lg:left-[5%] w-[110px] h-[130px] sm:w-[140px] sm:h-[165px] lg:w-[180px] lg:h-[210px] opacity-85"
        floatDuration={12}
        floatDelay={0}
        yAmplitude={24}
        xAmplitude={6}
        rotZAmplitude={3.5}
        springX={springX}
        springY={springY}
        reduceMotion={shouldReduceMotion}
      >
        <GrandDiamondSvg />
      </FloatingPrism>

      {/* 
        PRISMA 2 (Grande, Canto Superior Direito)
        - Prisma Cristalino Alongado
        - Desktop: ~160-185px | Mobile: ~105px
        - Flutuação vertical de 26px em 15s (dessincronizado)
      */}
      <FloatingPrism
        className="top-[10%] sm:top-[12%] right-[2%] sm:right-[3%] lg:right-[5%] w-[105px] h-[125px] sm:w-[135px] sm:h-[160px] lg:w-[175px] lg:h-[205px] opacity-90"
        floatDuration={15}
        floatDelay={1.5}
        yAmplitude={26}
        xAmplitude={-7}
        rotZAmplitude={-4}
        springX={springX}
        springY={springY}
        reduceMotion={shouldReduceMotion}
      >
        <ElongatedPrismSvg />
      </FloatingPrism>

      {/* 
        PRISMA 3 (Médio/Grande, Lateral Inferior Esquerda - Próximo ao Notebook)
        - Cubo de Vidro Isométrico Lapidado
        - Oculto no Mobile para não sobrepor o vídeo do notebook
        - Desktop: ~150-170px
        - Flutuação de 22px em 11s
      */}
      <FloatingPrism
        className="hidden md:block bottom-[18%] sm:bottom-[20%] left-[2%] sm:left-[4%] lg:left-[6%] w-[100px] h-[115px] sm:w-[130px] sm:h-[145px] lg:w-[165px] lg:h-[185px] opacity-85"
        floatDuration={11}
        floatDelay={0.8}
        yAmplitude={22}
        xAmplitude={5}
        rotZAmplitude={3}
        springX={springX}
        springY={springY}
        reduceMotion={shouldReduceMotion}
      >
        <IsometricCubeSvg />
      </FloatingPrism>

      {/* 
        PRISMA 4 (Opcional no Desktop, Lateral Média Direita mais profunda)
        - Cristal Piramidal Facetado
        - Oculto no Mobile para manter respiro total
        - Desktop: ~120-135px com leve desfoque ambiental
        - Flutuação suave de 20px em 17s
      */}
      <FloatingPrism
        className="hidden md:block top-[45%] right-[2%] lg:right-[4%] w-[115px] h-[135px] lg:w-[135px] lg:h-[155px] opacity-50 blur-[0.4px]"
        floatDuration={17}
        floatDelay={2.2}
        yAmplitude={20}
        xAmplitude={-4}
        rotZAmplitude={-2.5}
        springX={springX}
        springY={springY}
        reduceMotion={shouldReduceMotion}
      >
        <FacetedShardSvg />
      </FloatingPrism>
    </div>
  );
}
