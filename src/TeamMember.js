import React from "react";
import "./TeamMember.css";

function TeamMember({ name, major, year, blurb, funFact }) {
    return (
        <div className="member">
            <div className="member-photo"></div>
            <div className="member-text">
                <p className="member-name">[name]</p>
                <p className="member-major">[major & year]</p>
                <p className="member-blurb">[small blurb & fun fact]</p>
            </div>
        </div>
    );
    }

export default TeamMember;
