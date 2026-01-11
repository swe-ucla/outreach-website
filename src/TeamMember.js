import React from "react";
import "./TeamMember.css";

function TeamMember({ name, major, year, blurb, funFact }) {
    return (
        <div className="member">
            <div className="member-photo"></div>
            <div className="member-text">
                <p className="member-name">{name}</p>
                <p className="member-major">{year}, {major}</p>
                <p className="member-blurb">{blurb}. {funFact}</p>
            </div>
        </div>
    );
    }

export default TeamMember;
