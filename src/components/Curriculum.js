import React from 'react';

const Curriculum = () => {
  const skills = ['React', 'Angular', 'JS', 'PHP', 'Java', 'MySQL', 'MongoDB', 'UX', 'UI'];
  const softSkills = ['Adaptabilidad', 'Capacidad Resolutiva', 'Empatía', 'Trabajo en equipo', 'Creatividad'];

  const formacion = [
    {
      periodo: '2024 - En curso',
      titulo: 'Grado Superior DAM',
      centro: 'Upgrade Hub',
      descripcion: 'Especialización en desarrollo de aplicaciones multiplataforma, profundizando en lógica de programación y bases de datos.',
      actual: true
    },
    {
      periodo: '2023 - 2024',
      titulo: 'UX/UI Designer',
      centro: 'Upgrade Hub',
      descripcion: 'Enfoque en la experiencia de usuario, prototipado de alta fidelidad y sistemas de diseño.',
      actual: false
    },
    {
      periodo: '2022 - 2023',
      titulo: 'Full Stack Web Developer',
      centro: 'Upgrade Hub',
      descripcion: 'Fundamentos sólidos de desarrollo web moderno, desde el backend hasta el despliegue.',
      actual: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#fdf6f6] pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
          
          {/* Columna Lateral: Habilidades */}
          <aside className="lg:col-span-1 space-y-12">
            <section>
              <h3 className="text-[#4a4a4a] font-black uppercase tracking-tighter text-xl mb-6">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white border border-[#e9a9a9]/20 text-slate-500 text-xs font-bold rounded-lg shadow-sm hover:border-[#e9a9a9] transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section className="bg-[#4a4a4a] p-8 rounded-[2rem] text-white">
              <h3 className="text-[#e9a9a9] font-bold uppercase tracking-widest text-xs mb-4">Soft Skills</h3>
              <ul className="space-y-3">
                {softSkills.map(soft => (
                  <li key={soft} className="text-sm opacity-90 font-light flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#e9a9a9] rounded-full"></span>
                    {soft}
                  </li>
                ))}
              </ul>
            </section>

            <a href="/CV Beatriz Palomo del Pozo .pdf" download className="block w-full text-center px-6 py-4 bg-[#e9a9a9] text-white rounded-2xl font-bold shadow-lg hover:bg-[#d48b8b] transition-all transform hover:-translate-y-1">
              Descargar CV (PDF)
            </a>
          </aside>

          {/* Columna Principal: Timeline */}
          <main className="lg:col-span-3">
            <h2 className="text-4xl font-black text-[#4a4a4a] mb-12 tracking-tight">Formación Académica</h2>
            
            <div className="relative border-l-2 border-[#e9a9a9]/30 ml-4 space-y-12">
              {formacion.map((item, index) => (
                <div key={index} className="relative pl-10">
                  {/* Punto del timeline */}
                  <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-[#e9a9a9] ${item.actual ? 'bg-[#e9a9a9] animate-ping' : 'bg-white'}`}></div>
                  <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-[#e9a9a9] ${item.actual ? 'bg-[#e9a9a9]' : 'bg-white'}`}></div>
                  
                  <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-50 hover:shadow-md transition-shadow">
                    <span className="text-[#e9a9a9] font-bold text-xs uppercase tracking-widest">{item.periodo}</span>
                    <h4 className="text-2xl font-bold text-[#4a4a4a] mt-1 mb-2">{item.titulo}</h4>
                    <p className="text-[#d48b8b] font-medium mb-4 text-sm">{item.centro}</p>
                    <p className="text-slate-500 leading-relaxed font-light italic">
                      {item.descripcion}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;