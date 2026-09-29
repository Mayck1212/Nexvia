"use client";

import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Differentials from "@/components/Differentials";
import TrustSection from "@/components/TrustSection";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import PainSection from "@/components/PainSection";
import SolutionSection from "@/components/SolutionSection";
import Showcase from "@/components/Showcase";
import SectionTransition from "@/components/SectionTransition";

export default function Home() {
  /* ── Cursor glow that follows the mouse (GSAP) ─────────────────── */
  const cursorRef = useRef<HTMLDivElement>(null);

  // GSAP will gracefully skip if @gsap/react is not loaded correctly,
  // but we assume it's installed as requested.
  // We use standard React useEffect for event listeners because this is a top level Next.js file,
  // and we want to avoid extra dependencies if possible, but the GSAP logic is straightforward.
  
  useEffect(() => {
    // Import dynamically so it doesn't break SSR or server components
    let ctx: any;
    
    import("gsap").then((gsapModule) => {
      const gsap = gsapModule.default;
      
      // Use gsap.context to ensure cleanup
      ctx = gsap.context(() => {
        // Inicializa o elemento no topo esquerdo com ajuste de 50% via GSAP (muito mais seguro)
        gsap.set(cursorRef.current, { top: 0, left: 0, xPercent: -50, yPercent: -50 });

        // Create highly optimized setters for x and y transforms (GPU accelerated)
        const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.15, ease: "power3.out" });
        const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.15, ease: "power3.out" });

        const move = (e: MouseEvent) => {
          // Disable on touch devices (where pointer is coarse)
          if (window.matchMedia("(pointer: coarse)").matches) return;
          
          xTo(e.clientX);
          yTo(e.clientY);
        };

        window.addEventListener("mousemove", move, { passive: true });
        
        // Add a specific cleanup for the event listener inside the context
        return () => window.removeEventListener("mousemove", move);
      }, cursorRef);
    });

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <main className="relative bg-black">
      {/* Global cursor glow */}
      <div
        ref={cursorRef}
        className="cursor-glow hidden lg:block"
        aria-hidden="true"
      />

      <Header />
      <Hero />

      {/* Hero → A Realidade */}
      <SectionTransition text="Antes de conquistar um cliente, seu negócio precisa conquistar atenção." />

      <PainSection />

      {/* A Realidade → A Solução */}
      <SectionTransition text="Mas esse cenário pode ser diferente." />

      <SolutionSection />

      {/* A Solução → Como funciona */}
      <SectionTransition text="Agora, veja como transformamos essa ideia em realidade." />

      <HowItWorks />

      {/* Como funciona → Diferenciais */}
      <SectionTransition text="Cada etapa existe por um motivo." />

      <Differentials />

      {/* Diferenciais → Veja a Nexvia em ação */}
      <SectionTransition text="Veja na prática como isso se aplica a cada negócio." />

      <Showcase />

      {/* Demonstrações → Por que confiar */}
      <SectionTransition text="Entenda por que você pode confiar nesse processo." />

      <TrustSection />

      {/* Por que confiar → Planos */}
      <SectionTransition text="Agora, escolha o nível ideal para o seu projeto." />

      <Services />

      {/* Planos → FAQ */}
      <SectionTransition text="Antes de começar, talvez você ainda tenha algumas dúvidas." />

      <FAQ />

      {/* FAQ → CTA Final */}
      <SectionTransition text="Então, vamos dar o próximo passo?" />

      <CTAFinal />
      <Footer />
    </main>
  );
}
