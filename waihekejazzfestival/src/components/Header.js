
import React from 'react';

import NavBar from "./NavBar"

const Header = () => {
    return (
        <header>
            <NavBar/>

            <div className="hero-text-box">
                <h2 className="heading-text-presents">
                    Waiheke International Jazz Festival Presents
                </h2>
                <h1 className="heading-text-main-title">
                    Waiheke Jazz
                </h1>
                <h1 className="heading-text-main-title">
                    Festival 2021
                </h1>
                <h2 className="heading-text-dates">
                    Easter 2021 April 2 - 5
                </h2>
            </div>
        </header>
        

    );
}

export default Header;