"use client";

import React, { useState } from "react";
import { FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiSupabase,
  SiMysql,
  SiDjango,
  SiTypescript,
} from "react-icons/si";

export default function Home() {
  // --- LÓGICA DEL CARRUSEL (MINIMARKET) ---
  const [currentIndex, setCurrentIndex] = useState(0);

const images = [
    { src: "/imagenes/inicio.png", alt: "Inicio", titulo: "Pantalla de Inicio" },
    { src: "/imagenes/inventario.png", alt: "Inventario", titulo: "Gestión de Inventario" },
    { src: "/imagenes/puntoventa.png", alt: "Punto de Venta", titulo: "Terminal Punto de Venta" },
    { src: "/imagenes/Alertas.png", alt: "Alertas", titulo: "Panel de Alertas" },
    { src: "/imagenes/reposicion_inteligente.png", alt: "Reposición Inteligente", titulo: "Reposición Asistida" },
    { src: "/imagenes/Vencimiento.png", alt: "Vencimiento", titulo: "Productos por Vencer" },
    { src: "/imagenes/Cajas.png", alt: "Cajas", titulo: "Control de Cajas" },
    { src: "/imagenes/control_vencimientos.png", alt: "Control de Vencimientos", titulo: "Auditoría de Fechas" },
    { src: "/imagenes/administrar_usuarios.png", alt: "Administrar Usuarios", titulo: "Gestión de Usuarios" }
  
  ];
  // ----------------------------------------

  return (
    <main className="min-h-screen bg-[#060816] text-white overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-200px] left-[-100px] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-[-200px] right-[-100px] h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#060816]/70 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-7">
          {/* IZQUIERDA */}
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500 text-lg font-bold shadow-lg shadow-indigo-500/40 transition-shadow hover:shadow-indigo-500/60 overflow-hidden">
              <img
                src="/imagenes/ico.png"
                alt="Foto de Marcelo Tejos"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold tracking-tight">
              Marcelo Tejos
            </h2>
          </div>

          {/* DERECHA */}
          <nav className="flex items-center gap-10 text-slate-300">
            <a
              href="#"
              className="relative transition hover:text-white after:absolute after:left-0 after:bottom-1 after:h-[2px] after:w-0 after:bg-indigo-400 after:transition-all hover:after:w-full"
            >
              Inicio
            </a>
            <a
              href="#tecnologias"
              className="relative transition hover:text-white after:absolute after:left-0 after:bottom-1 after:h-[2px] after:w-0 after:bg-indigo-400 after:transition-all hover:after:w-full"
            >
              Tecnologías
            </a>
            <a
              href="#proyectos"
              className="relative transition hover:text-white after:absolute after:left-0 after:bottom-1 after:h-[2px] after:w-0 after:bg-indigo-400 after:transition-all hover:after:w-full"
            >
              Proyectos
            </a>
            <a
              href="#reconocimiento"
              className="relative transition hover:text-white after:absolute after:left-0 after:bottom-1 after:h-[2px] after:w-0 after:bg-indigo-400 after:transition-all hover:after:w-full"
            >
              Reconocimiento
            </a>
            <a
              href="#experiencia"
              className="relative transition hover:text-white after:absolute after:left-0 after:bottom-1 after:h-[2px] after:w-0 after:bg-indigo-400 after:transition-all hover:after:w-full"
            >
              Experiencia
            </a>
            <a
              href="#contacto"
              className="relative transition hover:text-white after:absolute after:left-0 after:bottom-1 after:h-[2px] after:w-0 after:bg-indigo-400 after:transition-all hover:after:w-full"
            >
              Contacto
            </a>
          </nav>
        </div>
      </header>

      {/*SECTION */}
      <section className="mx-auto flex min-h-screen max-w-[1600px] items-start px-16 pt-36">
        {/* LEFT*/}
        <div className="w-[60%]">
          <p className="mb-6 text-cyan-400 text-lg">
            Full Stack Developer | React | Next.js | Node.js | TypeScript
          </p>
          <h1 className="max-w-3xl text-7xl font-bold leading-tight tracking-tight">
            Desarrollo sistemas modernos y escalables
          </h1>
          <p className="mt-6 max-w-2xl text-2xl leading-relaxed text-slate-400">
            Desarrollo aplicaciones web modernas utilizando React, Next.js,
            Node.js y TypeScript, enfocadas en rendimiento, escalabilidad,
            experiencia de usuario y arquitecturas backend robustas.
          </p>
          <div className="mt-10 flex gap-5">
            <a
              href="#proyectos"
              className="inline-block rounded-2xl bg-indigo-500 px-10 py-5 text-lg font-semibold shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:scale-105 hover:bg-indigo-400 hover:shadow-indigo-500/50 text-white"
            >
              Ver Proyectos
            </a>
            <a
              href="https://github.com/MarceloTejos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-2xl border border-white/10 px-8 py-4 text-lg font-semibold transition hover:bg-white/5 hover:scale-105 text-white"
            >
              GitHub
            </a>
            <a
              href="/cv/CVMarcelo_Tejos_Oliva.pdf.pdf"
              download
              className="inline-block rounded-2xl border border-white/10 px-8 py-4 text-lg font-semibold transition hover:bg-white/5 hover:scale-105 text-white"
            >
              Descargar CV
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-1 items-center justify-center  relative">
          <div className="absolute inset-0 rounded-[40px] bg-indigo-500/20 blur-3xl" />

          <div className="relative w-[700px] rounded-[32px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl shadow-2xl shadow-indigo-500/10">

            {/* HEADER */}
            <div className="mb-2 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">
                  Full Stack Developer
                </p>

                <h3 className="text-3xl font-bold">
                  Stack Tecnológico
                </h3>
              </div>

              <div className="rounded-2xl bg-emerald-500/20 px-4 py-2 text-sm text-emerald-400">
                Disponible
              </div>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="text-slate-400 text-sm">
                  Frontend
                </p>

                <h4 className="mt-2 text-xl font-semibold">
                  React
                </h4>

                <p className="mt-1 text-slate-500 text-sm">
                  Next.js · TypeScript
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="text-slate-400 text-sm">
                  Backend
                </p>

                <h4 className="mt-2 text-xl font-semibold">
                  Node.js
                </h4>

                <p className="mt-1 text-slate-500 text-sm">
                  Django · FastAPI
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="text-slate-400 text-sm">
                  Base de Datos
                </p>

                <h4 className="mt-2 text-xl font-semibold">
                  PostgreSQL
                </h4>

                <p className="mt-1 text-slate-500 text-sm">
                  Supabase · MySQL
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="text-slate-400 text-sm">
                  Dev Tools
                </p>

                <h4 className="mt-2 text-xl font-semibold">
                  Docker
                </h4>

                <p className="mt-1 text-slate-500 text-sm">
                  Git · GitHub
                </p>
              </div>

            </div>

            {/* ESPECIALIDADES */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-5">

              <h4 className="mb-5 text-lg font-semibold">
                Especialidades
              </h4>

              <div className="grid grid-cols-2 gap-4 text-slate-300">

                <div>✓ APIs REST</div>

                <div>✓ JWT Authentication</div>

                <div>✓ Arquitectura RBAC</div>

                <div>✓ Dashboards</div>

                <div>✓ UI Responsiva</div>

                <div>✓ Optimización SQL</div>

              </div>

            </div>

            {/* PROGRESO */}
            <div className="mt-6 space-y-5">

              <div>

                <div className="mb-2 flex justify-between text-sm">

                  <span className="text-slate-400">
                    Frontend
                  </span>

                  <span>95%</span>

                </div>

                <div className="h-2 rounded-full bg-white/5">

                  <div className="h-2 w-[95%] rounded-full bg-cyan-400" />

                </div>

              </div>

              <div>

                <div className="mb-2 flex justify-between text-sm">

                  <span className="text-slate-400">
                    Backend
                  </span>

                  <span>90%</span>

                </div>

                <div className="h-2 rounded-full bg-white/5">

                  <div className="h-2 w-[90%] rounded-full bg-emerald-400" />

                </div>

              </div>

              <div>

                <div className="mb-2 flex justify-between text-sm">

                  <span className="text-slate-400">
                    Bases de Datos
                  </span>

                  <span>92%</span>

                </div>

                <div className="h-2 rounded-full bg-white/5">

                  <div className="h-2 w-[92%] rounded-full bg-indigo-400" />

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* TECNOLOGIAS */}
      <section id="tecnologias" className="mx-auto max-w-7xl px-5 py-2">
        {/* SECTION HEADER */}
        <div className="mb-12">
          <p className="mb-4 text-xl font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Tecnologías
          </p>
        </div>

        <div className="grid grid-cols-5 gap-6">
          <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/30 hover:bg-cyan-500/5 hover:shadow-lg hover:shadow-cyan-500/10">
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-cyan-500/10 text-5xl text-cyan-400">
              <FaReact />
            </div>
            <h3 className="text-xl font-bold">React</h3>
          </div>
          <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/30 hover:bg-cyan-500/5 hover:shadow-lg hover:shadow-cyan-500/10">
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10 text-5xl text-white">
              <SiNextdotjs />
            </div>
            <h3 className="text-xl font-bold">Next.js</h3>
          </div>
          <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/30 hover:bg-cyan-500/5 hover:shadow-lg hover:shadow-cyan-500/10">
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-500/10 text-5xl text-emerald-400">
              <SiSupabase />
            </div>
            <h3 className="text-xl font-bold">Supabase</h3>
          </div>
          <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/30 hover:bg-cyan-500/5 hover:shadow-lg hover:shadow-cyan-500/10">
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-orange-500/10 text-5xl text-orange-400">
              <SiMysql />
            </div>
            <h3 className="text-xl font-bold">MySQL</h3>
          </div>
          <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/30 hover:bg-cyan-500/5 hover:shadow-lg hover:shadow-cyan-500/10">
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-500/10 text-5xl text-emerald-400">
              <SiDjango />
            </div>
            <h3 className="text-xl font-bold">Django</h3>
          </div>
          <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/30 hover:bg-cyan-500/5 hover:shadow-lg hover:shadow-cyan-500/10">
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-500/10 text-5xl text-emerald-400">
              <FaNodeJs />
            </div>
            <h3 className="text-xl font-bold">Node.js</h3>
          </div>
          <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/30 hover:bg-cyan-500/5 hover:shadow-lg hover:shadow-cyan-500/10">
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-500/10 text-5xl text-emerald-400">
              <SiTailwindcss />
            </div>
            <h3 className="text-xl font-bold">Tailwind CSS</h3>
          </div>
          <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/30 hover:bg-cyan-500/5 hover:shadow-lg hover:shadow-cyan-500/10">
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-500/10 text-5xl text-emerald-400">
              <FaDocker />
            </div>
            <h3 className="text-xl font-bold">Docker</h3>
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="mx-auto max-w-7xl px-5 py-2">
        {/* HEADER */}
        <div className="mb-5 my-20">
          <p className="mb-4 text-xl font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Proyectos
          </p>
        </div>

        <div className="space-y-10">
          {/* CARD PROJECTO ERP */}
          <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:border-indigo-500/30 hover:bg-indigo-500/[0.03]">
            <div className="absolute right-0 top-0 h-64 w-64 bg-indigo-500/10 blur-3xl transition-all duration-500 group-hover:bg-indigo-500/20" />
            <div className="relative grid grid-cols-2 gap-10">
              <div>
                <div className="mb-6 inline-flex rounded-2xl bg-indigo-500/10 px-4 py-2 text-sm text-indigo-400">
                  
                </div>
                <h3 className="text-4xl font-black leading-tight">
                  Sistema de gestión moderno
                </h3>
                <p className="mt-6 leading-relaxed text-slate-400">
                  Desarrollo de un ERP con arquitectura modular, sistema
                  avanzado de permisos, dashboards administrativos y gestión
                  completa de usuarios y roles.
                </p>

                {/* TECNOLOGIAS */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
                    React
                  </div>
                  <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-400">
                    Next.js
                  </div>
                  <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
                    Supabase
                  </div>
                  <div className="rounded-xl border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm text-orange-400">
                    Tailwind
                  </div>
                </div>

                {/* BOTONES */}
                <div className="mt-10 flex gap-4">
                  <a href="#" className="inline-block rounded-2xl border border-white/10 px-10 py-5 text-lg font-semibold shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:scale-105 hover:bg-indigo-400 hover:shadow-indigo-500/50 text-white">
                    Ver Proyecto
                  </a>
                </div>
              </div>

              <div className="relative">
                {/* MOCKUP */}
                <div className="rounded-[28px] border border-white/10 bg-black/30 p-6 backdrop-blur-xl">
                  {/* BARRA */}
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">Dashboard ERP</p>
                      <h4 className="mt-1 text-2xl font-bold">
                        Panel Administrativo
                      </h4>
                    </div>
                    <div className="rounded-xl bg-emerald-500/20 px-3 py-1 text-sm text-emerald-400">
                      Online
                    </div>
                  </div>

                  {/* ESTADISTICAS */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-white/[0.03] p-5">
                      <p className="text-sm text-slate-400">Usuarios</p>
                      <h4 className="mt-2 text-3xl font-black">Niveles 5+</h4>
                    </div>

                    <div className="rounded-2xl bg-white/[0.03] p-5">
                      <p className="text-sm text-slate-400">Roles</p>
                      <h4 className="mt-2 text-3xl font-black">8</h4>
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl bg-white/[0.03] p-5">
                    <div className="mb-4 flex items-center justify-between">
                      <p className="text-sm text-slate-400">Actividad</p>
                    </div>
                    <div className="flex h-40 items-end gap-3">
                      <div className="h-[30%] flex-1 rounded-t-xl bg-cyan-400" />
                      <div className="h-[45%] flex-1 rounded-t-xl bg-cyan-400" />
                      <div className="h-[60%] flex-1 rounded-t-xl bg-cyan-400" />
                      <div className="h-[80%] flex-1 rounded-t-xl bg-indigo-400" />
                      <div className="h-[55%] flex-1 rounded-t-xl bg-cyan-400" />
                      <div className="h-[90%] flex-1 rounded-t-xl bg-indigo-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROYECTO VIDEO IA */}
      <section className="mx-auto max-w-7xl px-5 py-2">
        <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:border-cyan-500/30 hover:bg-cyan-500/[0.03]">
          <div className="relative grid grid-cols-2 gap-10 items-center">
            {/* VIDEO */}
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03]">
              <iframe
                className="aspect-video w-full scale-[1.01]"
                src="https://www.youtube.com/embed/VPSIRnj60Fg"
                title="Reconocimiento IA"
                allowFullScreen
              />
            </div>
            {/* CONTENIDO */}
            <div>
              <div className="mb-6 inline-flex rounded-2xl bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
                Inteligencia Artificial
              </div>
              <h3 className="text-4xl font-black leading-tight">
                Reconocimiento de perros y gatos mediante cámara
              </h3>
              <p className="mt-6 leading-relaxed text-slate-400">
                Desarrollo de un sistema de clasificación de imágenes utilizando
                visión computacional y procesamiento en tiempo real mediante
                cámara.
              </p>
              {/* TECNOLOGIAS */}
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
                  Python
                </div>
                <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
                  YOLOv8
                </div>
                <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-400">
                  TensorFlow
                </div>
              </div>

              {/* BOTONES */}
              <div className="mt-10 flex gap-4">
                <a
                  href="https://www.youtube.com/watch?v=VPSIRnj60Fg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-2xl border border-white/10 px-10 py-5 text-lg font-semibold transition-all duration-300 hover:bg-cyan-400 hover:scale-105 hover:shadow-cyan-500/50 text-white"
                >
                  Ver Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTO MINIMARKET (CARRUSEL) */}
      <section className="mx-auto max-w-7xl px-5 py-2">
        <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:border-emerald-500/30 hover:bg-emerald-500/[0.03]">
          <div className="absolute right-0 bottom-0 h-72 w-72 bg-emerald-500/10 blur-3xl transition-all duration-500 group-hover:bg-emerald-500/20" />
          <div className="relative">
            <div className="mb-12 flex items-start justify-between">
              <div>
                <div className="mb-6 inline-flex rounded-2xl bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
                  Sistema Comercial
                </div>
                <h3 className="max-w-full text-5xl font-black leading-tight">
                  Sistema de ventas e inventario para minimarket
                </h3>
                <p className="mt-6 max-w-full leading-relaxed text-slate-400">
                  Características principales:
                    <br />
                    • Gestión de Inventario Inteligente: Monitoreo de stock en tiempo real con un módulo de "Reposición Asistida" para prevenir escasez de productos.
                    <br />

                    • Auditoría y Alertas: Panel de control que identifica automáticamente lotes críticos y fechas de vencimiento.
                    <br />
                    • Punto de Venta (POS) y Cajas: Interfaz ágil para el registro de ventas diarias, control de flujo de caja y emisión de boletas.
                    <br />
                    • Control de Accesos: Sistema de autenticación con separación de roles para asegurar que cada empleado acceda solo a los módulos correspondientes a sus funciones. (En proceso)
                </p>
              </div>
            </div>

            {/* CARRUSEL DE IMÁGENES */}
            <div className="relative overflow-hidden rounded-[10px] border border-white/10 aspect-video w-full bg-black/40">
              {/* Contenedor de las imágenes con transición */}
              <div
                className="flex h-full transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((img, index) => (
                  <div key={index} className="relative h-full  w-full flex-none ">
                    {/* Cambiamos object-cover por object-contain */}
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-full w-full object-contain rounded-xl"
                    />
                    
                    {/* Degradado para mejorar la lectura del texto */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-transparent pointer-events-none rounded-[28px]" />
                    
                    {/* Título de la imagen */}
                    <div className="absolute bottom-14 left-8 z-10 pointer-events-none">
                      <h4 className="text-2xl font-bold text-white tracking-wide drop-shadow-md">
                        {img.titulo}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>

              {/* Botón Anterior */}
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/60 p-3 text-white backdrop-blur-md transition-all hover:bg-emerald-500 hover:scale-110 shadow-lg shadow-black/20 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="h-6 w-6 pointer-events-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              {/* Botón Siguiente */}
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/60 p-3 text-white backdrop-blur-md transition-all hover:bg-emerald-500 hover:scale-110 shadow-lg shadow-black/20 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="h-6 w-6 pointer-events-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>

              {/* Indicadores (Puntitos) */}
              <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2 rounded-full bg-black/40 px-3 py-2 backdrop-blur-md">
                {images.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentIndex(index);
                    }}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === index
                        ? "w-8 bg-emerald-400"
                        : "w-2.5 bg-white/70 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* TECNOLOGIAS */}
            <div className="mt-10 flex flex-wrap gap-3">
              <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
                HTML
              </div>
              <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-400">
                Django
              </div>
              <div className="rounded-xl border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm text-orange-400">
                MySQL
              </div>
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
                CSS
              </div>
            </div>

            {/* BOTONES */}
            <div className="mt-10 flex gap-4">
              <a href="https://marcelotejos.pythonanywhere.com/" className="inline-block rounded-2xl border border-white/10 px-10 py-5 text-lg font-semibold transition-all duration-300 hover:bg-emerald-400 hover:scale-105 hover:shadow-emerald-500/50 text-white">
                Ver Proyecto
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTO Mundial de Qatar 2022 */}
      <section className="mx-auto max-w-7xl px-5 py-2">
        <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:border-orange-500/30 hover:bg-orange-500/[0.03]">
          <div className="absolute right-0 top-0 h-72 w-72 bg-orange-500/10 blur-3xl transition-all duration-500 group-hover:bg-orange-500/20" />
          <div className="absolute left-1/4 bottom-0 h-64 w-64 bg-amber-500/10 blur-3xl transition-all duration-500 group-hover:bg-amber-500/20" />

          {/* GRID */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* IZQUIERDA: Info y Botones */}
            <div>
              <div className="mb-6 inline-flex rounded-2xl bg-orange-500/10 px-4 py-2 text-sm text-orange-400 font-semibold uppercase tracking-[0.2em]">
                Base de Datos
              </div>

              <h3 className="text-4xl font-black leading-tight">
                Mundial de Qatar 2022
              </h3>

              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                Diseño e implementación de una base de datos relacional completa
                para la gestión integral del torneo.
              </p>

              {/* Viñetas personalizadas */}
              <ul className="mt-6 space-y-3 text-base leading-relaxed text-slate-400 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">⚽</span>
                  <span>
                    <strong className="text-slate-200">
                      Sedes y Estadios:
                    </strong>{" "}
                    Cobertura en 5 ciudades y 8 estadios mundialistas.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">🌍</span>
                  <span>
                    <strong className="text-slate-200">Equipos:</strong> 32
                    selecciones oficiales organizadas en grupos.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">📅</span>
                  <span>
                    <strong className="text-slate-200">Partidos:</strong> 48
                    encuentros de fase de grupos y eventos en tiempo real.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">⭐</span>
                  <span>
                    <strong className="text-slate-200">Plantel:</strong> Muestra
                    de 55 jugadores reales y cuerpo arbitral completo.
                  </span>
                </li>
              </ul>

              {/* TECNOLOGIAS */}
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="rounded-xl border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm text-orange-400">
                  Oracle SQL
                </div>
                <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-sm text-amber-400">
                  Modelado Relacional
                </div>
                <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-400">
                  Ingeniería de Datos
                </div>
              </div>

              {/* BOTONES */}
              <div className="mt-10 flex gap-4">
                <a
                  href="/cv/MER.txt"
                  download="MER.txt"
                  className="group/btn inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-4 text-lg font-semibold transition-all duration-300 hover:bg-orange-500 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 text-white"
                >
                  <svg
                    className="h-5 w-5 transition-transform group-hover/btn:-translate-y-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    ></path>
                  </svg>
                  Descargar MER
                </a>
              </div>
            </div>

            <div className="relative">
              {/* ESTADISTICAS */}
              <div className="mb-6 grid grid-cols-3 gap-4">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4 backdrop-blur-sm transition-all duration-300 group-hover:border-orange-500/30">
                  <p className="text-xs text-slate-400 uppercase tracking-wider">
                    Tablas
                  </p>
                  <h4 className="mt-1 text-2xl font-bold text-white">15</h4>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4 backdrop-blur-sm transition-all duration-300 group-hover:border-orange-500/30">
                  <p className="text-xs text-slate-400 uppercase tracking-wider">
                    PKs
                  </p>
                  <h4 className="mt-1 text-2xl font-bold text-white">15</h4>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4 backdrop-blur-sm transition-all duration-300 group-hover:border-orange-500/30">
                  <p className="text-xs text-slate-400 uppercase tracking-wider">
                    FKs
                  </p>
                  <h4 className="mt-1 text-2xl font-bold text-white">18</h4>
                </div>
              </div>

              {/* IMAGEN DEL MER */}
              <div className="overflow-hidden rounded-[28px] border border-white/10 bg-black/30 relative">
                <div className="absolute inset-0 bg-orange-500/10 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0 z-10 pointer-events-none"></div>
                <img
                  src="/imagenes/mer-220834.png"
                  alt="Modelo entidad relación Mundial de Qatar 2022"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECONOCIMIENTO */}
      <section id="reconocimiento" className="mx-auto max-w-7xl px-5 py-5">
        {/* HEADER */}
        <div className="mb-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Reconocimientos y Especialización
          </p>

          <h2 className="text-5xl font-bold tracking-tight">
            Experiencia y evolución profesional
          </h2>

          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-slate-400">
            Experiencia enfocada en desarrollo empresarial, arquitectura de
            sistemas y soluciones modernas.
          </p>
        </div>

        {/* CONTENIDO */}
        <div className="flex gap-16">
          <div className="w-[320px] relative">
            <div className="absolute left-4 top-0 h-full w-[2px] bg-white/10"></div>

            <div className="relative mb-12 pl-14">
              <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/40"></div>

              <p className="text-sm text-indigo-400">2025</p>

              <h3 className="mt-2 text-xl font-bold">IA Perro vs Gato</h3>

              <p className="mt-2 text-slate-400">
                Clasificación de imágenes mediante visión computacional.
              </p>
            </div>

            <div className="relative pl-14">
              <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/40"></div>

              <p className="text-sm text-emerald-400">2025</p>

              <h3 className="mt-2 text-xl font-bold">
                Reconocimiento Académico
              </h3>

              <p className="mt-2 text-slate-400 ">
                6° lugar en Ingeniería Informática INACAP.
              </p>
            </div>

            <div className="mt-12 relative pl-14">
              <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/40"></div>

              <p className="text-sm text-cyan-400">
                2026 (Marzo - Junio - NeuroGestión)
              </p>

              <h3 className="mt-2 text-xl font-bold">ERP Empresarial</h3>

              <p className="mt-2 text-slate-400">
                Desarrollo de arquitectura RBAC, dashboards administrativos y
                permisos dinámicos.
              </p>
            </div>
          </div>

          {/* CARDS */}
          <div className="grid flex-1 grid-cols-2 gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-3xl">
                🏆
              </div>

              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-400">
                Reconocimiento
              </p>

              <h3 className="text-4xl font-bold">6° Lugar</h3>

              <p className="mt-5 text-lg leading-relaxed text-slate-400">
                Reconocimiento académico por desempeño en Ingeniería
                Informática.
              </p>
              <a
                href="https://media.licdn.com/dms/image/v2/D4D2DAQGznJnB-xYuow/profile-treasury-document-images_1280/B4DZ4rekYsK4Ao-/1/1778845894885?e=1782345600&v=beta&t=X8PcchzpITSEdyLArF7Dgmu87nM4gI2HZE28e1QC8Ac"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-4 text-lg font-semibold transition-all duration-300 hover:bg-blue-500 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 text-white"
              >
                Ver Credencial →
              </a>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/10 text-3xl">
                🧠
              </div>

              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-indigo-400">
                Especialización
              </p>

              <h3 className="text-4xl font-bold">ERP & RBAC</h3>

              <p className="mt-5 text-lg leading-relaxed text-slate-400">
                Desarrollo de sistemas modernos y arquitectura de
                permisos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section id="experiencia" className="mx-auto max-w-7xl px-8 py-32">
        <div className="mt-16 grid gap-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8 lg:grid-cols-[1.6fr_1fr]">
          {/* IZQUIERDA */}
          <div>
            <p className="text-cyan-400">Marzo - Junio 2026</p>

            <h3 className="mt-2 text-3xl font-bold">
              Desarrollador Full Stack - NeuroGestión
            </h3>

            <ul className="mt-6 space-y-3 text-slate-400 leading-relaxed">
              <li>Participación en el desarrollo de módulos ERP.</li>
              <li>Arquitectura de permisos RBAC, con migración a TRBAC.</li>
              <li>Gestión de usuarios.</li>
              <li>Políticas RLS para control de acceso a datos con Supabase.</li>
              <li>Desarrollo de APIs utilizando FastAPI.</li>
              <li>Implementación de autenticación con JWT.</li>
              <li>
                Uso de Docker y GitHub para despliegue y control de versiones.
              </li>
              <li>
                Creación de bases de datos para pruebas y posterior migración.
              </li>
              <li>Activación de cuentas mediante MFA.</li>
              <li>Optimización de consultas en un 20%.</li>
              <li>Desarrollo de dashboards administrativos.</li>
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/cv/Recomendación_Marcelo_Tejos.pdf"
                download
                className="inline-block rounded-2xl border border-white/10 px-10 py-5 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:bg-cyan-400/10 text-white"
              >
                Carta de Recomendación →
              </a>
            </div>
          </div>

          {/* DERECHA */}
          <div className="flex flex-col items-center justify-center">
            <div className="group overflow-hidden rounded-3xl border border-white/10 bg-black/20 shadow-xl">
              <img
                src="/cv/CertificadoR_Marcelo_Tejos.png"
                alt="Reconocimiento NeuroGestión"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="mt-4 w-full rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-center">
              <p className="text-sm font-medium text-emerald-400">
                Evaluación destacada durante práctica profesional
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="mx-auto max-w-7xl px-8 py-2">
        {/* SECTION HEADER */}
        <div className="mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Contacto
          </p>

          <h2 className="text-5xl font-black tracking-tight">Conectemos</h2>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            Estoy abierto a nuevas oportunidades, proyectos freelance o
            simplemente conectar con otros profesionales del desarrollo.
          </p>

          <div className="mt-10 text-lg">
            Correo:{" "}
            <a
              href="mailto:Marcelotejos1@gmail.com"
              className="text-cyan-400 hover:text-cyan-300"
            >
              Marcelotejos1@gmail.com
            </a>
          </div>
          <div className="mt-2 text-lg">
            Telefono:{" "}
            <a
              href="tel:+56994993455"
              className="text-cyan-400 hover:text-cyan-300"
            >
              +569 949 934 55
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative mt-32 border-t border-white/10">
        {/* GLOW */}
        <div className="absolute inset-0 bg-indigo-500/5 blur-[180px]" />

        <div className="relative mx-auto max-w-7xl px-8 py-24">
          {/* STATS */}
          <div className="mb-20 grid grid-cols-4 gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center">
              <h3 className="text-4xl font-bold text-cyan-400 mt-2">
                Proyectos
              </h3>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center">
              <h3 className="text-4xl font-bold text-indigo-400 mt-2">
                Tecnologías
              </h3>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center">
              <h3 className="text-4xl font-bold text-emerald-400 mt-2">ERP</h3>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center">
              <h3 className="text-4xl font-bold text-pink-400 mt-2">
                Full Stack
              </h3>
            </div>
          </div>
          <div className="mb-8 flex justify-center">
            <div className="h-60 w-60 overflow-hidden rounded-full shadow-lg shadow-indigo-500/40 transition-shadow hover:shadow-indigo-500/60">
              <img
                src="/imagenes/Ico.png"
                alt="Marcelo Tejos"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <h2 className="text-4xl font-bold justify-center text-center tracking-tight">
            Construyendo software moderno y escalable
          </h2>

          <p className="text-1xl font-light justify-center text-center tracking-tight">
            Sistemas escalables, dashboards, seguridad, IA y experiencias
            modernas.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-cyan-400">
              Aprendizaje Continuo
            </span>

            <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-indigo-400">
              Adaptabilidad nuevas tecnologías
            </span>

            <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-emerald-400">
              Diseño de Arquitectura
            </span>

            <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-purple-400">
              Soluciones a problemas complejos
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}