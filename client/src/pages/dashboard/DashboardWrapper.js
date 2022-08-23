import { Outlet } from "react-router-dom";

// Components
import StyledDashboardWrapper from "../../components/styles/DashboardWrapper.styled";
import { Menu, Navigation } from "../../components";

const DashboardWrapper = () => {
  return (
    <StyledDashboardWrapper>
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
