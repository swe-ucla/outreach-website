import React from "react";
import Header from "./components/Header";
import ProjectsCard from "./ProjectsCard";  
import "./Projects.css";

import hand from "./images/hand.png";
import butterfly from "./images/butterfly.png";
import laptop from "./images/cs shark tank.png";
import flower from "./images/flower.png";
import questionMark from "./images/diy operation.png";
import led from "./images/led.png";
import arrow from "./images/pool noodle.png";
import dots from "./images/play-doh.png";

function Projects() {
    const projects = [
        {
            title: "diy prosthetic hand",
            image: hand,
            tags: [
                { label: "middle", color: "yellow" },
                { label: "both", color: "blue" },
                { label: "mechanical", color: "red" },
                { label: "difficult", color: "green" }
            ]
        },
        {
            title: "butterfly pea tea",
            image: butterfly,
            tags: [
                { label: "middle", color: "yellow" },
                { label: "both", color: "blue" },
                { label: "mechanical", color: "red" },
                { label: "difficult", color: "green" }
            ]
        },
        {
            title: "cs shark tank",
            image: laptop,
            tags: [
                { label: "middle", color: "yellow" },
                { label: "both", color: "blue" },
                { label: "mechanical", color: "red" },
                { label: "difficult", color: "green" }
            ]
        },
        {
            title: "light up flowers",
            image: flower,
            tags: [
                { label: "middle", color: "yellow" },
                { label: "both", color: "blue" },
                { label: "mechanical", color: "red" },
                { label: "difficult", color: "green" }
            ]
        },
        {
            title: "diy operation",
            image: questionMark,
            tags: [
                { label: "middle", color: "yellow" },
                { label: "both", color: "blue" },
                { label: "mechanical", color: "red" },
                { label: "difficult", color: "green" }
            ]
        },
        {
            title: "wind-powered LEDs",
            image: led,
            tags: [
                { label: "middle", color: "yellow" },
                { label: "both", color: "blue" },
                { label: "mechanical", color: "red" },
                { label: "difficult", color: "green" }
            ]
        },
        {
            title: "pool noodle rollercoasters",
            image: arrow,
            tags: [
                { label: "middle", color: "yellow" },
                { label: "both", color: "blue" },
                { label: "mechanical", color: "red" },
                { label: "difficult", color: "green" }
            ]
        },
        {
            title: "play-doh circuits",
            image: dots,
            tags: [
                { label: "middle", color: "yellow" },
                { label: "both", color: "blue" },
                { label: "mechanical", color: "red" },
                { label: "difficult", color: "green" }
            ]
        }
    ];

    return (
        <div>
            <Header />

            <div className="projects-page">
                <h1 className="projects-title">projects</h1>

                <div className="projects-grid">
                    {projects.map((p, i) => (
                        <ProjectsCard key={i} {...p} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
