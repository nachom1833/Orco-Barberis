"use client";

import { useRef, memo } from "react";
import { motion, useInView } from "framer-motion";
import { Layers, TrendingUp, Zap, HeartHandshake } from "lucide-react";
import { useHoverSupport } from "@/hooks/useHoverSupport";

interface Pillar {
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

const ValueCard = memo(function ValueCard({
  pillar,
  supportsHover,
}: {
  pillar: Pillar;
  supportsHover: boolean;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isCentered = useInView(wrapperRef, { once: false, margin: "-50% 0px -50% 0px" });
  const isCardActive = !supportsHover ? isCentered : false;
  const IconComponent = pillar.icon;

  return (
    <div ref={wrapperRef} className="h-full">
      <motion.div
        variants={cardVariants}
        animate={isCardActive ? "hover" : "visible"}
        whileHover={supportsHover ? "hover" : undefined}
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
                backgroundColor: "#5C4033",
                transition: { duration: 0.3, ease: "easeOut" }
              }
            }}
            className="w-12 h-12 rounded-xl bg-brand-olive text-brand-beige flex items-center justify-center mb-6"
          >
            <IconComponent className="w-6 h-6" />
          </motion.div>
          <h3 className="text-xl font-bold text-brand-olive mb-3">
            {pillar.title}
          </h3>
          <p className="text-sm text-brand-olive/90 font-medium leading-relaxed">
            {pillar.description}
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

export default function ValueProp() {
  const supportsHover = useHoverSupport();
  const pillars: Pillar[] = [
    {
      icon: Layers,
      title: "Arquitectura escalable",
      description: "Construyo plataformas preparadas a nivel estructural para crecer con tu empresa de forma sólida, sin generar dolores de cabeza técnicos ni refactorizaciones costosas a futuro.",
    },
    {
      icon: TrendingUp,
      title: "Visión comercial",
      description: "No solo programo. Diseño y estructuro tu sitio web con un enfoque absoluto en optimizar las conversiones y maximizar tus ventas.",
    },
    {
      icon: Zap,
      title: "Rendimiento y retención",
      description: "La lentitud digital hace perder clientes corporativos. Desarrollo sistemas milimétricamente optimizados para garantizar una navegación fluida que retenga la atención y mejore tu posicionamiento.",
    },
    {
      icon: HeartHandshake,
      title: "Servicio al cliente",
      description: "Comunicación fluida, transparencia y soporte cercano. Soluciones a medida pensadas para las necesidades reales de tu negocio.",
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
    <section id="valor" className="py-24 md:py-32 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5 }}
            className="text-xs font-black text-brand-oak uppercase tracking-widest mb-3"
          >
            Cómo trabajo
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-olive tracking-tight"
          >
            La excelencia técnica al servicio de tu negocio.
          </motion.h2>
        </div>

        {/* 2x2 or 4-col Grid depending on viewport */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {pillars.map((pillar) => (
            <ValueCard
              key={pillar.title}
              pillar={pillar}
              supportsHover={supportsHover}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
