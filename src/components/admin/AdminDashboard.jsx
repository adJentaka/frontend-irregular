import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  return (
    <div>
      <button onClick={() => logout}>Logout</button>
    </div>
  );
};

export default AdminDashboard;
