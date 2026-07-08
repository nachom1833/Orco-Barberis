"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Plus, LayoutTemplate, Laptop, Smartphone, Eye } from "lucide-react";
import ProjectModal from "@/components/ui/ProjectModal";
import { useHoverSupport } from "@/hooks/useHoverSupport";

interface Project {
  id: number;
  title: string;
  category: string;
  deviceType: "laptop" | "mobile";
  videoUrl: string;
  challenge: string;
  solution: string;
  gridSpanClass: string; // Tailwind grid span configuration
  projectUrl?: string; // Optional URL to visit the project website
}

interface ProjectCardProps {
  project: Project;
  onOpenDetail: (project: Project) => void;
}

function ProjectCard({ project, onOpenDetail }: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const supportsHover = useHoverSupport();
  const isInView = useInView(cardRef, { once: false, amount: 0.5 });

  useEffect(() => {
    if (!videoRef.current) return;

    if (!supportsHover) {
      // Mobile Behavior: play automatically only when the card is in the viewport
      if (isInView) {
        videoRef.current.play().catch((err) => {
          console.warn("Video play interrupted or failed:", err);
        });
      } else {
        videoRef.current.pause();
      }
    } else {
      // Desktop Behavior: play on hover, pause if out of viewport
      if (!isInView) {
        videoRef.current.pause();
      }
    }
  }, [isInView, supportsHover]);

  const handleMouseEnter = () => {
    if (!supportsHover) return;
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        // Safe catch for interrupted play requests on fast hover
        console.warn("Video play interrupted:", err);
      });
    }
  };

  const handleMouseLeave = () => {
    if (!supportsHover) return;
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={supportsHover ? "hover" : undefined}
      whileTap={{ scale: 0.98 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${project.gridSpanClass} group rounded-3xl bg-brand-beige border p-8 flex flex-col justify-between transition-all duration-300 shadow-sm relative overflow-hidden ${
        project.id % 2 === 0 ? "lg:translate-y-12" : ""
      } ${
        (!supportsHover && isInView)
          ? "border-brand-olive/25 shadow-md"
          : "border-brand-olive/10 shadow-sm hover-hover:border-brand-olive/25 hover-hover:shadow-md"
      }`}
    >
      {/* Category & Badge */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <span className="text-[10px] font-black text-brand-oak uppercase tracking-widest block mb-1">
            {project.category}
          </span>
          <h3 className="text-2xl font-black text-brand-olive tracking-tight">
            {project.title}
          </h3>
        </div>
        <div className="p-2 rounded-full bg-brand-beige-dark text-brand-olive/50">
          {project.deviceType === "laptop" ? (
            <Laptop className="w-4 h-4" />
          ) : (
            <Smartphone className="w-4 h-4" />
          )}
        </div>
      </div>

      {/* Pure CSS Device Mockup Container with hover zoom */}
      <motion.div
        variants={{
          initial: { scale: 1, y: 0, filter: "none" },
          hover: {
            scale: 1.05,
            y: -5,
            filter: "drop-shadow(0 20px 25px rgba(92, 64, 51, 0.12))",
            transition: { duration: 0.4, ease: "easeOut" }
          }
        }}
        animate={(!supportsHover && isInView) ? "hover" : "initial"}
        className="flex-1 flex items-center justify-center min-h-[220px] mb-8 overflow-hidden relative"
      >
        {project.deviceType === "laptop" ? (
          // Laptop CSS Mockup
          <div className="w-full max-w-[340px] flex flex-col items-center">
            <div className="w-full aspect-[16/8.5] bg-neutral-950 border-[6px] border-neutral-900 rounded-t-xl overflow-hidden relative shadow-lg">
              <video
                ref={videoRef}
                loop
                muted
                playsInline
                aria-hidden="true"
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  (!supportsHover && isInView)
                    ? "opacity-100"
                    : "opacity-85 group-hover-hover:opacity-100"
                }`}
              >
                <source src={project.videoUrl} type="video/mp4" />
                Tu navegador no soporta videos.
              </video>
            </div>
            {/* Laptop base */}
            <div className="w-[106%] h-2 bg-neutral-800 rounded-b-lg relative border-t border-neutral-700 shadow-sm">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-[2px] bg-neutral-950 rounded-b-sm" />
            </div>
          </div>
        ) : (
          // Mobile CSS Mockup
          <div className="w-[150px] aspect-[9/19.6] bg-neutral-950 border-[6px] border-neutral-900 rounded-[24px] overflow-hidden relative shadow-xl flex flex-col">
            {/* Top camera Notch / speaker */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-10 h-2 bg-neutral-900 rounded-full z-10 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-neutral-950 rounded-full" />
            </div>
            <video
              ref={videoRef}
              loop
              muted
              playsInline
              aria-hidden="true"
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                (!supportsHover && isInView)
                  ? "opacity-100"
                  : "opacity-85 group-hover-hover:opacity-100"
              }`}
            >
              <source src={project.videoUrl} type="video/mp4" />
              Tu navegador no soporta videos.
            </video>
          </div>
        )}
      </motion.div>

      {/* View details button trigger */}
      <div className="pt-4 border-t border-brand-olive/5 flex items-center justify-between">
        <p className="text-xs text-brand-olive/60 font-semibold">
          Ver desafío y solución
        </p>
        <motion.button
          variants={{
            initial: { scale: 1, backgroundColor: "var(--color-brand-olive)" },
            hover: {
              scale: 1.04,
              backgroundColor: "var(--color-brand-oak)",
              transition: { duration: 0.3 }
            }
          }}
          animate={(!supportsHover && isInView) ? "hover" : "initial"}
          whileTap={{ scale: 0.96 }}
          onClick={() => onOpenDetail(project)}
          className="flex items-center gap-1.5 px-4 py-2 rounded-full text-brand-beige text-xs font-bold shadow-sm transition-all duration-300"
        >
          <motion.span
            variants={{
              initial: { rotate: 0 },
              hover: { rotate: 90, transition: { duration: 0.3 } }
            }}
            animate={(!supportsHover && isInView) ? "hover" : "initial"}
            className="inline-block"
          >
            <Plus className="w-3.5 h-3.5" />
          </motion.span>
          Ver detalle
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "Cueros Porteños",
      category: "Catálogo E-commerce",
      deviceType: "laptop",
      videoUrl: "/videos/cueros-portenos.mp4",
      challenge: "El negocio local de venta de cueros y marroquinería tenía ventas estancadas al depender únicamente del local físico y de Instagram, lo que generaba un proceso manual y lento para procesar pedidos.",
      solution: "Se desarrolló un catálogo digital interactivo, ultra rápido y móvil-optimizado, permitiendo a los clientes explorar y seleccionar variantes de productos de cuero y finalizar la compra directamente a través de WhatsApp con un pedido estructurado y listo para procesar.",
      gridSpanClass: "lg:col-span-7",
      projectUrl: "https://cueros-portenos.vercel.app/",
    },
    {
      id: 2,
      title: "Rincón Casero",
      category: "Landing Page de Conversión",
      deviceType: "mobile",
      videoUrl: "/videos/rincon-casero.mp4",
      challenge: "Un restaurante de viandas y comida casera necesitaba captar suscriptores mensuales de manera directa, pero su tasa de rebote era alta debido a una web lenta y poco intuitiva.",
      solution: "Se diseñó una landing page de conversión enfocada en la propuesta de valor diaria del negocio, con carga menor a 1 segundo, fotos optimizadas y un checkout optimizado en 3 pasos que multiplicó el volumen de suscripciones mensuales.",
      gridSpanClass: "lg:col-span-5",
      projectUrl: "http://www.rinconcasero.com.ar/",
    },
    {
      id: 3,
      title: "Herramienta Tomás Alonso",
      category: "App de Gestión",
      deviceType: "mobile",
      videoUrl: "/videos/tomas-alonso.mp4",
      challenge: "Tomás Alonso, un emprendedor con múltiples locales de distribución, perdía horas conciliando stocks y planificando rutas de entrega mediante hojas de cálculo fragmentadas.",
      solution: "Creación de una aplicación web de gestión interna (PWA) de diseño móvil-first que sincroniza en tiempo real el inventario de los locales y automatiza la generación de rutas optimizadas de reparto para los choferes.",
      gridSpanClass: "lg:col-span-4",
    },
    {
      id: 4,
      title: "Herramienta Gonzalo Simón",
      category: "App de Gestión",
      deviceType: "laptop",
      videoUrl: "/videos/gonzalo-simon.mp4",
      challenge: "El consultor financiero Gonzalo Simón necesitaba recolectar datos de clientes y automatizar la generación de informes personalizados sin recurrir a software costoso y complejo de configurar.",
      solution: "Se implementó un panel web intuitivo que procesa la información ingresada por los clientes, calcula métricas clave de inversión y genera PDFs descargables profesionales de manera instantánea, reduciendo el tiempo de consultoría a la mitad.",
      gridSpanClass: "lg:col-span-4",
    },
    {
      id: 5,
      title: "BE Marketing",
      category: "Landing Page Corporativa",
      deviceType: "laptop",
      videoUrl: "/videos/be-marketing.mp4",
      challenge: "La agencia B Marketing necesitaba posicionarse como un socio tecnológico serio ante empresas corporativas y requerían transmitir profesionalidad y un diferencial disruptivo.",
      solution: "Se construyó una landing page corporativa con animaciones premium fluidas que explican el retorno de inversión de sus campaigns de marketing, integrando animéticas de conversión avanzadas y un captador de prospectos corporativo de alta retención.",
      gridSpanClass: "lg:col-span-4",
      projectUrl: "https://b-emarketing.vercel.app/",
    },
  ];

  const handleOpenDetail = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="proyectos" className="pt-24 pb-36 md:pt-32 md:pb-48 bg-transparent relative overflow-visible">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-24">
          <p className="text-xs font-black text-brand-oak uppercase tracking-widest mb-3">
            Portafolio
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-olive tracking-tight">
            Proyectos que optimizan negocios.
          </h2>
        </div>

        {/* Responsive layout: 1 column on mobile, 2 columns on tablet, custom spans on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-stretch pt-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetail={handleOpenDetail}
            />
          ))}
        </div>
      </div>

      {/* Shared Interactive Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
