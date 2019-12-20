
import React from 'react';

import NavBar from "./NavBar"

const LOGO = "./img/landing-page.png"
const Header = () => {
    return (
        <header>
            <NavBar/>

            <div className="hero-text-box">
                <img className="logo-img" src={LOGO} alt="Waiheke Jazz Festival Logo"/>
            </div>
        </header>
        

    );
}

export default Header;