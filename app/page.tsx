"use client";

import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MarqueeSection from "@/components/Marquee";
import Differentials from "@/components/Differentials";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import PainSection from "@/components/PainSection";
import SolutionSection from "@/components/SolutionSection";
import SectionTransition from "@/components/SectionTransition";

export default function Home() {
  /* ── Cursor glow that follows the mouse ─────────────────── */
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
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
      <MarqueeSection />

      {/* Hero / Marquee → A Realidade */}
      <SectionTransition text="Mas uma boa presença digital começa antes do primeiro contato." />

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

      {/* Diferenciais → Planos */}
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
