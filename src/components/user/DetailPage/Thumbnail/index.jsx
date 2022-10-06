import React, { useState } from "react";
import GalleryItem from "./GalleryItem";
import "./styles.scss";

export default function Thumbnail({ images }) {
  const IMAGE_URL = "https://mechaku-server.zaerodev.my.id/uploads/products";

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
    <section className="thumbnail col-md-6 justify-content-center">
      <img src={imageMaster} className="thumbnail-master img-fluid" alt="" />
      <div className="thumbnail-gallery">
        <div className="row">{gallery.length && renderedGalleryItem()}</div>
      </div>
    </section>
  );
}
