import React from "react";
import ReactDOM from "react-dom/client";
import Auth from "./components/Auth";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Protected from "./components/Protected";
import AdminDashboard from "./components/admin/AdminDashboard";
import CustomDrawer from "./components/layouts/CustomDrawer";
import UserContexProvider from "./context/UserContextProvider";
import SideBar from "./components/layouts/SideBar";
import FormData from "./components/admin/FormData";
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ChakraProvider>
      <App />
      {/* <FormData /> */}
    </ChakraProvider>
  </>
);

function App() {
  return (
    <>
      <UserContexProvider>
        <MyRoutes />
      </UserContexProvider>
    </>
  );
}

function MyRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Auth />} />
          <Route path="/sidebar" element={<SideBar />} />
          <Route path="/drawer" element={<CustomDrawer />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route
            path="/"
            element={
              <Protected>
                <Body />
              </Protected>
            }
          />
          {/* <Route path="*" element={<>404 not found</>} /> */}
        </Routes>
      </Router>
    </>
  );
}
