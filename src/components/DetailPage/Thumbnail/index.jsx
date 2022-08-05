import React, { useState } from "react";
import GallerySample1 from "../../../assets/images/gallery_sample_1.jpg";
import GallerySample2 from "../../../assets/images/gallery_sample_2.jpg";
import GallerySample3 from "../../../assets/images/gallery_sample_3.jpg";
import GallerySample4 from "../../../assets/images/gallery_sample_4.jpg";
import GallerySample5 from "../../../assets/images/gallery_sample_5.jpg";
import ThumbnailSample from "../../../assets/images/thumbnail_sample.jpg";
import GalleryItem from "./GalleryItem";
import "./styles.css";

export default function Thumbnail() {
  const images = [
    GallerySample1,
    GallerySample2,
    GallerySample3,
    GallerySample4,
    GallerySample5,
  ];

  const [imageMaster, setImageMaster] = useState("");

  useState(() => {
    setImageMaster(images[0]);
  }, [imageMaster]);

  const eventItemClick = (image) => {
    setImageMaster(image);
  };

  return (
    <div className="col-md-6 justify-content-center">
      <div className="thumbnail">
        <div className="thumbnail-master">
          <img src={imageMaster} className="img-fluid" alt="" />
        </div>
        <div className="thumbnail-gallery">
          <div className="row">
            <GalleryItem
              image={GallerySample1}
              onItemClick={eventItemClick}
              isActive={imageMaster === GallerySample1}
            />
            <GalleryItem
              image={GallerySample2}
              onItemClick={eventItemClick}
              isActive={imageMaster === GallerySample2}
            />
            <GalleryItem
              image={GallerySample3}
              onItemClick={eventItemClick}
              isActive={imageMaster === GallerySample3}
            />
            <GalleryItem
              image={GallerySample4}
              onItemClick={eventItemClick}
              isActive={imageMaster === GallerySample4}
            />
            <GalleryItem
              image={GallerySample5}
              onItemClick={eventItemClick}
              isActive={imageMaster === GallerySample5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
