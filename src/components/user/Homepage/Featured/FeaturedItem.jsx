import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "assets/icons/logo_white.svg";

export default function FeaturedItem({ id, title, category, thumbnail }) {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="item col" onClick={onClick}>
      <div className="item-thumbnail">
        <img src={thumbnail} className="img-fluid" alt="thumbnail" />
      </div>
      <div className="item-cover">
        <div className="d-flex flex-column justify-content-between h-100 p-2">
          <div className="item-icon mx-auto mt-5">
            <img src={Logo} alt="logo" />
          </div>
          <div className="item-content">
            <h5 className="item-content-title">{title}</h5>
            <p className="item-content-category">{category}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
