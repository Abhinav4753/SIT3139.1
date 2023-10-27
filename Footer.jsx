import React from 'react'
import './Footer.css'
import facebook from './images/facebook.png'
import instagram from './images/instagram.png'
import twitter from './images/twitter.png'


function Footer() {
    return (
        <div className='footer'>
            <div className='footer-content'>
                <div className='footer-section' >
                    <h2><b>Explore</b></h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Questions</a></li>
                        <li><a href="/">Articles</a></li>
                        <li><a href="/">Tutorial</a></li>
                    </ul>
                </div>
                <div className='footer-section'>
                    <h2><b>Support</b></h2>
                    <ul>
                        <li><a href="/">FAQs</a></li>
                        <li><a href="/">Help</a></li>
                        <li><a href="/">Contact Us</a></li>
                        <li><a href="/">Tutorial</a></li>
                    </ul>
                </div>
                <div className='footer-section'>
                    <h2><b>Stay Connected</b></h2>
                    <img className="socialMedia" src={facebook} alt="facebook" />
                    <img className="socialMedia" src={twitter} alt="twitter" />
                    <img className="socialMedia" src={instagram} alt="instagram" />
                </div>
            </div>
            <div className='footer-bottom'>
                <h2 className='footer-title'> <center>DEV@Deakin 2023</center></h2>
                <div className='footer-links'>
                    <a href="/">Privacy Policy</a>
                    <a href="/">Terms</a>
                    <a href="/">Code of Conduct</a>
                </div>
            </div>

        </div>

    );
}

export default Footer