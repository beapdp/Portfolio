import React from 'react';
import { trabajos } from '../data/trabajos';

const ListadoTrabajos = ({ categoriaActiva }) => {
  
  // Filtrado lógico
  const trabajosFiltrados = trabajos.filter(trabajo => {
    if (categoriaActiva === 'todos') return true;
    return trabajo.categoria === categoriaActiva;
  });

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {trabajosFiltrados.map(trabajo => (
        <article 
          key={trabajo.id} 
          className='group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-[#e9a9a9]/20 transition-all duration-500 flex flex-col'
        >
          {/* Contenedor Imagen con Aspect Ratio Moderno */}
          <div className='relative aspect-[4/3] overflow-hidden'>
            <img 
              src={`/images/${trabajo.id}.png`} 
              alt={trabajo.nombre} 
              className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
            />
            {/* Overlay sutil al hacer hover */}
            <div className='absolute inset-0 bg-gradient-to-t from-[#4a4a4a]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8'>
               <a 
                 href={trabajo.url.includes('http') ? trabajo.url : `https://${trabajo.url}`} 
                 target='_blank' rel='noreferrer'
                 className='bg-white text-[#4a4a4a] px-6 py-3 rounded-xl font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform shadow-lg'
               >
                 Ver Proyecto en vivo
               </a>
            </div>
          </div>

          <div className='p-8 flex flex-col flex-grow'>
            <div className='flex justify-between items-start mb-3'>
              <h3 className='text-xl font-bold text-[#4a4a4a]'>{trabajo.nombre}</h3>
            </div>
            
            <p className='text-slate-500 text-sm leading-relaxed mb-6 flex-grow'>
              {trabajo.description}
            </p>

            <div className='flex flex-wrap gap-2 pt-4 border-t border-slate-50'>
              {trabajo.tecnologías.split(',').map(tech => (
                <span 
                  key={tech} 
                  className='text-[10px] font-bold uppercase tracking-wider text-[#e9a9a9] bg-[#fdf6f6] px-3 py-1 rounded-md'
                >
                  {tech.trim()}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default ListadoTrabajos;