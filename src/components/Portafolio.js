import React, { useState } from 'react';
import ListadoTrabajos from './ListadoTrabajos';

const Portafolio = () => {
  const [filtro, setFiltro] = useState('todos');

  const categorias = [
    { id: 'todos', nombre: 'Todos' },
    { id: 'desarrollo', nombre: 'Desarrollo Web' },
    { id: 'diseño', nombre: 'UX/UI' },
    { id: 'destacados', nombre: 'Destacados' }
  ];

  return (
    <div className='min-h-screen bg-[#fdf6f6] pt-32 pb-20 px-6'>
      <div className='max-w-7xl mx-auto'>
        <header className='mb-16 text-center'>
          <h1 className='text-5xl font-black text-[#4a4a4a] mb-4'>Proyectos Seleccionados</h1>
          <p className='text-slate-400 max-w-2xl mx-auto italic'>
            Una muestra de mi evolución técnica y creativa. 
            Enfocada en código limpio, interfaces intuitivas y soluciones escalables.
          </p>
        </header>

        {/* Botones de Filtro */}
        <div className='flex flex-wrap justify-center gap-4 mb-12'>
          {categorias.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFiltro(cat.id)}
              className={`px-8 py-2 rounded-full text-sm font-bold transition-all ${
                filtro === cat.id 
                ? 'bg-[#e9a9a9] text-white shadow-lg' 
                : 'bg-white text-slate-400 hover:border-[#e9a9a9] border border-transparent'
              }`}
            >
              {cat.nombre}
            </button>
          ))}
        </div>

        {/* Pasamos el filtro al listado */}
        <ListadoTrabajos categoriaActiva={filtro} /> 
      </div>
    </div>
  )
}

export default Portafolio;