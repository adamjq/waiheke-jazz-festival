
import React from 'react';

import NavBar from "./NavBar"

const Header = () => {
    return (
        <header>
            <NavBar/>

            <div className="hero-text-box">
                <img className="logo-img" src="./img/jazz-fest-logo.png" alt="Waiheke Jazz Festival Logo"/>
            </div>
        </header>

    );
}

export default Header;