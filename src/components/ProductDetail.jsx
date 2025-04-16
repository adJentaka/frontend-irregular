import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../lib/axios";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axiosInstance.get(`/api/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleCheckout = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        first_name: firstName,
        amount: product.price * quantity,
        product_id: product._id,
      };

      const res = await axiosInstance.post("/api/transactions", payload);
      const { snap_token } = res.data;

      if (!window.snap) {
        const script = document.createElement("script");
        script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
        script.setAttribute(
          "data-client-key",
          `${process.env.REACT_APP_MIDTRANS_CLIENT_KEY}`,
        );
        document.body.appendChild(script);

        script.onload = () => {
          window.snap.pay(snap_token, {
            onSuccess: (result) => {
              console.log("Success:", result);
            },
            onPending: (result) => {
              console.log("Pending:", result);
            },
            onError: (error) => {
              console.error("Error:", error);
            },
          });
        };
      } else {
        window.snap.pay(snap_token, {
          onSuccess: (result) => {
            console.log("Success:", result);
          },
          onPending: (result) => {
            console.log("Pending:", result);
          },
          onError: (error) => {
            console.error("Error:", error);
          },
        });
      }

      setShowModal(false);
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Gagal melakukan checkout.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <>
      <div className="product-card">
        <img
          src={product.thumbnail}
          alt={product.name}
          className="product-card-image"
        />
        <div className="product-card-body">
          <p className="product-card-price">
            {Intl.NumberFormat("id-Id", {
              style: "currency",
              currency: "IDR",
              maximumFractionDigits: 0,
            }).format(product.price)}
          </p>
          <p className="product-card-title">{product.name}</p>

          <p className="product-card-description">
            Deskripsi : {product.description}
          </p>
          <button
            className="checkout-button"
            onClick={() => setShowModal(true)}
          >
            Beli Sekarang
          </button>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="modal">
            <form onSubmit={handleCheckout}>
              <h3>Checkout Form</h3>
              <label>Masukkan Nama Mu:</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />

              <label>Quantity:</label>
              <div className="quantity-control">
                <button type="button" onClick={handleDecrement}>
                  -
                </button>
                <div className="qty">{quantity}</div>
                <button type="button" onClick={handleIncrement}>
                  +
                </button>
              </div>

              <label>Total Harga:</label>
              <p>Rp {(product.price * quantity).toLocaleString()}</p>

              <button type="submit">Buat Pesanan</button>
              <button type="button" onClick={() => setShowModal(false)}>
                Cancel
              </button>
            </form>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ProductDetail;
