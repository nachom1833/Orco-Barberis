"use client";

import { useRef, memo } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Cpu, BarChart } from "lucide-react";
import { useHoverSupport } from "@/hooks/useHoverSupport";

interface Benefit {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
  hover: {
    opacity: 1,
    y: -8,
    borderColor: "rgba(59, 67, 49, 0.25)",
    backgroundColor: "#F5F2EB",
    transition: {
      duration: 0.35,
      ease: "easeOut" as const,
    },
  },
};

const BenefitCard = memo(function BenefitCard({
  benefit,
  supportsHover,
}: {
  benefit: Benefit;
  supportsHover: boolean;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  
  // Highlighting when passing the exact center of the screen on devices without hover support (like mobile).
  const isCentered = useInView(wrapperRef, { once: false, margin: "-50% 0px -50% 0px" });
  const isCardActive = !supportsHover ? isCentered : false;
  const IconComponent = benefit.icon;

  return (
    <div ref={wrapperRef} className="h-full">
      <motion.div
        variants={cardVariants}
        animate={isCardActive ? "hover" : "visible"}
        whileHover={supportsHover ? "hover" : undefined}
        // transform-gpu and backface-hidden applied to avoid tearing on Android/mobile GPUs
        className="group p-8 rounded-2xl bg-brand-beige-dark/40 border border-brand-olive/5 flex flex-col justify-between h-full shadow-sm relative transform-gpu backface-hidden will-change-transform"
      >
        {/* Background shadow layer to optimize GPU rendering of shadows */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 0 },
            hover: { opacity: 1, transition: { duration: 0.35, ease: "easeOut" } }
          }}
          className="absolute inset-0 rounded-2xl shadow-[0_12px_30px_-5px_rgba(59,67,49,0.12)] pointer-events-none"
        />

        <div className="relative z-10">
          <motion.div
            variants={{
              hidden: {
                scale: 1,
                rotate: 0,
                backgroundColor: "var(--color-brand-olive)",
              },
              visible: {
                scale: 1,
                rotate: 0,
                backgroundColor: "var(--color-brand-olive)",
                transition: { duration: 0.3, ease: "easeOut" }
              },
              hover: {
                scale: 1.12,
                rotate: 8,
                backgroundColor: "var(--color-brand-oak)",
                transition: { duration: 0.3, ease: "easeOut" }
              }
            }}
            className="w-12 h-12 rounded-xl bg-brand-olive text-brand-beige flex items-center justify-center mb-6"
          >
            <IconComponent className="w-6 h-6" />
          </motion.div>
          
          <h3 className="text-xl font-bold text-brand-olive mb-3">
            {benefit.title}
          </h3>
          
          <p className="text-sm text-brand-olive/90 font-medium leading-relaxed">
            {benefit.description}
          </p>
        </div>

        <motion.div
          variants={{
            hidden: {
              width: "3rem",
              backgroundColor: "rgba(59, 67, 49, 0.2)",
            },
            visible: {
              width: "3rem",
              backgroundColor: "rgba(59, 67, 49, 0.2)",
              transition: { duration: 0.3 }
            },
            hover: {
              width: "100%",
              backgroundColor: "var(--color-brand-oak)",
              transition: { duration: 0.3 }
            }
          }}
          className="h-1 rounded-full mt-8 relative z-10"
        />
      </motion.div>
    </div>
  );
});

export default function Impact() {
  const supportsHover = useHoverSupport();
  const benefits: Benefit[] = [
    {
      icon: Globe,
      title: "Adquisición B2B predecible",
      description: "Las ventas corporativas no ocurren por compras impulsivas en Instagram. Un ecosistema web propio capta tráfico orgánico de Google (responsable del 44% de los ingresos B2B) y automatiza la entrada de leads calificados 24/7.",
    },
    {
      icon: Cpu,
      title: "Reducción de carga operativa",
      description: "Eliminá las horas perdidas gestionando procesos manuales. Digitalizamos y centralizamos tu información, inventario y soporte para que tu equipo se libere y se enfoque exclusivamente en escalar el negocio.",
    },
    {
      icon: BarChart,
      title: "Autoridad y Retorno (ROI)",
      description: "Una infraestructura tecnológica premium transmite la solidez necesaria para cerrar tickets más altos. Un desarrollo a medida no es un gasto: estadísticamente, un sitio corporativo optimizado supera el 500% de retorno de inversión.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="impacto" className="py-24 md:py-32 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5 }}
            className="text-xs font-black text-brand-oak uppercase tracking-widest mb-3"
          >
            EL IMPACTO REAL
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-olive tracking-tight mb-6"
          >
            Tu negocio, operando a su máxima capacidad.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-brand-olive/80 font-medium leading-relaxed"
          >
            Una presencia digital profesional no es solo una vidriera; es un activo comercial de alto rendimiento. En el sector B2B, la optimización web es el canal que genera mayor retorno de inversión y previsibilidad.
          </motion.p>
        </div>

        {/* 3-column Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {benefits.map((benefit) => (
            <BenefitCard
              key={benefit.title}
              benefit={benefit}
              supportsHover={supportsHover}
            />
          ))}
        </motion.div>

        {/* Subtle CTA Link pointing to #proyectos */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a
            href="#proyectos"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-olive hover:text-brand-oak transition-colors duration-300 group"
          >
            Ver casos de éxito
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
