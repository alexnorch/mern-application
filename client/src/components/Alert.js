import { useAppContext } from "../context/AppContext";
import StyledAlert from "./styles/Alert.styled";

const Alert = () => {
  const { alertText, alertType } = useAppContext();
  return <StyledAlert type={alertType}>{alertText}</StyledAlert>;
};

export default Alert;
