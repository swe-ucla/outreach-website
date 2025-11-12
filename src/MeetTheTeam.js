import React from "react";
import Header from "./components/Header";
import TeamMember from "./TeamMember";
import "./MeetTheTeam.css";

function MeetTheTeam() {
    const members = Array(12).fill({}); 

    return (
        <div>
            <Header />
            <section className="team-section">
                <h1 className="team-title">meet the team!</h1>
                <div className="group-photo"> (group photo) </div>
                <div className="team-grid">
                    {members.map((_, index) => (
                        <TeamMember key={index} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default MeetTheTeam;