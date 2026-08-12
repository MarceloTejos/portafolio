"use client";

import { useState } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import FadeIn from "./FadeIn";
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const projects = [
  // ============================================================
  // PROYECTO 1 - ANÁLISIS BANCARIO
  // ============================================================
  {
    id: 1,
    title: "Sistema de Análisis Bancario",
    color: "from-sky-500 to-blue-600",
    category: "Business Intelligence",
    description:
      "Proyecto completo de Business Intelligence. Incluye generación de datos mediante Python, modelado relacional, construcción de un modelo estrella y dashboards interactivos para el análisis financiero.",
    tech: [
      "Python",
      "MySQL",
      "Power BI",
      "SQL",
      "DAX",
      "Faker",
    ],
    media: {
      type: "product-carousel",
      products: [
        {
          id: 1,
          name: "Vista General",
          src: "/imagenes/Eje.png",
        },
        {
          id: 2,
          name: "Análisis de Clientes",
          src: "/imagenes/Clientes.png",
        },
        {
          id: 3,
          name: "Análisis de Transacciones",
          src: "/imagenes/transacciones.png",
        },
        {
          id: 4,
          name: "Análisis de Préstamos",
          src: "/imagenes/prestamos.png",
        },
      ],
      alt_interface: "Sistema de Análisis Bancario",
    },
    thumbnail: "/imagenes/Eje.png",
    github: "https://github.com/MarceloTejos",
    live: "https://bancodw.netlify.app/",
  },

  // ============================================================
  // PROYECTO 2 - MINIMARKET
  // ============================================================
  {
    id: 2,
    title: "Sistema Minimarket",
    description:
      "Sistema de ventas, inventario y administración. Cuenta con diferentes módulos para la gestión de productos, stock, ventas, cajas y turnos.",
    color: "from-orange-500 to-amber-500",
    category: "Sistema de Gestión",
    tech: ["Python", "Django", "MySQL", "CSS"],
    media: {
      type: "product-carousel",
      products: [
        {
          id: 1,
          name: "Inicio",
          src: "/imagenes/Inicio.png",
        },
        {
          id: 2,
          name: "Inventario",
          src: "/imagenes/Inventario.png",
        },
        {
          id: 3,
          name: "Alertas",
          src: "/imagenes/Alertas.png",
        },
        {
          id: 4,
          name: "Reposición",
          src: "/imagenes/Reposicion.png",
        },
        {
          id: 5,
          name: "Vencimientos",
          src: "/imagenes/Vencimientos.png",
        },
        {
          id: 6,
          name: "Ventas",
          src: "/imagenes/Ventas.png",
        },
        {
          id: 7,
          name: "Administración de Caja",
          src: "/imagenes/Admincajas.png",
        },
        {
          id: 8,
          name: "Administración de Turnos",
          src: "/imagenes/Adminturnos.png",
        },
      ],
      alt_interface: "Interface de Gestión de Productos Minimarket",
    },
    thumbnail: "/imagenes/Inicio.png",
    github: "https://github.com/MarceloTejos",
    live: "https://marcelotejos.pythonanywhere.com/",
  },

  // ============================================================
  // PROYECTO 3 - RECONOCIMIENTO IA
  // ============================================================
  {
    id: 3,
    title: "Reconocimiento IA",
    color: "from-emerald-500 to-teal-500",
    category: "Visión Computacional",
    description:
      "Clasificación de perros y gatos mediante visión computacional usando YOLOv8 y procesamiento en tiempo real.",
    tech: ["Python", "YOLOv8", "OpenCV", "TensorFlow"],
    media: {
      type: "video",
      src: "https://www.youtube.com/embed/VPSIRnj60Fg?rel=0",
      title: "Reconocimiento IA",
    },
    thumbnail:
      "https://img.youtube.com/vi/VPSIRnj60Fg/hqdefault.jpg",
    thumbnailFit: "cover",
    github: "https://github.com/MarceloTejos",
    live: "https://www.youtube.com/watch?v=VPSIRnj60Fg",
  },

  // ============================================================
  // PROYECTO 4 - ERP
  // ============================================================
  {
    id: 4,
    title: "ERP Empresarial (En Proceso)",
    color: "from-violet-600 to-fuchsia-600",
    category: "Proyecto Principal",
    description:
      "Sistema ERP desarrollado durante mi práctica profesional en NeuroGestión. Incluye arquitectura RBAC/TRBAC, autenticación JWT, políticas RLS, dashboards administrativos y gestión completa de usuarios.",
    tech: ["Next.js", "FastAPI", "Supabase", "Docker"],
    media: {
      type: "image",
      src: "/imagenes/erp.png",
      alt: "Dashboard Mockup ERP",
    },
    thumbnail: "/imagenes/erp.png",
    github: "https://github.com/MarceloTejos",
    live: "#",
  },
];

