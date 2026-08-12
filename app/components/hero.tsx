"use client";

import { ArrowRight, Download } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiFastapi,
} from "react-icons/si";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute left-1/2 top-24 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* =====================================================
              TEXTO
          ===================================================== */}
          <div>

            <span className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
              Disponibilidad Inmediata
            </span>

            <h1 className="mt-3 text-6xl font-black leading-tight tracking-tight">
              Marcelo Fernando{" "}
              <span className="text-blue-600">
                Tejos Oliva
              </span>
            </h1>

            <h2 className="mt-5 text-3xl font-semibold text-slate-700">
              Ingeniero en Informática
            </h2>

            <p className="mt-3 text-2xl font-medium text-slate-500">
              Full Stack Developer
            </p>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              Desarrollo aplicaciones web modernas utilizando
              React, Next.js, FastAPI y PostgreSQL,
              priorizando rendimiento, seguridad y una buena
              experiencia de usuario.
            </p>

            {/* Botones */}
            <div className="mt-10 flex gap-4">

              <a
                href="#proyectos"
                className="flex items-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Ver proyectos
                <ArrowRight size={18} />
              </a>

              <a
                href="/cv/CVMarcelo_Tejos_Oliva.pdf"
                download
                className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-8 py-4 font-semibold transition hover:border-blue-600 hover:text-blue-600"
              >
                <Download size={18} />
                Descargar CV
              </a>

            </div>

            {/* Tecnologías */}
            <div className="mt-14 flex flex-wrap gap-6 text-4xl text-slate-700">

              <FaReact className="transition hover:text-cyan-500" />

              <SiNextdotjs />

              <FaNodeJs className="text-green-600" />

              <SiFastapi className="text-emerald-500" />

              <SiPostgresql className="text-sky-700" />

              <SiTypescript className="text-blue-600" />

              <FaDocker className="text-blue-500" />

            </div>

          </div>


          {/* =====================================================
              TERMINAL / DEVELOPER CARD
          ===================================================== */}
          <div className="relative flex justify-center">

            {/* Glow */}
            <div className="absolute h-[430px] w-[430px] rounded-full bg-blue-500/10 blur-3xl" />

            {/* Terminal */}
            <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-slate-800 bg-[#0f172a] shadow-2xl">

              {/* Barra superior */}
              <div className="flex items-center gap-2 border-b border-slate-700 bg-[#111827] px-5 py-4">

                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />

                <span className="ml-3 text-xs font-medium text-slate-500">
                  developer@marcelotejos
                </span>

              </div>


              {/* Contenido */}
              <div className="p-7 font-mono text-sm sm:p-9 sm:text-base">

                {/* Comando */}
                <div className="flex flex-wrap">
                  <span className="text-emerald-400">
                    $
                  </span>

                  <span className="ml-2 text-slate-300">
                    developer --info
                  </span>
                </div>


                {/* Línea */}
                <div className="mt-5 text-slate-600">
                  ─────────────────────────────────
                </div>


                {/* Título */}
                <div className="mt-5">

                  <p className="font-bold text-blue-400">
                    FULL STACK DEVELOPER
                  </p>

                  <p className="mt-1 text-slate-500">
                    Ingeniero en Informática
                  </p>

                </div>


                {/* Frontend */}
                <div className="mt-7">

                  <p className="text-slate-400">
                    <span className="text-blue-400">
                      Frontend
                    </span>
                  </p>

                  <p className="mt-2 text-slate-300">
                    React · Next.js · TypeScript
                  </p>

                </div>


                {/* Backend */}
                <div className="mt-6">

                  <p className="text-slate-400">
                    <span className="text-emerald-400">
                      Backend
                    </span>
                  </p>

                  <p className="mt-2 text-slate-300">
                    FastAPI · Node.js · Python
                  </p>

                </div>


                {/* Data */}
                <div className="mt-6">

                  <p className="text-slate-400">
                    <span className="text-purple-400">
                      Data
                    </span>
                  </p>

                  <p className="mt-2 text-slate-300">
                    PostgreSQL · SQL · Power BI
                  </p>

                </div>


                {/* DevOps */}
                <div className="mt-6">

                  <p className="text-slate-400">
                    <span className="text-orange-400">
                      DevOps
                    </span>
                  </p>

                  <p className="mt-2 text-slate-300">
                    Docker · Git · GitHub
                  </p>

                </div>


                {/* Separador */}
                <div className="mt-7 text-slate-600">
                  ─────────────────────────────────
                </div>


                {/* Estado */}
                <div className="mt-5 flex items-center gap-2">

                  <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />

                  <span className="text-emerald-400">
                    Disponible para nuevos proyectos
                  </span>

                </div>


                {/* Cursor */}
                <div className="mt-5 flex">

                  <span className="text-emerald-400">
                    $
                  </span>

                  <span className="ml-2 h-5 w-2 animate-pulse bg-slate-400" />

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}