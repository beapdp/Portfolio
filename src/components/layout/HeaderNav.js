import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const HeaderNav = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efecto para cambiar el estilo al hacer scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className='flex items-center gap-2'>
          <img src="/images/Beapdp.png" alt="Logo" className="h-10 w-auto hover:scale-105 transition-transform" />
        </div>

        {/* Botón Hamburguesa Mejorado */}
        <button onClick={() => setMenu(!menu)} className='md:hidden text-[#4a4a4a]'>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>

        <nav className={`${menu ? 'flex' : 'hidden'} md:flex absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent flex-col md:flex-row items-center gap-8 p-6 md:p-0 shadow-lg md:shadow-none transition-all`}>
          {['inicio', 'portafolio', 'curriculum', 'contacto'].map((item) => (
            <NavLink 
              key={item}
              to={`/${item}`} 
              className={({ isActive }) => `
                text-sm uppercase tracking-widest font-bold transition-colors
                ${isActive ? 'text-[#e9a9a9] border-b-2 border-[#e9a9a9]' : 'text-slate-500 hover:text-[#e9a9a9]'}
              `}
              onClick={() => setMenu(false)}
            >
              {item}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default HeaderNav;