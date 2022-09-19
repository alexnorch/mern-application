import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

// Components
import { Logo } from "../components";
import StyledNavigation from "./styles/Navigation.styled";

const Navigation = () => {
  const { user, logoutUser } = useAppContext();

  const srcImage =
    user.photo.length > 1
      ? `/${user.photo}`
      : "https://agile.yakubovsky.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png";

  return (
    <StyledNavigation>
      <Logo />
      <div className="profile">
        <div className="profile-image">
          <img src={srcImage} alt="User face displayed" />
        </div>
        <div className="profile-details">
          <h4>{user.name}</h4>
          <p>{user.role}</p>
        </div>
        <ul>
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
