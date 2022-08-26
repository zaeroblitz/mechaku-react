import React from "react";
import { useNavigate } from "react-router-dom";

import game_icon from "assets/icons/game.svg";

export default function FeaturedItem({ id, title, category, thumbnail }) {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="featured-item col" onClick={onClick}>
      <div className="featured-item-thumbnail">
        <img src={thumbnail} className="img-fluid" alt="thumbnail" />
      </div>
      <div className="featured-item-cover">
        <div className="d-flex flex-column justify-content-between h-100 p-2">
          <div className="featured-item-icon mx-auto mt-5">
            <img src={game_icon} width={54} height={36} alt="" />
          </div>
          <div className="featured-item-content">
            <div className="featured-item-content-title">
              <h5>{title}</h5>
            </div>
            <div className="featured-item-content-category">
              <p>{category}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
