import React, { useState, useRef, useEffect } from "react";
import Header from "./components/Header";
import './EngineeringStayover.css'

function EngineeringStayover() {
    const images = [
        { src: "/images/esp_group.svg" },    
        { src: "/images/esp_bottom.svg" },   
        { src: "/images/esp_column1.svg" },  
        { src: "/images/esp_column2.svg" },  
        { src: "/images/esp_top.svg" }       
    ];

    const slides = [
        images[images.length - 1],
        ...images,
        images[0]
    ];

    const [current, setCurrent] = useState(1);
    const [translateX, setTranslateX] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);

    const viewportRef = useRef(null);
    const trackRef = useRef(null);
    const slideRefs = useRef([]);

    const nextSlide = () => {
        setIsTransitioning(true);
        setCurrent((prev) => prev + 1);
    };

    const prevSlide = () => {
        setIsTransitioning(true);
        setCurrent((prev) => prev - 1);
    };

    // center active slide
    useEffect(() => {
        const viewport = viewportRef.current;
        const slide = slideRefs.current[current];

        if (!viewport || !slide) return;

        const viewportCenter = viewport.offsetWidth / 2;
        const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;

        setTranslateX(slideCenter - viewportCenter);
    }, [current]);

    // looping
    useEffect(() => {
        if (current === 0) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrent(images.length);
            }, 450);
        }

        if (current === slides.length - 1) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrent(1);
            }, 450);
        }
    }, [current, slides.length, images.length]);

    // re-enable transitions after teleport
    useEffect(() => {
        if (!isTransitioning) {
            requestAnimationFrame(() => {
                setIsTransitioning(true);
            });
        }
    }, [isTransitioning]);



    return (
        <div>
            <Header />
            <section className="esp-section">
                    <div className="esp-gradient">
                        <div className="esp-top-content">
                            <h1 className="esp-title">Engineering Stayover Program</h1>
                            {/*Title and Description*/}
                                <p className="esp-description">The Engineering Stayover Program (abbreviated to ESP), invites prospective UCLA Engineering students to stay a 
                                    night with current students, interact with other prospective students, and get to know UCLA better. 
                                    Activities include our dinner with faculty members, nighttime scavenger hunt, and speeches from 
                                    Engineering school Dean Alyssa Park and WE@UCLA Director Audrey Pool O’Neal. 
                                </p>
                                <button className="esp-register-btn">
                                    registration opens soon <span className="arrow">&gt;</span>
                                </button>
                        </div>
                    </div>

                    {/* Image carousel */}
                    <div className="esp-carousel">
                        <div className="carousel-viewport" ref={viewportRef}>
                            <button className="carousel-btn left" onClick={prevSlide}>‹</button>

                            <div
                                className="carousel-track"
                                ref={trackRef}
                                style={{
                                    transform: `translateX(-${translateX}px)`,
                                    transition: isTransitioning
                                        ? "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)"
                                        : "none"
                                }}
                            >
                                {slides.map((image, index) => (
                                    <div
                                        key={index}
                                        className="carousel-slide"
                                        ref={(el) => (slideRefs.current[index] = el)}
                                    >
                                        <img src={image.src} alt={image.alt} />
                                    </div>
                                ))}
                            </div>

                            <button className="carousel-btn right" onClick={nextSlide}>›</button>
                        </div>
                    </div>

                    <p className="esp-carousel-caption">
                        Photos from ESP 2025!
                    </p>

                    <section className="esp-info-band">
                        <div className="esp-info-grid">
                            <div className="esp-info-item">
                                <h3>when</h3>
                                <p>xxx</p>
                            </div>

                            <div className="esp-info-item">
                                <h3>where</h3>
                                <p>xxx</p>
                            </div>
                        </div>
                    </section>

            </section>
        </div>
    );
}

export default EngineeringStayover;