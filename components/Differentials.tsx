"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EASE_PREMIUM, DUR_SECTION, Y_REVEAL, STAGGER_CHILDREN } from "@/lib/motion";


/* ─── SVG 01: Personalização de verdade (Escultura orgânica e camadas translúcidas adaptáveis) ─── */
function SvgPersonalization() {
  return (
    <svg viewBox="0 0 240 140" fill="none" className="w-full h-full max-h-36 select-none pointer-events-none">
      <defs>
        <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
          <stop offset="50%" stopColor="#888888" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.01" />
        </linearGradient>
        <linearGradient id="waveGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id="waveGrad3" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
        </linearGradient>
        <radialGradient id="glowWave" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Ambient glow */}
      <circle cx="120" cy="70" r="60" fill="url(#glowWave)" />
      
      {/* Wave Layer 1 - Deep back wave */}
      <path
        d="M30 85 C 60 55, 90 95, 120 70 C 150 45, 180 85, 210 55 L 210 105 C 180 120, 150 95, 120 110 C 90 125, 60 100, 30 115 Z"
        fill="url(#waveGrad1)"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="1"
      />
      <path
        d="M30 85 C 60 55, 90 95, 120 70 C 150 45, 180 85, 210 55"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="1"
        fill="none"
      />

      {/* Wave Layer 2 - Intermediate sculpted glass wave */}
      <path
        d="M35 70 C 70 40, 100 80, 130 55 C 160 30, 185 70, 205 45 L 205 85 C 185 105, 160 70, 130 90 C 100 110, 70 75, 35 95 Z"
        fill="url(#waveGrad2)"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1"
      />
      
      {/* Wave Layer 3 - Foreground translucent crest with specular highlights */}
      <path
        d="M45 55 C 75 25, 105 65, 135 40 C 165 15, 185 50, 195 35 L 195 65 C 185 75, 165 45, 135 70 C 105 95, 75 55, 45 80 Z"
        fill="url(#waveGrad3)"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="1"
      />
      <path
        d="M45 55 C 75 25, 105 65, 135 40 C 165 15, 185 50, 195 35"
        stroke="rgba(255,255,255,0.6)"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />

      {/* Floating alignment markers */}
      <circle cx="75" cy="25" r="1.5" fill="#ffffff" opacity="0.6" />
      <circle cx="135" cy="40" r="2" fill="#ffffff" opacity="0.8" />
      <circle cx="165" cy="15" r="1.5" fill="#ffffff" opacity="0.5" />
      <line x1="135" y1="20" x2="135" y2="40" stroke="rgba(255,255,255,0.2)" strokeDasharray="2 2" strokeWidth="0.8" />
    </svg>
  );
}

/* ─── SVG 02: Design com propósito (Composição de foco geométrico e direção visual) ─── */
function SvgDesign() {
  return (
    <svg viewBox="0 0 240 140" fill="none" className="w-full h-full max-h-36 select-none pointer-events-none">
      <defs>
        <linearGradient id="lensGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#888888" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.15" />
        </linearGradient>
        <radialGradient id="focusGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Converging rays to center (120, 70) */}
      <line x1="40" y1="30" x2="120" y2="70" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
      <line x1="40" y1="110" x2="120" y2="70" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
      <line x1="200" y1="30" x2="120" y2="70" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
      <line x1="200" y1="110" x2="120" y2="70" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
      
      {/* Crosshair guides */}
      <line x1="30" y1="70" x2="210" y2="70" stroke="rgba(255,255,255,0.1)" strokeDasharray="3 3" strokeWidth="0.8" />
      <line x1="120" y1="15" x2="120" y2="125" stroke="rgba(255,255,255,0.1)" strokeDasharray="3 3" strokeWidth="0.8" />

      {/* Geometric concentric focus circles */}
      <circle cx="120" cy="70" r="52" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
      <circle cx="120" cy="70" r="38" stroke="rgba(255,255,255,0.14)" strokeDasharray="4 2" strokeWidth="1" />
      <circle cx="120" cy="70" r="24" stroke="rgba(255,255,255,0.25)" strokeWidth="1" fill="rgba(255,255,255,0.02)" />

      {/* Abstract Glass Eye / Aperture Arc */}
      <path
        d="M65 70 Q 120 30, 175 70 Q 120 110, 65 70 Z"
        fill="url(#lensGrad)"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="1.2"
      />

      {/* Glowing Focal Pupil / Core */}
      <circle cx="120" cy="70" r="14" fill="url(#focusGlow)" />
      <circle cx="120" cy="70" r="4" fill="#ffffff" opacity="0.9" />
      
      {/* Specular glint */}
      <ellipse cx="116" cy="66" rx="2" ry="1" fill="#ffffff" opacity="0.8" transform="rotate(-30 116 66)" />
    </svg>
  );
}

