import React from 'react';
import { useNavigate } from "react-router-dom";

import './index.css';

const Logo = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  }

  return (
    <div
      onClick={handleClick}
      className="text-xl font-bold cursor-pointer"
    >
      Mariam Zikaria
    </div>
  );
}

export default Logo;
