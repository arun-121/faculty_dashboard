import { VStack, Drawer, Image, HStack } from "@chakra-ui/react";
import { Menu, CircleUserRound } from "lucide-react";
const SideBar = () => {
  return (
    <>
      <VStack
        bgGradient="linear(to-l, #07002b,#161326 )"
        width={"300px"}
        height={"100vh"}
        style={{
          display: "flex",
          color: "white",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      ></VStack>
    </>
  );
};

export default SideBar;
