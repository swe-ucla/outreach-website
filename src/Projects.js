import React, { useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
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
import waterDrops from "./images/water_drops.png";
import lemon from "./images/lemon.png";

const tagConfig = {
    gradeLevel: {
        elementary: { label: "elementary", color: "yellow" },
        middle: { label: "middle", color: "yellow" },
        high: { label: "high", color: "yellow" },
    },
    subject: {
        "aeronautics engineering": { label: "aeronautics", color: "red" },
        "bioengineering": { label: "bioengineering", color: "red" },
        "civil engineering": { label: "civil", color: "red" },
        "mechanical engineering": { label: "mechanical", color: "red" },
        "electrical engineering": { label: "electrical", color: "red" },
        "computer science": { label: "comp sci", color: "red" },
    },
    difficulty: {
        easy: { label: "easy", color: "green" },
        medium: { label: "medium", color: "green" },
        difficult: { label: "difficult", color: "green" },
    },
};

function Projects() {
    const projects = [
        {
            title: "bionic hands",
            image: hand,
            gradeLevel: "elementary",
            subject: "bioengineering",
            difficulty: "easy",
            pdf: "/pdfs/bionic_hand.pdf"
        },
        {
            title: "wind-powered sail boats",
            image: butterfly,
            gradeLevel: "elementary",
            subject: "aeronautics engineering",
            difficulty: "easy",
            pdf: "/pdfs/wind_powered_sailboat.pdf"
        },
        {
            title: "cs shark tank",
            image: laptop,
            gradeLevel: "high",
            subject: "computer science",
            difficulty: "medium",
            pdf: "/pdfs/cs_shark_tank.pdf"
        },
        {
            title: "led paper flower",
            image: flower,
            gradeLevel: "elementary",
            subject: "electrical engineering",
            difficulty: "medium",
            pdf: "/pdfs/led_paper_flower.pdf"
        },
        {
            title: "diy operation",
            image: questionMark,
            gradeLevel: "high",
            subject: "electrical engineering",
            difficulty: "difficult",
            pdf: "/pdfs/operation.pdf"
        },
        {
            title: "wind-powered LEDs",
            image: led,
            gradeLevel: "middle",
            subject: "electrical engineering",
            difficulty: "medium",
            pdf: "/pdfs/led_windmills.pdf"
        },
        {
            title: "pool noodle rollercoasters",
            image: arrow,
            gradeLevel: "middle",
            subject: "mechanical engineering",
            difficulty: "medium",
            pdf: "/pdfs/roller_coaster.pdf"
        },
        {
            title: "play-doh circuits",
            image: dots,
            gradeLevel: "elementary",
            subject: "electrical engineering",
            difficulty: "medium",
            pdf: "/pdfs/play_doh_circuits.pdf"
        },
        {
            title: "water filtration",
            image: waterDrops,
            gradeLevel: "middle",
            subject: "civil engineering",
            difficulty: "easy",
            pdf: "/pdfs/water_filtration.pdf"
        },
        {
            title: "lemon battery + solar oven",
            image: lemon,
            gradeLevel: "middle",
            subject: "electrical engineering",
            difficulty: "easy",
            pdf: "/pdfs/lemon_batteries_solar_oven.pdf"
        }  
    ];

    const [selectedFilters, setSelectedFilters] = useState({
        gradeLevel: [],
        subject: [],
        difficulty: []
    });

    const categoryDisplayNames = {
        gradeLevel: "grade level",
        subject: "subject",
        difficulty: "difficulty"
    };

    const filterOptions = {
        gradeLevel: ["elementary", "middle", "high"],
        subject: [
            "aeronautics engineering",
            "bioengineering",
            "civil engineering",
            "mechanical engineering",
            "electrical engineering",
            "computer science"
        ],
        difficulty: ["easy", "medium", "difficult"]
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
                        {filteredProjects.map((p, i) => {
                            const tags = ["gradeLevel", "subject", "difficulty"].map(
                            category => tagConfig[category][p[category]]
                            );
                            return <ProjectsCard key={i} {...p} tags={tags} />;
                        })}
                    </div>

                </div>

            </div>
            <Footer />
        </div>
    );
}

export default Projects;
