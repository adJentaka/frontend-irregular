import React from "react";
import { Outlet } from "react-router-dom";
import "./MainUserLayout.css";

const MainUserLayout = () => {
  return (
    <div className="user-layout-bg">
      <Outlet />
    </div>
  );
};

export default MainUserLayout;
