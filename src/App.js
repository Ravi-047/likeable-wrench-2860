
import Footer from "./Components/Footer/Footer";
// import { Landing } from "./Components/ProductPage/Landing";
import Navbar from "./Components/LoginAndNavbar/Navbar";
import MainRoutes from "./Pages/MainRoutes";

const App = () => {
  return (
    <div>
      <Navbar/>
      <MainRoutes />
      <Footer />
    </div>
  );
};

export default App;
