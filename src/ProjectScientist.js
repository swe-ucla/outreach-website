import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./ProjectScientist.css";
import Slideshow from "./components/Slideshow";

import img1 from "./images/proj_sci1.JPG";
import img2 from  "./images/proj_sci2.png";
import img3 from "./images/proj_sci3.png";
import img4 from "./images/proj_sci4.png";
import img5 from "./images/proj_sci5.jpg";
import img6 from "./images/proj_sci6.jpg";

function ProjectScientist() {
    const photos = [
        {
            src: img1, caption: "Outreach members teach elementary school students about harnessing clean forms of energy using paper sailboats!"
        },
        {
            src: img2, caption: "Elementary school students working on their paper sailboats!"
        },
        {
            src: img3, caption: "Outreach members teach elementary school students about harnessing clean forms of energy using paper sailboats!"
        },
        {
            src: img4, caption: "Two students smile while holding their sailboats."
        },
        {
            src: img5, caption: "Elementary school students working on their paper sailboats!"
        },
        {
            src: img6, caption: "Elementary school students working on their paper sailboats!"
        }
]

    return (
        <div>
            <Header />
            <div className="projsci-top">
                <div className="text">
                    <h1 className="title">Project Scientist</h1>
                    <p className="description">Project Science is our outreach program for elementary-aged girls. We participate 
                        in STEM nights and fairs at schools and hold fun and interactive activities for students. We also anticipate 
                        hosting Project Scientist events at UCLA throughout the year!</p>
                </div>
               <button 
                className="register"
                onClick={() => window.open("https://forms.gle/eE1FqQzhnTRzESs86", "_blank")}
               >
                    <div className="contents">
                        <p>register now</p>
                        <img alt='arrow' src='/images/arrow_button.png' />
                    </div>
               </button>

               <div className="photo-slideshow">
                    <Slideshow images={photos}/>
                    <p className="image-caption">outreach members teach elementary school students about harnessing clean forms of 
                        energy using paper sailboats!
                    </p>
               </div>
            </div>

            <div className="details">
                    <div className="when">
                        <h2>when</h2>
                        <p>We do not have a date for our next Project Scientist event yet, but register now to join our mailing list 
                            and stay updated on our events.
                        </p>
                    </div>
                    <div className="where">
                        <h2>where</h2>
                        <p>Project Scientist events are either held on UCLA’s campus or are held at your school. Please contact us to 
                            schedule one! 
                        </p>
                    </div>
                    <div className="cost">
                        <h2>cost</h2>
                        <p>Our events are free to attend for all.</p>
                    </div>
            </div>
            <Footer />
            {/*
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
            */}
        </div>
    );
}

export default ProjectScientist;