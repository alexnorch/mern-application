import { Outlet } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

// Components
import StyledDashboardWrapper from "../../components/styles/DashboardWrapper.styled";
import { Menu, Navigation } from "../../components";

const DashboardWrapper = () => {
  const { isMenuOpen } = useAppContext();
  return (
    <StyledDashboardWrapper isMenuOpen={isMenuOpen}>
      <div className="left">
        <Menu />
      </div>
      <div className="right">
        <Navigation />
        <Outlet />
      </div>
    </StyledDashboardWrapper>
  );
};

export default DashboardWrapper;
