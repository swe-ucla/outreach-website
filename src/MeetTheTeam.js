import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TeamMember from "./TeamMember";
import "./MeetTheTeam.css";

function MeetTheTeam() {
    const members = [
        { name: "Nikitha Ambatipudi",
          major:"Electrical Engineering",
          year: "2nd Year",
          blurb:"Outreach External Director",
          funFact: "Fun Fact: I’ve been to 25 US States.",
        },
        { name: "Gabriella Perez",
          major:"Aerospace Engineering",
          year: "2nd Year",
          blurb:"Outreach Internal Director",
          funFact: "Fun Fact: I own over 50 pairs of shoes.",
        },
        { name: "Florence Zhao",
          major:"Computer Science",
          year: "4th Year",
          blurb:"Hi Engineer Mentor",
          funFact: "Fun Fact: I’m willing to pay over $10 for a good matcha.",
        },
        { name: "Sanskriti Jain",
          major:"Computer Science",
          year: "2nd Year",
          blurb:"Hi Engineer High School Lead",
          funFact: "Fun Fact: I know 6 different types of dances.",
        },
        { name: "Vanshika Turkar",
          major:"Computer Science",
          year: "2nd Year",
          blurb:"Hi Engineer Middle School Lead",
          funFact: "Fun Fact: I am a certified yoga teacher.",
        },
        { name: "Ish Bali",
          major:"Bioengineering",
          year: "2nd Year",
          blurb:"Project Scientist Lead",
          funFact: "Fun Fact: I love chai.",
        },
        { name: "Sandra Lim",
          major:"Civil & Environmental Engineering",
          year: "2nd Year",
          blurb:"ESP Coordinator",
          funFact: "Fun Fact: I love collecting postcards.",
        },
        { name: "Emma Cao",
          major: "Electrical Engineering",
          year: "2nd Year",
          blurb: "Publicity Director",
          funFact: "Fun fact: I own way too many smiskis.",
        },
        { name: "Candance Baik",
          major: "Bioengineering",
          year:"4th Year",
          blurb: "Former Outreach Director",
          funFact:"Fun fact: Birds scare me so much that I will cross the street to avoid them."
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
                <div className="group-photo"> <img src='/images/meet_the_team.jpg'/> </div>
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
            <Footer />
        </div>
    );
}

export default MeetTheTeam;
