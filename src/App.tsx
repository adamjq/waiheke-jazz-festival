import './App.scss';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ArtistSection } from "./components/ArtistSection"
import { EventSection } from "./components/EventSection"
import { Header } from "./components/Header"
import { NavBar } from "./components/NavBar"
import { SponsorSection } from "./components/SponsorSection"
import { Venues } from "./components/venues/Venues"
import { LandingPage } from './components/LandingPage';

export const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/venues" component={Venues}/>
                    <Route path="/" component={LandingPage}/>
                </Switch>
            </BrowserRouter>

        </div>
    );
}
