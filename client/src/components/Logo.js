import StyledLogo from "./styles/Logo.styled";
import image from "../assets/images/logo.png";

const Logo = () => {
  return (
    <StyledLogo>
      <img src={image} alt="Logo" />
    </StyledLogo>
  );
};

export default Logo;
