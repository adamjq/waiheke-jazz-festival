
import React from 'react';

import NavBar from "./NavBar"

// const LOGO = "./img/banner-love-square.png"
const LOGO = "./img/jazz-fest-banner-generic.png"
// const LOGO = "./img/eastern-banner-sherpa.png"
// const LOGO = "./img/jazz-fest-2020-logo-eastern-blue.png"
// const LOGO = "./img/jazz-fest-2020-logo-eastern-crop.png"
// const LOGO = "./img/eastern-banner.png"
// const LOGO = "./img/wai-jam-2020.png"

const Header = () => {
    return (
        <header>
            {/* <NavBar/> */}

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