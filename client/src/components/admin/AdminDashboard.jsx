import { VStack, Center, Stack, Box } from "@chakra-ui/react";
import CustomDrawer from "../layouts/CustomDrawer";
import SearchBar from "../layouts/SearchBar";
import { useState } from "react";
import SideBar from "../layouts/SideBar";
const AdminDashboard = () => {
  const [query, setQuery] = useState(null);
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",

          color: "black",
        }}
      >
        <CustomDrawer header={"welcome admin"} />
        <div className="desktopOnly">
          <SideBar />
        </div>
        <div style={{ width: "100%" }}>
          <Center>
            <SearchBar callback={(val) => setQuery(val)} />
          </Center>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
