import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/LoginAndNavbar/Navbar";
import MainRoutes from "./Pages/MainRoutes";

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/Bangalore");
  }, []);
  return (
    <div>
      <Navbar/>
      <MainRoutes />
      <Footer />
    </div>
  );
};

export default App;
