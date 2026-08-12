// components/FadeIn.jsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function FadeIn({ children, delay = 0, direction = "up" }: { children: ReactNode; delay?: number; direction?: "up" | "down" | "left" | "right" }) {
  // Configurar la dirección del movimiento
  const yOffset = direction === "up" ? 40 : direction === "down" ? -40 : 0;
  const xOffset = direction === "left" ? 40 : direction === "right" ? -40 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, x: xOffset }}
      // whileInView hace que la animación ocurra cuando el usuario hace scroll y llega a esta parte
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      // viewport={{ once: true }} asegura que la animación ocurra solo la primera vez que bajas
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Curva de aceleración súper suave
      }}
    >
      {children}
    </motion.div>
  );
}