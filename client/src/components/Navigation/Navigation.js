import { Link } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

// Components
import Logo from "../../components/UI/Logo/Logo";

const Navigation = () => {
  const { user, logoutUser, toggleMenu, isMenuOpen } = useAppContext();

  const srcImage =
    user.photo.length > 1
      ? `/${user.photo}`
      : "https://agile.yakubovsky.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png";

  return (
    <div>
      <Logo onClick={toggleMenu} />
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
    </div>
  );
};

export default Navigation;
