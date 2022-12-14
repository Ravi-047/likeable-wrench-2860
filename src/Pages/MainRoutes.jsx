import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Product from "../Components/product";
import { Category } from "../Components/Category";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:para" element={<Category />} />
      <Route path="/:para/:para" element={<Product />} />
    </Routes>
  );
};

export default MainRoutes;
