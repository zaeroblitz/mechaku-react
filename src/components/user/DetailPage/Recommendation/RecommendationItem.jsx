import { useNavigate } from "react-router-dom";

export default function RecommendationItem({ image, name, price }) {
  const navigate = useNavigate();

  const onItemClick = () => {
    navigate("/detail");
  };

  return (
    <div className="col recommendation-item" onClick={() => onItemClick()}>
      <img src={image} className="item-thumbnail img-fluid" alt="" />
      <p className="item-name">{name}</p>
      <p className="item-price">{price}</p>
    </div>
  );
}
