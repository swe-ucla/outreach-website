import React from "react";
import Header from "./components/Header";
import './EngineeringStayover.css'

function EngineeringStayover() {
    return (
        <div>
            <Header />
            <section className="esp-content">
                <div className="esp-info">
                    <h1 className="esp-title">Engineering Stayover Program</h1>
                    <p className="esp-text">The Engineering Stayover Program (abbreviated to ESP), invites prospective UCLA Engineering students to stay a 
                        night with current students, interact with other prospective students, and get to know UCLA better. 
                        Activities include our dinner with faculty members, nighttime scavenger hunt, and speeches from 
                        Engineering school Dean Alyssa Park and WE@UCLA Director Audrey Pool O’Neal. 
                        <br/><br/>When:
                        <br/>Where:
                        <br/>Cost:
                    </p>
                </div>
                <div className="esp-images">
                    <img alt="ESP group image" src="/images/esp_group.svg"/>
                </div>
            </section>
        </div>
    );
}

export default EngineeringStayover;