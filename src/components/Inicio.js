import React from 'react';
import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <div className='home'>
      <h1>Hola, soy <em>Beatriz</em>, <strong>desarrolladora web</strong> y futura <strong>diseñadora UX/UI</strong>.</h1>
      <h2>Con 16 años de experiencia en educación infantil, he emprendido una nueva trayectoria profesional en tecnología. Recientemente completé un bootcamp de desarrollo web y ahora estoy ampliando mis habilidades en diseño UX/UI.</h2>
    
      <section className='lasts-works'>
        <h2 className='heading'>¿Listo para comenzar tu proyecto?</h2>
        <p>Estoy entusiasmada por aportar mi dedicación y creatividad a tu equipo. 
          <Link to="/contacto"> Contáctame</Link> y exploremos juntos cómo puedo contribuir a tu proyecto.</p>
        <div className='works'>
          {/* ... */}
        </div>
      </section>
    </div>
  )
}

export default Inicio;
