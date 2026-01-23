import React from "react";
import { Link } from "react-router-dom";
import './Home.css';
import Header from '../components/Header.js';
import Footer from '../components/Footer'


function Home() {
    return (
        <div>
            <Header />
            <section className='home-section'>

                {/*Top content*/}
                <div className="intro-content">
                    
                    <div className="home-container">
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
                                    <img src='/images/ucla_white_logo.svg' alt='UCLA logo'></img>
                                </div>                       
                            </div>
                            <p className='home-text'>hi! we’re a passionate group of college students dedicated to inspiring the next generation 
                                of women in engineering. during the school year, we host several events for local students 
                                to learn various engineering concepts.
                            </p>
                        </div>
                    </div>
                </div>

                {/*Bottom content*/}
                <div className="info-content">

                    <div className="home-container">
                        <div className="top-cards">
                            <div className="left">
                                <div className="overlay-text">

                                    <h2 className="card-heading">events</h2>
                                    <button className="learn-more-button">learn more</button>
                                     <p className="hover-description">
                                        SWE Outreach puts on several flagship events over the course of the year, including Project Scientist, 
                                        ESP (Engineering Stayover Program), our Fall College Workshop Series, and Hi Engineer!
                                    </p>
                                   
                                </div>
                                <img src='/images/left.png' alt='instructor speaking'/>
                            </div>
                            <div className="right">
                                <div className="overlay-text">

                                    <h2 className="card-heading">projects</h2>
                                    <button className="learn-more-button">learn more</button>
                                    <p className="hover-description">
                                        Check out some hands-on engineering and STEM 
                                        activities we designed and taught for previous years' events! Our projects cover a variety of age groups, 
                                        fields in STEM, and difficulty.
                                    </p>

                                </div>
                                <img src='/images/right.png' alt='instructor demonstrating'/>
                            </div>

                        </div>
                        <div className="bottom-card">
                            <div className="bottom">
                                <img src='/images/bottom.png' alt='hi engineers' />
                            </div>

                            <div className="purple-card">
                                <div className="bottom-description">
                                    <h2>contact us</h2>
                                    <p>All questions and inquiries can be directed to our email. To stay updated on events we're hosting 
                                        (both online and in-person), sign up for our mailing list!
                                    </p>
                                    <Link className="learn-more-button contact-arrow" to="/contact-us" aria-label="contact us">
                                        &rarr;
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                </div>

                <Footer />

            </section>
            
        </div>    
    )
}

export default Home
