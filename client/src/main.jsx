import React from "react";
import ReactDOM from "react-dom/client";
import Auth from "./components/Auth";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Protected from "./components/Protected";
import UserContexProvider from "./context/UserContextProvider";
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
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
          <Route
            path="/"
            element={
              <Protected>
                <Body />
              </Protected>
            }
          />
          <Route path="*" element={<>404 not found</>} />
        </Routes>
      </Router>
    </>
  );
}
