"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

/* ─── URLs Oficiais das Demonstrações ──────────────────────── */
export const PERFORMANCE_DEMO_URL = "https://gym-nexvia.vercel.app";
export const PIZZARIA_DEMO_URL = "https://pizzaria-nexvia.vercel.app";
export const HOTEL_DEMO_URL = "https://hotel-nexvia.vercel.app/#";

/* ─── URL de Contato Oficial (WhatsApp Nexvia) ─────────────── */
const CONTACT_WHATSAPP_URL = "https://wa.me/5538999125035";

export default function Showcase() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  /* Estado de hover individual para o projeto principal (efeito de parallax sutil) */
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section
      id="em-acao"
      ref={ref}
      className="py-24 md:py-36 px-4 relative overflow-hidden bg-black flex flex-col items-center"
    >
      {/* ─── Ambient Lighting & Background Accents ──────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        {/* Glow central superior */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-[1100px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.025),transparent_70%)] blur-[120px]" />
        
        {/* Glow sutil específico do projeto performance (verde/neon discretíssimo) */}
        <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(204,255,0,0.015),transparent_70%)] blur-[100px]" />

        {/* Linhas de grade sutil padrão Nexvia */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Linha horizontal luminosa */}
        <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.1)] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        {/* ─── 1. Cabeçalho da Seção ────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 flex flex-col items-center">
          
          {/* Eyebrow / Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] mb-6 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
            <span className="text-[11px] text-[#888] uppercase tracking-[0.18em] font-medium">
              Demonstrações
            </span>
          </motion.div>

          {/* Título Principal com Fade-in + Blur -> Sharp + Deslocamento */}
          <motion.h2
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="section-title font-display font-extrabold text-white text-center leading-[1.08] tracking-tight"
          >
            Veja a Nexvia em ação.
          </motion.h2>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-[16px] md:text-[19px] text-[#737373] max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Diferentes negócios. Diferentes experiências. Uma página pensada para cada marca.
          </motion.p>
        </div>

        {/* ─── 2. PROJETO PRINCIPAL: NEXVIA PERFORMANCE ─────── */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.95, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="w-full mb-10 md:mb-14"
        >
          <div
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              setMousePos({ x: 0, y: 0 });
            }}
            className="group relative rounded-[28px] md:rounded-[36px] bg-gradient-to-b from-[rgba(255,255,255,0.035)] via-[rgba(255,255,255,0.015)] to-transparent border border-[rgba(255,255,255,0.08)] backdrop-blur-xl p-6 md:p-10 lg:p-12 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[rgba(255,255,255,0.18)] hover:shadow-[0_30px_90px_rgba(0,0,0,0.9),0_0_50px_rgba(255,255,255,0.02)] overflow-hidden"
          >
            {/* Top border specular light highlight */}
            <div className="absolute top-0 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.35)] to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Fundo com gradiente sutil dinâmico no hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{
                background: `radial-gradient(circle at ${50 + mousePos.x * 30}% ${
                  40 + mousePos.y * 30
                }%, rgba(255,255,255,0.04) 0%, transparent 60%)`,
              }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              
              {/* Informações Editoriais do Projeto (Lado Esquerdo no Desktop) */}
              <div className="lg:col-span-5 flex flex-col justify-between order-2 lg:order-1">
                <div>
                  {/* Badge & Número Editorial */}
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-[12px] font-mono font-semibold tracking-widest text-white/50 uppercase">
                      01
                    </span>
                    <span className="w-1 h-1 rounded-full bg-white/30" />
                    <span className="text-[11px] font-mono tracking-[0.16em] uppercase px-3 py-1 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-[#a3a3a3]">
                      DEMO · FITNESS
                    </span>
                  </div>

                  {/* Nome do Projeto */}
                  <h3 className="text-[28px] sm:text-[34px] md:text-[40px] font-display font-extrabold text-white tracking-tight leading-[1.1] mb-4">
                    Nexvia Performance
                  </h3>

                  {/* Descrição */}
                  <p className="text-[15px] sm:text-[16px] text-[#888888] font-light leading-relaxed mb-6">
                    Uma experiência energética criada para apresentar estrutura, modalidades e planos de forma mais envolvente.
                  </p>

                  {/* Microindicadores de Personalidade / Atributos */}
                  <div className="grid grid-cols-3 gap-3 pt-4 pb-6 border-t border-[rgba(255,255,255,0.06)]">
                    <div>
                      <div className="text-[18px] sm:text-[20px] font-display font-bold text-white tracking-tight">
                        24/7
                      </div>
                      <div className="text-[11px] font-mono text-[#666] uppercase tracking-wider mt-0.5">
                        Acesso total
                      </div>
                    </div>
                    <div>
                      <div className="text-[18px] sm:text-[20px] font-display font-bold text-white tracking-tight">
                        +20
                      </div>
                      <div className="text-[11px] font-mono text-[#666] uppercase tracking-wider mt-0.5">
                        Modalidades
                      </div>
                    </div>
                    <div>
                      <div className="text-[18px] sm:text-[20px] font-display font-bold text-white tracking-tight">
                        +1.5k
                      </div>
                      <div className="text-[11px] font-mono text-[#666] uppercase tracking-wider mt-0.5">
                        Alunos ativos
                      </div>
                    </div>
                  </div>
                </div>

                {/* Botão de Ação: Ver Projeto */}
                <div className="pt-2">
                  <a
                    href={PERFORMANCE_DEMO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white text-black font-semibold text-[14px] sm:text-[15px] transition-all duration-300 hover:bg-[#eaeaea] hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_24px_rgba(255,255,255,0.12)] focus-visible:ring-2 focus-visible:ring-white/50"
                  >
                    <span>Ver projeto</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="transition-transform duration-300 group-hover/btn:translate-x-1.5"
                    >
                      <path
                        d="M2 7h10M7 2l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Mockup Dominante da Nexvia Performance (Lado Direito no Desktop) */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <a
                  href={PERFORMANCE_DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={-1}
                  aria-hidden="true"
                  className="block relative rounded-2xl md:rounded-[24px] overflow-hidden border border-[rgba(255,255,255,0.12)] bg-[#070707] shadow-[0_25px_60px_rgba(0,0,0,0.85)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-[rgba(255,255,255,0.25)] group-hover:shadow-[0_30px_80px_rgba(0,0,0,0.95),0_0_40px_rgba(255,255,255,0.04)]"
                  style={{
                    transform: isHovered
                      ? `perspective(1000px) rotateY(${mousePos.x * 3}deg) rotateX(${-mousePos.y * 3}deg) translateY(-4px)`
                      : "perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0px)",
                  }}
                >
                  {/* Barra Superior Estilo Browser Glass Minimalista */}
                  <div className="px-4 py-3 bg-[rgba(255,255,255,0.03)] border-b border-[rgba(255,255,255,0.06)] flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    </div>

                    {/* URL Pill */}
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(0,0,0,0.5)] border border-[rgba(255,255,255,0.06)] text-[11px] font-mono text-white/50">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 animate-pulse" />
                      <span>gym-nexvia.vercel.app</span>
                    </div>

                    <div className="text-[11px] font-mono text-white/30 hidden sm:block">
                      100% RESPONSIVO
                    </div>
                  </div>

                  {/* Área Visual do Mockup */}
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#0a0a0a]">
                    <Image
                      src="/demos/gym-hero.jpg"
                      alt="Demonstração Nexvia Performance - Academia & Fitness"
                      fill
                      sizes="(max-width: 1024px) 100vw, 65vw"
                      loading="lazy"
                      className="object-cover object-center grayscale-[20%] contrast-115 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                    />

                    {/* Overlay de gradiente sofisticado e sombras de profundidade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30 pointer-events-none" />

                    {/* Conteúdo de Interface Simulado sobre o Mockup */}
                    <div className="absolute bottom-5 sm:bottom-7 left-5 sm:left-7 right-5 sm:right-7 flex flex-col sm:flex-row sm:items-end justify-between gap-4 pointer-events-none select-none">
                      <div>
                        <div className="inline-flex items-center gap-2 mb-2">
                          <span className="w-6 h-0.5 bg-white/80" />
                          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/80 font-semibold">
                            Performance High-End
                          </span>
                        </div>
                        <h4 className="text-[20px] sm:text-[24px] md:text-[28px] font-display font-black text-white uppercase tracking-tight leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                          Seu Próximo Nível Começa Aqui.
                        </h4>
                      </div>

                      {/* Pill Glass Flutuante de Conversão */}
                      <div className="hidden sm:inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[rgba(255,255,255,0.15)] text-[12px] text-white/90">
                        <span className="w-2 h-2 rounded-full bg-[#ccff00] shadow-[0_0_8px_#ccff00]" />
                        <span className="font-medium">Experiência Imersiva</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

            </div>
          </div>
        </motion.div>

        {/* ─── 3. PROJETOS SECUNDÁRIOS: PIZZARIA E HOTEL ────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-8 w-full mb-20 md:mb-28">
          
          {/* 02 — PIZZARIA NEXVIA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="group relative rounded-[28px] md:rounded-[32px] bg-gradient-to-b from-[rgba(255,255,255,0.03)] to-transparent border border-[rgba(255,255,255,0.08)] backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[rgba(255,255,255,0.18)] hover:shadow-[0_25px_70px_rgba(0,0,0,0.85),0_0_40px_rgba(255,255,255,0.02)]"
          >
            {/* Top border specular light */}
            <div className="absolute top-0 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.25)] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div>
              {/* Header do Card */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="text-[12px] font-mono font-semibold tracking-wider text-white/40">
                    02
                  </span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="text-[10px] font-mono tracking-[0.16em] uppercase px-2.5 py-0.5 rounded-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[#888]">
                    DEMO · GASTRONOMIA
                  </span>
                </div>
              </div>

              {/* Título & Descrição */}
              <h3 className="text-[22px] sm:text-[26px] font-display font-bold text-white tracking-tight mb-2.5">
                Pizzaria Nexvia
              </h3>
              <p className="text-[14px] sm:text-[15px] text-[#888888] font-light leading-relaxed mb-6">
                Uma experiência visual criada para destacar produtos, despertar desejo e transformar visitantes em pedidos.
              </p>

              {/* Mockup da Pizzaria */}
              <a
                href={PIZZARIA_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1}
                aria-hidden="true"
                className="block relative rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.1)] bg-[#070707] shadow-[0_15px_40px_rgba(0,0,0,0.8)] mb-6 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-[rgba(255,255,255,0.2)]"
              >
                {/* Minimalist Browser Bar */}
                <div className="px-3.5 py-2.5 bg-[rgba(255,255,255,0.03)] border-b border-[rgba(255,255,255,0.06)] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-white/20" />
                    <span className="w-2 h-2 rounded-full bg-white/20" />
                    <span className="w-2 h-2 rounded-full bg-white/20" />
                  </div>
                  <div className="px-2.5 py-0.5 rounded-full bg-black/60 border border-[rgba(255,255,255,0.06)] text-[10px] font-mono text-white/50">
                    pizzaria-nexvia.vercel.app
                  </div>
                </div>

                {/* Imagem do Mockup com foco gastronômico */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0c0a09]">
                  <Image
                    src="/demos/pizzaria-hero.jpg"
                    alt="Demonstração Pizzaria Nexvia - Gastronomia"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    loading="lazy"
                    className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                  {/* Detalhes simulados da interface */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none select-none">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-red-400 font-semibold block mb-0.5">
                        Artesanal & Delivery
                      </span>
                      <span className="text-[17px] font-serif font-bold text-white leading-tight block">
                        Pizza de verdade.
                      </span>
                    </div>
                    <span className="text-[11px] px-3 py-1 rounded-full bg-red-950/70 border border-red-500/30 text-red-200">
                      Conversão para Pedidos
                    </span>
                  </div>
                </div>
              </a>
            </div>

            {/* Link do Projeto */}
            <div className="pt-2">
              <a
                href={PIZZARIA_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-2.5 text-[14px] font-medium text-white/90 hover:text-white transition-colors duration-300"
              >
                <span>Ver projeto</span>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="transition-transform duration-300 group-hover/link:translate-x-1.5"
                >
                  <path
                    d="M2 7h10M7 2l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* 03 — HOTEL NEXVIA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="group relative rounded-[28px] md:rounded-[32px] bg-gradient-to-b from-[rgba(255,255,255,0.03)] to-transparent border border-[rgba(255,255,255,0.08)] backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[rgba(255,255,255,0.18)] hover:shadow-[0_25px_70px_rgba(0,0,0,0.85),0_0_40px_rgba(255,255,255,0.02)]"
          >
            {/* Top border specular light */}
            <div className="absolute top-0 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.25)] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div>
              {/* Header do Card */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="text-[12px] font-mono font-semibold tracking-wider text-white/40">
                    03
                  </span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="text-[10px] font-mono tracking-[0.16em] uppercase px-2.5 py-0.5 rounded-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[#888]">
                    DEMO · HOTELARIA
                  </span>
                </div>
              </div>

              {/* Título & Descrição */}
              <h3 className="text-[22px] sm:text-[26px] font-display font-bold text-white tracking-tight mb-2.5">
                Hotel Nexvia
              </h3>
              <p className="text-[14px] sm:text-[15px] text-[#888888] font-light leading-relaxed mb-6">
                Uma experiência sofisticada criada para transmitir conforto, exclusividade e desejo de reserva.
              </p>

              {/* Mockup do Hotel */}
              <a
                href={HOTEL_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1}
                aria-hidden="true"
                className="block relative rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.1)] bg-[#070707] shadow-[0_15px_40px_rgba(0,0,0,0.8)] mb-6 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-[rgba(255,255,255,0.2)]"
              >
                {/* Minimalist Browser Bar */}
                <div className="px-3.5 py-2.5 bg-[rgba(255,255,255,0.03)] border-b border-[rgba(255,255,255,0.06)] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-white/20" />
                    <span className="w-2 h-2 rounded-full bg-white/20" />
                    <span className="w-2 h-2 rounded-full bg-white/20" />
                  </div>
                  <div className="px-2.5 py-0.5 rounded-full bg-black/60 border border-[rgba(255,255,255,0.06)] text-[10px] font-mono text-white/50">
                    hotel-nexvia.vercel.app
                  </div>
                </div>

                {/* Imagem do Mockup com foco em luxo e conforto */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0a0a0a]">
                  <Image
                    src="/demos/hotel-hero.jpg"
                    alt="Demonstração Hotel Nexvia - Hotelaria & Luxo"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    loading="lazy"
                    className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                  {/* Detalhes simulados da interface */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none select-none">
                    <div>
                      <div className="flex gap-1 text-amber-300 text-[10px] mb-0.5">
                        ★★★★★
                      </div>
                      <span className="text-[17px] font-serif font-light text-white leading-tight block">
                        Uma pausa que prolonga.
                      </span>
                    </div>
                    <span className="text-[11px] px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-200">
                      Reserva & Exclusividade
                    </span>
                  </div>
                </div>
              </a>
            </div>

            {/* Link do Projeto */}
            <div className="pt-2">
              <a
                href={HOTEL_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-2.5 text-[14px] font-medium text-white/90 hover:text-white transition-colors duration-300"
              >
                <span>Ver projeto</span>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="transition-transform duration-300 group-hover/link:translate-x-1.5"
                >
                  <path
                    d="M2 7h10M7 2l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </motion.div>

        </div>

        {/* ─── 4. FRASE DE FECHAMENTO & CTA ─────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-3xl mx-auto text-center flex flex-col items-center pt-8 border-t border-[rgba(255,255,255,0.06)]"
        >
          {/* Texto Principal */}
          <h3 className="text-[22px] sm:text-[28px] md:text-[32px] font-display font-bold text-white tracking-tight leading-snug mb-3">
            Seu negócio não precisa caber em um template.
          </h3>

          {/* Texto Secundário */}
          <p className="text-[15px] sm:text-[17px] text-[#737373] max-w-xl mx-auto leading-relaxed mb-8 font-light">
            A Nexvia cria experiências digitais pensadas para a identidade e os objetivos de cada negócio.
          </p>

          {/* CTA Principal de Conversão */}
          <a
            href={CONTACT_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 bg-white text-black font-semibold text-[15px] px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_30px_rgba(255,255,255,0.12)] hover:bg-[#eaeaea] focus-visible:ring-2 focus-visible:ring-white/50"
          >
            <span className="relative z-10 flex items-center gap-2">
              Quero uma página assim
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M2 7h10M7 2l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(255,255,255,0.25)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
