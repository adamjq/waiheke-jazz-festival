import './App.scss';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ArtistSection } from "./components/ArtistSection"
import { EventSection } from "./components/EventSection"
import { Header } from "./components/Header"
import { NavBar } from "./components/NavBar"
import { SponsorSection } from "./components/SponsorSection"
import { Venues } from "./components/Venues"

export const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar/>
    
                <Switch>
                    <Route exact path="/">
                        <Header />
                        <EventSection />
                        <ArtistSection />
                        <SponsorSection />
                    </Route>
                    
                    {/* <Route exact path="/venues">
                        <Venues />
                    </Route> */}
                </Switch>
            </BrowserRouter>

        </div>
    );
}
