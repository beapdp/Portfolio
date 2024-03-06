import React from 'react';
import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <div className='home'>
      <h1>Soy <em>Bea</em>, <strong>desarrolladora web</strong> y futura <strong>diseñadora UX/UI</strong>.</h1>
      <h2>Tras 17 años en el mundo de la educación, he emprendido una nueva trayectoria profesional hacia el mundo del desarrollo, una de mis grandes aficiones.</h2>
      <h2> Recientemente completé un bootcamp de desarrollo web y ahora estoy ampliando mis habilidades en diseño UX/UI a través de otro.</h2>
      <h2>No termino aquí, en septiembre comienzo el grado superior en desarrollo de aplicaciones multiplataforma. No me dan miedo los nuevos retos y estoy dispuesta a convertirme en una gran profesional dentro de este mundo.</h2>
      <section className='lasts-works'>
        <h2 className='heading'>¿Encajaría en tu Proyecto?</h2>
        <p>Estoy entusiasmada por encontrar esa oportunidad que me abra las puertas de manera profesional, donde pueda seguir aprendiendo, hacer carrera y aportar mi dedicación y creatividad a tu equipo.
          <Link to="/contacto"> Contáctame</Link> y exploremos juntos cómo puedo contribuir a tu proyecto.</p>
      </section>
    </div>
  )
}

export default Inicio;
