import React, { useEffect, useState } from "react";

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
            title: "bionic hands",
            image: hand,
            tags: [
                { label: "elementary", color: "yellow" },
                { label: "both", color: "blue" },
                { label: "mechanical", color: "red" },
                { label: "difficult", color: "green" }
            ],

            gradeLevel: "elementary", 
            location: "both",
            subject: "mechanical engineering",
            difficulty: "difficult",
            pdf: "/pdfs/bionic_hand.pdf"
        },
        {
            title: "wind-powered sail boats",
            image: butterfly,
            tags: [
                { label: "elementary", color: "yellow" },
                { label: "both", color: "blue" },
                { label: "mechanical", color: "red" },
                { label: "difficult", color: "green" }
            ],

            gradeLevel: "elementary",
            location: "classroom",
            subject: "civil engineering",
            difficulty: "moderate",
            pdf: "/pdfs/wind_powered_sailboat.pdf"
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
            title: "led paper flower",
            image: flower,
            tags: [
                { label: "elementary", color: "yellow" },
                { label: "both", color: "blue" },
                { label: "mechanical", color: "red" },
                { label: "difficult", color: "green" }
            ],

            gradeLevel: "elementary", 
            location: "both",
            subject: "mechanical engineering",
            difficulty: "difficult",
            pdf: "/pdfs/led_paper_flower.pdf"
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
                { label: "elementary", color: "yellow" },
                { label: "both", color: "blue" },
                { label: "mechanical", color: "red" },
                { label: "difficult", color: "green" }
            ], 

            gradeLevel: "elementary", 
            location: "both",
            subject: "mechanical engineering",
            difficulty: "difficult",
            pdf: "/pdfs/play_doh_circuits.pdf"
        }
    ];

    const [selectedFilters, setSelectedFilters] = useState({
        gradeLevel: [],
        location: [],
        subject: [],
        difficulty: []
    });

    const categoryDisplayNames = {
        gradeLevel: "grade level",
        location: "home or classroom",
        subject: "subject",
        difficulty: "difficulty"
    };

    const filterOptions = {
        gradeLevel: ["elementary", "middle", "high"],
        location: ["home", "classroom", "both"],
        subject: [
            "bioengineering",
            "chemical engineering",
            "civil engineering",
            "mechanical engineering",
            "electrical engineering",
            "computer science"
        ],
        difficulty: ["straightforward", "moderate", "difficult"]
    };

    const [filteredProjects, setFilteredProjects] = useState(projects);

    const handleCheckboxChange = (filterType, value) => {
        setSelectedFilters(prev => {
            const currentValues = prev[filterType];
            if (currentValues.includes(value)) {
            return {
                ...prev,
                [filterType]: currentValues.filter(v => v !== value)
            };
            } else {
            return {
                ...prev,
                [filterType]: [...currentValues, value]
            };
            }
        });
    };

    useEffect(() => {
        filterProjects();
    }, [selectedFilters]);

    const filterProjects = () => {
        let temp = projects.filter(project => {
            return (
            (selectedFilters.gradeLevel.length === 0 || selectedFilters.gradeLevel.includes(project.gradeLevel)) &&
            (selectedFilters.location.length === 0 || selectedFilters.location.includes(project.location)) &&
            (selectedFilters.subject.length === 0 || selectedFilters.subject.includes(project.subject)) &&
            (selectedFilters.difficulty.length === 0 || selectedFilters.difficulty.includes(project.difficulty))
            );
        });
        setFilteredProjects(temp);
    };

    return (
        <div>
            <Header />

            <div className="projects-page">
                <h1 className="projects-title">projects</h1>

                <div className="projects-container">
                    <div className="filters">
                        <h2>filters</h2>

                        {Object.entries(filterOptions).map(([category, options]) => (
                        <div className="filters-section" key={category}>
                        <h3>{categoryDisplayNames[category]}</h3>
                        <div className="filters-options">
                            {options.map(option => (
                            <div key={option}>
                                <input
                                type="checkbox"
                                id={`${category}-${option}`}
                                checked={selectedFilters[category].includes(option)}
                                onChange={() => handleCheckboxChange(category, option)}
                                />
                                <label htmlFor={`${category}-${option}`}>{option}</label>
                            </div>
                            ))}
                        </div>
                        </div>
                    ))}

                    </div>

                    <div className="projects-grid">
                        {filteredProjects.map((p, i) => (
                            <ProjectsCard key={i} {...p} />
                        ))}
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Projects;
