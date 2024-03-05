import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import nav from './nav.module.css';

const routes = [
  { path: '/actualizar-inventario', name: 'Actualizar Inventario' },
  { path: '/reportes', name: 'Reportes' },
  { path: '/administrar-usuarios', name: 'Administrar Usuarios' },
];

const Navigation = ({ open }) => (
  <nav
    className={nav.container}
    data-open={open}
  >
    <ul>
      {routes.map((route) => (
        <li key={route.name}>
          <NavLink to={route.path}>{route.name}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

Navigation.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default Navigation;
