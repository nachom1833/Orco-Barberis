"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

interface Project {
  title: string;
  category: string;
  challenge: string;
  solution: string;
  deviceType: "laptop" | "mobile";
  videoUrl: string;
  projectUrl?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-olive/40 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
            className="relative w-full max-w-4xl bg-brand-beige border border-brand-olive/10 rounded-3xl shadow-2xl p-8 md:p-10 z-10 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-brand-beige-dark text-brand-olive/70 hover-hover:text-brand-olive hover-hover:bg-brand-olive/10 transition-colors duration-200 z-20"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Layout Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
              
              {/* Left Column: Device Mockup */}
              <div className="md:col-span-5 flex justify-center items-center bg-brand-beige-dark/20 p-6 rounded-2xl border border-brand-olive/5 min-h-[260px]">
                {project.deviceType === "laptop" ? (
                  // Laptop CSS Mockup
                  <div className="w-full max-w-[280px] flex flex-col items-center">
                    <div className="w-full aspect-[16/8.5] bg-neutral-950 border-[5px] border-neutral-900 rounded-t-xl overflow-hidden relative shadow-lg transform-gpu backface-hidden [-webkit-mask-image:-webkit-radial-gradient(white,black)]">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        aria-hidden="true"
                        className="w-full h-full object-cover"
                      >
                        <source src={project.videoUrl} type="video/mp4" />
                      </video>
                    </div>
                    <div className="w-[106%] h-2 bg-neutral-800 rounded-b-lg relative border-t border-neutral-700 shadow-sm">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-[2px] bg-neutral-950 rounded-b-sm" />
                    </div>
                  </div>
                ) : (
                  // Mobile CSS Mockup
                  <div className="w-[130px] aspect-[9/19.6] bg-neutral-950 border-[5px] border-neutral-900 rounded-[20px] overflow-hidden relative shadow-xl flex flex-col transform-gpu backface-hidden [-webkit-mask-image:-webkit-radial-gradient(white,black)]">
                    <div className="absolute top-0.5 left-1/2 -translate-x-1/2 w-8 h-1.5 bg-neutral-900 rounded-full z-10 flex items-center justify-center">
                      <div className="w-1 h-1 bg-neutral-950 rounded-full" />
                    </div>
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      aria-hidden="true"
                      className="w-full h-full object-cover"
                    >
                      <source src={project.videoUrl} type="video/mp4" />
                    </video>
                  </div>
                )}
              </div>

              {/* Right Column: Project Text Info */}
              <div className="md:col-span-7">
                <span className="text-xs font-black text-brand-oak uppercase tracking-widest block mb-2">
                  {project.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-brand-olive mb-6">
                  {project.title}
                </h3>

                <div className="space-y-5">
                  <div>
                    <h4 className="text-xs font-black text-brand-olive uppercase tracking-wider mb-1.5">
                      El desafío del negocio
                    </h4>
                    <p className="text-sm sm:text-base text-brand-olive/85 leading-relaxed font-medium">
                      {project.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-black text-brand-olive uppercase tracking-wider mb-1.5">
                      La solución implementada
                    </h4>
                    <p className="text-sm sm:text-base text-brand-olive/85 leading-relaxed font-medium">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* CTA Action */}
                <div className="mt-8 pt-6 border-t border-brand-olive/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex flex-col gap-1 text-center sm:text-left">
                    <p className="text-xs font-black text-brand-olive/90">
                      ¿Querés una solución similar para tu negocio?
                    </p>
                    <p className="text-[11px] font-semibold text-brand-olive/60">
                      Hablemos para diseñar y cotizar una plataforma a tu medida.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                    {project.projectUrl && (
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-brand-olive/20 hover-hover:border-brand-olive text-brand-olive font-black text-xs transition-all duration-300 w-full sm:w-auto group hover-hover:bg-brand-olive/5"
                      >
                        Visitar sitio web
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover-hover:-translate-y-0.5 group-hover-hover:translate-x-0.5" />
                      </a>
                    )}
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-brand-olive hover-hover:bg-brand-oak text-brand-beige font-black text-xs shadow transition-all duration-300 w-full sm:w-auto group"
                    >
                      Consultar
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover-hover:-translate-y-0.5 group-hover-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
