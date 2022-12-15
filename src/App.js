import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import Navbar from "./Components/LoginAndNavbar/Navbar";
import MainRoutes from "./Pages/MainRoutes";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoutes />
    </div>
  );
};

export default App;
