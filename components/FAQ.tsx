"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { EASE_PREMIUM, DUR_SECTION, Y_REVEAL, STAGGER_CHILDREN } from "@/lib/motion";


const faqs = [
  {
    q: "Eu preciso saber exatamente como quero minha landing page?",
    a: "Não. Você só precisa contar sobre seu negócio, seu público e o que quer alcançar. A Nexvia cuida de organizar as ideias, estruturar as seções e criar o visual ideal para o seu projeto.",
  },
  {
    q: "A landing page funciona no celular?",
    a: "Sim, com total adaptação. Seu site é construído e testado para carregar rápido e funcionar com fluidez em smartphones, tablets e computadores.",
  },
  {
    q: "Posso pedir alterações durante o projeto?",
    a: "Sim. Antes de qualquer publicação, você participa de uma etapa de revisão para ver a página pronta, apontar ajustes e garantir que tudo esteja alinhado ao que você deseja.",
  },
  {
    q: "O valor mostrado nos planos é o preço final?",
    a: "Os valores apresentados são uma base inicial. Projetos com mais seções, recursos específicos ou animações avançadas podem ter o valor ajustado com total clareza antes do início.",
  },
  {
    q: "Domínio e hospedagem estão incluídos?",
    a: "Não estão incluídos nos planos, pois ficam no seu nome. Mas orientamos você passo a passo na contratação e configuração sem nenhuma complicação técnica.",
  },
  {
    q: "Vocês fazem outros tipos de site?",
    a: "Nosso foco principal são landing pages personalizadas para negócios. Se você tiver um projeto com necessidades específicas, converse com a gente para avaliarmos juntos.",
  },
  {
    q: "Como faço para começar?",
    a: "Basta clicar no botão de contato e mandar uma mensagem no WhatsApp. Você explica sua ideia de forma simples e alinhamos a estrutura e os prazos ideais.",
  },
  {
    q: "Como entro em contato com a Nexvia?",
    a: "O atendimento é direto pelo WhatsApp. Você conversa diretamente com quem vai planejar o seu projeto, sem intermediários ou burocracia.",
  },
];

function FaqItem({ item, isOpen, onToggle }: {
  item: typeof faqs[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={`
      border border-[rgba(255,255,255,0.06)] rounded-2xl mb-4 overflow-hidden
      bg-[rgba(255,255,255,0.015)] backdrop-blur-sm transition-all duration-300
      hover:border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.03)]
      ${isOpen ? "border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.04)] shadow-[0_10px_30px_rgba(0,0,0,0.5)]" : ""}
    `}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left p-6 gap-4 group"
        aria-expanded={isOpen}
      >
        <span className={`text-[16px] font-medium leading-snug transition-colors duration-200 ${isOpen ? "text-white" : "text-white/80 group-hover:text-white"}`}>
          {item.q}
        </span>
        <span className={`shrink-0 w-8 h-8 rounded-full border border-[rgba(255,255,255,0.1)] flex items-center justify-center transition-all duration-300 ${isOpen ? "rotate-45 border-[rgba(255,255,255,0.3)] bg-white/10" : "group-hover:border-[rgba(255,255,255,0.2)]"}`}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1v10M1 6h10" stroke="currentColor" className={isOpen ? "text-white" : "text-white/70"} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-6 pb-6 text-[15px] text-[#888] leading-relaxed">
              <div className="h-px w-full bg-[rgba(255,255,255,0.06)] mb-5" />
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" ref={ref} className="py-20 md:py-28 px-4 bg-[#020202] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[300px] bg-white/[0.015] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: Y_REVEAL }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: DUR_SECTION, ease: EASE_PREMIUM }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] mb-6">
            <span className="text-[11px] text-[#666] uppercase tracking-[0.15em] font-medium">FAQ</span>
          </div>
          <h2 className="section-title font-display font-extrabold text-white mb-5">
            Ainda ficou com alguma dúvida?
          </h2>
          <p className="text-[16px] text-[#888] leading-relaxed">
            Algumas respostas antes de dar o próximo passo.
          </p>
        </motion.div>

        {/* Accordion — stagger limitado a 4 níveis: items 5-8 entram junto com o item 4 */}
        <div>
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: Y_REVEAL }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: DUR_SECTION,
                delay: 0.1 + Math.min(i, 3) * STAGGER_CHILDREN,
                ease: EASE_PREMIUM,
              }}
            >
              <FaqItem
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
