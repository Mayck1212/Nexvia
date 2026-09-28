"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Planos", href: "#planos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    if (!href || href === "#" || href === "#inicio") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    try {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Header */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div
          className={`
            flex items-center gap-8 px-5 h-[52px] rounded-full
            transition-all duration-500
            ${scrolled
              ? "bg-[rgba(0,0,0,0.85)] backdrop-blur-xl border border-[rgba(255,255,255,0.1)] shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
              : "bg-[rgba(255,255,255,0.04)] backdrop-blur-xl border border-[rgba(255,255,255,0.07)]"
            }
          `}
        >
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNav("#inicio");
            }}
            className="flex items-center shrink-0"
            aria-label="NEXVIA"
          >
            <Image
              src="/logo.png"
              alt="Nexvia"
              width={140}
              height={36}
              className="h-8 w-auto"
            />
          </a>

          {/* Nav — desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="px-3.5 py-1.5 text-[13px] text-[#888] hover:text-white transition-colors duration-200 rounded-full hover:bg-white/5"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="https://wa.me/5538999125035"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 bg-white text-black text-[13px] font-semibold px-4 h-8 rounded-full hover:bg-[#e8e8e8] transition-colors duration-200 shrink-0"
          >
            Iniciar Projeto
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden ml-1 w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <span className={`block w-5 h-px bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
            <span className={`block w-5 h-px bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[3px]" : ""}`} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[76px] left-4 right-4 z-40 bg-[rgba(10,10,10,0.97)] backdrop-blur-xl border border-[rgba(255,255,255,0.08)] rounded-2xl p-4 shadow-2xl"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left px-4 py-3 text-[15px] text-[#888] hover:text-white hover:bg-white/5 rounded-xl transition-all"
                >
                  {link.label}
                </button>
              ))}
              <div className="mt-2 pt-2 border-t border-white/5">
                <a
                  href="https://wa.me/5538999125035"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center gap-2 bg-white text-black font-semibold py-3 rounded-xl"
                >
                  Iniciar Projeto
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


