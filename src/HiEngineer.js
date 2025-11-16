import React from "react";
import "./HiEngineer.css";
import Header from "./components/Header";
import image1 from "./image1.png";
import image2 from "./image2.png";
import image3 from "./image3.png";
import image4 from "./image4.png";
import image5 from "./image5.png";

function HiEngineer() {
  return (
    <>
      <Header />
      <section className="hi-engineer-section">
        <div className="content-container">
          {/* Left side: text content */}
          <div className="text-section">
            <h1 className="title">Hi Engineer!</h1>
            <p className="description">
              <strong>Hi Engineer!, our flagship event, brings over 100
              middle and high school girls to UCLA campus for a fun day of
              hands-on engineering workshops. We invite keynote speakers to share their journeys in STEM to inspire students, and lunch is provided as well. We welcome both individual students as well as school groups!</strong>
            </p>

            <div className="event-info">
              <p><strong>When:</strong></p>
              <p><strong>Where:</strong></p>
              <p><strong>Cost:</strong></p>
            </div>

            <p className="schedule"><strong>[Schedule]</strong></p>
            <button
              className="register-btn"
              onClick={() => alert("Registration opens soon!")}
            >
              <strong>register</strong>
            </button>
          </div>

          {/* Right side: image gallery */}
          <div className="image-section">
            {/* Full-width image */}
            <div className="full-width-image">
              <img src={image1} alt="Students smiling at Hi Engineer event" />
            </div>

            {/* Image with caption */}
            <div className="image-with-caption">
              <img src={image2} alt="Students doing engineering activity" />
              <p className="caption">middle and high school students completed hands-on, practical engineering activities at Hi Engineer!</p>
            </div>

            {/* Two images side-by-side */}
            <div className="two-images">
              <img class="left-img" src={image3} alt="Audience listening to speaker"/>
              <img class="right-img" src={image4} alt="Group of student volunteers"></img>
            </div>

            {/* Another image with caption */}
            <div className="image-with-caption">
              <img src={image5} alt="Keynote speaker presenting at Hi Engineer!" />
              <p className="caption">keystone speakers inspire young Hi Engineer! attendees to dream big!</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HiEngineer;