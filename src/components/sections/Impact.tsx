"use client";

import { useRef, memo, useState, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Globe, Cpu, BarChart } from "lucide-react";
import { useHoverSupport } from "@/hooks/useHoverSupport";

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

const AdquisicionCard = memo(function AdquisicionCard({
  supportsHover,
}: {
  supportsHover: boolean;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isCentered = useInView(wrapperRef, { once: false, margin: "-50% 0px -50% 0px" });
  const isCardActive = !supportsHover ? isCentered : false;

  return (
    <div ref={wrapperRef} className="lg:col-span-2 h-full">
      <motion.div
        variants={cardVariants}
        animate={isCardActive ? "hover" : "visible"}
        whileHover={supportsHover ? "hover" : undefined}
        // transform-gpu and backface-hidden applied to avoid tearing on Android/mobile GPUs
        className="group p-8 md:p-10 rounded-2xl bg-brand-beige-dark/40 border border-brand-olive/5 flex flex-col justify-between h-full shadow-sm relative transform-gpu backface-hidden will-change-transform overflow-hidden"
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

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 h-full">
          {/* Left Side: Icon, Badge, Title */}
          <div className="flex-1 flex flex-col justify-between h-full min-h-[140px] lg:min-h-0">
            <div>
              {/* Icon & Live Status Badge Row */}
              <div className="flex items-center justify-between mb-6">
                <motion.div
                  variants={{
                    hidden: { scale: 1, rotate: 0, backgroundColor: "var(--color-brand-olive)" },
                    visible: { scale: 1, rotate: 0, backgroundColor: "var(--color-brand-olive)" },
                    hover: { scale: 1.12, rotate: 8, backgroundColor: "var(--color-brand-oak)", transition: { duration: 0.3, ease: "easeOut" } }
                  }}
                  className="w-12 h-12 rounded-xl bg-brand-olive text-brand-beige flex items-center justify-center"
                >
                  <Globe className="w-6 h-6" />
                </motion.div>

                {/* Status: Online pulsing badge */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-olive/5 border border-brand-olive/10">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
                  </span>
                  <span className="text-[10px] font-black text-brand-olive/80 tracking-widest uppercase">
                    Status: Online
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-black text-brand-olive tracking-tight mb-3">
                Adquisición B2B predecible
              </h3>
            </div>
            
            {/* Visual micro-UI progress line */}
            <motion.div
              variants={{
                hidden: { width: "3rem", backgroundColor: "rgba(59, 67, 49, 0.2)" },
                visible: { width: "3rem", backgroundColor: "rgba(59, 67, 49, 0.2)" },
                hover: { width: "100%", backgroundColor: "var(--color-brand-oak)", transition: { duration: 0.3 } }
              }}
              className="h-1 rounded-full mt-auto relative z-10 hidden lg:block"
            />
          </div>

          {/* Right Side: Description */}
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-sm md:text-base text-brand-olive/90 font-medium leading-relaxed">
              Las ventas corporativas no ocurren por compras impulsivas en Instagram. Un ecosistema web propio capta tráfico orgánico de Google (responsable del 44% de los ingresos B2B) y automatiza la entrada de leads calificados 24/7.
            </p>
          </div>
        </div>

        {/* Mobile progress line */}
        <motion.div
          variants={{
            hidden: { width: "3rem", backgroundColor: "rgba(59, 67, 49, 0.2)" },
            visible: { width: "3rem", backgroundColor: "rgba(59, 67, 49, 0.2)" },
            hover: { width: "100%", backgroundColor: "var(--color-brand-oak)", transition: { duration: 0.3 } }
          }}
          className="h-1 rounded-full mt-8 relative z-10 lg:hidden"
        />
      </motion.div>
    </div>
  );
});

const OperacionesCard = memo(function OperacionesCard({
  supportsHover,
}: {
  supportsHover: boolean;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isCentered = useInView(wrapperRef, { once: false, margin: "-50% 0px -50% 0px" });
  const isCardActive = !supportsHover ? isCentered : false;

  return (
    <div ref={wrapperRef} className="lg:col-span-1 h-full">
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
              hidden: { scale: 1, rotate: 0, backgroundColor: "var(--color-brand-olive)" },
              visible: { scale: 1, rotate: 0, backgroundColor: "var(--color-brand-olive)" },
              hover: { scale: 1.12, rotate: 8, backgroundColor: "var(--color-brand-oak)", transition: { duration: 0.3, ease: "easeOut" } }
            }}
            className="w-12 h-12 rounded-xl bg-brand-olive text-brand-beige flex items-center justify-center mb-6"
          >
            <Cpu className="w-6 h-6" />
          </motion.div>
          
          <h3 className="text-xl font-bold text-brand-olive mb-3">
            Reducción de carga operativa
          </h3>
          
          <p className="text-sm text-brand-olive/90 font-medium leading-relaxed">
            Eliminá las horas perdidas gestionando procesos manuales. Digitalizamos y centralizamos tu información, inventario y soporte para que tu equipo se libere y se enfoque exclusivamente en escalar el negocio.
          </p>
        </div>

        <motion.div
          variants={{
            hidden: { width: "3rem", backgroundColor: "rgba(59, 67, 49, 0.2)" },
            visible: { width: "3rem", backgroundColor: "rgba(59, 67, 49, 0.2)" },
            hover: { width: "100%", backgroundColor: "var(--color-brand-oak)", transition: { duration: 0.3 } }
          }}
          className="h-1 rounded-full mt-8 relative z-10"
        />
      </motion.div>
    </div>
  );
});

const RoiCard = memo(function RoiCard({
  supportsHover,
}: {
  supportsHover: boolean;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isCentered = useInView(wrapperRef, { once: false, margin: "-50% 0px -50% 0px" });
  const [isHovered, setIsHovered] = useState(false);

  // The card is active if it's centered (on mobile) or hovered (on desktop)
  const isCardActive = !supportsHover ? isCentered : isHovered;

  // Animate the counter when the card becomes active (centered on mobile, hovered on desktop) OR simply when in viewport on desktop
  const triggerCounter = !supportsHover ? isCentered : (isCentered || isHovered);

  const [count, setCount] = useState(0);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (triggerCounter && !hasAnimatedRef.current) {
      hasAnimatedRef.current = true;
      const controls = animate(0, 500, {
        duration: 1.8,
        ease: "easeOut",
        onUpdate: (value) => setCount(Math.round(value)),
      });
      return () => controls.stop();
    }
  }, [triggerCounter]);

  return (
    <div 
      ref={wrapperRef} 
      className="lg:col-span-3 h-full"
      onMouseEnter={() => supportsHover && setIsHovered(true)}
      onMouseLeave={() => supportsHover && setIsHovered(false)}
    >
      <motion.div
        variants={cardVariants}
        animate={isCardActive ? "hover" : "visible"}
        whileHover={supportsHover ? "hover" : undefined}
        // transform-gpu and backface-hidden applied to avoid tearing on Android/mobile GPUs
        className="group p-8 md:p-10 rounded-2xl bg-brand-beige-dark/40 border border-brand-olive/5 flex flex-col justify-between h-full shadow-sm relative transform-gpu backface-hidden will-change-transform overflow-hidden"
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

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 w-full">
          {/* Left Side: Content */}
          <div className="flex-1 lg:max-w-2xl">
            <motion.div
              variants={{
                hidden: { scale: 1, rotate: 0, backgroundColor: "var(--color-brand-olive)" },
                visible: { scale: 1, rotate: 0, backgroundColor: "var(--color-brand-olive)" },
                hover: { scale: 1.12, rotate: 8, backgroundColor: "var(--color-brand-oak)", transition: { duration: 0.3, ease: "easeOut" } }
              }}
              className="w-12 h-12 rounded-xl bg-brand-olive text-brand-beige flex items-center justify-center mb-6"
            >
              <BarChart className="w-6 h-6" />
            </motion.div>
            
            <h3 className="text-2xl font-black text-brand-olive mb-3">
              Autoridad y Retorno (ROI)
            </h3>
            
            <p className="text-sm md:text-base text-brand-olive/90 font-medium leading-relaxed">
              Una infraestructura tecnológica premium transmite la solidez necesaria para cerrar tickets más altos. Un desarrollo a medida no es un gasto: estadísticamente, un sitio corporativo optimizado supera el retorno de inversión.
            </p>
          </div>

          {/* Right Side: Animated Numerical Counter */}
          <div className="flex flex-col items-center justify-center min-w-[220px] py-4 lg:py-0 border-t border-brand-olive/5 lg:border-t-0 lg:border-l lg:border-brand-olive/5 lg:pl-8">
            <motion.div
              animate={triggerCounter ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center"
            >
              <span className="text-6xl sm:text-7xl lg:text-8xl font-black text-brand-oak block tracking-tight font-sans tabular-nums select-none">
                +{count}%
              </span>
              <span className="text-[10px] font-black text-brand-olive/60 tracking-widest uppercase mt-2 block">
                Retorno de Inversión (ROI)
              </span>
            </motion.div>
          </div>
        </div>

        <motion.div
          variants={{
            hidden: { width: "3rem", backgroundColor: "rgba(59, 67, 49, 0.2)" },
            visible: { width: "3rem", backgroundColor: "rgba(59, 67, 49, 0.2)" },
            hover: { width: "100%", backgroundColor: "var(--color-brand-oak)", transition: { duration: 0.3 } }
          }}
          className="h-1 rounded-full mt-8 relative z-10"
        />
      </motion.div>
    </div>
  );
});

export default function Impact() {
  const supportsHover = useHoverSupport();

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
        {/* Section Header */}
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

        {/* Bento Box Asymmetric Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <AdquisicionCard supportsHover={supportsHover} />
          <OperacionesCard supportsHover={supportsHover} />
          <RoiCard supportsHover={supportsHover} />
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
