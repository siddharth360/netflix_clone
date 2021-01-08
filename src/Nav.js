import React, { useState, useEffect } from 'react';
import './Nav.css';
import NetflixLogo from './assets/netflix_logo.svg';
import NetflixUserAvatar from './assets/netflix_user_avatar.png';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src={NetflixLogo}
                alt="Netflix Logo"
            />
            <img
                className="nav__avatar"
                src={NetflixUserAvatar}
                alt="Netflix Logo"
            />
        </div>
    )
}

export default Nav
