import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

// Components
import { Logo } from '../components'
import StyledNavigation from "./styles/Navigation.styled";

const Navigation = () => {
  const { user, logoutUser } = useAppContext();
  
  return (
    <StyledNavigation>
      <Logo />
      <div className="profile">
        <div className="profile-image">
          <img src={user.photo} alt="user image" />
        </div>
        <div className="profile-details">
          <h4>{user.name}</h4>
          <p>{user.role}</p>
        </div>
        <ul className="profile-menu">
          <li>
            <Link to="/new-article">Add post</Link>
          </li>
          <li onClick={logoutUser}>Logout</li>
        </ul>
      </div>
    </StyledNavigation>
  );
};

export default Navigation;
