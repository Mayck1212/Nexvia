"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    num: "01",
    eyebrow: "Briefing",
    title: "Você conta. A gente entende.",
    desc: "Entendemos seu negócio, seu público, sua identidade e o que você precisa que a página comunique.",
  },
  {
    num: "02",
    eyebrow: "Planejamento",
    title: "Organizamos antes de criar.",
    desc: "Definimos a estrutura, hierarquia das informações e caminho que o visitante deve percorrer.",
  },
  {
    num: "03",
    eyebrow: "Design e Desenvolvimento",
    title: "A ideia ganha forma.",
    desc: "Transformamos o planejamento em uma landing page com identidade visual, estrutura e interações pensadas para o seu negócio.",
  },
  {
    num: "04",
    eyebrow: "Revisão",
    title: "Você participa do resultado.",
    desc: "Apresentamos o projeto, recebemos seus ajustes e refinamos os detalhes antes da publicação.",
  },
  {
    num: "05",
    eyebrow: "Publicação",
    title: "Sua página vai para o mundo.",
    desc: "Depois dos ajustes finais, colocamos sua landing page no ar para que seu negócio tenha uma presença digital pronta para ser apresentada ao público.",
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 md:py-28 px-4 bg-[#020202] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] mb-5">
            <span className="text-[11px] text-[#666] uppercase tracking-[0.15em] font-medium">O Processo</span>
          </div>
          <h2 className="section-title font-display font-extrabold text-white">
            Como funciona?
          </h2>
          <p className="mt-4 text-[16px] text-[#555] leading-relaxed">
            Do primeiro contato à sua landing page no ar, tudo acontece de forma simples e organizada.
          </p>
        </motion.div>

        {/* Timeline Grid */}
        <div className="mt-16 md:mt-20 relative">
          {/* Horizontal connecting line (Desktop only) */}
          <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.15)] to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Number Circle with Glow */}
                <div className="relative z-10 w-14 h-14 rounded-full border border-[rgba(255,255,255,0.15)] bg-[#0a0a0a] shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center mb-6 transition-all duration-300 group-hover:border-[rgba(255,255,255,0.3)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="text-[14px] font-display font-bold text-white/80">{step.num}</span>
                </div>

                {/* Content */}
                <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] p-6 rounded-2xl flex-1 w-full relative overflow-hidden transition-colors duration-300 group-hover:border-[rgba(255,255,255,0.08)] group-hover:bg-[rgba(255,255,255,0.03)]">
                  <div className="text-[10px] text-[#666] uppercase tracking-[0.2em] font-bold mb-3">
                    {step.eyebrow}
                  </div>
                  <h3 className="text-[15px] font-display font-semibold text-white mb-3 leading-tight">
                    {step.title}
                  </h3>
                  <div className="w-8 h-px bg-[rgba(255,255,255,0.1)] mx-auto mb-4" />
                  <p className="text-[13px] text-[#555] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 md:mt-20 flex flex-col items-center"
        >
          <p className="text-[17px] font-display font-medium text-white mb-6">
            Pronto para começar?
          </p>
          <a
            href="https://wa.me/5538999125035"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black font-semibold text-[14px] px-8 py-4 rounded-full hover:bg-[#e8e8e8] active:scale-[0.98] transition-all duration-200"
          >
            Falar com a Nexvia
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
