"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const benefits = [
  {
    num: "01",
    title: "Clareza",
    desc: "Seu visitante entende rapidamente quem você é, o que oferece e por que deveria continuar navegando.",
  },
  {
    num: "02",
    title: "Profissionalismo",
    desc: "Uma presença digital que transmite o mesmo cuidado e profissionalismo que você já coloca no seu negócio.",
  },
  {
    num: "03",
    title: "Conversão",
    desc: "Cada seção tem uma função: informar, gerar interesse e facilitar o próximo passo.",
  },
  {
    num: "04",
    title: "Personalização",
    desc: "Nada de encaixar sua empresa em um modelo pronto. A estrutura nasce a partir do seu negócio, da sua identidade e dos seus objetivos.",
  },
];

export default function SolutionSection() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30% 0px -30% 0px" });
  const hasStarted = useRef(false);

  useEffect(() => {
    if (inView && videoRef.current && !hasStarted.current) {
      hasStarted.current = true;
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  }, [inView]);

  return (
    <section ref={ref} className="py-20 md:py-28 px-4 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* 1. Header (Título e Descrição) — Order 1 no mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-1 lg:col-span-6 lg:row-start-1"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] mb-6">
              <span className="text-[11px] text-[#666] uppercase tracking-[0.15em] font-medium">A Solução</span>
            </div>

            {/* Title & Description */}
            <h2 className="section-title font-display font-extrabold text-white mb-6">
              Uma presença digital feita para o seu negócio.
            </h2>
            <p className="text-[16px] text-[#888] leading-relaxed max-w-[500px]">
              A Nexvia transforma a identidade e os objetivos do seu negócio em uma landing page criada para apresentar sua empresa com clareza, destacar o que importa e conduzir o visitante até o próximo passo.
            </p>
          </motion.div>

          {/* 2. Asset Visual — Order 2 no mobile, Coluna Direita no Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-2 lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:row-span-2 relative flex justify-center items-center my-4 lg:my-0 pointer-events-none select-none"
          >
            {/* Iluminação e Glow Ambiental */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[75%] bg-white/[0.03] blur-[100px] rounded-full pointer-events-none" />

            <div className="relative w-full max-w-[620px] lg:max-w-none lg:w-[112%] flex justify-center">
              <video
                ref={videoRef}
                src="/solucao.mp4"
                muted
                playsInline
                preload="auto"
                onEnded={(e) => {
                  e.currentTarget.pause();
                }}
                width={1280}
                height={720}
                className="w-full h-auto object-contain drop-shadow-[0_30px_70px_rgba(0,0,0,0.8)] mix-blend-lighten relative z-10 pointer-events-none select-none"
                style={{ aspectRatio: "16 / 9" }}
              />
            </div>
          </motion.div>

          {/* 3. Benefícios e CTA — Order 3 no mobile, Abaixo do Header no Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="order-3 lg:order-3 lg:col-span-6 lg:row-start-2 pt-2 lg:pt-0"
          >
            {/* Grade 2x2 de Benefícios */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 mb-10">
              {benefits.map((benefit) => (
                <div key={benefit.num} className="flex gap-3">
                  <div className="text-[13px] font-display font-bold text-white/30 pt-0.5">
                    {benefit.num}
                  </div>
                  <div>
                    <h4 className="text-[15px] font-semibold text-white mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-[13px] text-[#666] leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <a
                href="https://wa.me/5538999125035"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-white bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] hover:bg-white hover:text-black hover:border-white transition-all duration-300 px-7 py-3.5 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
              >
                Começar meu projeto
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

