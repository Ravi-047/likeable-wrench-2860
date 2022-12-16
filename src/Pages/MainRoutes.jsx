import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Product from "../Components/product";
import { Category } from "../Components/Category";
import Checkout from "../Components/Checkout";
import BlankCart from "../Components/LoginAndNavbar/BlankCart";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:param" element={<Category />} />
      <Route path="/:param/:para" element={<Product />} />
      <Route path="/:param/:para/:id" element={<Checkout />} />
      <Route path="/blank" element={<BlankCart />} />
    </Routes>
  );
};

export default MainRoutes;
