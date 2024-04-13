import {
  Drawer,
  useDisclosure,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from "@chakra-ui/react";
import { List } from "lucide-react";
const CustomDrawer = ({ header }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div className="mobileOnly">
        <Button
          onClick={onOpen}
          background={"none"}
          style={{ height: "100%", background: "none  " }}
        >
          <List size={32} color="#000000" />
        </Button>
      </div>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent
          bgGradient="linear(to-l, #07002b,#161326 )"
          color="white"
        >
          <DrawerHeader borderBottomWidth="1px">{header}</DrawerHeader>
          <DrawerCloseButton></DrawerCloseButton>
          <DrawerBody>
            <div style={{ width: "100%", height: "100%" }}></div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default CustomDrawer;
