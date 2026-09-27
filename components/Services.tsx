"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    id: "essencial",
    name: "LANDING ESSENCIAL",
    pricePrefix: "A partir de",
    price: "R$ 200",
    desc: "Para negócios que precisam de uma presença digital objetiva, profissional e bem estruturada.",
    features: [
      "Estrutura essencial",
      "Design personalizado",
      "Responsividade",
      "Botões de contato",
      "Organização estratégica do conteúdo",
    ],
    highlight: false,
    badge: null,
  },
  {
    id: "profissional",
    name: "LANDING PROFISSIONAL",
    pricePrefix: "A partir de",
    price: "R$ 400",
    desc: "Para empresas que querem uma landing page mais completa, estratégica e com maior nível de personalização.",
    features: [
      "Estrutura completa",
      "Design personalizado",
      "Seções estratégicas",
      "Responsividade",
      "Animações e microinterações",
      "Integração com WhatsApp",
      "Maior nível de personalização",
    ],
    highlight: true,
    badge: "Mais popular",
  },
  {
    id: "premium",
    name: "LANDING PREMIUM",
    pricePrefix: "A partir de",
    price: "R$ 700",
    desc: "Para projetos que exigem uma experiência visual mais sofisticada, maior complexidade e atenção especial aos detalhes.",
    features: [
      "Estrutura personalizada",
      "Design premium",
      "Maior nível de personalização",
      "Animações avançadas",
      "Microinterações",
      "Seções personalizadas",
      "Experiência visual diferenciada",
      "Responsividade completa",
    ],
    highlight: false,
    badge: null,
  },
];

/* ─── Circled Check Icon matching reference ─────────────── */
function CircledCheckIcon({ highlight = false }: { highlight?: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0 mt-0.5">
      <circle cx="9" cy="9" r="8" stroke="white" strokeOpacity={highlight ? "0.35" : "0.18"} strokeWidth="1" />
      <path
        d="M5.5 9.2L7.8 11.5L12.5 6.5"
        stroke="white"
        strokeOpacity={highlight ? "0.95" : "0.65"}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="planos" ref={ref} className="py-20 md:py-28 px-4 bg-black relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[900px] h-[500px] bg-white/[0.02] blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] mb-6">
            <span className="text-[11px] text-[#666] uppercase tracking-[0.15em] font-medium">Os Planos</span>
          </div>
          <h2 className="section-title font-display font-extrabold text-white mb-6">
            Escolha o nível ideal para o seu projeto
          </h2>
          <p className="text-[16px] text-[#666] leading-relaxed">
            Cada negócio possui uma necessidade diferente. Por isso, criamos opções que podem se adaptar ao nível de complexidade da sua landing page.
          </p>
        </motion.div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`h-full flex flex-col ${service.highlight ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div
                className={`
                  relative flex flex-col justify-between h-full rounded-[28px] p-8 md:p-9 border
                  backdrop-blur-xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                  hover:-translate-y-1.5
                  ${service.highlight
                    ? "bg-gradient-to-b from-[rgba(255,255,255,0.05)] via-[rgba(255,255,255,0.025)] to-transparent border-[rgba(255,255,255,0.18)] shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(255,255,255,0.04)] lg:scale-[1.03] lg:-translate-y-1 hover:border-[rgba(255,255,255,0.3)] hover:shadow-[0_25px_70px_rgba(0,0,0,0.9),0_0_50px_rgba(255,255,255,0.06)]"
                    : "bg-gradient-to-b from-[rgba(255,255,255,0.025)] to-transparent border-[rgba(255,255,255,0.07)] hover:border-[rgba(255,255,255,0.16)] hover:bg-[rgba(255,255,255,0.035)] shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
                  }
                `}
              >
                {/* Badge no canto superior direito para o card em destaque */}
                {service.badge && (
                  <div className="absolute -top-3.5 right-7 z-20">
                    <span className="inline-flex items-center px-4 py-1 rounded-full bg-white text-black text-[11px] font-bold tracking-tight shadow-[0_4px_16px_rgba(255,255,255,0.25)]">
                      {service.badge}
                    </span>
                  </div>
                )}

                {/* Top: Header, Price & Description */}
                <div>
                  {/* Name */}
                  <h3 className="text-[14px] font-mono font-semibold text-[#888] uppercase tracking-wider mb-4">
                    {service.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-[13px] text-[#777] font-normal">
                      {service.pricePrefix}
                    </span>
                    <span className="text-[34px] md:text-[38px] font-display font-bold text-white tracking-tight leading-none">
                      {service.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-[14px] text-[#777] leading-relaxed mb-7 pb-6 border-b border-[rgba(255,255,255,0.06)] min-h-[64px]">
                    {service.desc}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3.5 mb-9">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-[13px] text-[#ccc]">
                        <CircledCheckIcon highlight={service.highlight} />
                        <span className="leading-snug pt-0.5">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom: CTA */}
                <div className="pt-2">
                  <a
                    href="https://wa.me/5538999125035"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      w-full inline-flex items-center justify-center gap-2
                      py-3.5 px-6 rounded-full font-semibold text-[14px]
                      transition-all duration-500 active:scale-[0.98]
                      ${service.highlight
                        ? "bg-white text-black hover:bg-[#eaeaea] shadow-[0_0_25px_rgba(255,255,255,0.15)] hover:shadow-[0_0_35px_rgba(255,255,255,0.25)]"
                        : "bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.12)] text-[#ddd] hover:text-white hover:bg-white hover:text-black hover:border-white"
                      }
                    `}
                  >
                    Quero esse plano
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Observação / Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-[12px] text-[#555] mt-10 max-w-2xl mx-auto leading-relaxed"
        >
          Os valores apresentados são iniciais. O investimento final pode variar de acordo com a complexidade, estrutura e necessidades específicas de cada projeto.
        </motion.p>

        {/* Bloco de Ajuda / Atendimento Customizado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 md:mt-20 flex flex-col items-center text-center bg-gradient-to-b from-[rgba(255,255,255,0.02)] to-transparent border border-[rgba(255,255,255,0.04)] rounded-3xl p-10 md:p-14 max-w-4xl mx-auto backdrop-blur-sm"
        >
          <h3 className="text-[20px] font-display font-semibold text-white mb-4">
            Não sabe qual opção escolher?
          </h3>
          <p className="text-[15px] text-[#777] leading-relaxed mb-8 max-w-[500px]">
            Converse com a Nexvia e explique o que você precisa. A estrutura do projeto será definida de acordo com as necessidades da sua empresa.
          </p>
          <a
            href="https://wa.me/5538999125035"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[rgba(255,255,255,0.15)] text-white font-medium text-[14px] px-8 py-3.5 rounded-full hover:bg-white hover:text-black transition-all duration-300 active:scale-[0.98]"
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
