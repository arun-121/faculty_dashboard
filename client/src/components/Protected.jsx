import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContextProvider";
const Protected = ({ children }) => {
  const isValidUser = useUserContext();
  console.log(isValidUser);
  if (isValidUser) return children;
  else return <Navigate to={"/login"} />;
};

export default Protected;
