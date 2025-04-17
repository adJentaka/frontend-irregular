import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../lib/axios";
import "./ProductSummary.css";
import {
  Package,
  DollarSign,
  TrendingUp,
  TrendingDown,
  CircleDollarSign,
} from "lucide-react";

const ProductStats = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/api/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const totalProducts = products.length;
  const totalPrice = products.reduce((sum, p) => sum + p.price, 0);
  const averagePrice = totalProducts > 0 ? totalPrice / totalProducts : 0;
  const highestPrice = Math.max(...products.map((p) => p.price), 0);
  const lowestPrice = Math.min(...products.map((p) => p.price), 0);

  return (
    <div className="stats-container">
      <h2 className="stats-title">Product Overview</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <Package className="stat-icon" />
          <p className="stat-label">Total Products</p>
          <h3 className="stat-value">{totalProducts}</h3>
        </div>
        <div className="stat-card">
          <CircleDollarSign className="stat-icon" />
          <p className="stat-label">Total Price</p>
          <h3 className="stat-value">Rp {totalPrice.toLocaleString()}</h3>
        </div>
        <div className="stat-card">
          <DollarSign className="stat-icon" />
          <p className="stat-label">Average Price</p>
          <h3 className="stat-value">Rp {averagePrice.toLocaleString()}</h3>
        </div>
        <div className="stat-card">
          <TrendingUp className="stat-icon" />
          <p className="stat-label">Highest Price</p>
          <h3 className="stat-value">Rp {highestPrice.toLocaleString()}</h3>
        </div>
        <div className="stat-card">
          <TrendingDown className="stat-icon" />
          <p className="stat-label">Lowest Price</p>
          <h3 className="stat-value">Rp {lowestPrice.toLocaleString()}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductStats;
