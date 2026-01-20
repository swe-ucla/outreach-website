import React, { useRef } from "react";
import Carousel from "./Carousel";
import "./HiEngineer.css";
import Header from "./components/Header";
import image1 from "./image1.png";
import image2 from "./image2.png";
import image3 from "./image3.png";
import image4 from "./image4.png";
import image5 from "./image5.png";

const images = [
  {src: image1, caption: "middle and high school students completed hands-on, practical engineering activities at Hi Engineer!"},
  {src: image2, caption: "middle and high school students completed hands-on, practical engineering activities at Hi Engineer!"},
  {src: image3, caption: "keystone speakers inspire young Hi Engineer! attendees to dream big!"},
  {src: image4, caption: "keystone speakers inspire young Hi Engineer! attendees to dream big!"},
  {src: image5, caption: "keystone speakers inspire young Hi Engineer! attendees to dream big!"},
];

function HiEngineer() {

  return (
    <>
      <Header />
      <section className="hi-engineer-section">
        <div className="hi_outer_container">
          <div className="content-container">
            <div className="text-section">
              <h1 className="hi_title">Hi Engineer!</h1>
              <p className="hi_description">
                Hi Engineer!, our flagship event, brings over 100
                middle and high school girls to UCLA campus for a fun day of <br />
                hands-on engineering workshops. We invite keynote speakers to share their journeys in STEM to inspire <br />students, and lunch is provided as well. We welcome both individual students as well as school groups!
              </p>

              <button
                className="register-btn"
                onClick={() => window.open("https://forms.gle/eE1FqQzhnTRzESs86", "_blank")}
              >
                <strong>register now</strong>
                <svg
                  className="arrow-icon"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M8 5l8 7-8 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4.5"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                  />
                </svg>
              </button>
              
            </div>
          </div>
        </div>

        <Carousel images={images} />

        <div className="content-container-2">

          <div className="event-info">
              <p><strong>When:</strong></p>
              <p><strong>Where:</strong></p>
              <p><strong>Cost:</strong></p>
          </div>

          <p className="schedule"><strong>[Schedule]</strong></p>
        </div>
      </section>
    </>
  );
}

export default HiEngineer;