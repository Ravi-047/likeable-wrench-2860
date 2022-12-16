import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Product from "../Components/product";
import { Category } from "../Components/Category";
import Checkout from "../Components/Checkout";
import BlankCart from "../Components/LoginAndNavbar/BlankCart";
import Account from "../Components/LoginAndNavbar/Account";
import BlankWishList from "../Components/LoginAndNavbar/BlankWishList";
import SettingPage from "../Components/LoginAndNavbar/SettingPage"
const MainRoutes = () => {
  const location = "bangalore"
  return (
    <Routes>
      <Route path={`/:${location}`} element={<Home />} />
      {/* <Route path="/:param" element={<Home />} /> */}
      <Route path={`/:${location}/:param`} element={<Category />} />
      <Route path= {`/:${location}/:param/:para`} element={<Product />} />
      <Route path={`/:${location}/:param/:para/:id`} element={<Checkout />} />
      <Route path="/blank" element={<BlankCart />} />
      <Route path="/account" element={<Account />} />
      <Route path="/wishlist" element={<BlankWishList />} />
      <Route path="/setting" element={<SettingPage />} />
    </Routes>
  );
};

export default MainRoutes;
