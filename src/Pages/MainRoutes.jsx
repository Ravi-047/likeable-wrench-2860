import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import BlankCart from "../Components/LoginAndNavbar/BlankCart";
import Account from "../Components/LoginAndNavbar/Account";
import BlankWishList from "../Components/LoginAndNavbar/BlankWishList";
import SettingPage from "../Components/LoginAndNavbar/SettingPage";
import Product from "../Components/ProductPage/product";
import { Category } from "../Components/ProductPage/Category";
import Checkout from "../Components/ProductPage/Checkout";
import { CityContext } from "../Context/CityContext";
import Landing from "./Landing";

const MainRoutes = () => {
  const { city } = useContext(CityContext);
  const location = "bangalore";
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      {/* <Route path={`/:${"" ? "Bangalore" : "Pune"}`} element={<Home />} /> */}
      <Route path={`/:${city}`} element={<Home />} />
      {/* <Route path="/:param" element={<Home />} /> */}
      <Route path={`/:${city}/:param`} element={<Category />} />
      <Route path={`/:${city}/:param/:para`} element={<Product />} />
      <Route path={`/:${city}/:param/:para/:id`} element={<Checkout />} />
      <Route path="/blank" element={<BlankCart />} />
      <Route path="/account" element={<Account />} />
      <Route path="/wishlist" element={<BlankWishList />} />
      <Route path="/setting" element={<SettingPage />} />
    </Routes>
  );
};

export default MainRoutes;
