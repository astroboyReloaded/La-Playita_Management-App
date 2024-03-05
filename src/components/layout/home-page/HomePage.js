import Menu from './menu/Menu';
import Punch from './punch/Punch';
import homePage from './homePage.module.css';

const HomePage = () => (
  <main className={homePage.mainContainer}>
    <Menu />
    <Punch />
  </main>
);

export default HomePage;
