import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../configuration/config";
import { Button, Center, VStack, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useUserContext } from "../context/UserContextProvider";
import "../index.css";
const Auth = () => {
  const { setIsValidUser } = useUserContext();
  const navigate = useNavigate();
  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((d) => {
        console.log(d);
        if (d.user.email.endsWith("@bitsathy.ac.in")) {
          navigate("/admin");
          setIsValidUser(true);
          console.log(d.user.uid);
          axios
            .post("http://localhost:3000/api/saveuid", {
              uid: d.user.uid,
              name: d.user.displayName,
              email: d.user.email,
            })
            .then((res) => console.log(res))
            .catch((e) => console.log(e));
        } else {
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <Center h="100vh" w="100%" className="gradient-bg">
        <div
          className="box"
          style={{
            background: "rgb(255 255 255 / 66%)",
            display: "flex",
            padding: "30px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <Image
            loading="eager"
            src="https://upload.wikimedia.org/wikipedia/en/7/77/Bannari_Amman_Institute_of_Technology_logo.png "
            alt="bitsathy"
            boxSize="60%"
          />
          <Button
            style={{ background: "#30347D", color: "white" }}
            onClick={handleSignIn}
            className="onhover"
          >
            Google Sign In
          </Button>
          <hr />
          <p>sign in with your bitsathy account</p>
        </div>
      </Center>
    </>
  );
};

export default Auth;
