import React from "react";
import StoryIllustration from "assets/images/story.jpg";
import "./styles.scss";

export default function Story() {
  return (
    <section className="story">
      <div className="row align-items-center">
        <div className="col-md-7 d-none d-md-block">
          <img
            src={StoryIllustration}
            className="img-fluid story-illustration"
            alt=""
          />
        </div>
        <div className="col-12 col-md-5">
          <div className="story-description">
            <h5>Win the Battle Be The Champion</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              facere consectetur pariatur eaque asperiores excepturi
              voluptatibus!
            </p>
            <a className="btn btn-secondary px-4 py-2" href="#learn-more">
              Read Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
