import { Outlet } from 'react-router-dom';
import layout from './layout.module.css';

const Layout = () => (
  <div className={layout.container}>
    <Outlet />
  </div>
);

export default Layout;
