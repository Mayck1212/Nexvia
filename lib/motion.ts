/**
 * NEXVIA — Motion Design System
 * Arquétipo: PREMIUM
 * Skill: Motion Design Skill (LottieFiles)
 * Princípios: Apple Design HIG (Craft + Simplicity)
 *
 * REGRA: Toda animação de reveal usa estas constantes.
 * Nunca inventar valores ad-hoc.
 */

// ─── Easing Signatures ────────────────────────────────────────────────────────
/** Entrada principal — decelera forte no final (ease-out agressivo) */
export const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;
/** Saída / dismiss — acelera no inicio */
export const EASE_OUT_FAST = [0.4, 0, 1, 1] as const;
/** On-screen transitions / hover */
export const EASE_SMOOTH = [0.25, 0.1, 0.25, 1] as const;

// ─── Duration Palette (Motion Design Skill — Duration Table) ─────────────────
/** Hover / micro-feedback (button press settle) */
export const DUR_MICRO = 0.15;
/** Ícone, badge, dot */
export const DUR_QUICK = 0.4;
/** Card, elemento isolado */
export const DUR_STANDARD = 0.7;
/** Bloco de texto, reveal de seção */
export const DUR_SECTION = 0.85;
/** Hero, CTA Final — dramático */
export const DUR_DRAMATIC = 1.0;

// ─── Travel Distance (Y, em px) ───────────────────────────────────────────────
/** Distância vertical padrão de reveals */
export const Y_REVEAL = 20;
/** Distância para elementos grandes (hero panel, CTA final) */
export const Y_REVEAL_LARGE = 32;

// ─── Stagger ──────────────────────────────────────────────────────────────────
/** Entre filhos de uma lista (cards, steps, itens) */
export const STAGGER_CHILDREN = 0.08;
/** Entre linhas de texto (eyebrow → título → subtítulo) */
export const STAGGER_TEXT = 0.07;

// ─── Presets reutilizáveis ────────────────────────────────────────────────────

/** Fade-up padrão para seções */
export const fadeUp = (delay = 0, duration = DUR_STANDARD) => ({
  initial: { opacity: 0, y: Y_REVEAL },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration, delay, ease: EASE_PREMIUM },
});

/** Fade-up para elemento de destaque (hero, CTA) */
export const fadeUpDramatic = (delay = 0) => ({
  initial: { opacity: 0, y: Y_REVEAL_LARGE },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: DUR_DRAMATIC, delay, ease: EASE_PREMIUM },
});

/** Scale-in vertical — para linhas, separadores */
export const scaleInY = (delay = 0) => ({
  initial: { opacity: 0, scaleY: 0 },
  whileInView: { opacity: 1, scaleY: 1 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: DUR_SECTION, delay, ease: EASE_PREMIUM },
});

/** Scale-in horizontal — para linhas horizontais */
export const scaleInX = (delay = 0) => ({
  initial: { opacity: 0, scaleX: 0 },
  whileInView: { opacity: 1, scaleX: 1 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: DUR_DRAMATIC, delay, ease: EASE_PREMIUM },
});

/** Fade simples — para elementos decorativos, disclaimers */
export const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: DUR_STANDARD, delay, ease: EASE_SMOOTH },
});
