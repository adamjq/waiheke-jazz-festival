import React from 'react';

import Footer from "./components/Footer"
import Lineup from "./components/Lineup"
import SponsorSection from "./components/SponsorSection"

const App = () => {
    return (
        <div className="App">
            <Lineup/>
            <SponsorSection/>
            <Footer />
        </div>
    );
}

export default App;