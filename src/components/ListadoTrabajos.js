import React from 'react';
import { trabajos } from '../data/trabajos';
import { Link } from 'react-router-dom';

const ListadoTrabajos = () => {
  return (
    <section className='works'>

      {
        trabajos.map(trabajo => {
          return (
            <article key={trabajo.id} className='work-item'>
              <div className='mask'>
                <img src={"/images/"+trabajo.id+".png"} />
              </div>
              <span>{trabajo.categorias}</span>
              <h2><Link to={"/proyecto/"+trabajo.id}>{trabajo.nombre}</Link></h2>
              <h3>{trabajo.tecnologías}</h3>
              <h4>{trabajo.description}</h4>
            </article>
          );
        })
      }
      
      </section>
  )
}

export default ListadoTrabajos
