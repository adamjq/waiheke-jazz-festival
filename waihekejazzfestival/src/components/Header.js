
import React from 'react';

import NavBar from "./NavBar"

const LOGO = "./img/waiheke-jazz-fest-2021-banner.png"
const Header = () => {
    return (
        <header>
            {/* <NavBar/> */}

            <div className="hero-text-box">
                {/* <img className="logo-img" src={LOGO} alt="Waiheke Jazz Festival Logo"/> */}
                <img className="announcement-logo-img" src={LOGO} alt="Waiheke Jazz Festival Logo"/>

                <div  className="announcement-text">
                    <p className="long-copy">
                    It was disappointing to have had to cancel the 2020 festival due to COVID 19.
                    Obviously it was the right thing to do and we received unprecedented messages of support from all of our customers and stakeholders - we thank you sincerely for this. 
                    </p>
                    <p className="long-copy">
                    The 2021 Festival will be announced in October 2020. Stay connected <a href="https://www.facebook.com/waihekejazzfestival/">and like our Facebook page</a>. 
                    You will receive real-time updates, ticket release dates and announcements for the 2021 festival.
                    </p>
                </div>
            </div>
        </header>
        

    );
}

export default Header;