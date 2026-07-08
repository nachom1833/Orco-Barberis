"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Heart } from "lucide-react";

export default function AboutMe() {
  const highlights = [
    {
      icon: Heart,
      title: "Empatía con el emprendedor",
      description: "Entiendo los desafíos de dirigir un negocio. No te abrumo con tecnicismos; me enfoco en ofrecerte soluciones que resuelvan problemas reales de tu día a día.",
    },
    {
      icon: Award,
      title: "Compromiso de calidad",
      description: "Cada línea de código que escribo y cada diseño que propongo está pensado para durar, cargarse rápido y ser fácil de mantener a largo plazo.",
    },
    {
      icon: ShieldCheck,
      title: "Transparencia total",
      description: "Creo en las relaciones a largo plazo. Sabrás exactamente qué estamos construyendo, por qué lo hacemos y cómo va a impactar en la facturación de tu negocio.",
    },
  ];

  return (
    <section id="sobre-mi" className="py-24 md:py-32 bg-transparent relative overflow-visible">
      {/* Decorative background element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-brand-oak/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with modern framing */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover="hover"
            className="lg:col-span-5 relative group"
          >
            {/* Outer offset frame with premium close-gap animation */}
            <motion.div
              variants={{
                hover: {
                  x: 6,
                  y: 6,
                  scale: 0.98,
                  borderColor: "var(--color-brand-olive)",
                  transition: { duration: 0.35, ease: "easeOut" }
                }
              }}
              className="absolute inset-4 border border-brand-oak rounded-3xl translate-x-4 translate-y-4 transition-all duration-300"
            />
            
            {/* Image container */}
            <motion.div
              variants={{
                hover: {
                  scale: 1.02,
                  boxShadow: "0 15px 30px rgba(59, 67, 49, 0.12)",
                  transition: { duration: 0.35, ease: "easeOut" }
                }
              }}
              className="relative aspect-square w-full rounded-3xl overflow-hidden bg-brand-beige-dark shadow-lg border border-brand-olive/10"
            >
              <Image
                src="/ignacio.jpeg"
                alt="Ignacio Orco Barberis - Desarrollador Frontend B2B"
                width={600}
                height={600}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </motion.div>

          {/* Right Column: Bio & Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <span className="text-xs font-black text-brand-oak uppercase tracking-widest block mb-3">
              Sobre Mí
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-olive tracking-tight mb-6">
              Soy Ignacio Orco Barberis
            </h2>
            
            <div className="space-y-4 text-base text-brand-olive/80 font-medium leading-relaxed mb-8">
              <p>
                Soy desarrollador de software enfocado en crear soluciones digitales de alto impacto para negocios locales y emprendedores que buscan destacar en su mercado.
              </p>
              <p>
                Mi filosofía de trabajo combina el rigor de la ingeniería de software con una visión comercial y de ventas clara. No creo en las webs como simples folletos estáticos; creo en las plataformas digitales como motores activos de conversión y optimización operativa.
              </p>
              <p>
                Me involucro en cada etapa del proyecto para garantizar una ejecución veloz, atención minuciosa al detalle visual y una comunicación honesta y constante que asegure el éxito de tu inversión.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pt-8 border-t border-brand-olive/10">
              {highlights.map((hl) => {
                const Icon = hl.icon;
                return (
                  <motion.div
                    key={hl.title}
                    whileHover="hover"
                    className="flex flex-col gap-2 p-4 rounded-2xl border border-transparent hover:border-brand-olive/10 hover:bg-brand-beige-dark/20 transition-all duration-300 cursor-default"
                  >
                    <motion.div
                      variants={{
                        hover: {
                          scale: 1.1,
                          rotate: 6,
                          backgroundColor: "rgba(92, 64, 51, 0.15)",
                          color: "var(--color-brand-oak)",
                          transition: { duration: 0.25 }
                        }
                      }}
                      className="w-8 h-8 rounded-lg bg-brand-olive/10 text-brand-olive flex items-center justify-center transition-colors duration-300"
                    >
                      <Icon className="w-4.5 h-4.5" />
                    </motion.div>
                    <h3 className="text-sm font-bold text-brand-olive">
                      {hl.title}
                    </h3>
                    <p className="text-xs text-brand-olive/60 font-semibold leading-relaxed">
                      {hl.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
