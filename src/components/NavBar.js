import React from 'react';

const NavBar = () => {
    return (
        <nav>
            <div className="row">
                <ul className="main-nav">
                    <li><a href="https://www.iticket.co.nz/go-to/waiheke-jazz-festival-2021" target="_blank" rel="noopener noreferrer">Tickets</a></li>
                    {/* <li><a href="#lineup">Lineup</a></li> */}
                    <li><a href="#events">Events</a></li>
                    <li><a href="#artists">Artists</a></li>
                    <li><a href="#sponsors">Sponsors</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;