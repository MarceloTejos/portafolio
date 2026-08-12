// components/Separator.tsx
"use client";

export default function Separador() {
  return (
    // Agregamos un contenedor para respetar el ancho máximo y padding del sitio
    <div className="mx-auto max-w-7xl px-8">
      {/* 
        La línea:
        - h-px: 1 píxel de alto
        - bg-gradient-to-r: Degradado de izquierda a derecha
        - from-transparent: Empieza transparente
        - via-slate-200: Gris suave en el centro (para modo claro)
        - to-transparent: Termina transparente
      */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </div>
  );
}