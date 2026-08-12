"use client";

import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaPython,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiSupabase,
  SiMysql,
  SiDjango,
  SiFastapi,
  SiGit,
} from "react-icons/si";

const technologies = [
  {
    name: "React",
    icon: FaReact,
    color: "text-cyan-500",
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-black",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-600",
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-sky-500",
    category: "Frontend",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "text-green-600",
    category: "Backend",
  },
  {
    name: "FastAPI",
    icon: SiFastapi,
    color: "text-emerald-500",
    category: "Backend",
  },
  {
    name: "Python",
    icon: FaPython,
    color: "text-yellow-500",
    category: "Backend",
  },
  {
    name: "Django",
    icon: SiDjango,
    color: "text-green-700",
    category: "Backend",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "text-sky-700",
    category: "Base de datos",
  },
  {
    name: "Supabase",
    icon: SiSupabase,
    color: "text-emerald-500",
    category: "Base de datos",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "text-blue-500",
    category: "Base de datos",
  },
  {
    name: "Docker",
    icon: FaDocker,
    color: "text-blue-500",
    category: "DevOps",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "text-orange-500",
    category: "DevOps",
  },
];
export default function TechStack() {
  return (
    <section
      id="tecnologias"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <div className="mb-14">

        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
          Tecnologías
        </span>

        <h2 className="mt-6 text-5xl font-bold">
          Stack tecnológico
        </h2>

        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Tecnologías que utilizo para desarrollar aplicaciones
          modernas, seguras y escalables.
        </p>

      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {technologies.map((tech) => {

          const Icon = tech.icon;

          return (
            <div
              key={tech.name}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div
                className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-4xl ${tech.color}`}
              >
                <Icon />
              </div>

              <h3 className="text-xl font-semibold">
                {tech.name}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {tech.category}
              </p>

            </div>
          );
        })}
      </div>
    </section>
  );
}