import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(){
    return (
        <header className='header'>
            <nav className='nav'>
                <ul>
                <li className='our-events'><a href="/our-events">Our Events</a></li>
                <li className='projects'><a href="/projects">Projects</a></li>
                <Link to="/"><img className='swe-outreach' src="/images/swe_outreach_logo.png" alt="swe outreach logo"/></Link>
                <li className='meet-the-team'><Link to="/meet-the-team">Meet the Team</Link></li>
                <li className='contact-us'><a href="/contact-us">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header