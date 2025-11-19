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
                     <div className="home-image">
                    <img className='group-pic' src="/images/outreach_group.png" alt="group"/>
                    <p className="image-caption">committee members from Hi Engineer 2024!</p>
                    </div>
                    <div className='home-description'>
                        <div className='home-heading'>
                            <h1 className='heading-text'>swe outreach</h1>
                            {/*@ UCLA*/}
                            <div className="second-line">
                                <p>@</p>
                                <img src='./images/ucla_white_logo.svg' alt='UCLA logo'></img>
                            </div>                        </div>
                        <p className='home-text'>hi! we’re a passionate group of college students dedicated to inspiring the next generation of women in engineering. during the school year, we host several events for local students to learn various engineering concepts.</p>
                        <button className="learn-more-button">learn more</button>
                    </div>
                </div>

                <div className="info-content">
                    <p>blurb</p>
                </div>
            </section>
            
        </div>    
    )
}

export default Home