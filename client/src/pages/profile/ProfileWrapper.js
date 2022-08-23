import { Outlet, NavLink } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import StyledProfileWrapper from "../../components/styles/ProfileWrapper.styled";

const links = [
  {
    path: "details",
    text: "My details",
  },
  {
    path: "categories",
    text: "My Categories",
  },
  {
    path: "password",
    text: "Change Password",
  },
];

const ProfileWrapper = () => {
  const { user, logoutUser } = useAppContext();
  return (
    <StyledProfileWrapper>
      <div className="profile-left">
        <div className="info">
          <div className="image" htmlFor="image">
            <img src={user && user.photo} alt="" />
          </div>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
        <ul className="navigation">
          {links.map((item, index) => (
            <li key={index}>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to={item.path}
              >
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="bottom">
          <button onClick={logoutUser} className="btn">
            Log out
          </button>
        </div>
      </div>
      <div className="profile-content">
        <Outlet />
      </div>
    </StyledProfileWrapper>
  );
};

export default ProfileWrapper;
