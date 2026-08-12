"use client";
import { Settings, Code2, Briefcase, CalendarDays, CloudLightning } from "lucide-react";
import FadeIn from "./FadeIn"; // Importamos el componente de animación

// Updated data structure to exactly replicate the professional journey for Marcelo Tejos Oliva.
const careerEntries = [
  {
    date: "2021-2023", 
    title: "Analista Programador computacional",
    institution: "Universidad Tecnológica de Chile INACAP",
    description: "Formación integral para desarrollar aplicaciones informáticas en diversas plataformas tecnológicas aplicando metodologías ágiles de desarrollo, incluyendo la identificación de necesidades, diseño de sistemas basado en modelos y la codificación en múltiples lenguajes empleando técnicas de testeo y programación segura.", 
    icon: <Code2 className="h-16 w-16 text-cyan-600" />,
    side: 'left' 
  },
  {
    date: "2023-2025", 
    title: "Ingeniería en Informática",
    institution: "Universidad Tecnológica de Chile INACAP",
    description: "Capacitado en trabajar de manera colaborativa y comprometida integrando herramientas y metodologías de vanguardia en el ejercicio de su labor. Preparado para liderar proyectos en el ámbito de la innovación y el emprendimiento tecnológicos.", 
    icon: <Settings className="h-16 w-16 text-cyan-600" />,
    side: 'right' 
  },
  {
    date: "Mazo 2026 - Junio 2026",
    title: "Desarrollador Full Stack (Práctica Profesional)",
    institution: "NeuroGestión",
    description: "Desarrollo de módulos backend y arquitectura segura con enfoque en gestión de usuarios (RBAC/TRBAC) y políticas RLS para un sistema ERP empresarial modular.", 
    icon: <Briefcase className="h-16 w-16 text-cyan-600" />,
    side: 'left' 
  },
  {
    date: "Presente",
    title: "Full Stack Developer (Freelance)",
    institution: "Proyectos Independientes",
    description: "Desarrollo independiente de soluciones tecnológicas, incluyendo sistema de minimarket (Django/MySQL) e integración de modelos de visión computacional (YOLOv8) para reconocimiento de animales.", 
    icon: <CloudLightning className="h-16 w-16 text-cyan-600" />,
    side: 'right' 
  },
];

export default function MiCamino() {
  return (
    <section
      id="trayectoria" 
      className="mx-auto max-w-7xl px-8 py-32 bg-slate-50"
    >
      {/* Header animado */}
      <FadeIn direction="up">
        <div className="mb-20">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Mi trayectoria
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Un repaso por mi camino profesional y académico
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            Un recorrido por las principales experiencias de formación y trabajo que han dado forma a mi carrera como desarrollador.
          </p>
        </div>
      </FadeIn>

      {/* TIMELINE VERTICAL */}
      <div className="relative pt-10 pb-10">
        {/* CENTRAL SPINE - Línea central estática */}
        <div className="absolute top-[6rem] bottom-[6rem] left-1/2 -translate-x-1/2 w-[3px] bg-slate-200 z-0"></div>

        <div className="space-y-16">
          {careerEntries.map((entry, index) => {
            const isTextSideLeft = entry.side === 'left';
            
            const textBoxBorderClass = isTextSideLeft 
              ? "border-l border-t border-r border-slate-200"
              : "border-l border-b border-r border-slate-200";

            return (
              // Animamos cada fila completa de la línea de tiempo. 
              // Usamos el index para que vayan apareciendo en cascada.
              <FadeIn key={index} delay={0.2 * index} direction="up">
                <div className={`grid grid-cols-[1fr_auto_1fr] md:grid-cols-[1.6fr_auto_1.6fr] items-center gap-10 ${isTextSideLeft ? '' : 'flex-row-reverse'}`}>
                  
                  {/* TEXT BLOCK */}
                  <div className={`${isTextSideLeft ? 'order-1' : 'order-3'} relative`}>
                    <div className={`p-8 rounded-3xl ${textBoxBorderClass} bg-slate-50 relative z-10 transition duration-300 hover:shadow-md hover:border-blue-100`}>
                      <div className="flex items-center gap-2 mb-2">
                         <CalendarDays className="h-4 w-4 text-slate-400" />
                        <span className="text-sm font-semibold tracking-wide text-slate-600">
                          {entry.date}
                        </span>
                      </div>
                      
                      <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                        {entry.title}
                      </h3>
                      
                      <p className="mt-1 text-sm font-semibold text-blue-600">
                         {entry.institution}
                      </p>
                      
                      <p className="mt-6 text-base leading-relaxed text-slate-600">
                        {entry.description}
                      </p>
                    </div>
                  </div>

                  {/* CENTRAL MARKER BLOCK */}
                  <div className="order-2 relative flex items-center justify-center h-full">
                      <div className={`absolute top-[4.5rem] -left-[calc(1fr+gap/2)] -right-[calc(1fr+gap/2)] md:-left-[calc(1.6fr+gap/2)] md:-right-[calc(1.6fr+gap/2)] h-[3px] bg-slate-200 z-0`}></div>
                      <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-slate-50 shadow-md shadow-slate-200">
                        <div className={`h-2.5 w-2.5 rounded-full ${isTextSideLeft ? 'bg-cyan-500' : 'bg-blue-600'} `}></div>
                      </div>
                  </div>

                  {/* ICON BLOCK */}
                  <div className={`${isTextSideLeft ? 'order-3' : 'order-1'} relative`}>
                      <div className="relative z-10 flex flex-col items-center sm:items-start h-full">
                          <div className={`overflow-hidden rounded-full bg-slate-50 border border-slate-100 group shadow-sm flex items-center justify-center h-[10rem] w-[10rem] p-6 transition duration-300 hover:shadow-md hover:border-blue-100`}>
                              {entry.icon}
                          </div>
                      </div>
                  </div>

                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}