/* ─── SVG 03: Foco em conversão (Rampa ascendente translúcida e vetor de ação) ─── */
function SvgConversion() {
  return (
    <svg viewBox="0 0 240 140" fill="none" className="w-full h-full max-h-36 select-none pointer-events-none">
      <defs>
        <linearGradient id="rampGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.03" />
          <stop offset="60%" stopColor="#ffffff" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="arrowGleam" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.95" />
        </linearGradient>
        <radialGradient id="destGlow" cx="80%" cy="25%" r="40%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Destination aura */}
      <circle cx="180" cy="35" r="45" fill="url(#destGlow)" />

      {/* Metric guides */}
      <line x1="40" y1="110" x2="200" y2="110" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
      <line x1="40" y1="80" x2="200" y2="80" stroke="rgba(255,255,255,0.04)" strokeDasharray="3 3" strokeWidth="0.8" />
      <line x1="40" y1="50" x2="200" y2="50" stroke="rgba(255,255,255,0.04)" strokeDasharray="3 3" strokeWidth="0.8" />

      {/* Cascading Glass Steps */}
      <path
        d="M45 105 L75 105 L75 92 L45 92 Z"
        fill="rgba(255,255,255,0.04)"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="1"
      />
      <path
        d="M80 105 L110 105 L110 78 L80 78 Z"
        fill="rgba(255,255,255,0.08)"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1"
      />
      <path
        d="M115 105 L145 105 L145 60 L115 60 Z"
        fill="rgba(255,255,255,0.12)"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="1"
      />

      {/* Ascending Vector Ribbon */}
      <path
        d="M45 100 C 85 98, 125 75, 175 35"
        stroke="url(#arrowGleam)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M45 100 C 85 98, 125 75, 175 35 L 185 45 C 140 85, 95 108, 45 108 Z"
        fill="url(#rampGrad)"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="0.8"
      />

      {/* Dynamic Arrowhead */}
      <polygon
        points="175,25 190,35 178,48 180,38 168,36"
        fill="#ffffff"
        opacity="0.9"
      />
      
      {/* Acceleration markers */}
      <circle cx="100" cy="88" r="1.5" fill="#ffffff" opacity="0.7" />
      <circle cx="140" cy="65" r="2" fill="#ffffff" opacity="0.9" />
      <circle cx="188" cy="34" r="2" fill="#ffffff" />
    </svg>
  );
}

