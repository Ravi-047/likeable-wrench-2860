import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Product from "../Components/product";
import { Category } from "../Components/Category";
import BlankCart from "../Components/LoginAndNavbar/BlankCart";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:para" element={<Category />} />
      <Route path="/:para/:para" element={<Product />} />
      <Route path="/blank" element={<BlankCart />} />
    </Routes>
  );
};

export default MainRoutes;
