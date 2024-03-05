import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const routes = [
  { path: '/actualizar-inventario', name: 'Actualizar Inventario' },
  { path: '/reportes', name: 'Reportes' },
  { path: '/administrar-usuarios', name: 'Administrar Usuarios' },
];

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button type="button" className={`${MenuCSS.container} ${isOpen && MenuCSS.open}`} onClick={toggleMenu}>
        <div className={MenuCSS.bar} />
        <div className={MenuCSS.bar} />
        <div className={MenuCSS.bar} />
      </button>
      <nav className={`${MenuCSS.menu} ${isOpen && MenuCSS.show}`}>
        <ul className={MenuCSS.navList}>
          {routes.map((route) => (
            <li className={MenuCSS.listItem} key={route.name}>
              <NavLink to={route.path}>{route.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Menu;
