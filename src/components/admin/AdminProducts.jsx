import { Sidebar } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../lib/axios";
import "./AdminProducts.css";
import DashboardSidebar from "./DashboardSidebar";
import TopAdmin from "./TopAdmin";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [deletingProduct, setDeletingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    thumbnail: null,
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async () => {
    const res = await axiosInstance.get("/api/products");
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Mulai loading

    const data = new FormData();
    data.append("name", formData.name);
    data.append("price", formData.price);
    data.append("description", formData.description);
    if (formData.thumbnail) data.append("thumbnail", formData.thumbnail);

    try {
      if (editingProduct === false) {
        await axiosInstance.post("/api/products", data);
      }

      if (editingProduct) {
        await axiosInstance.patch(`/api/products/${editingProduct?._id}`, data);
        setEditingProduct(null);
      }

      setFormData({ name: "", price: "", description: "", thumbnail: null });
      fetchProducts();
    } catch (error) {
      console.error("Submit error:", error);
    } finally {
      setIsLoading(false); // Selesai loading
    }
  };

  const handleDelete = async () => {
    await axiosInstance.delete(`/api/products/${deletingProduct._id}`);
    setDeletingProduct(null);
    fetchProducts();
  };

  const openEditModal = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      price: product.price,
      description: product.description,
      thumbnail: null,
    });
  };

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  return (
    <>
      <TopAdmin title="Admin Products" onClick={handleMenu} />
      <DashboardSidebar
        onLogout={logout}
        isOpen={isOpen}
        onClick={handleMenu}
      />
      <div className="admin-container">
        <h2>Manajemen Produk</h2>

        <button
          onClick={() => {
            setEditingProduct(false);

            setFormData({
              name: "",
              price: "",
              description: "",
              thumbnail: null,
            });
          }}
          className="btn create-btn"
        >
          + Tambah Produk
        </button>

        <table className="product-table">
          <thead>
            <tr>
              <th>Thumbnail</th>
              <th>Nama</th>
              <th>Harga</th>
              <th>Deskripsi</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p._id}>
                <td>
                  <img src={p.thumbnail} alt={p.name} width="60" />
                </td>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>{p.description}</td>
                <td>
                  <button
                    onClick={() => openEditModal(p)}
                    className="btn edit-btn"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => setDeletingProduct(p)}
                    className="btn delete-btn"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {editingProduct !== null && (
          <div className="modal">
            <div className="modal-content">
              <h3>{editingProduct._id ? "Edit Produk" : "Tambah Produk"}</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Nama Produk"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  name="price"
                  placeholder="Harga"
                  value={formData.price}
                  onChange={handleChange}
                />
                <textarea
                  name="description"
                  placeholder="Deskripsi"
                  value={formData.description}
                  onChange={handleChange}
                />
                <input
                  type="file"
                  name="thumbnail"
                  onChange={handleChange}
                  accept="image/*"
                />
                <div className="modal-actions">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn save-btn"
                  >
                    {isLoading ? "Loading" : "Submit"}
                  </button>
                  <button
                    type="button"
                    className="btn cancel-btn"
                    onClick={() => setEditingProduct(null)}
                  >
                    Batal
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {deletingProduct && (
          <div className="modal">
            <div className="modal-content">
              <p>
                Yakin ingin menghapus produk{" "}
                <strong>{deletingProduct.name}</strong>?
              </p>
              <div className="modal-actions">
                <button onClick={handleDelete} className="btn delete-btn">
                  Hapus
                </button>
                <button
                  onClick={() => setDeletingProduct(null)}
                  className="btn cancel-btn"
                >
                  Batal
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AdminProducts;
