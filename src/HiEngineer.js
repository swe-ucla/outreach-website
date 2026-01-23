import React from "react";
import Header from "./components/Header";
import "./ProjectScientist.css";
import Slideshow from "./components/Slideshow";
import image1 from "./image1.png";
import image2 from "./image 2 Hi Engineer.png";
import image3 from "./image 3 Hi Engineer.png";
import image4 from "./image4.png";
import image5 from "./image5.png";

function HiEngineer() {
  const photos = [
    {
      src: image1,
      caption:
        "middle and high school students completed hands-on, practical engineering activities at Hi Engineer!",
    },
    {
      src: image2,
      caption:
        "middle and high school students completed hands-on, practical engineering activities at Hi Engineer!",
    },
    {
      src: image3,
      caption: "keystone speakers inspire young Hi Engineer! attendees to dream big!",
    },
    {
      src: image4,
      caption: "keystone speakers inspire young Hi Engineer! attendees to dream big!",
    },
    {
      src: image5,
      caption: "keystone speakers inspire young Hi Engineer! attendees to dream big!",
    },
  ];

  return (
    <div>
      <Header />
      <div className="projsci-top">
        <div className="text">
          <h1 className="title">Hi Engineer!</h1>
          <p className="description">
            Hi Engineer!, our flagship event, brings over 100 middle and high
            school girls to UCLA campus for a fun day of hands-on engineering
            workshops. We invite keynote speakers to share their journeys in STEM
            to inspire students, and lunch is provided as well. We welcome both
            individual students as well as school groups!
          </p>
        </div>
        <button
          className="register"
          onClick={() => window.open("https://forms.gle/eE1FqQzhnTRzESs86", "_blank")}
        >
          <div className="contents">
            <p>register now</p>
            <img alt="arrow" src="/images/arrow_button.png" />
          </div>
        </button>

        <div className="photo-slideshow">
          <Slideshow images={photos} />
          <p className="image-caption">
            middle and high school students completed hands-on, practical
            engineering activities at Hi Engineer!
          </p>
        </div>
      </div>

      <div className="details">
        <div className="when">
          <h2>when</h2>
          <p>February 21, 2026</p>
        </div>
        <div className="where">
          <h2>where</h2>
          <p>Hi Engineer! is hosted on UCLA’s campus.</p>
        </div>
        <div className="cost">
          <h2>cost</h2>
          <p>
            The event is free to attend for all guests, but you are responsible
            for providing your own transportation to and from the event.
          </p>
        </div>
      </div>

      <div className="schedule-section">
        <h2 className="schedule-title">schedule</h2>
        <p className="schedule-intro">
          On the day of the event, we will upload the correct schedule for this
          year. Here is an example of a student schedule:
        </p>
        <div className="schedule-table-wrapper">
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Location</th>
                <th>Activity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>7:55 - 8:10</td>
                <td>Boelter Room 5280</td>
                <td>Volunteer Check-In</td>
              </tr>
              <tr>
                <td>8:30 - 9:00</td>
                <td>Court of Sciences</td>
                <td>Student Check-In</td>
              </tr>
              <tr>
                <td>9:00 - 9:45</td>
                <td>Young CS 50</td>
                <td>Keynote Speaker</td>
              </tr>
              <tr>
                <td>9:45 - 10:00</td>
                <td>Court of Sciences</td>
                <td>Transition: Group Round Up</td>
              </tr>
              <tr>
                <td>10:00 - 11:00</td>
                <td>Boelter Hall</td>
                <td>Activity #1</td>
              </tr>
              <tr>
                <td>11:00 - 11:15</td>
                <td>Court of Sciences</td>
                <td>Transition</td>
              </tr>
              <tr>
                <td>11:15 - 11:45</td>
                <td>Engineering 6</td>
                <td>Lunch</td>
              </tr>
              <tr>
                <td>11:45 - 12:15</td>
                <td>Engineering 6</td>
                <td>Club Fair</td>
              </tr>
              <tr>
                <td>12:15 - 12:30</td>
                <td>Court of Sciences</td>
                <td>Transition: Group Round Up</td>
              </tr>
              <tr>
                <td>12:30 - 1:30</td>
                <td>Boelter Hall</td>
                <td>Activity #2</td>
              </tr>
              <tr>
                <td>1:30 - 1:45</td>
                <td>Court of Sciences</td>
                <td>Transition</td>
              </tr>
              <tr>
                <td>1:45 - 2:30</td>
                <td>Young CS 50</td>
                <td>Student Panel (Q&amp;A)</td>
              </tr>
              <tr>
                <td>2:30 - 2:45</td>
                <td>Young CS 50</td>
                <td>Closing Presentation</td>
              </tr>
              <tr>
                <td>2:45 - 3:00</td>
                <td>Court of Sciences</td>
                <td>Student &amp; Volunteer Check-Out</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HiEngineer;
