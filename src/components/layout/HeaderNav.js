import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/headerNav.css';



const HeaderNav = () => {

    const [ menu, setMenu ] = useState(false);
    const toggleMenu = () => {
        setMenu(!menu );
    }

  return (
    <header className='header'>
        
        <div className='logo'>
            <img src="/images/chicaPc.png" alt="Descripción de la imagen" />
            <img src="/images/Beapdp.png" alt="Descripción de la imagen" />
        </div>
        <button 
            onClick={ toggleMenu }
            className='cabecera-menuBoton'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="cabecera-svg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
        </button>
        <nav className={`cabecera-nav ${ menu ? 'isActive': ''}`}>
            <ul className='cabecera-ul'>
                <li className='cabecera-li'>
                    <NavLink to="/inicio">Inicio</NavLink>
                </li>
                <li className='cabecera-li'>
                    <NavLink to="/portafolio">Portafolio</NavLink>
                </li>
                <li className='cabecera-li'>
                    <NavLink to="/curriculum">Currículum</NavLink>
                </li>
                <li className='cabecera-li'>
                    <NavLink to="/contacto">Contacto</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default HeaderNav
