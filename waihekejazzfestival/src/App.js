import React from 'react';

import ArtistSection from "./components/ArtistSection"
import EventSection from "./components/EventSection"
import Footer from "./components/Footer"
import Header from "./components/Header"
import LineupSection from "./components/LineupSection"
import SponsorSection from "./components/SponsorSection"

const App = () => {
    return (
        <div className="App">
            <Header />
            <LineupSection />
            <EventSection />
            <ArtistSection />
            <SponsorSection />
            {/* <Footer /> */}
        </div>
    );
}

export default App;