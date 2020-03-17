
import React from 'react';

import NavBar from "./NavBar"

const LOGO = "./img/landing-page.png"
const Header = () => {
    return (
        <header>
            {/* <NavBar/> */}

            <div className="hero-text-box">
                {/* <img className="logo-img" src={LOGO} alt="Waiheke Jazz Festival Logo"/> */}
                <img className="announcement-logo-img" src={LOGO} alt="Waiheke Jazz Festival Logo"/>

                <div  className="announcement-text">
                    <p className="long-copy">
                    Following the Government announcement of 16 March it is clear that the Waiheke Jazz, Art & Music Festival can no longer go ahead. 
                    The health and well-being of all New Zealanders is paramount. We all have a part to play in keeping our communities safe and well. 
                    If you have purchased a ticket to the festival, iTicket will be in touch regarding ticket refunds. You can choose to donate part or all of your refund to help secure the future of the festival.
                    </p>
                    <p className="long-copy">
                    To all of our suppliers, entertainers, venues, sponsors, staff and volunteers and the public - thanks for all your support. 
                    We look forward to working with you all when we have a clear directive from government. Stay safe and well. Kia kaha
                    </p>
                </div>
            </div>
        </header>
        

    );
}

export default Header;