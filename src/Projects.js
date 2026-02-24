import React, { useCallback, useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectsCard from "./ProjectsCard";  
import "./Projects.css";
import projects from "./projectsData";

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

    const filterProjects = useCallback(() => {
        let temp = projects.filter(project => {
            return (
            (selectedFilters.gradeLevel.length === 0 || selectedFilters.gradeLevel.includes(project.gradeLevel)) &&
            (selectedFilters.subject.length === 0 || selectedFilters.subject.includes(project.subject)) &&
            (selectedFilters.difficulty.length === 0 || selectedFilters.difficulty.includes(project.difficulty))
            );
        });
        setFilteredProjects(temp);
    }, [selectedFilters]);

    useEffect(() => {
        filterProjects();
    }, [filterProjects]);

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
