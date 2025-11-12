import React from 'react';
import './Header.css';

function Header(){
    return (
        <header className='header'>
            <nav className='nav'>
                <ul>
                <li className='our-events'><a href="/our-events">Our Events</a></li>
                <li className='projects'><a href="/projects">Projects</a></li>
                <a href="/"><img className='swe-outreach' src="/images/swe_outreach_logo.png" alt="swe outreach logo"/></a>
                <li className='meet-the-team'><a href="/meet-the-team/">Meet the Team</a></li>
                <li className='contact-us'><a href="/contact-us">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header