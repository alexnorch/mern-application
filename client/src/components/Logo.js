import StyledLogo from "./styles/Logo.styled";
import image from "../assets/images/logo.png";

const Logo = ({ onClick }) => {
  return (
    <StyledLogo onClick={onClick}>
      <img src={image} alt="Logo" />
    </StyledLogo>
  );
};

export default Logo;
