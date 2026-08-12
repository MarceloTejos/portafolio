"use client";

import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Tecnologías", href: "#tecnologias" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Reconocimiento", href: "#reconocimiento" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Trayectoria", href: "#trayectoria" },
  { label: "Contacto", href: "#contacto" },
];


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 20);
    scroll();
    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          // Light theme: Fondo blanco, borde gris suave y sombra sutil al hacer scroll
          ? `bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm`
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3">
          {/* Borde sutil cyan para identidad de marca */}
          <div className={`h-11 w-11 overflow-hidden rounded-full border border-cyan-500/40 shadow-lg shadow-cyan-500/10`}>
            <img
              src="/imagenes/Ico.png" 
              alt="Marcelo"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            {/* Texto oscuro para fondo blanco */}
            <p className="font-bold text-lg text-slate-950">Marcelo Tejos</p>
            <p className="text-xs text-slate-600">
              Full Stack Developer
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              // Texto oscuro, hover cyan ligeramente más oscuro para legibilidad
              className="text-slate-800 transition hover:text-cyan-600 font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Botones Acciones */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/MarceloTejos"
            target="_blank"
            rel="noopener noreferrer"
            // Light theme: Borde gris sutil, ícono oscuro, hover cyan
            className={`rounded-xl border border-slate-200 p-3 text-slate-600 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-600`}
          >
            <FaGithub size={18} />
          </a>

          <a
            href="/cv/CVMarcelo_Tejos_Oliva.pdf"
            download
            // Botón Cyan: Fondo cyan fuerte, texto negro para contraste
            className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-black transition hover:scale-105 hover:bg-cyan-600 hover:shadow-md shadow-sm"
          >
            <Download size={18} />
            Descargar CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          // Borde gris y texto oscuro para móvil
          className={`lg:hidden rounded-lg border border-slate-200 p-2 text-slate-900 hover:bg-slate-50`}
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        // Light theme: Fondo blanco, borde superior gris
        <div className={`border-t border-slate-200 bg-white/95 backdrop-blur-xl lg:hidden shadow-xl`}>
          <div className="flex flex-col p-5 space-y-1">
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                // Texto oscuro, hover gris muy suave
                className="rounded-lg px-3 py-3 text-slate-800 font-medium transition hover:bg-slate-100 hover:text-cyan-600"
              >
                {item.label}
              </a>
            ))}

            <a
              href="/cv/CVMarcelo_Tejos_Oliva.pdf"
              download
              className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-cyan-500 py-3 font-semibold text-black hover:bg-cyan-600"
            >
              <Download size={18} />
              Descargar CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}