import React from "react";
import story_cover from "assets/images/story.jpg";
import "./styles.css";

export default function Story() {
  return (
    <div className="story">
      <div className="row align-items-center">
        <div className="col-md-7 d-none d-md-block">
          <div className="story-cover">
            <img src={story_cover} className="img-fluid" alt="" />
          </div>
        </div>
        <div className="col-12 col-md-5">
          <div className="story-description">
            <h5>Win the Battle Be The Champion</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              facere consectetur pariatur eaque asperiores excepturi
              voluptatibus!
            </p>
            <a className="btn btn-secondary px-4 py-2" href="/">
              Read Story
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
