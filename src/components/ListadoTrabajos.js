import React from 'react';
import { trabajos } from '../data/trabajos';
import '../styles/listadoTrabajos.css';

const ListadoTrabajos = () => {
  return (
    <section className='works'>
      {
        trabajos.map(trabajo => {
          return (
            <article key={trabajo.id} className='work-item'>
              <div className='mask'>
                {/* Envuelve la imagen y el h2 en un enlace */}
                <a href={`https://${trabajo.url}`} target='_blank' rel='noopener noreferrer'>
                  <img src={`/images/${trabajo.id}.png`} alt={trabajo.nombre} />
                  <h2>{trabajo.nombre}</h2>
                </a>
              </div>
              <span>{trabajo.categorias}</span>
              <h3>{trabajo.tecnologías}</h3>
              <h4>{trabajo.description}</h4>
            </article>
          );
        })
      }
    </section>
  )
}

export default ListadoTrabajos;

