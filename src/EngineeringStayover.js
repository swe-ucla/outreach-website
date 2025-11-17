import React from "react";
import Header from "./components/Header";
import './EngineeringStayover.css'

function EngineeringStayover() {
    return (
        <div>
            <Header />
            <section className="esp-section">
                <div className="esp-content">
                    <h1 className="esp-title">Engineering Stayover <br/>Program</h1>
                    
                    {/*Text and Images*/}
                    <div className="esp-info">
                        {/*Left side*/}
                        <p className="esp-text">The Engineering Stayover Program (abbreviated to ESP), invites prospective UCLA Engineering students to stay a 
                            night with current students, interact with other prospective students, and get to know UCLA better. 
                            Activities include our dinner with faculty members, nighttime scavenger hunt, and speeches from 
                            Engineering school Dean Alyssa Park and WE@UCLA Director Audrey Pool O’Neal. 
                            <br/><br/>When:
                            <br/>Where:
                            <br/>Cost:
                        </p>

                        {/*Images on the right side*/}
                        <div className="esp-images">
                            <div className="full-width">
                                <img alt="ESP group" src="/images/esp_group.svg"/>
                            </div>
                            <div className="side-images">
                                <div className="column1">
                                    <img alt="a woman lecturing" src="/images/esp_column1.svg"/>
                                </div>
                                <div className="column2">
                                    <img alt="a group of girls eating and smiling" src="/images/esp_column2.svg" />
                                </div>
                            </div>

                            <p className="caption1">Photos from ESP 2025!</p>

                            <div className="stacked-images">
                                <img className="bottom-image" alt="a group of girls posing" src="/images/esp_bottom.svg"/>
                                <img className="top-image" alt="girls spelling out UCLA with their arms" src="/images/esp_top.svg" /> 
                            </div>

                            <p className="caption2">Participants were split up into groups of 6-7 for a nighttime scavenger hunt!</p>
                        </div>
                    </div>
            </div>
            </section>
        </div>
    );
}

export default EngineeringStayover;