import { Link } from "react-router-dom";

// Components
import { useAppContext } from "../../context/AppContext";

// Icons
import { CgNotes } from "react-icons/cg";
import { FiHome } from "react-icons/fi";
import { MdOutlineSchedule } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

const Menu = () => {
  const { isMenuOpen } = useAppContext();
  return (
    <div isMenuOpen={isMenuOpen}>
      <ul>
        <li>
          <CgNotes />
          <Link to="/">home</Link>
        </li>
        <li>
          <FiHome />
          <Link to="/articles">articles</Link>
        </li>
        <li>
          <MdOutlineSchedule />
          <Link to="/schedule">schedule</Link>
        </li>
        <li>
          <FaRegUser />
          <Link to="/profile/details">profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
