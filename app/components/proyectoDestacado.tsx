"use client";

import {
  ArrowUpRight,
  Shield,
  Database,
  Server,
  BarChart3,
} from "lucide-react";

const technologies = [
  "React",
  "Next.js",
  "FastAPI",
  "PostgreSQL",
  "Supabase",
  "Docker",
  "JWT",
  "RBAC",
];

export default function FeaturedProject() {
  return (
    <section
      id="proyecto-destacado"
      className="relative overflow-hidden py-32"
    >
      {/* Glow */}
      <div className="absolute left-1/2 top-40 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* HEADER */}

        <div className="mb-16">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Proyecto Destacado
          </span>

          <h2 className="mt-6 text-5xl font-black tracking-tight text-slate-900">
            ERP Empresarial
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Desarrollo de un ERP moderno durante mi práctica profesional
            en NeuroGestión. Participé en el backend, arquitectura de
            permisos, seguridad, autenticación y optimización de la
            plataforma.
          </p>

        </div>

        {/* GRID */}

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* IZQUIERDA */}

          <div>

            <div className="space-y-8">

              <div className="flex gap-4">

                <div className="rounded-2xl bg-blue-100 p-4">
                  <Shield className="text-blue-600" />
                </div>

                <div>

                  <h3 className="text-xl font-semibold text-slate-900">
                    Arquitectura de permisos
                  </h3>

                  <p className="mt-2 text-slate-600">
                    Implementación de RBAC con migración hacia
                    TRBAC y control granular de permisos.
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <div className="rounded-2xl bg-emerald-100 p-4">
                  <Database className="text-emerald-600" />
                </div>

                <div>

                  <h3 className="text-xl font-semibold text-slate-900">
                    Base de datos
                  </h3>

                  <p className="mt-2 text-slate-600">
                    PostgreSQL, Supabase, políticas RLS,
                    optimización SQL y relaciones complejas.
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <div className="rounded-2xl bg-violet-100 p-4">
                  <Server className="text-violet-600" />
                </div>

                <div>

                  <h3 className="text-xl font-semibold text-slate-900">
                    Backend
                  </h3>

                  <p className="mt-2 text-slate-600">
                    APIs REST desarrolladas con FastAPI,
                    autenticación JWT y MFA.
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <div className="rounded-2xl bg-orange-100 p-4">
                  <BarChart3 className="text-orange-500" />
                </div>

                <div>

                  <h3 className="text-xl font-semibold text-slate-900">
                    Dashboards
                  </h3>

                  <p className="mt-2 text-slate-600">
                    Desarrollo de paneles administrativos
                    con métricas, reportes y gestión.
                  </p>

                </div>

              </div>

            </div>

            {/* TECNOLOGÍAS */}

            <div className="mt-12 flex flex-wrap gap-3">

              {technologies.map((tech) => (

                <span
                  key={tech}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                >
                  {tech}
                </span>

              ))}

            </div>

            {/* BOTONES */}

            <div className="mt-12 flex flex-wrap gap-4">

              <a
                href="#"
                className="flex items-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Ver capturas

                <ArrowUpRight size={18} />
              </a>

              <a
                href="/cv/Recomendación_Marcelo_Tejos.pdf"
                download
                className="rounded-2xl border border-slate-200 bg-white px-8 py-4 font-semibold text-slate-800 transition hover:border-blue-500 hover:text-blue-600"
              >
                Carta de recomendación
              </a>

            </div>

          </div>

          <div className="relative">

  {/* Fondo */}
  <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-blue-500/10 to-violet-500/10 blur-3xl" />

  {/* Ventana */}
  <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-2xl">

    {/* Barra superior */}
    <div className="flex items-center justify-between border-b border-slate-100 px-8 py-5">

      <div className="flex items-center gap-2">

        <div className="h-3 w-3 rounded-full bg-red-400" />
        <div className="h-3 w-3 rounded-full bg-yellow-400" />
        <div className="h-3 w-3 rounded-full bg-green-400" />

      </div>

      <p className="text-sm font-medium text-slate-500">
        SIG ERP
      </p>

    </div>

    <div className="p-8">

      {/* Cabecera */}

      <div className="mb-8 flex items-center justify-between">

        <div>

          <p className="text-sm text-slate-500">
            Panel administrativo
          </p>

          <h3 className="mt-2 text-3xl font-bold text-slate-900">
            Dashboard
          </h3>

        </div>

        <div className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-600">
          Sistema activo
        </div>

      </div>

      {/* Tarjetas */}

      <div className="grid grid-cols-2 gap-5">

        <div className="rounded-3xl bg-slate-50 p-6">

          <p className="text-sm text-slate-500">
            Usuarios
          </p>

          <h2 className="mt-2 text-4xl font-black text-slate-900">
            1.240
          </h2>

          <p className="mt-3 text-sm text-emerald-600">
            +12%
          </p>

        </div>

        <div className="rounded-3xl bg-slate-50 p-6">

          <p className="text-sm text-slate-500">
            Roles
          </p>

          <h2 className="mt-2 text-4xl font-black text-slate-900">
            18
          </h2>

          <p className="mt-3 text-sm text-blue-600">
            RBAC
          </p>

        </div>

      </div>

      {/* Gráfico */}

      <div className="mt-8 rounded-3xl bg-slate-50 p-6">

        <div className="mb-6 flex items-center justify-between">

          <h4 className="font-semibold text-slate-900">
            Actividad semanal
          </h4>

          <span className="text-sm text-slate-500">
            Últimos 7 días
          </span>

        </div>

        <div className="flex h-48 items-end gap-3">

          <div className="flex-1 rounded-t-xl bg-blue-200 h-[35%]" />

          <div className="flex-1 rounded-t-xl bg-blue-300 h-[55%]" />

          <div className="flex-1 rounded-t-xl bg-blue-400 h-[70%]" />

          <div className="flex-1 rounded-t-xl bg-blue-500 h-[92%]" />

          <div className="flex-1 rounded-t-xl bg-blue-400 h-[65%]" />

          <div className="flex-1 rounded-t-xl bg-blue-500 h-[82%]" />

          <div className="flex-1 rounded-t-xl bg-violet-500 h-full" />

        </div>

      </div>

      {/* Actividad */}

      <div className="mt-8 space-y-4">

        <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-5 py-4">

          <span className="text-slate-700">
            Nuevo usuario registrado
          </span>

          <span className="text-sm text-slate-500">
            hace 3 min
          </span>

        </div>

        <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-5 py-4">

          <span className="text-slate-700">
            Nuevo rol creado
          </span>

          <span className="text-sm text-slate-500">
            hace 18 min
          </span>

        </div>

        <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-5 py-4">

          <span className="text-slate-700">
            Permisos actualizados
          </span>

          <span className="text-sm text-slate-500">
            hace 40 min
          </span>

        </div>

      </div>

    </div>

  </div>

</div>

          <div>

            {/* Continúa en la Parte 2 */}

          </div>

        </div>

      </div>

    </section>
  );
}