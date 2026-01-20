import React, { useState } from "react";
import "./Carousel.css";

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((currIdx) => (currIdx === 0 ? images.length - 1 : currIdx - 1));
  };

  const nextImage = () => {
    setCurrentIndex((currIdx) => (currIdx === images.length - 1 ? 0 : currIdx + 1));
  };

  return (
    <div className="carousel_container">
        <button className="hi_arrow hi_arrow_left" onClick={prevImage}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                    d="M16 5l-8 7 8 7"
                    fill="none"
                    stroke="white"
                    strokeWidth="4.5"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                />
            </svg>
        </button>

        <div className="carousel_track">
            {images.map((item, index) => {
            const diff = index - currentIndex;
            let className = "carousel_item";
            if (diff === 0) className += " carousel_active";
            else if (diff === -1 || (currentIndex === 0 && index === images.length - 1)) className += " carousel_left";
            else if (diff === 1 || (currentIndex === images.length - 1 && index === 0)) className += " carousel_right";
            else className += " carousel_hidden";

            return (
                <div key={index} className={`${className} carousel_slide`}>
                    <img src={item.src} alt={item.caption}/>
                    <div className="carousel_caption">{item.caption}</div>
                </div>
                );
            })}
        </div>

        <button className="hi_arrow hi_arrow_right" onClick={nextImage}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                    d="M8 5l8 7-8 7"
                    fill="none"
                    stroke="white"
                    strokeWidth="4.5"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                />
            </svg>
        </button>
    </div>
  );
}

export default Carousel;
