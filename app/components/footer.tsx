"use client";

import { Mail, Phone, ArrowUpRight, MapPin } from "lucide-react";
import { GithubIcon } from "./social";

const EMAIL = "Marcelotejos1@gmail.com";
const PHONE = "+56 9 9499 3455";
const PHONE_HREF = "tel:+56994993455";
const GITHUB = "https://github.com/MarceloTejos";
const LOCATION = "Santiago, Chile";

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="mt-32 border-t border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-9xl px-8 py-5">

        {/* Título y Descripción */}
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600">
            Contacto
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            ¿Trabajamos juntos?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            Actualmente me encuentro abierto a oportunidades como
            Desarrollador Full Stack, Backend, Análisis de Datos o Ingeniería de Software.
            Si tienes un proyecto o una vacante, estaré encantado de conversar.
          </p>
        </div>

        {/* Botones de Contacto */}
        <div className="mt-14 flex flex-wrap justify-center gap-5">
          <a
            href={`mailto:${EMAIL}`}
            className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-8 py-3 font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 hover:shadow-md"
          >
            <Mail className="h-5 w-5 text-blue-600" />
            <span>{EMAIL}</span>
          </a>

          <a
            href={PHONE_HREF}
            className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-8 py-3 font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 hover:shadow-md"
          >
            <Phone className="h-5 w-5 text-emerald-600" />
            <span>{PHONE}</span>
          </a>

          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-8 py-3 font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:border-slate-300 hover:bg-white hover:text-slate-900 hover:shadow-md"
          >
            <GithubIcon className="h-5 w-5" />
            GitHub
            <ArrowUpRight className="h-4 w-4 text-slate-400 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-slate-900" />
          </a>
        </div>

        {/* Línea Separadora */}
        <div className="my-16 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        {/* Sección Inferior (Copyright y Marca) */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          
          {/* Identidad */}
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 font-black text-blue-600 shadow-sm">
              MT
            </div>
            <div>
              <p className="font-bold text-slate-900">
                Marcelo Tejos
              </p>
              <p className="text-sm font-medium text-slate-500">
                Full Stack Developer
              </p>
            </div>
          </div>

          {/* Ubicación y Copyright */}
          <div className="flex flex-col items-center gap-2 md:items-end">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
              <MapPin className="h-4 w-4 text-slate-400" />
              {LOCATION}
            </div>
            <div className="text-sm text-black-400">
              © {new Date().getFullYear()} Marcelo Fernando Tejos
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}