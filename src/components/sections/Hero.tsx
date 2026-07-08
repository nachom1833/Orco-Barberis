"use client";

import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";
import { ArrowRight, Sparkles } from "lucide-react";
import { useHoverSupport } from "@/hooks/useHoverSupport";

export default function Hero() {
  const supportsHover = useHoverSupport();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // Custom cubic-bezier for smooth premium feel
      },
    },
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden py-20 md:py-28 px-6 bg-transparent"
    >
      {/* Subtle modern Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b433108_1px,transparent_1px),linear-gradient(to_bottom,#3b433108_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-olive/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-brand-oak/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-olive/10 border border-brand-olive/15 text-brand-olive text-xs font-semibold uppercase tracking-wider mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-oak" />
            Desarrollo de Software B2B Premium
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl font-black text-brand-olive tracking-tight leading-[1.05] mb-6 max-w-3xl"
          >
            Desarrollo web enfocado en{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-olive via-brand-olive-light to-brand-oak italic font-normal">
              escalar
            </span>{" "}
            tu negocio.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-brand-olive/80 font-medium max-w-2xl leading-relaxed mb-10"
          >
            Mostramos de lo que tu negocio es capaz de la manera más profesional
            posible, optimizando cada aspecto digital con atención al detalle y
            rapidez de ejecución.
          </motion.p>

          {/* CTA */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4">
            <motion.a
              whileHover={supportsHover ? { scale: 1.03 } : undefined}
              whileTap={{ scale: 0.98 }}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-brand-oak text-brand-beige font-semibold shadow-lg shadow-brand-oak/20 hover-hover:bg-brand-oak-light hover-hover:shadow-brand-oak/30 transition-all duration-300 group text-base"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover-hover:translate-x-full transition-transform duration-1000 ease-out" />
              Hablemos de tu negocio
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover-hover:translate-x-1" />
            </motion.a>

            <motion.a
              whileHover={supportsHover ? { scale: 1.03 } : undefined}
              whileTap={{ scale: 0.98 }}
              href="#proyectos"
              className="px-6 py-4 text-sm font-bold text-brand-olive/80 hover-hover:text-brand-olive transition-colors duration-300 relative group"
            >
              Ver casos de éxito
              <span className="absolute bottom-2 left-1/2 w-0 h-0.5 bg-brand-olive transition-all duration-300 ease-out origin-center -translate-x-1/2 group-hover-hover:w-[60%]" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative vertical line indicating scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] font-black text-brand-olive/45 uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-[1px] h-10 bg-brand-olive/20 relative overflow-hidden">
          <motion.div
            animate={{
              y: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-0 top-0 w-full h-1/2 bg-brand-oak"
          />
        </div>
      </div>
    </section>
  );
}
