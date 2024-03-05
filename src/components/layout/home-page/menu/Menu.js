import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Hamburger from './Hamburger';
import menu from './menu.module.css';

const routes = [
  { path: '/actualizar-inventario', name: 'Actualizar Inventario' },
  { path: '/reportes', name: 'Reportes' },
  { path: '/administrar-usuarios', name: 'Administrar Usuarios' },
];

const Menu = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
    console.log('toggleMenu');
  };

  return (
    <>
      <Hamburger
        toggle={toggleMenu}
        open={isOpen}
      />
      <nav
        className={menu.container}
      >
        <ul>
          {routes.map((route) => (
            <li key={route.name}>
              <NavLink to={route.path}>{route.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Menu;
