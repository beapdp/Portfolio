import React from 'react';
import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#fdf6f6] pt-20">
      {/* Círculos decorativos de fondo para dar profundidad */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#e9a9a9]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#d48b8b]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-4xl px-6 text-center">
        <div className="mb-6 inline-block px-4 py-1 rounded-full bg-white border border-[#e9a9a9]/30 text-[#e9a9a9] text-xs font-bold uppercase tracking-widest animate-bounce">
          Disponible para nuevas oportunidades
        </div>

        <h1 className="text-6xl md:text-8xl font-black text-[#4a4a4a] mb-6 tracking-tight">
          Hola, soy <span className="text-[#e9a9a9] drop-shadow-sm">Bea</span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-slate-400 mb-10 font-light max-w-2xl mx-auto leading-tight">
          Transformo ideas en <span className="text-slate-600 font-normal">experiencias digitales</span> con enfoque en UX/UI.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12 text-left">
          <div className="bg-white/40 backdrop-blur-md p-8 rounded-[2rem] border border-white hover:border-[#e9a9a9]/50 transition-all shadow-xl shadow-slate-200/50">
            <span className="text-3xl mb-4 block">🚀</span>
            <p className="text-slate-600 leading-relaxed italic">
              "Tras 18 años en educación, aporto una <strong>visión humana y resolutiva</strong> al desarrollo de software."
            </p>
          </div>
          <div className="bg-[#4a4a4a] p-8 rounded-[2rem] text-white shadow-xl shadow-slate-900/10">
            <span className="text-3xl mb-4 block">🎓</span>
            <p className="leading-relaxed opacity-90">
              Estudiante de <strong>DAM</strong> especializada en el ecosistema Frontend moderno y diseño de interfaces.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/portafolio" className="group relative px-12 py-5 bg-[#4a4a4a] text-white rounded-2xl font-bold overflow-hidden transition-all">
            <span className="relative z-10">Explorar Proyectos</span>
            <div className="absolute inset-0 bg-[#e9a9a9] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </Link>
          
          <Link to="/contacto" className="px-12 py-5 border-2 border-[#e9a9a9] text-[#e9a9a9] rounded-2xl font-bold hover:bg-white transition-all shadow-sm">
            Hablemos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Inicio;