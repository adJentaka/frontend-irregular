import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Product } from "./components/Product";
import Contact from "./components/Contact";
import About from "./components/About";
import { Footer } from "./components/Footer";
import ProductDetail from "./components/ProductDetail";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import Login from "./components/admin/Login";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminProducts from "./components/admin/AdminProducts";
import NavbarLayout from "./components/NavbarLayout";
import MainUserLayout from "./components/MainUserLayout";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route element={<MainUserLayout />}>
              <Route element={<NavbarLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
              </Route>
            </Route>

            <Route path="/admin/login" element={<Login />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/products" element={<AdminProducts />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