/* ─── SVG 04: Experiência moderna (Camadas sobrepostas 3D de interface flutuante) ─── */
function SvgExperience() {
  return (
    <svg viewBox="0 0 240 140" fill="none" className="w-full h-full max-h-36 select-none pointer-events-none">
      <defs>
        <linearGradient id="uiLayer1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id="uiLayer2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.06" />
        </linearGradient>
        <radialGradient id="uiGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="120" cy="70" r="55" fill="url(#uiGlow)" />

      {/* Layer 1 (Bottom Plate - isometric) */}
      <polygon
        points="70,75 160,45 190,75 100,105"
        fill="rgba(255,255,255,0.03)"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="1"
      />
      {/* Corner guides */}
      <line x1="70" y1="75" x2="60" y2="55" stroke="rgba(255,255,255,0.15)" strokeDasharray="2 2" strokeWidth="0.8" />
      <line x1="160" y1="45" x2="150" y2="25" stroke="rgba(255,255,255,0.15)" strokeDasharray="2 2" strokeWidth="0.8" />
      <line x1="190" y1="75" x2="180" y2="55" stroke="rgba(255,255,255,0.15)" strokeDasharray="2 2" strokeWidth="0.8" />
      <line x1="100" y1="105" x2="90" y2="85" stroke="rgba(255,255,255,0.15)" strokeDasharray="2 2" strokeWidth="0.8" />

      {/* Layer 2 (Middle Glass Card) */}
      <polygon
        points="60,55 150,25 180,55 90,85"
        fill="url(#uiLayer1)"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="1"
      />
      <line x1="80" y1="52" x2="105" y2="44" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="115" y1="41" x2="140" y2="33" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" strokeLinecap="round" />

      {/* Layer 3 (Floating Action Pill / Glass Widget) */}
      <polygon
        points="95,40 145,23 160,38 110,55"
        fill="url(#uiLayer2)"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="1.2"
      />
      <circle cx="108" cy="45" r="2.5" fill="#ffffff" opacity="0.9" />
      <line x1="116" y1="42" x2="140" y2="34" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />

      {/* Floating indicator */}
      <circle cx="165" cy="50" r="3" fill="#ffffff" opacity="0.85" />
      <circle cx="165" cy="50" r="7" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
    </svg>
  );
}

/* ─── SVG 05: Identidade da marca (Objeto 3D monocromático com anéis orbitais de vidro) ─── */
function SvgIdentity() {
  return (
    <svg viewBox="0 0 240 140" fill="none" className="w-full h-full max-h-36 select-none pointer-events-none">
      <defs>
        <linearGradient id="ringGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
          <stop offset="40%" stopColor="#888888" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.25" />
        </linearGradient>
        <radialGradient id="sphereCore" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#555555" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#111111" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Orbital Ring 1 - Horizon Ellipse */}
      <ellipse
        cx="120"
        cy="70"
        rx="68"
        ry="22"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="1"
        transform="rotate(-15 120 70)"
      />

      {/* Orbital Ring 2 - Angled Glass Ring */}
      <ellipse
        cx="120"
        cy="70"
        rx="54"
        ry="28"
        stroke="url(#ringGrad1)"
        strokeWidth="1.6"
        transform="rotate(35 120 70)"
      />

      {/* Orbital Ring 3 - Counter-Angled Glass Ring */}
      <ellipse
        cx="120"
        cy="70"
        rx="54"
        ry="28"
        stroke="url(#ringGrad1)"
        strokeWidth="1.4"
        transform="rotate(-55 120 70)"
      />

      {/* Core Brand Glass Orb */}
      <circle cx="120" cy="70" r="18" fill="url(#sphereCore)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      <ellipse cx="120" cy="70" rx="18" ry="6" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" fill="none" />

      {/* Specular glints */}
      <circle cx="114" cy="64" r="3" fill="#ffffff" opacity="0.85" />
      <circle cx="117" cy="62" r="1" fill="#ffffff" opacity="0.9" />

      {/* Alignment tick marks */}
      <line x1="120" y1="20" x2="120" y2="28" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
      <line x1="120" y1="112" x2="120" y2="120" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
    </svg>
  );
}

/* ─── SVG 06: Atenção aos detalhes (Prisma de precisão tecnológica e microréguas) ─── */
function SvgDetails() {
  return (
    <svg viewBox="0 0 240 140" fill="none" className="w-full h-full max-h-36 select-none pointer-events-none">
      <defs>
        <linearGradient id="prismTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id="prismLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="prismRight" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#111111" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Precision reticle background */}
      <circle cx="120" cy="70" r="50" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
      <circle cx="120" cy="70" r="62" stroke="rgba(255,255,255,0.04)" strokeDasharray="2 4" strokeWidth="0.8" />

      {/* Micro-calibration tick marks */}
      <line x1="60" y1="70" x2="70" y2="70" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <line x1="170" y1="70" x2="180" y2="70" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <line x1="120" y1="18" x2="120" y2="28" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <line x1="120" y1="112" x2="120" y2="122" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

      {/* Precision Isometric Glass Prism */}
      <polygon
        points="120,40 152,56 120,72 88,56"
        fill="url(#prismTop)"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="1.2"
      />
      <polygon
        points="88,56 120,72 120,104 88,88"
        fill="url(#prismLeft)"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1.2"
      />
      <polygon
        points="120,72 152,56 152,88 120,104"
        fill="url(#prismRight)"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="1.2"
      />

      {/* Acute highlight glint at apex (120, 72) */}
      <circle cx="120" cy="72" r="2.5" fill="#ffffff" opacity="0.95" />
      <line x1="114" y1="72" x2="126" y2="72" stroke="#ffffff" strokeWidth="0.8" opacity="0.8" />
      <line x1="120" y1="66" x2="120" y2="78" stroke="#ffffff" strokeWidth="0.8" opacity="0.8" />

      {/* Dimension indicators */}
      <line x1="160" y1="56" x2="160" y2="88" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
      <line x1="157" y1="56" x2="163" y2="56" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
      <line x1="157" y1="88" x2="163" y2="88" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
      <circle cx="160" cy="72" r="1.5" fill="#ffffff" opacity="0.7" />
    </svg>
  );
}

/* ─── 6 Cards Data ────────────────────────────────────────── */
const differentials = [
  {
    num: "01",
    title: "Personalização de verdade",
    desc: "Sua página parte do seu negócio — não de um template.",
    svg: <SvgPersonalization />,
  },
  {
    num: "02",
    title: "Design com propósito",
    desc: "Cada elemento visual tem uma função além de simplesmente parecer bonito.",
    svg: <SvgDesign />,
  },
  {
    num: "03",
    title: "Foco em conversão",
    desc: "A página é estruturada para facilitar o próximo passo do visitante.",
    svg: <SvgConversion />,
  },
  {
    num: "04",
    title: "Experiência moderna",
    desc: "Animações, interações e detalhes que tornam a navegação mais envolvente sem atrapalhar a experiência.",
    svg: <SvgExperience />,
  },
  {
    num: "05",
    title: "Identidade da marca",
    desc: "Cores, linguagem e estética trabalham juntas para fazer a página parecer realmente sua.",
    svg: <SvgIdentity />,
  },
  {
    num: "06",
    title: "Atenção aos detalhes",
    desc: "Do espaçamento à microinteração, cada detalhe recebe atenção antes da publicação.",
    svg: <SvgDetails />,
  },
];

export default function Differentials() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="diferenciais" ref={ref} className="py-20 md:py-28 px-4 relative overflow-hidden bg-black">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[900px] h-[500px] bg-white/[0.02] blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Area */}
        <motion.div
          initial={{ opacity: 0, y: Y_REVEAL }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: DUR_SECTION, ease: EASE_PREMIUM }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] mb-6">
            <span className="text-[11px] text-[#666] uppercase tracking-[0.15em] font-medium">Os Diferenciais</span>
          </div>
          <h2 className="section-title font-display font-extrabold text-white mb-6">
            Por que a Nexvia não trabalha com páginas genéricas.
          </h2>
          <p className="text-[16px] text-[#888] leading-relaxed">
            Cada decisão visual existe para representar melhor o seu negócio e tornar a experiência do visitante mais clara, interessante e objetiva.
          </p>
        </motion.div>

        {/* 6 Cards Grid (3x2 Desktop, 2x3 Tablet, 1x6 Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {differentials.map((card, i) => (
            <motion.div
              key={card.num}
              initial={{ opacity: 0, y: Y_REVEAL }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: DUR_SECTION,
                delay: 0.15 + i * STAGGER_CHILDREN,
                ease: EASE_PREMIUM,
              }}
              className="h-full"
            >
              <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] backdrop-blur-md p-7 md:p-8 h-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[rgba(255,255,255,0.18)] hover:bg-[rgba(255,255,255,0.035)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(255,255,255,0.02)]">
                
                {/* SVG Visual Area at the top with generous negative space */}
                <div className="w-full h-32 md:h-36 flex items-center justify-center mb-6 relative transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02] group-hover:brightness-110">
                  {card.svg}
                </div>

                {/* Content below SVG */}
                <div className="relative z-10 pt-3 border-t border-[rgba(255,255,255,0.04)]">
                  <span className="text-[12px] font-mono font-medium text-[#777] mb-2 block tracking-wider">
                    {card.num}
                  </span>
                  <h3 className="text-[18px] md:text-[19px] font-display font-semibold text-white tracking-tight mb-1.5">
                    {card.title}
                  </h3>
                  <p className="text-[14px] text-[#888] font-light leading-relaxed">
                    {card.desc}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
