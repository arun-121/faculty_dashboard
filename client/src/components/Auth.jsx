import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../configuration/config";
import { Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContextProvider";
const Auth = () => {
  const { setIsValidUser } = useUserContext();
  const navigate = useNavigate();
  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((d) => {
        if (d.user.email.endsWith("@bitsathy.ac.in")) {
          navigate("/");
          setIsValidUser(true);
        } else {
        }
      })
      .catch((e) => console.log(e));
  };
  return (
    <>
      <Button onClick={handleSignIn} type="primary">
        signin
      </Button>
      <h1>arun</h1>
    </>
  );
};

export default Auth;
