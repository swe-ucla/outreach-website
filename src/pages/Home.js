import React from "react";
import './Home.css';
import Header from '../components/Header.js';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div class='home'>
            <Header>
            </Header>
            <div className='home-content'>
                <div className="home-image">
                    <p className="image-caption">committee members from Hi Engineer 2024!</p>
                    <img className='group-pic' src="/images/outreach_team_pic.svg" alt="group"/>
                </div>
                <div className='home-description'>
                    <div className='home-heading'>
                        <h1 className='heading-text'>swe outreach @</h1>
                        <img src='./images/UCLA-logo.svg' alt='UCLA logo'></img>
                    </div>
                    <p className='home-text'>hi! we’re a passionate group of college students dedicated to inspiring the next generation of women in engineering. during the school year, we host several events for local students to learn various engineering concepts.</p>
                    <Link to="/contact-us">
                        <button className="contact-button">contact us</button>
                    </Link>
                </div>
            </div>
            
        </div>    
    )
}

export default Home