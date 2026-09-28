"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ─── Os 4 Pilares de Segurança e Confiança ─────────────────── */
const trustPillars = [
  {
    num: "01",
    label: "Personalização Real",
    title: "Pensado para o seu negócio",
    desc: "Não usamos uma solução visual genérica. Cada página é construída considerando o segmento, a identidade, o público e o objetivo exclusivo do seu negócio.",
    guarantee: "Página feita do zero, sem template",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: "02",
    label: "Acompanhamento Ativo",
    title: "Você acompanha o processo",
    desc: "Você não precisa simplesmente “entregar tudo e esperar”. A comunicação é transparente durante todo o desenvolvimento, permitindo revisar e alinhar o projeto antes da publicação.",
    guarantee: "Até [5] rodadas de ajustes inclusas",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: "03",
    label: "Estratégia Visual",
    title: "Design que tem propósito",
    desc: "A estética não existe apenas para impressionar. Hierarquia visual, conteúdo, navegação e chamadas para ação são pensados para tornar a experiência clara e intuitiva para quem visita a página.",
    guarantee: "Você só publica quando aprovar",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="m4.93 4.93 4.24 4.24M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="2" fill="currentColor"/>
      </svg>
    ),
  },
  {
    num: "04",
    label: "Base Sólida",
    title: "Pronto para crescer",
    desc: "Sua landing page é construída com padrões modernos de desenvolvimento, código limpo e arquitetura pensada para evoluir com novas demandas conforme seu negócio escala.",
    guarantee: "Código limpo e fácil de evoluir",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

/* ─── Etapas do Pipeline Arquitetural (Elemento Visual Central) ─── */
const pipelineSteps = [
  { step: "01", name: "Ideia & Diagnóstico", status: "Alinhamento Inicial" },
  { step: "02", name: "Design & Estrutura", status: "Arquitetura Visual" },
  { step: "03", name: "Experiência Digital", status: "Desenvolvimento Fluido" },
  { step: "04", name: "Revisão & Lançamento", status: "Publicação no Ar" },
];

export default function TrustSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="confianca"
      ref={ref}
      className="py-24 md:py-36 px-4 relative overflow-hidden bg-black flex flex-col items-center"
    >
      {/* ─── Ambient Lighting & Background ──────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        {/* Soft radial aura */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02),transparent_70%)] blur-[130px]" />
        
        {/* Faint grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Linha horizontal decorativa */}
        <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.08)] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        {/* ─── 1. Elemento Visual Central Superior: Pipeline do Projeto ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-4xl mb-12 md:mb-16"
        >
          <div className="rounded-2xl md:rounded-3xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.07)] backdrop-blur-xl p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.7)] relative overflow-hidden">
            {/* Top specular highlight */}
            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.3)] to-transparent" />

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-[rgba(255,255,255,0.05)]">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-white/70 animate-pulse" />
                <span className="text-[12px] font-mono uppercase tracking-[0.18em] text-[#a3a3a3] font-medium">
                  Fluxo de Construção Nexvia
                </span>
              </div>
              <div className="text-[11px] font-mono text-white/40 tracking-wider">
                TRANSPARÊNCIA EM TODAS AS ETAPAS
              </div>
            </div>

            {/* Pipeline de 4 Estágios Conectados */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-5 relative">
              {pipelineSteps.map((step, idx) => (
                <div key={step.step} className="relative group/step">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="text-[11px] font-mono font-bold text-white/40 group-hover/step:text-white transition-colors duration-300">
                      {step.step}
                    </span>
                    <span className="h-px flex-1 bg-[rgba(255,255,255,0.08)] group-hover/step:bg-[rgba(255,255,255,0.2)] transition-colors duration-300" />
                    {idx < pipelineSteps.length - 1 && (
                      <span className="hidden lg:block text-white/20 text-[10px]">→</span>
                    )}
                  </div>
                  <h4 className="text-[14px] sm:text-[15px] font-display font-semibold text-white tracking-tight leading-snug">
                    {step.name}
                  </h4>
                  <p className="text-[12px] text-[#777] font-mono mt-1">
                    {step.status}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ─── 2. Cabeçalho da Seção ────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 flex flex-col items-center">
          
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] mb-6 backdrop-blur-md"
          >
            <span className="text-[11px] text-[#888] uppercase tracking-[0.18em] font-medium">
              Segurança & Clareza
            </span>
          </motion.div>

          {/* Título Principal */}
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.85, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="section-title font-display font-extrabold text-white text-center leading-[1.08] tracking-tight mb-5"
          >
            Por que confiar na Nexvia?
          </motion.h2>

          {/* Ideia Central */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-[17px] md:text-[20px] font-display font-semibold text-[#f0f0f0] max-w-2xl mx-auto leading-relaxed mb-4 tracking-tight"
          >
            Não entregamos apenas uma página bonita. Criamos uma experiência pensada para o seu negócio.
          </motion.p>

          {/* Texto Complementar */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
            className="text-[15px] md:text-[16px] text-[#737373] max-w-2xl mx-auto leading-relaxed font-light"
          >
            Da primeira ideia à publicação, cada projeto é construído para representar sua marca, facilitar a experiência do visitante e transformar sua presença digital em uma ferramenta estratégica para sua empresa.
          </motion.p>
        </div>

        {/* ─── 3. Grid dos 4 Pilares de Confiança ───────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-5xl">
          {trustPillars.map((pillar, index) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.75,
                delay: 0.4 + index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full"
            >
              <div className="group relative h-full rounded-[24px] md:rounded-[28px] bg-gradient-to-b from-[rgba(255,255,255,0.03)] to-[rgba(255,255,255,0.005)] border border-[rgba(255,255,255,0.07)] backdrop-blur-xl p-7 md:p-8 flex flex-col justify-between transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[rgba(255,255,255,0.18)] hover:bg-[rgba(255,255,255,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(255,255,255,0.02)] overflow-hidden">
                
                {/* Specular border sheen on hover */}
                <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.2)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Top Bar do Card: Ícone & Número */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] flex items-center justify-center transition-all duration-500 group-hover:border-[rgba(255,255,255,0.2)] group-hover:bg-[rgba(255,255,255,0.08)] group-hover:scale-105 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                      {pillar.icon}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono tracking-[0.16em] uppercase px-2.5 py-0.5 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] text-[#888]">
                        {pillar.label}
                      </span>
                      <span className="text-[12px] font-mono font-semibold text-white/40 group-hover:text-white transition-colors duration-300">
                        {pillar.num}
                      </span>
                    </div>
                  </div>

                  {/* Título do Pilar */}
                  <h3 className="text-[20px] sm:text-[22px] font-display font-bold text-white tracking-tight leading-snug mb-3">
                    {pillar.title}
                  </h3>

                  {/* Descrição */}
                  <p className="text-[14px] sm:text-[15px] text-[#888888] font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                {/* Linha discreta de acabamento inferior */}
                <div className="mt-6 pt-4 border-t border-[rgba(255,255,255,0.04)] flex items-center justify-between text-[11px] font-mono text-[#555]">
                  <span>Padrão de Entrega</span>
                  <span className="group-hover:text-white/70 transition-colors duration-300">{pillar.guarantee}</span>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Linha Destaque Prazo */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#f0f0f0] opacity-80" />
            <span className="text-[13px] text-[#a3a3a3] tracking-wide">
              Prazo médio de entrega: <strong className="text-white font-medium">[4] dias úteis</strong> após o briefing.
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
