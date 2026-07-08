"use client";

import Logo from "@/components/ui/Logo";
import { SOCIAL_LINKS } from "@/lib/constants";
import { Linkedin, Github, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Valor", href: "#valor" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Metodología", href: "#metodologia" },
    { name: "Sobre Mí", href: "#sobre-mi" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 80; // height of sticky header
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      window.history.pushState(null, "", href);
    }
  };

  return (
    <footer className="bg-brand-olive text-brand-beige py-16 px-6 border-t border-brand-olive-light/10">
      <div className="max-w-7xl mx-auto">
        {/* Top Row: Brand & Navigation */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
          {/* Brand Column */}
          <div className="flex flex-col gap-4 max-w-sm">
            <a
              href="#inicio"
              onClick={(e) => handleScroll(e, "#inicio")}
              className="flex items-center gap-3 group w-fit"
            >
              <Logo className="h-6 w-auto text-brand-beige/90 select-none transition-transform duration-300 group-hover-hover:scale-105" />
              <span className="text-sm font-black tracking-tight group-hover-hover:text-brand-beige-dark transition-colors duration-300">
                Ignacio Orco Barberis
              </span>
            </a>
            <p className="text-xs leading-relaxed text-brand-beige/85 font-medium">
              Desarrollo web optimizado, rápido y enfocado en escalar las ventas de tu negocio.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="text-xs font-semibold text-brand-beige/85 hover-hover:text-brand-beige transition-colors duration-250 relative py-1"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-brand-beige/10 my-8" />

        {/* Bottom Row: Copyright, Socials, Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-[11px] font-semibold text-brand-beige/75 text-center sm:text-left order-3 sm:order-1">
            &copy; {currentYear} Ignacio Orco Barberis. Diseñado para escalar.
          </p>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-6 order-1 sm:order-3 w-full sm:w-auto justify-between sm:justify-end">
            <div className="flex items-center gap-4">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-beige/85 hover-hover:text-brand-beige transition-colors duration-250 p-2 rounded-full hover-hover:bg-brand-beige/5 border border-brand-beige/5"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-beige/85 hover-hover:text-brand-beige transition-colors duration-250 p-2 rounded-full hover-hover:bg-brand-beige/5 border border-brand-beige/5"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>

            <a
              href="#inicio"
              onClick={(e) => handleScroll(e, "#inicio")}
              className="flex items-center gap-1.5 text-xs font-semibold text-brand-beige/85 hover-hover:text-brand-beige transition-colors duration-250 group"
            >
              <span>Volver arriba</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
