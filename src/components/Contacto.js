import React from 'react';

const Contacto = () => {
  const metodosContacto = [
    {
      titulo: "Enviame un Email",
      descripcion: "Para propuestas formales o consultas detalladas.",
      dato: "bea.palomo.delpozo@gmail.com",
      link: "mailto:bea.palomo.delpozo@gmail.com",
      color: "bg-white",
      textoBoton: "Redactar correo",
      icono: "✉️"
    },
    {
      titulo: "WhatsApp Directo",
      descripcion: "¿Prefieres algo rápido? Hablemos por chat.",
      dato: "+34 606 70 12 67",
      link: "https://wa.me/34606701267",
      color: "bg-[#4a4a4a]",
      textoBoton: "Abrir chat",
      icono: "💬",
      dark: true
    },
    {
      titulo: "LinkedIn",
      descripcion: "Conecta conmigo y echa un vistazo a mi red profesional.",
      dato: "Beatriz Palomo del Pozo",
      link: "https://www.linkedin.com/in/beatriz-palomo-delpozo/", // Sustituye por tu link
      color: "bg-white",
      textoBoton: "Ver perfil",
      icono: "🔗"
    }
  ];

  return (
    <div className='min-h-[90vh] bg-[#fdf6f6] pt-32 pb-20 px-6 flex items-center'>
      <div className='max-w-6xl mx-auto w-full'>
        
        <div className='text-center mb-20'>
          <h1 className='text-6xl md:text-7xl font-black text-[#4a4a4a] mb-6 tracking-tighter'>
            ¿Tienes un <span className="text-[#e9a9a9]">proyecto</span>?
          </h1>
          <p className='text-slate-400 text-xl font-light max-w-2xl mx-auto'>
            Estoy disponible para nuevas oportunidades. Elige la vía que más te guste y hablamos.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {metodosContacto.map((metodo, index) => (
            <div 
              key={index}
              className={`${metodo.color} p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 flex flex-col justify-between transition-all hover:-translate-y-3 duration-300 border border-white`}
            >
              <div>
                <span className='text-4xl mb-6 block'>{metodo.icono}</span>
                <h3 className={`text-2xl font-bold mb-3 ${metodo.dark ? 'text-white' : 'text-[#4a4a4a]'}`}>
                  {metodo.titulo}
                </h3>
                <p className={`mb-8 font-light ${metodo.dark ? 'text-slate-300' : 'text-slate-500'}`}>
                  {metodo.descripcion}
                </p>
              </div>

              <div>
                <p className={`text-sm font-mono mb-6 truncate ${metodo.dark ? 'text-[#e9a9a9]' : 'text-slate-400'}`}>
                  {metodo.dato}
                </p>
                <a 
                  href={metodo.link}
                  target={metodo.link.startsWith('http') ? "_blank" : "_self"}
                  rel="noreferrer"
                  className={`inline-block w-full text-center py-4 rounded-2xl font-bold transition-all ${
                    metodo.dark 
                    ? 'bg-[#e9a9a9] text-white hover:bg-white hover:text-[#4a4a4a]' 
                    : 'bg-[#fdf6f6] text-[#4a4a4a] hover:bg-[#4a4a4a] hover:text-white'
                  }`}
                >
                  {metodo.textoBoton}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-slate-400 text-sm uppercase tracking-[0.3em]">España — Remoto — Híbrido</p>
        </div>

      </div>
    </div>
  );
}

export default Contacto;