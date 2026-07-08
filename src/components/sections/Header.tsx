"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "@/components/ui/Logo";
import { WHATSAPP_URL } from "@/lib/constants";
import { MessageSquare } from "lucide-react";
import { useHoverSupport } from "@/hooks/useHoverSupport";

export default function Header() {
  const [activeSection, setActiveSection] = useState("inicio");
  const supportsHover = useHoverSupport();

  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Valor", href: "#valor" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Metodología", href: "#metodologia" },
    { name: "Sobre Mí", href: "#sobre-mi" },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -50% 0px", // Trigger when the section occupies the center of the viewport
      threshold: 0.1,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    const sections = ["inicio", "valor", "proyectos", "metodologia", "sobre-mi"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      setActiveSection(targetId);
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 80; // 8rem/80px sticky header height

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Update URL hash cleanly
      window.history.pushState(null, "", href);
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full bg-brand-beige/80 backdrop-blur-md border-b border-brand-olive/10 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr]">
        {/* Desktop Navigation (Left) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 justify-start">
          {navItems.map((item) => {
            const targetId = item.href.replace("#", "");
            const isActive = activeSection === targetId;

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={`text-sm font-semibold transition-colors duration-300 relative py-1.5 group select-none ${
                  isActive ? "text-brand-olive font-bold" : "text-brand-olive/85 hover-hover:text-brand-olive"
                }`}
              >
                {item.name}
                {isActive ? (
                  <motion.span
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-oak rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 28 }}
                  />
                ) : (
                  <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-brand-oak/40 transition-all duration-300 ease-out origin-center -translate-x-1/2 group-hover-hover:w-full rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Monograma Logo (Center on Desktop, Left on Mobile) */}
        <div className="flex lg:justify-center">
          <a href="#inicio" onClick={(e) => handleScroll(e, "#inicio")} aria-label="Ir al inicio" className="flex items-center gap-2 group">
            <Logo className="h-7 w-auto text-brand-olive/85 select-none transition-transform duration-300 group-hover-hover:scale-105" />
          </a>
        </div>

        {/* CTA Button (Right) */}
        <div className="flex items-center justify-end">
          <motion.a
            whileHover={supportsHover ? { scale: 1.03, boxShadow: "0 4px 15px rgba(59, 67, 49, 0.15)" } : undefined}
            whileTap={{ scale: 0.98 }}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-olive text-brand-beige text-sm font-semibold shadow-sm hover-hover:bg-brand-olive-light transition-all duration-300"
          >
            <MessageSquare className="w-4 h-4" />
            <span className="hidden sm:inline">Hablemos</span>
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
}
