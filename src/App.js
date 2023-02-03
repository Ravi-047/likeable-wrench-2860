import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/LoginAndNavbar/Navbar";
import ScrollToTop from "./Components/ScrollToTop";
import MainRoutes from "./Pages/MainRoutes";

const App = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <MainRoutes />
      <Footer />
    </div>
  );
};

export default App;
