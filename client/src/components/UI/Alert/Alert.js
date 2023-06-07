import { useAppContext } from "../../../context/AppContext";

const Alert = () => {
  const { alertText, alertType } = useAppContext();
  return <div type={alertType}>{alertText}</div>;
};

export default Alert;
