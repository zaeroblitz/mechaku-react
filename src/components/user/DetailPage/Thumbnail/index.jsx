import React, { useState } from "react";
import GalleryItem from "./GalleryItem";
import "./styles.css";

export default function Thumbnail({ images }) {
  const IMAGE_URL = "http://localhost:8000/uploads/products";

  const gallery = images.map((image) => {
    return `${IMAGE_URL}/${image}`;
  });

  const [imageMaster, setImageMaster] = useState("");

  useState(() => {
    setImageMaster(gallery[0]);
  }, [imageMaster]);

  const eventItemClick = (image) => {
    setImageMaster(image);
  };

  const renderedGalleryItem = () => {
    return gallery.map((image, index) => (
      <GalleryItem
        key={index}
        image={image}
        onItemClick={eventItemClick}
        isActive={imageMaster === image}
      />
    ));
  };

  return (
    <div className="col-md-6 justify-content-center">
      <div className="thumbnail">
        <div className="thumbnail-master">
          <img src={imageMaster} className="img-fluid" alt="" />
        </div>
        <div className="thumbnail-gallery">
          <div className="row">{gallery.length && renderedGalleryItem()}</div>
        </div>
      </div>
    </div>
  );
}
