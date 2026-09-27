"use client";

const partners = [
  "Stripe",
  "Vercel",
  "Shopify",
  "HubSpot",
  "Webflow",
  "Notion",
  "Linear",
  "Figma",
  "Tailwind",
  "OpenAI",
  "Supabase",
  "Cloudflare",
];

function PartnerLogo({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center mx-10 shrink-0">
      <span
        className="text-[15px] font-semibold text-white/25 hover:text-white/50 transition-colors duration-300 tracking-tight whitespace-nowrap"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {name}
      </span>
    </div>
  );
}

export default function MarqueeSection() {
  const doubled = [...partners, ...partners];

  return (
    <section className="py-14 border-y border-[rgba(255,255,255,0.04)]">
      {/* Label */}
      <div className="text-center mb-8">
        <p className="text-[12px] text-[#555] uppercase tracking-[0.18em] font-medium">
          Tecnologias e parceiros de confiança
        </p>
      </div>

      {/* Marquee track */}
      <div className="overflow-hidden marquee-container">
        <div className="flex animate-marquee">
          {doubled.map((name, i) => (
            <PartnerLogo key={`${name}-${i}`} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
}

