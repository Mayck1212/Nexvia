"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export default function PainSection() {
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
    <section ref={ref} className="py-20 md:py-28 px-4 relative overflow-hidden bg-black flex flex-col items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Lado Esquerdo: Textos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] mb-6 self-start">
              <span className="text-[11px] text-[#666] uppercase tracking-[0.15em] font-medium">A Realidade</span>
            </div>

            {/* Título Principal */}
            <h2 className="section-title font-display font-extrabold text-white mb-6 leading-tight">
              Seu negócio merece parecer tão bom quanto ele é.
            </h2>

            {/* Texto Descritivo */}
            <p className="text-[16px] text-[#666] leading-relaxed max-w-[500px]">
              Uma empresa pode oferecer um ótimo serviço, mas se a presença digital não transmitir profissionalismo, clareza e confiança, parte do seu potencial não está sendo aproveitado.
            </p>
          </motion.div>

          {/* Lado Direito: Vídeo do Diagnóstico */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 relative flex justify-center items-center pointer-events-none select-none"
          >
            <div className="relative w-full flex justify-center">
              <video
                ref={videoRef}
                src="/ipad.mp4"
                muted
                playsInline
                preload="auto"
                onEnded={(e) => {
                  e.currentTarget.pause();
                }}
                width={1920}
                height={1080}
                className="w-full h-auto object-contain pointer-events-none select-none"
                style={{ aspectRatio: "16 / 9" }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
