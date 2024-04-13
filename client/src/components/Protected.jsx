import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContextProvider";

const Protected = ({ children }) => {
  const { isValidUser } = useUserContext();
  if (isValidUser === false) {
    return <Navigate to={"/login"} />;
  }

  return children;
};

export default Protected;
