import React from "react";
import cx from "classnames";

export default function GalleryItem({ image, isActive, onItemClick }) {
  const galleryItemStyles = cx({
    "gallery-item": true,
    active: isActive,
  });

  const handleItemClick = (image) => {
    onItemClick(image);
  };

  return (
    <div className="col-md-3">
      <div className={galleryItemStyles} onClick={() => handleItemClick(image)}>
        <img src={image} className="img-fluid" alt="" />
      </div>
    </div>
  );
}
