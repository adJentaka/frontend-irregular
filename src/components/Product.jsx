import "./Product.css";

import keranjang from "../assets/keranjang.png";
import { useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";
import { useNavigate } from "react-router-dom";
import { LoaderIcon, ShoppingCart } from "lucide-react";

export const Product = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const res = await axiosInstance.get("/api/products");
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div class="content">
      <div className="line">
        {loading ? (
          <LoaderIcon className="loader" size={40} />
        ) : (
          products?.map((product, i) => (
            <div
              class="product"
              key={i}
              onClick={() => navigate(`/product/${product._id}`)}
            >
              <img
                src={product.thumbnail}
                alt={product.name}
                className="img-product"
              />

              <div class="harga">
                <h3>
                  {Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    maximumFractionDigits: 0,
                  }).format(product.price)}
                </h3>
                <div className="keranjang">
                  <ShoppingCart />
                </div>
              </div>

              <div class="text-product">
                <h3>
                  {product.name.length > 22
                    ? product.name.slice(0, 22) + "..."
                    : product.name}
                </h3>
                <p>{product.description}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
