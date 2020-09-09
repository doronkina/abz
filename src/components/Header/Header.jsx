import React, { useState } from 'react'

import logo from '../../img/logo.svg'

import s from './Header.module.scss'

const Header = () => {
    const [mobileNav, setMobileNav] = useState(false)

    const mobileNavHandler = () => {
        setMobileNav(!mobileNav)
    }

    return (
        <header className={s.wrapper}>
            <div className={s.container}>
                <a href="#registerForm">
                    <img src={logo} alt="logo"/>
                </a>
                <ul className={s.desktopNav}>
                    <li><a href="#registerForm">About me</a></li>
                    <li><a href="#registerForm">Relationships</a></li>
                    <li><a href="#registerForm">Requirements</a></li>
                    <li><a href="#registerForm">Users</a></li>
                    <li><a href="#registerForm">Sign Up</a></li>
                </ul>            
                <div className={s.burger} onClick={mobileNavHandler}>
                    <div className={s.burgerLine}></div>
                    <div className={s.burgerLine}></div>
                    <div className={s.burgerLine}></div>
                </div>
                <div className={s.mobileNav} onClick={mobileNavHandler} style={ {display: mobileNav ? 'block' : 'none'} }>
                    <ul>
                        <li>
                            <a href="#registerForm">
                                <img src={logo} alt="logo"/>
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li><a href="#registerForm">About me</a></li>
                        <li><a href="#registerForm">Relationships</a></li>
                        <li><a className={s.active} href="#registerForm">Active item</a></li>
                        <li><a href="#registerForm">Sign Up</a></li>
                        <li><a href="#registerForm">Terms and Conditions</a></li>
                    </ul>
                    <ul>
                        <li><a href="#registerForm">How it works</a></li>
                        <li><a href="#registerForm">Partnerships</a></li>
                        <li><a href="#registerForm">Help</a></li>
                        <li><a href="#registerForm">Leave testimonial</a></li>
                        <li><a href="#registerForm">Contact Up</a></li>
                    </ul>
                    <ul>
                        <li><a href="#registerForm">Articles</a></li>
                        <li><a href="#registerForm">Our news</a></li>
                        <li><a href="#registerForm">Testimonials</a></li>
                        <li><a href="#registerForm">Licenses</a></li>
                        <li><a href="#registerForm">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header