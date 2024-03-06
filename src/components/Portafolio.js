import React from 'react';
import ListadoTrabajos from './ListadoTrabajos';

const Portafolio = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Mis proyectos</h1>
      <p>Aún sigo practicando con todos y cada uno de ellos, por lo que se podría decir que no están 100% terminados; siguen estando abiertos a mejoras y cambios continuos.</p>
     <ListadoTrabajos/> 
    </div>
  )
}

export default Portafolio;
