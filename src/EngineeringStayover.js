import React from "react";
import Header from "./components/Header";
import "./ProjectScientist.css";
import Slideshow from "./components/Slideshow";

function EngineeringStayover() {
    const photos = [
        {
            src: "/images/esp_group.svg",
            caption: "Photos from ESP 2025!",
        },
        {
            src: "/images/esp_column 2 updated.png",
            caption: "Participants meet faculty members at dinner.",
        },
        {
            src: "/images/esp_bottom.svg",
            caption: "Participants were split up into groups for a scavenger hunt!",
        },
        {
            src: "/images/esp_top.svg",
            caption: "ESP participants spelling out UCLA!",
        },
    ];

    return (
        <div>
            <Header />
            <div className="projsci-top">
                <div className="text">
                    <h1 className="title">Engineering Stayover Program</h1>
                    <p className="description">
                        The Engineering Stayover Program (abbreviated to ESP), invites
                        prospective UCLA Engineering students to stay a night with current
                        students, interact with other prospective students, and get to know
                        UCLA better. Activities include our dinner with faculty members,
                        nighttime scavenger hunt, and speeches from Engineering School Dean
                        Alyssa Park and WE@UCLA Director Audrey Pool O’Neal.
                    </p>
                </div>

                <div className="photo-slideshow">
                    <Slideshow images={photos} />
                    <p className="image-caption">Photos from ESP 2025!</p>
                </div>
            </div>

            <div className="details">
                <div className="when">
                    <h2>when</h2>
                    <p>April 10-11.</p>
                </div>
                <div className="where">
                    <h2>where</h2>
                    <p>ESP takes place on UCLA’s campus.</p>
                </div>
                <div className="cost">
                    <h2>cost</h2>
                    <p>Our events are free to attend for all.</p>
                </div>
            </div>
        </div>
    );
}

export default EngineeringStayover;
