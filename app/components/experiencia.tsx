"use client";

import {
  Building2,
  Calendar,
  TrendingUp,
  ShieldCheck,
  Database,
  FileText,
} from "lucide-react";

export default function Experiencia() {
  return (
    <section
      id="experiencia"
      className="mx-auto max-w-7xl px-8 py-32"
    >
      {/* HEADER */}
      <div className="mb-20">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
          Experiencia
        </span>

        <h2 className="mt-4 text-5xl font-bold text-slate-900">
          Experiencia Profesional
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          Durante mi práctica profesional participé en el desarrollo de un ERP
          empresarial colaborando en backend, seguridad, bases de datos,
          autenticación y arquitectura de permisos.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        
        {/* IZQUIERDA */}
        <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
          <div className="flex items-center gap-5">
            {/* Ícono de la empresa con fondo de acento claro */}
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 border border-blue-100">
              <Building2 className="h-8 w-8 text-blue-600" />
            </div>

            <div>
              <h3 className="text-3xl font-bold text-slate-900">
                NeuroGestión
              </h3>
              <p className="text-slate-600 font-medium mt-1">
                Desarrollador Full Stack
              </p>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-3 text-slate-500 font-medium">
            <Calendar className="h-5 w-5" />
            Marzo 2026 — Junio 2026
          </div>

          <p className="mt-6 leading-8 text-slate-600">
            Participé en el desarrollo de un ERP empresarial colaborando en
            módulos backend, seguridad, autenticación, dashboards
            administrativos, arquitectura RBAC/TRBAC, políticas RLS y
            optimización de consultas SQL.
          </p>

          {/* GRID DE LOGROS / HABILIDADES */}
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:shadow-md hover:border-emerald-200">
              <ShieldCheck className="mb-4 h-8 w-8 text-emerald-600" />
              <h4 className="font-bold text-slate-900">
                Seguridad
              </h4>
              <p className="mt-2 text-sm text-slate-600 font-medium">
                RBAC · TRBAC · JWT · MFA · RLS
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:shadow-md hover:border-blue-200">
              <Database className="mb-4 h-8 w-8 text-blue-600" />
              <h4 className="font-bold text-slate-900">
                Backend
              </h4>
              <p className="mt-2 text-sm text-slate-600 font-medium">
                FastAPI · PostgreSQL · Supabase
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:shadow-md hover:border-orange-200">
              <TrendingUp className="mb-4 h-8 w-8 text-orange-600" />
              <h4 className="font-bold text-slate-900">
                Rendimiento
              </h4>
              <p className="mt-2 text-sm text-slate-600 font-medium">
                Optimización SQL superior al 20%.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:shadow-md hover:border-purple-200">
              <FileText className="mb-4 h-8 w-8 text-purple-600" />
              <h4 className="font-bold text-slate-900">
                Infraestructura
              </h4>
              <p className="mt-2 text-sm text-slate-600 font-medium">
                Docker · GitHub · Git
              </p>
            </div>
          </div>

          <a
            href="/cv/Recomendación_Marcelo_Tejos.pdf"
            download
            className="mt-10 inline-flex items-center rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-sm transition hover:scale-105 hover:bg-blue-700 hover:shadow-md"
          >
            Descargar Carta de Recomendación
          </a>
        </div>

        {/* DERECHA */}
        <div className="space-y-6">
          
          {/* Imagen de certificado */}
          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm group">
            <img
              src="/cv/CertificadoR_Marcelo_Tejos.png"
              alt="Reconocimiento"
              className="w-full transition duration-500 group-hover:scale-105"
            />
          </div>

          {/* Tarjeta de impacto (Esmeralda) */}
          <div className="rounded-[32px] border border-emerald-200 bg-emerald-50 p-8 shadow-sm transition hover:shadow-md">
            <p className="text-5xl font-black text-emerald-600">
              +20%
            </p>
            <p className="mt-3 text-lg font-bold text-slate-900">
              Optimización SQL
            </p>
            <p className="mt-3 text-slate-600">
              Mejora del rendimiento mediante optimización de consultas y
              estructura de base de datos.
            </p>
          </div>

          {/* Tarjeta de impacto (Azul) */}
          <div className="rounded-[32px] border border-blue-200 bg-blue-50 p-8 shadow-sm transition hover:shadow-md">
            <p className="text-5xl font-black text-blue-600">
              ERP
            </p>
            <p className="mt-3 text-lg font-bold text-slate-900">
              Desarrollo Empresarial
            </p>
            <p className="mt-3 text-slate-600">
              Participación activa en el desarrollo de un sistema ERP moderno
              utilizado por la empresa.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}