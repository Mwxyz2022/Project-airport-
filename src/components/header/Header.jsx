import React from 'react'

import './header.scss'

const Header = () => (
    <header className="header">
        <section className="header__container">
            <a href="/" className="logo__link">
                <img
                    className="logo"
                    src="https://iev.aero/_nuxt/img/logo@2x.2d2c20b.png"
                    alt="logo"
                ></img>
            </a>

            <nav className="navbar">
                <a href="#" className="navbar__link">
                    For passengers
                </a>
                <a href="#" className="navbar__link">
                    IEV Services
                </a>
                <a href="#" className="navbar__link">
                    VIP
                </a>
                <a href="#" className="navbar__link">
                    Corporate
                </a>
                <a href="#" className="navbar__link">
                    Press Room
                </a>
                <button className="navbar__lang__btn">en</button>
            </nav>
        </section>
    </header>
)

export default Header
