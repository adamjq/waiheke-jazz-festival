
import React from 'react';

const Header = () => {
    return (
        <header>
            <nav>
                <div className="row">
                    <ul className="main-nav">
                        <li><a href="#lineup">Lineup</a></li>
                        <li><a href="#events">Events</a></li>
                        <li><a href="#artists">Artists</a></li>
                        <li><a href="#sponsors">Sponsors</a></li>
                    </ul>
                </div>
            </nav>

            <div className="hero-text-box">
                <img className="logo-img" src="./img/jazz-fest-logo.png" alt="Waiheke Jazz Festival Logo"/>
            </div>
        </header>

    );
}

export default Header;