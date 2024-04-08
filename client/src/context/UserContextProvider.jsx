import { useContext, useState } from "react";
import userContext from "./userContext";
const UserContexProvider = ({ children }) => {
  const [isValidUser, setIsValidUser] = useState(false);
  return (
    <>
      <userContext.Provider value={{ isValidUser, setIsValidUser }}>
        {children}
      </userContext.Provider>
    </>
  );
};
export const useUserContext = () => {
  return useContext(userContext);
};

export default UserContexProvider;
