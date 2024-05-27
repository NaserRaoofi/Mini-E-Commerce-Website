import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "../src/pages/Login/Login";
import Registration from "./pages/Register/Registration";
import Home from "../src/pages/Home/Home";
import { ProductProvider } from './pages/Context/ProductContext';
import ProductPage from './pages/products/ProductPage';
import Basket from "./pages/Basket/Basket";

const App = () => {
  return (
    <ProductProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/ProductPage/:id" element={<ProductPage />} />
          <Route path="/Basket" element={<Basket/>} />
        </Routes>
      </Router>
    </ProductProvider>
  );
};

export default App;
