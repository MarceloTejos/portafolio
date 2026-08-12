"use client";

import { 
  Award, 
  Star, 
  ArrowUpRight, 
  Database, 
  Workflow, 
  Cloud, 
  ClipboardCheck 
} from "lucide-react";

// Tu logro principal (Tarjeta Grande)
const achievement = {
  title: "6° Lugar Académico",
  organization: "Universidad Tecnológica INACAP",
  context: "Promoción Ingeniería en Informática",
  description: "Reconocimiento académico por el promedio de calificaciones más alto obtenido entre la cohorte de la carrera de Ingeniería en Informática, demostrando constancia y dominio técnico.",
  icon: <Award className="h-10 w-10 text-cyan-600" />,
  badgeColor: "bg-cyan-100",
  borderColor: "border-cyan-200",
  // RUTA LOCAL: Apunta al archivo dentro de tu carpeta public/credenciales/
  link: "/cv/Ranking.pdf" 
};

// Tus otras credenciales (Tarjetas Pequeñas)
const credentials = [
  {
    title: "Supabase",
    issuer: "Curso Platzi Supabase",
    date: "2026",
    icon: <Database className="h-6 w-6 text-emerald-600" />, // Ícono de Base de datos
    color: "bg-emerald-50 border-emerald-100", // Color verde similar a Supabase
    link: "/cv/diploma-supabase.pdf" 
  },
  {
    title: "N8N",
    issuer: "Curso Platzi N8N",
    date: "2026",
    icon: <Workflow className="h-6 w-6 text-rose-600" />, // Ícono de nodos/flujo de trabajo
    color: "bg-rose-50 border-rose-100", // Color rojizo similar a n8n
    link: "/cv/diploma-n8n-lowcode.pdf" 
  },
  {
    title: "Salesforce",
    issuer: "Curso Platzi Salesforce",
    date: "2026",
    icon: <Cloud className="h-6 w-6 text-blue-600" />, // Ícono de nube (Cloud CRM)
    color: "bg-blue-50 border-blue-100", // Color azul similar a Salesforce
    link: "/cv/diploma-crm-salesforce.pdf" 
  },
  {
    title: "Scrum Fundamentals",
    issuer: "ScrumStudy",
    date: "2023",
    icon: <ClipboardCheck className="h-6 w-6 text-purple-600" />, // Ícono de gestión/tareas
    color: "bg-purple-50 border-purple-100", 
    link: "/credenciales/scrum_fundamentals.pdf"
  }
];

export default function Reconocimiento() {
  return (
    <section
      id="reconocimiento"
      className="mx-auto max-w-7xl px-8 py-32 bg-slate-50" 
    >
      {/* HEADER DE LA SECCIÓN */}
      <div className="mb-20">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
          Logros y Reconocimientos
        </span>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
          Reconocimiento Académico y Credenciales
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          Un repaso por mi desempeño destacado durante mi formación como Ingeniero en Informática y certificaciones complementarias.
        </p>
      </div>

      {/* 1. DISEÑO DESTACADO PARA EL LOGRO PRINCIPAL (Tarjeta Grande) */}
      <div className="flex justify-center mb-16">
          <div
            className={`group rounded-3xl border ${achievement.borderColor} bg-white p-10 shadow-sm transition hover:shadow-lg hover:-translate-y-1 duration-300 max-w-3xl w-full`}
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
              
              <div className={`flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl ${achievement.badgeColor}`}>
                {achievement.icon}
              </div>

              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-3xl font-extrabold text-slate-900 group-hover:text-blue-700 transition">
                  {achievement.title}
                </h3>
                
                <p className="mt-1.5 text-xl font-semibold text-blue-600">
                  {achievement.organization}
                </p>
                
                <p className="mt-1 text-base font-medium text-slate-500">
                  {achievement.context}
                </p>
                
                <p className="mt-6 text-base leading-relaxed text-slate-600">
                  {achievement.description}
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
                <a 
                  href={achievement.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-sm font-semibold text-cyan-600 hover:text-cyan-700 transition"
                >
                    Ver certificado <Star className="h-4 w-4" />
                </a>
            </div>
          </div>
      </div>

      {/* 2. GRID DE CREDENCIALES ADICIONALES (Tarjetas Pequeñas) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {credentials.map((cred, index) => (
          <div 
            key={index}
            className={`group flex flex-col justify-between rounded-2xl border ${cred.color} bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1`}
          >
            <div>
              {/* Ícono más pequeño */}
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${cred.color.split(' ')[0]}`}>
                {cred.icon}
              </div>
              
              {/* Texto más compacto */}
              <h4 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-cyan-600 transition-colors">
                {cred.title}
              </h4>
              <p className="mt-2 text-sm font-medium text-slate-500">
                {cred.issuer}
              </p>
            </div>

            {/* Parte inferior con el botón de "Ver credencial" */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400">{cred.date}</span>
              <a 
                href={cred.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-1 text-sm font-bold text-cyan-600 hover:text-cyan-700 transition hover:gap-2"
              >
                Ver credencial
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}