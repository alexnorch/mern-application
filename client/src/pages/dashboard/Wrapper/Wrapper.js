import { Outlet } from "react-router-dom";
// import { useAppContext } from "../../context/AppContext";

// Components
import Menu from "../../../components/Menu/Menu";
import Navigation from "../../../components/Navigation/Navigation";

const DashboardWrapper = () => {
  // const { isMenuOpen } = useAppContext();
  return (
    <div>
      <div className="left">
        <Menu />
      </div>
      <div className="right">
        <Navigation />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardWrapper;
