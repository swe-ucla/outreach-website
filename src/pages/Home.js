import React from "react";
import './Home.css';
import Header from '../components/Header.js';

function Home() {
    return (
        <div>
            <Header />
            <section className='home-section'>

                {/*Top content*/}
                <div className="intro-content">
                    
                    <div className="image-block">
                        <img className='group-pic' src="/images/outreach_group.png" alt="group"/>
                        <p className="home-image-caption">committee members from Hi Engineer 2024!</p>
                    </div>

                    <div className='home-description'>
                        <div className='home-heading'>
                            <h1 className='heading-text'>swe outreach</h1>
                            {/*@ UCLA image*/}
                            <div className="second-line">
                                <p>@</p>
                                <img src='./images/ucla_white_logo.svg' alt='UCLA logo'></img>
                            </div>                       
                        </div>
                        <p className='home-text'>hi! we’re a passionate group of college students dedicated to inspiring the next generation of women in engineering. during the school year, we host several events for local students to learn various engineering concepts.</p>
                        <button className="learn-more-button">learn more</button>
                    </div>

                </div>

                {/*Bottom content*/}
                <div className="info-content">
            
                    <div className="top-cards">
                        <div className="left">
                            <div className="overlay-text">
                                <h2>events</h2>
                                <button className="learn-more-button">learn more</button>
                            </div>
                            <img src='./images/left.png' alt='instructor speaking'/>
                        </div>
                        <div className="right">
                            <div className="overlay-text">
                                <h2>projects</h2>
                                <button className="learn-more-button">learn more</button>
                            </div>
                            <img src='./images/right.png' alt='instructor demonstrating'/>
                        </div>

                    </div>
                    <div className="bottom-card">
                        <div className="bottom">
                            <img src='./images/bottom.png' alt='hi engineers' />
                        </div>
                    </div>

                </div>

            </section>
            
        </div>    
    )
}

export default Home