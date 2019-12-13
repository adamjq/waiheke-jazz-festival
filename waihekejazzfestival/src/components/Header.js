
import React from 'react';

import NavBar from "./NavBar"

const LOGO = "./img/jazz-fest-banner-generic.png"
const Header = () => {
    return (
        <header>
            <NavBar/>

            <div className="hero-text-box">
                <img className="logo-img" src={LOGO} alt="Waiheke Jazz Festival Logo"/>
            </div>

            {/* <div className="row">
                <p className="tickets-text">Tickets on sale November 2019</p>
            </div> */}
        </header>
        

    );
}

export default Header;