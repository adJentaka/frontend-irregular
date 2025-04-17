import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";
import ProductStats from "./ProductSummary";
import TopAdmin from "./TopAdmin";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <TopAdmin title="Admin Dashboard" onClick={handleMenu} />
      <DashboardSidebar
        onLogout={logout}
        isOpen={isOpen}
        onClick={handleMenu}
      />
      <div>
        <ProductStats />
      </div>
    </div>
  );
};

export default AdminDashboard;
