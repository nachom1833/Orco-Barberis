"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Search, Code2, Rocket } from "lucide-react";
import { useHoverSupport } from "@/hooks/useHoverSupport";

export default function Methodology() {
  const containerRef = useRef<HTMLDivElement>(null);
  const supportsHover = useHoverSupport();

  // Hook for scrolling line effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const steps = [
    {
      id: 1,
      icon: Search,
      title: "1. Descubrimiento",
      subtitle: "Análisis integral del negocio",
      description: "Nos reunimos para entender a fondo la dinámica de tu negocio o emprendimiento, identificar cuellos de botella operativos y definir metas comerciales claras. Diseñamos la estrategia idónea para tu nicho.",
    },
    {
      id: 2,
      icon: Code2,
      title: "2. Desarrollo",
      subtitle: "Construcción ágil y precisa",
      description: "Traduzco los requerimientos en un producto digital funcional con código limpio, arquitectura escalable y rendimiento optimizado. Trabajamos con iteraciones rápidas para mantener la visibilidad total.",
    },
    {
      id: 3,
      icon: Rocket,
      title: "3. Lanzamiento",
      subtitle: "Plataforma lista para escalar",
      description: "Despliego tu sitio o aplicación web optimizando aspectos técnicos de SEO, analíticas y velocidad de carga, asegurando una transición fluida y un impacto comercial inmediato desde el primer día.",
    },
  ];

  return (
    <section id="metodologia" className="py-24 md:py-32 bg-transparent relative overflow-visible">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-xs font-black text-brand-oak uppercase tracking-widest mb-3">
            Metodología
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-olive tracking-tight">
            Cómo llevamos tu negocio al siguiente nivel.
          </h2>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative mt-12">
          {/* Vertical central line (Beige shadow) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-brand-olive/10 -translate-x-1/2" />

          {/* Animated scrolling foreground line */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-brand-oak origin-top -translate-x-1/2"
          />

          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.id}
                  whileHover={supportsHover ? "hover" : undefined}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    index % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline point indicator */}
                  <motion.div
                    variants={{
                      hover: {
                        scale: 1.25,
                        borderColor: "var(--color-brand-olive)",
                        boxShadow: "0 0 15px rgba(92, 64, 51, 0.35)",
                        transition: { duration: 0.3, ease: "easeOut" }
                      }
                    }}
                    className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-brand-beige border-2 border-brand-oak text-brand-oak flex items-center justify-center -translate-x-1/2 z-10 shadow-sm"
                  >
                    <IconComponent className="w-4 h-4" />
                  </motion.div>

                  {/* Spacer or Card content placement */}
                  <div
                    className={`w-full md:w-1/2 ${
                      index % 2 === 0
                        ? "pl-12 pr-0 md:pl-0 md:pr-12"
                        : "pl-12 pr-0 md:pl-12 md:pr-0"
                    }`}
                  >
                    <motion.div
                      variants={{
                        hover: {
                          y: -5,
                          borderColor: "rgba(92, 64, 51, 0.25)",
                          boxShadow: "0 10px 25px -5px rgba(59, 67, 49, 0.08)",
                          backgroundColor: "#F5F2EB",
                          transition: { duration: 0.35, ease: "easeOut" }
                        }
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                      className="p-8 rounded-3xl bg-brand-beige-dark/30 border border-brand-olive/5 shadow-sm transition-all duration-300"
                    >
                      <span className="text-[10px] font-black text-brand-oak uppercase tracking-widest block mb-1">
                        Paso {step.id}
                      </span>
                      <h3 className="text-xl font-bold text-brand-olive mb-1">
                        {step.title}
                      </h3>
                      <p className="text-sm font-semibold text-brand-olive-light mb-4">
                        {step.subtitle}
                      </p>
                      <p className="text-sm text-brand-olive/75 font-medium leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Empty half for desktop alignment */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
