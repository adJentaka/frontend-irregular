import { AlignJustify } from "lucide-react";
import React from "react";
import "./TopAdmin.css";

const TopAdmin = ({ onClick, title }) => {
  return (
    <div className="top-content">
      <AlignJustify onClick={onClick} />
      <h2>{title}</h2>
    </div>
  );
};

export default TopAdmin;
