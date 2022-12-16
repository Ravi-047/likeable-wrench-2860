import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Product from "../Components/product";
import { Category } from "../Components/Category";
import Checkout from "../Components/Checkout";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:param" element={<Category />} />
      <Route path="/:param/:para" element={<Product />} />
      <Route path="/:param/:para/:id" element={<Checkout />} />
    </Routes>
  );
};

export default MainRoutes;
