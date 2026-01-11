import React from "react";
import Header from "./components/Header";
import TeamMember from "./TeamMember";
import "./MeetTheTeam.css";

function MeetTheTeam() {
    const members = [
        { name: "",
          major:"",
          year: "",
          blurb:"",
          funFact: "",
        },
        { name: "",
          major:"",
          year: "",
          blurb:"",
          funFact: "",
        },
        { name: "",
          major:"",
          year: "",
          blurb:"",
          funFact: "",
        },
        { name: "",
          major:"",
          year: "",
          blurb:"",
          funFact: "",
        },
        { name: "",
          major:"",
          year: "",
          blurb:"",
          funFact: "",
        },
        { name: "",
          major:"",
          year: "",
          blurb:"",
          funFact: "",
        },
        { name: "",
          major:"",
          year: "",
          blurb:"",
          funFact: "",
        },
        { name: "Emma Cao",
          major: "Electrical Engineering",
          year: "2nd Year",
          blurb: "Publicity Director ",
          funFact: "Fun fact: I own way too many smiskis.",
        },
        { name: "Candance Baik",
          major: "Bioengineering",
          year:"4th Year",
          blurb: "Former Outreach Director",
          funFact:"Fun fact: Birds scare me so much that I will cross the street to avoid them"
        },
        { name: "Diana Fernandez",
          major: "Aerospace Engineering",
          year: "3rd Year",
          blurb: "High School Activity Lead",
          funFact: "Fun fact: I love painting and going to museums.",
        },
        { name: "Elizabeth Bromley",
          major: "Mechanical Engineering",
          year: "1st Year",
          blurb: "High School Activity Lead",
          funFact: "Fun fact: I have a UK passport.",
        },
        { name: "Katie Northrop",
          major: "Bioengineering",
          year: "1st Year",
          blurb: "Middle School Activity Lead",
          funFact: "Fun fact: I am an ultramarathoner.",
        },
        { name: "Sarah Goldberg",
          major: "Materials Science",
          year: "1st Year",
          blurb: "Middle School Activity Lead",
          funFact: "Fun fact: I've been skiing since I was 3 years old.",
        },
        { name: "Audrey Manley",
          major: "Bioengineering",
          year: "1st Year",
          blurb: "Project Scientist Activity Lead",
          funFact: "Fun fact: I'm a big fan of Shohei Ohtani.",
        },
        { name: "Alina Wang",
          major: "Civil & Environmental Engineering",
          year: "1st Year",
          blurb: "Project Scientist Activity Lead",
          funFact: "Fun fact: I got my driver's license.",
        }
    ]; 

    return (
        <div>
            <Header />
            <section className="team-section">
                <h1 className="team-title">meet the team!</h1>
                <div className="group-photo"> (group photo) </div>
                <div className="team-grid">
                    {members.map((member, index) => (
                        <TeamMember 
                        key={index}
                        name={member.name}
                        major={member.major}
                        year={member.year}
                        blurb={member.blurb}
                        funFact={member.funFact}
                         />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default MeetTheTeam;