"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";



export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <footer id="contato" ref={ref} className="relative overflow-hidden pt-16 pb-12 px-4 border-t border-[rgba(255,255,255,0.05)]">
      {/* Giant NEXVIA wordmark — watermark */}
      <div
        className="footer-wordmark absolute bottom-0 left-0 right-0 text-center font-display font-extrabold text-white select-none pointer-events-none"
        style={{ opacity: 0.045 }}
        aria-hidden="true"
      >
        NEXVIA
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Footer bottom */}
        <div className="pb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            {/* Brand Logo */}
            <div className="flex items-center">
              <Image src="/logo.png" alt="Nexvia" width={100} height={26} className="h-6 w-auto object-contain" />
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { label: "Início", href: "#inicio" },
                { label: "Planos", href: "#planos" },
                { label: "Diferenciais", href: "#diferenciais" },
                { label: "FAQ", href: "#faq" }
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[13px] text-[#777] hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* WhatsApp Contact */}
            <a
              href="https://wa.me/5538999125035"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[14px] text-white hover:text-[#ddd] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
              (38) 99912-5035
            </a>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#444]">
            <p>© {new Date().getFullYear()} Nexvia. Todos os direitos reservados.</p>
            <p>Transformando ideias em presença digital.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

