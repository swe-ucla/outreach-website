import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TeamMember from "./TeamMember";
import "./MeetTheTeam.css";
import dianaHeadshot from "./assets/Outreach Headshots/Diana_Headshot.JPG";
import florenceHeadshot from "./assets/Outreach Headshots/FlorenceZhao.jpg";
import sarahHeadshot from "./assets/Outreach Headshots/SarahGoldberg.JPEG";
import vanshikaHeadshot from "./assets/Outreach Headshots/Vanshika_Headshot_SWE.png";
import alinaHeadshot from "./assets/Outreach Headshots/alinawang.JPG";
import audreyHeadshot from "./assets/Outreach Headshots/audreymanley.JPG";
import candaceHeadshot from "./assets/Outreach Headshots/candacebaik.JPG";
import elizabethHeadshot from "./assets/Outreach Headshots/elizabeth.jpeg";
import emmaHeadshot from "./assets/Outreach Headshots/emmacao.jpeg";
import gabriellaHeadshot from "./assets/Outreach Headshots/gabriella_perez.jpg";
import ishHeadshot from "./assets/Outreach Headshots/ishbali.JPG";
import katieHeadshot from "./assets/Outreach Headshots/katienorthrop.jpg";
import nikithaHeadshot from "./assets/Outreach Headshots/nikithaambatipudi.JPG";
import sandraHeadshot from "./assets/Outreach Headshots/sandralim.jpeg";
import sanskritiHeadshot from "./assets/Outreach Headshots/sanskriti-jain.jpg";

function MeetTheTeam() {
    const members = [
        { name: "Nikitha Ambatipudi",
          major:"Electrical Engineering",
          year: "3rd Year",
          blurb:"Outreach External Director",
          funFact: "Fun Fact: I’ve been to 25 US States.",
          photo: nikithaHeadshot,
        },
        { name: "Gabriella Perez",
          major:"Aerospace Engineering",
          year: "2nd Year",
          blurb:"Outreach Internal Director",
          funFact: "Fun Fact: I own over 50 pairs of shoes.",
          photo: gabriellaHeadshot,
        },
        { name: "Florence Zhao",
          major:"Computer Science",
          year: "4th Year",
          blurb:"Hi Engineer Mentor",
          funFact: "Fun Fact: I’m willing to pay over $10 for a good matcha.",
          photo: florenceHeadshot,
        },
        { name: "Sanskriti Jain",
          major:"Computer Science",
          year: "2nd Year",
          blurb:"Hi Engineer High School Lead",
          funFact: "Fun Fact: I know 6 different types of dances.",
          photo: sanskritiHeadshot,
        },
        { name: "Vanshika Turkar",
          major:"Computer Science",
          year: "2nd Year",
          blurb:"Hi Engineer Middle School Lead",
          funFact: "Fun Fact: I am a certified yoga teacher.",
          photo: vanshikaHeadshot,
        },
        { name: "Ish Bali",
          major:"Bioengineering",
          year: "2nd Year",
          blurb:"Project Scientist Lead",
          funFact: "Fun Fact: I love chai.",
          photo: ishHeadshot,
        },
        { name: "Sandra Lim",
          major:"Civil & Environmental Engineering",
          year: "2nd Year",
          blurb:"ESP Coordinator",
          funFact: "Fun Fact: I love collecting postcards.",
          photo: sandraHeadshot,
        },
        { name: "Emma Cao",
          major: "Electrical Engineering",
          year: "2nd Year",
          blurb: "Publicity Director",
          funFact: "Fun fact: I own way too many smiskis.",
          photo: emmaHeadshot,
        },
        { name: "Candance Baik",
          major: "Bioengineering",
          year:"4th Year",
          blurb: "Former Outreach Director",
          funFact:"Fun fact: Birds scare me so much that I will cross the street to avoid them.",
          photo: candaceHeadshot,
        },
        { name: "Diana Fernandez",
          major: "Aerospace Engineering",
          year: "3rd Year",
          blurb: "High School Activity Lead",
          funFact: "Fun fact: I love painting and going to museums.",
          photo: dianaHeadshot,
        },
        { name: "Elizabeth Bromley",
          major: "Mechanical Engineering",
          year: "1st Year",
          blurb: "High School Activity Lead",
          funFact: "Fun fact: I have a UK passport.",
          photo: elizabethHeadshot,
        },
        { name: "Katie Northrop",
          major: "Bioengineering",
          year: "1st Year",
          blurb: "Middle School Activity Lead",
          funFact: "Fun fact: I am an ultramarathoner.",
          photo: katieHeadshot,
        },
        { name: "Sarah Goldberg",
          major: "Materials Science",
          year: "2nd Year",
          blurb: "Middle School Activity Lead",
          funFact: "Fun fact: I've been skiing since I was 3 years old.",
          photo: sarahHeadshot,
        },
        { name: "Audrey Manley",
          major: "Bioengineering",
          year: "1st Year",
          blurb: "Project Scientist Activity Lead",
          funFact: "Fun fact: I'm a big fan of Shohei Ohtani.",
          photo: audreyHeadshot,
        },
        { name: "Alina Wang",
          major: "Civil & Environmental Engineering",
          year: "1st Year",
          blurb: "Project Scientist Activity Lead",
          funFact: "Fun fact: I got my driver's license.",
          photo: alinaHeadshot,
        }
    ]; 

    return (
        <div>
            <Header />
            <section className="team-section">
                <h1 className="team-title">meet the team!</h1>
                <div className="group-photo"> <img src='/images/meet_the_team.jpg' alt="Outreach team group" /> </div>
                <div className="team-grid">
                    {members.map((member, index) => (
                        <TeamMember 
                        key={index}
                        name={member.name}
                        major={member.major}
                        year={member.year}
                        blurb={member.blurb}
                        funFact={member.funFact}
                        photo={member.photo}
                         />
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default MeetTheTeam;
