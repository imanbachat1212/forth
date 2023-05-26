import React, { useState } from 'react'
import './Header.css'
const Header = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    let url = '../assests/Coming.jsx'
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <a href='#home' className='navbar-logo' onClick={closeMobileMenu}>
                        <img src={require('../images/logo.png')} alt='' className='logo' />
                    </a>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <a href='#home' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='#about' className='nav-links' onClick={closeMobileMenu}>
                                About
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a
                                href='#services'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Services
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='nav-links'
                                onClick={closeMobileMenu}

                            >
                                MarketPlace
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a
                                href='#resources'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Resources
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a
                                href='#community'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Community
                            </a>
                        </li>
                        <li className='nav-item'>
                            <div className="icon" id="div">
                                <i id="btnnn" className="fas fa-moon"></i>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header
