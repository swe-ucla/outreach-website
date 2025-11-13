import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(){
    return (
        <header className='header'>
            <nav className='nav'>
                <ul>
                <li className='our-events dropdown'>
                    <span>Our Events</span>
                    <div className='dropdown-content'>
                        <Link to="/hi-engineer">Hi Engineer!</Link>
                        <Link to="/project-scientist">Project Scientist</Link>
                        <Link to="/engineering-stayover">Engineering Stayover Program</Link>
                        <Link to="/fall-workshop">Fall College Workshop Series</Link>
                    </div>
                </li>
                <li className='projects'><a href="/projects">Projects</a></li>
                <Link to="/"><img className='swe-outreach' src="/images/swe_outreach_logo.png" alt="swe outreach logo"/></Link>
                <li className='meet-the-team'><Link to="/meet-the-team">Meet the Team</Link></li>
                <li className='contact-us'><Link to="/contact-us">Contact Us</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header