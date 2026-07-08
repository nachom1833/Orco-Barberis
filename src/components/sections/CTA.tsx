"use client";

import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";
import { MessageSquare, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-28 md:py-36 bg-brand-olive text-brand-beige rounded-t-[3rem] md:rounded-t-[5rem] -mt-12 z-20 overflow-hidden">

      {/* Subtle design details */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f5f2eb04_1px,transparent_1px),linear-gradient(to_bottom,#f5f2eb04_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-brand-oak/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-brand-beige-dark/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl flex flex-col items-center"
        >
          <span className="text-[10px] font-black text-brand-beige/60 uppercase tracking-widest block mb-4">
            ¿Trabajamos juntos?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.1] mb-6">
            ¿Listo para mostrar el verdadero potencial de tu negocio?
          </h2>
          <p className="text-sm sm:text-base text-brand-beige/80 font-medium max-w-lg mb-10 leading-relaxed">
            Hablemos hoy sobre tus metas comerciales y cómo una plataforma web optimizada a medida puede ayudarte a conseguirlas con rapidez y efectividad.
          </p>

          <motion.a
            whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(245, 242, 235, 0.15)" }}
            whileTap={{ scale: 0.98 }}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-brand-beige text-brand-olive font-black text-base shadow-lg hover:bg-brand-beige-dark hover:shadow-xl transition-all duration-300 group"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-brand-olive/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            <MessageSquare className="w-5 h-5 text-brand-oak" />
            Contactar por WhatsApp
            <ArrowRight className="w-4 h-4 text-brand-olive transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
