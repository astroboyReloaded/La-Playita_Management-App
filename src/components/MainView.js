import CoverView from "./coverView/CoverView";

const MainView = () => (
  <div className="main-view">
    <p className="app-title">La Playita Management System</p>
    <img className="main-image" src="./images/combi-surf.jpeg" alt="La Playita logo" />
    <CoverView />
  </div>
);

export default MainView;
