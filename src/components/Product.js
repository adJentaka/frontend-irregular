import "./Product.css";

import keranjang from "../assets/keranjang.png";
import { useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";
import { useNavigate } from "react-router-dom";

export const Product = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    const res = await axiosInstance.get("/api/products");
    setProducts(res.data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div class="content">
      <div className="line1">
        {products?.map((product, i) => (
          <div
            class="product1"
            key={i}
            onClick={() => navigate(`/product/${product._id}`)}
          >
            <img
              src={product.thumbnail}
              alt="Product1"
              className="img-product1"
            />
            <div class="text-product1">
              <h3>{product.name}</h3>
              <li>{product.description}</li>
            </div>
            <div class="harga">
              <h3>
                {Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  maximumFractionDigits: 0,
                }).format(product.price)}
              </h3>
              <div className="keranjang">
                <img src={keranjang} alt="keranjang" className="keranjang" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
