import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Tecnologias from "./components/tecnologias";
import ProyectoDestacado from "./components/proyectoDestacado";
import Proyectos from "./components/proyectos";
import Reconocimientos from "./components/reconocimiento";
import Experiencia from "./components/experiencia";
import Micamino from "./components/Trayectoria";
import Footer from "./components/footer";
import Separador from "./components/separador";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F8FAFC] text-slate-900">

  {/* Fondo */}
  <div className="fixed inset-0 -z-10 overflow-hidden bg-[#F8FAFC]">

    {/* Luz superior */}
    <div className="absolute -top-52 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[170px]" />

    {/* Luz izquierda */}
    <div className="absolute left-[-250px] top-[20%] h-[500px] w-[500px] rounded-full bg-cyan-300/20 blur-[170px]" />

    {/* Luz derecha */}
    <div className="absolute right-[-250px] bottom-[10%] h-[600px] w-[600px] rounded-full bg-violet-300/20 blur-[180px]" />

    {/* Grid */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `
          linear-gradient(to right,#000 1px,transparent 1px),
          linear-gradient(to bottom,#000 1px,transparent 1px)
        `,
        backgroundSize: "42px 42px",
      }}
    />
  </div>

      <Navbar />
      <Separador /> 

      <Hero />
      <Separador /> 

      <Tecnologias />
      <Separador />   

      {/* <ProyectoDestacado /> */}
      {/* <Separador /> */}

      <Proyectos />
      <Separador /> 

      <Reconocimientos />
      <Separador /> 

      <Experiencia />
      <Separador /> 

      <Micamino />
      <Separador /> 
      
      <Footer />

    </main>
  );
}