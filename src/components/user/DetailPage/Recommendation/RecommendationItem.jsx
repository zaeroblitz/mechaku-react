import React from "react";
import { useNavigate } from "react-router-dom";

export default function RecommendationItem({ image, name, price }) {
  const navigate = useNavigate();

  const onItemClick = () => {
    navigate("/detail");
  };

  return (
    <div className="col" onClick={() => onItemClick()}>
      <div className="recommendation-item">
        <div className="recommendation-item-thumbnail">
          <img src={image} className="img-fluid" alt="" />
        </div>
        <div className="recommendation-item-name">
          <p>{name}</p>
        </div>
        <div className="recommendation-item-price">
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
}
