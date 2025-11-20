import React from "react";
import Header from "./components/Header";
import "./ProjectScientist.css";

// import photos
import Project_Scientist_1 from './assets/project-scientist-images/project-scientist-1.png';
import Project_Scientist_2 from './assets/project-scientist-images/project-scientist-2.png';
import Project_Scientist_3 from './assets/project-scientist-images/project-scientist-3.png';

function ProjectScientist() {
    return (
        <div>
            <Header />

            <div className="container">
                <div className="text-section">
                    <h1 className="title">Project Scientist</h1>

                    <div className="description">
                        Project Scientist is our outreach program for elementary-aged girls. 
                        We participate in STEM nights and fairs at schools, holding fun and 
                        interactive activities for students. We also anticipate hosting 
                        Project Scientist events at UCLA throughout the year!
                    </div>

                    <div className="description">
                        When:<br/>
                        Where:<br/>
                        Cost:<br/>
                    </div>

                    <div className="description">
                        [Schedule]
                    </div>

                    <button className="button">
                        register
                    </button>
                </div>

                <div className="image-section">
                    <img className="image" src={Project_Scientist_1} alt ="photo" />
                    <img className="image" src={Project_Scientist_2} alt ="photo" />
                    <img className="image" src={Project_Scientist_3} alt ="photo" />
                    
                    <div className="image-caption">
                        outreach members teach elementary school students about harnessing clean forms of energy using paper sailboats!
                    </div>
                </div>
            </div>


        </div>
    );
}

export default ProjectScientist;