export default function Proyectos() {
  // Ahora el proyecto inicial es el Análisis Bancario
  const [activeProject, setActiveProject] = useState(projects[0]);

  // Estado genérico para los carruseles
  const [carouselIndex, setCarouselIndex] = useState(0);

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans overflow-x-hidden selection:bg-blue-100">
      <section
        id="proyectos"
        className="mx-auto max-w-7xl px-6 sm:px-8 py-32"
      >
        {/* =====================================================
            HEADER
        ===================================================== */}
        <FadeIn direction="up">
          <div className="mb-16">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">
              PORTAFOLIO
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
              Proyectos Destacados
            </h2>

            <p className="mt-6 max-w-3xl text-lg text-slate-600 leading-relaxed">
              Algunos de los proyectos más importantes desarrollados durante
              mi formación y experiencia profesional, con foco en el diseño y
              rendimiento.
            </p>
          </div>
        </FadeIn>

       {/* =====================================================
    PROYECTO ACTIVO
===================================================== */}
<FadeIn delay={0.2} direction="up">
  <div
    id="vista-proyecto-principal"
    className="group overflow-hidden rounded-[10px] border border-slate-200 bg-white shadow-xl transition-all duration-300"
  >
    <div className="grid lg:grid-cols-[1.3fr_0.7fr]">

      {/* =================================================
          CONTENEDOR MULTIMEDIA
      ================================================= */}
      <div className="relative flex h-[360px] items-center justify-center overflow-hidden bg-white lg:h-[430px]">

        {/* =================================================
            VIDEO
        ================================================= */}
        {activeProject.media.type === "video" ? (
          <iframe
            src={activeProject.media.src}
            title={activeProject.media.title}
            className="h-full w-full object-contain transition duration-700"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

        ) : activeProject.media.type === "product-carousel" ? (

          /* =================================================
             CARRUSEL
          ================================================= */
          <div className="absolute inset-0 flex items-center justify-center bg-white">

            {(() => {
              const products = activeProject.media.products;
              const len = products?.length ?? 0;

              const idx =
                len > 0
                  ? Math.max(
                      0,
                      Math.min(carouselIndex, len - 1)
                    )
                  : 0;

              const product =
                len > 0 ? products?.[idx] : null;

              return (
                <>
                  {/* =================================================
                      IMAGEN
                  ================================================= */}
                  {product ? (
                    <img
                      key={product.id}
                      src={product.src}
                      alt={product.name}
                      className="h-full w-full object-contain transition duration-700"
                    />
                  ) : (
                    <div className="font-medium text-slate-400">
                      No hay imágenes
                    </div>
                  )}

                  {/* =================================================
                      BOTÓN ANTERIOR
                  ================================================= */}
                  <button
                    onClick={() => {
                      if (len === 0) return;

                      setCarouselIndex(
                        (current) =>
                          (current - 1 + len) % len
                      );
                    }}
                    className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-slate-200 bg-white/90 p-3 text-slate-700 shadow-lg backdrop-blur-sm transition hover:scale-110 hover:text-blue-500"
                    aria-label="Imagen anterior"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>

                  {/* =================================================
                      BOTÓN SIGUIENTE
                  ================================================= */}
                  <button
                    onClick={() => {
                      if (len === 0) return;

                      setCarouselIndex(
                        (current) =>
                          (current + 1) % len
                      );
                    }}
                    className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-slate-200 bg-white/90 p-3 text-slate-700 shadow-lg backdrop-blur-sm transition hover:scale-110 hover:text-blue-500"
                    aria-label="Imagen siguiente"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>

                  {/* =================================================
                      NOMBRE DE LA IMAGEN
                  ================================================= */}
                  {product && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent p-5 text-white">
                      <span className="text-base font-semibold">
                        {product.name}
                      </span>
                    </div>
                  )}

                  {/* =================================================
                      INDICADORES
                  ================================================= */}
                  {len > 1 && (
                    <div className="absolute bottom-5 right-6 z-20 flex items-center gap-2">
                      {products?.map((_, index) => (
                        <button
                          key={index}
                          onClick={() =>
                            setCarouselIndex(index)
                          }
                          aria-label={`Ir a imagen ${
                            index + 1
                          }`}
                          className={`h-2.5 rounded-full transition-all duration-300 ${
                            index === carouselIndex
                              ? "w-7 bg-white"
                              : "w-2.5 bg-white/50 hover:bg-white/80"
                          }`}
                        />
                      ))}
                    </div>
                  )}

                  {/* =================================================
                      CONTADOR
                  ================================================= */}
                  {len > 1 && (
                    <div className="absolute right-5 top-5 z-20 rounded-full bg-slate-900/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                      {idx + 1} / {len}
                    </div>
                  )}
                </>
              );
            })()}
          </div>

        ) : (

          /* =================================================
             IMAGEN NORMAL
          ================================================= */
          <img
            key={activeProject.id}
            src={activeProject.media.src}
            alt={activeProject.media.alt}
            className="h-full w-full object-contain transition duration-700"
          />
        )}
      </div>

      {/* =====================================================
          INFORMACIÓN DEL PROYECTO
      ===================================================== */}
      <div className="flex flex-col justify-center border-slate-100 p-8 lg:border-l lg:p-10">

        {/* Categoría */}
        <span
          className={`w-fit text-sm font-bold uppercase tracking-[0.2em] bg-clip-text text-transparent bg-gradient-to-r ${activeProject.color}`}
        >
          {activeProject.category}
        </span>

        {/* Título */}
        <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
          {activeProject.title}
        </h3>

        {/* Descripción */}
        <p className="mt-4 text-base leading-relaxed text-slate-600 lg:text-lg">
          {activeProject.description}
        </p>

        {/* =================================================
            TECNOLOGÍAS
        ================================================= */}
        <div className="mt-6 flex flex-wrap gap-2">
          {activeProject.tech?.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* =================================================
            BOTONES
        ================================================= */}
        <div className="mt-7 flex flex-wrap gap-3">

          {/* Ver proyecto */}
          <Link
            href={activeProject.live || "#"}
            className={`inline-flex items-center gap-2 rounded-xl bg-gradient-to-r ${activeProject.color} px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl`}
          >
            <ExternalLink size={17} />
            Ver Proyecto
          </Link>

          {/* GitHub */}
          <a
            href={activeProject.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:scale-105 hover:bg-slate-50"
          >
            <FaGithub size={17} />
            GitHub
          </a>

        </div>
      </div>
    </div>
  </div>
</FadeIn>

        {/* =====================================================
            MINIATURAS
        ===================================================== */}
        <FadeIn delay={0.4} direction="up">
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {projects.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveProject(item);

                  // Reiniciar carrusel al cambiar de proyecto
                  if (
                    item.media.type === "product-carousel"
                  ) {
                    setCarouselIndex(0);
                  }

                  // Scroll hacia el proyecto principal
                  const elemento =
                    document.getElementById(
                      "vista-proyecto-principal"
                    );

                  if (elemento) {
                    elemento.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                className={`group overflow-hidden rounded-[24px] border bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  activeProject.id === item.id
                    ? "border-slate-400 ring-2 ring-offset-2 ring-cyan-500"
                    : "border-slate-200"
                }`}
              >
                <div className="relative aspect-video w-full overflow-hidden bg-slate-50">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className={`h-full w-full transition duration-700 group-hover:scale-[1.02] ${
                      item.thumbnailFit === "cover"
                        ? "object-cover"
                        : "object-contain p-3"
                    }`}
                  />

                  <div
                    className={`absolute inset-0 bg-slate-900/10 transition-opacity duration-300 ${
                      activeProject.id === item.id
                        ? "opacity-0"
                        : "opacity-100 group-hover:opacity-0"
                    }`}
                  />

                  {item.media?.type === "product-carousel" && item.media?.products && (
                    <div className="absolute right-4 top-4 rounded-full bg-slate-900/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                      {item.media.products.length} imágenes
                    </div>
                  )}
                </div>

                {/* Información */}
                <div className="p-6 sm:p-8 text-left border-t border-slate-100 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 line-clamp-1">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-sm text-slate-500 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Tecnologías */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tech
                      .slice(0, 3)
                      .map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-medium bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}

                    {item.tech.length > 3 && (
                      <span className="text-xs font-medium text-slate-400 px-1 py-1">
                        +{item.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </FadeIn>
      </section>
    </main>
  );
}

