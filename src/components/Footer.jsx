import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <div class='footer'>
            <div class='contain'>
                <div className='col' id='col'>
                    <img src={require('../images/logo.png')} alt='' className='footer-logo' />

                </div>
                <div class='col'>
                    <h1>Company</h1>
                    <ul>
                        <li>About</li>
                        <li>Mission</li>
                        <li>Services</li>
                        <li>Social</li>
                        <li>Get in touch</li>
                    </ul>
                </div>
                <div class='col'>
                    <h1>Products</h1>
                    <ul>
                        <li>About</li>
                        <li>Mission</li>
                        <li>Services</li>
                        <li>Social</li>
                        <li>Get in touch</li>
                    </ul>
                </div>
                <div class='col'>
                    <h1>Accounts</h1>
                    <ul>
                        <li>About</li>
                        <li>Mission</li>
                        <li>Services</li>
                        <li>Social</li>
                        <li>Get in touch</li>
                    </ul>
                </div>
                <div class='col'>
                    <h1>Resources</h1>
                    <ul>
                        <li>Webmail</li>
                        <li>Redeem code</li>
                        <li>WHOIS lookup</li>
                        <li>Site map</li>
                        <li>Web templates</li>
                        <li>Email templates</li>
                    </ul>
                </div>
                <div class='col'>
                    <h1>Support</h1>
                    <ul>
                        <li>Contact us</li>
                        <li>Web chat</li>
                        <li>Open ticket</li>
                    </ul>
                </div>
                <div class='col social'>
                    <h1>Social</h1>
                    <ul>
                        <li>
                            {' '}
                            <i class='fab fa-facebook-f' />
                        </li>
                        <li>
                            {' '}
                            <i class='fab fa-instagram' />
                        </li>
                        <li>
                            {' '}
                            <i class='fab fa-youtube' />
                        </li>
                        <li>
                            <i class='fab fa-twitter' />
                        </li>
                        <li>
                            <i class='fab fa-linkedin' />
                        </li>
                    </ul>
                </div>
                <div class='clearfix'></div>

            </div>
        </div>
    )
}

export default Footer
